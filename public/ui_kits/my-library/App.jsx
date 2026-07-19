/* My Library — app orchestrator. Owns items + folders + all overlays so they
 * render at app root (never clipped) and stay in sync. Exposes window.MLApp. */
const ML_DS = window.AccessibleFoundationsDesignSystem_87ff79;
const { Modal: MLModal, Input: MLAppInput } = ML_DS;

const ML_APP_CSS = `
.ml-app { position: relative; height: 100%; display: flex; background: var(--neutral-200); overflow: hidden; }
.ml-main { flex: 1; display: flex; flex-direction: column; min-width: 0; min-height: 0; background: var(--white); overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; }
.ml-create-body { display: flex; flex-direction: column; gap: 4px; }
.ml-del-body { font-size: 15px; line-height: 1.55; color: var(--neutral-700); }
.ml-del-body strong { color: var(--neutral-950); }
`;
(function(){ var o = document.getElementById('ml-app-css'); if (o) o.remove();
  const s = document.createElement('style'); s.id = 'ml-app-css'; s.textContent = ML_APP_CSS; document.head.appendChild(s); })();

const ML_INITIAL_ITEMS = [
  { id: 'i1', title: 'Morning Crossword', icon: 'puzzle', folders: [], recent: true, kind: 'Puzzle', updated: 'Edited 2 days ago' },
  { id: 'i2', title: 'Garden Notes', icon: 'bookOpen', folders: [], recent: true, kind: 'Note', updated: 'Edited yesterday' },
  { id: 'i3', title: 'Sunday Roast', icon: 'bookOpen', folders: ['recipes'], kind: 'Recipe', updated: 'Edited last week', badge: 'Shared', shared: true },
  { id: 'i4', title: 'Banana Bread', icon: 'bookOpen', folders: ['recipes'], kind: 'Recipe', updated: 'Edited 3 weeks ago' },
  { id: 'i5', title: 'Lemon Cake', icon: 'bookOpen', folders: ['recipes'], kind: 'Recipe', updated: 'Auto-saved', badge: 'Auto' },
  { id: 'i6', title: 'Grandkids Visit', icon: 'image', folders: ['photos'], kind: '42 photos', updated: 'Edited today', recent: true },
  { id: 'i7', title: 'Coast Trip', icon: 'image', folders: ['photos'], kind: '128 photos', updated: 'Edited last month', badge: 'Shared', shared: true },
  { id: 'i8', title: 'Old Letters', icon: 'mail', folders: [], kind: '23 scans', updated: 'Edited 2 months ago' },
  { id: 'i9', title: 'Medication Times', icon: 'clock', folders: [], kind: 'Checklist', updated: 'Edited today', badge: 'Pro' },
  { id: 'i10', title: 'Phone Numbers', icon: 'people', folders: [], kind: '31 contacts', updated: 'Edited last week', shared: true },
  { id: 'i11', title: 'Birthday List', icon: 'star', folders: [], kind: '12 dates', updated: 'Edited yesterday', recent: true },
  { id: 'i12', title: 'Knitting Patterns', icon: 'bookOpen', folders: ['recipes'], kind: '9 patterns', updated: 'Edited 5 days ago' },
];
const ML_INITIAL_FOLDERS = [
  { id: 'recipes', label: 'Recipes', icon: 'bookOpen' },
  { id: 'photos', label: 'Photos', icon: 'image' },
];

function MLApp() {
  const [userName, setUserName] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const [activeId, setActiveId] = React.useState('all');
  const [view, setView] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [items, setItems] = React.useState(ML_INITIAL_ITEMS);
  const [folders, setFolders] = React.useState(ML_INITIAL_FOLDERS);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [prefs, setPrefs] = React.useState({ largeText: true, highContrast: false, reduceMotion: false });

  // overlays
  const [createFor, setCreateFor] = React.useState(null);   // folderId | '' (uncategorized) | null (closed)
  const [newName, setNewName] = React.useState('');
  const [folderModal, setFolderModal] = React.useState(false);
  const [folderName, setFolderName] = React.useState('');
  const [delFolder, setDelFolder] = React.useState(null);   // {id,label} | null

  const isFolder = (id) => folders.some(f => f.id === id);
  const folderLabel = (id) => (folders.find(f => f.id === id) || {}).label;
  const labelFor = (id) => {
    if (id === 'all') return 'All Items';
    if (id === 'uncategorized') return 'Uncategorized';
    if (isFolder(id)) return folderLabel(id);
    for (const n of window.ML_NAV) {
      if (n.id === id) return n.label;
      for (const c of (n.children || [])) if (c.id === id) return c.label;
    }
    return 'My Library';
  };

  const baseFilter = (it) => {
    if (activeId === 'all' || activeId === 'library') return true;
    if (activeId === 'uncategorized') return it.folders.length === 0;
    if (isFolder(activeId)) return it.folders.includes(activeId);
    if (activeId === 'favorites') return !!it.favorite || !!it.badge;
    if (activeId === 'recent') return !!it.recent;
    if (activeId === 'shared') return !!it.shared;
    if (activeId === 'community') return !!it.community;
    return true;
  };

  // dynamic counts so creates/removes reflect live
  const systemItems = [
    { id: 'all', label: 'All Items', icon: 'list', count: items.length },
    { id: 'uncategorized', label: 'Uncategorized', icon: 'folderOff', count: items.filter(i => i.folders.length === 0).length },
  ];
  const folderItems = folders.map(f => ({ ...f, count: items.filter(i => i.folders.includes(f.id)).length }));

  const visible = items
    .filter(baseFilter)
    .filter(it => view === 'all' ? true : view === 'recent' ? it.recent : it.shared)
    .filter(it => it.title.toLowerCase().includes(search.trim().toLowerCase()));

  const title = labelFor(activeId);
  const subtitle = `${visible.length} item${visible.length === 1 ? '' : 's'}` + (search ? ` matching “${search}”` : '');
  const navigate = (id) => { setActiveId(id); setView('all'); };

  // create item — targets the folder it was launched from (or the active folder)
  const openCreate = (folderId) => { setCreateFor(folderId != null ? folderId : (isFolder(activeId) ? activeId : '')); setNewName(''); };
  const doCreate = () => {
    const name = newName.trim();
    if (!name) return;
    const target = createFor && isFolder(createFor) ? createFor : '';
    const icon = target === 'recipes' ? 'bookOpen' : target === 'photos' ? 'image' : 'save';
    setItems(list => [{ id: 'n' + Date.now(), title: name, icon, folders: target ? [target] : [],
      recent: true, kind: 'New', updated: 'Just now' }, ...list]);
    setCreateFor(null); setNewName('');
    setActiveId(target || 'all'); setView('all');
  };

  const addFolder = () => {
    const name = folderName.trim();
    if (!name) return;
    const id = 'folder-' + Date.now();
    setFolders(f => [...f, { id, label: name, icon: 'folder' }]);
    setFolderModal(false); setFolderName('');
    setActiveId(id); setView('all');
  };
  const confirmRemoveFolder = () => {
    const id = delFolder.id;
    setFolders(f => f.filter(x => x.id !== id));
    setItems(list => list.map(i => i.folders.includes(id) ? { ...i, folders: i.folders.filter(x => x !== id) } : i));
    if (activeId === id) setActiveId('all');
    setDelFolder(null);
  };

  if (!userName) return <window.MLWelcome onContinue={(n) => setUserName(n)} />;

  return (
    <div className="ml-app">
      <window.MLSidebar
        open={open} onToggle={() => setOpen(o => !o)}
        activeId={activeId} onNavigate={navigate}
        systemItems={systemItems} folders={folderItems}
        onCreate={() => openCreate(null)}
        onAddFolder={() => { setFolderName(''); setFolderModal(true); }}
        onAddToFolder={(fid) => openCreate(fid)}
        onRemoveFolder={(f) => setDelFolder(f)}
        onOpenSettings={() => setSettingsOpen(true)}
        userName={userName}
      />
      <main className="ml-main">
        <window.MLHeader title={title} subtitle={subtitle}
          search={search} onSearch={setSearch} view={view} onView={setView}
          onOpenSettings={() => setSettingsOpen(true)} />
        <window.MLGrid items={visible.map(it => ({ ...it, loc: it.folders.length ? 'In ' + folderLabel(it.folders[0]) : 'Uncategorized' }))} onCreate={() => openCreate(null)} onOpen={() => {}} />
      </main>

      {settingsOpen && (
        <window.MLSettings onClose={() => setSettingsOpen(false)}
          prefs={prefs} onPref={(k, v) => setPrefs(p => ({ ...p, [k]: v }))}
          onSignOut={() => { setSettingsOpen(false); setUserName(null); }} />
      )}

      {createFor !== null && (
        <MLModal title="Create New Item" confirmLabel="Create"
          onClose={() => setCreateFor(null)} onConfirm={doCreate}>
          <div className="ml-create-body">
            <MLAppInput label="Name" placeholder="e.g. Weekly Shopping List" autoFocus
              value={newName} onChange={e => setNewName(e.target.value)}
              helper={createFor && isFolder(createFor) ? 'Will be added to ' + folderLabel(createFor) + '.' : 'Will be added to Uncategorized.'}
              onKeyDown={e => { if (e.key === 'Enter') doCreate(); }} />
          </div>
        </MLModal>
      )}

      {folderModal && (
        <MLModal title="New Folder" confirmLabel="Create Folder"
          onClose={() => setFolderModal(false)} onConfirm={addFolder}>
          <div className="ml-create-body">
            <MLAppInput label="Folder name" placeholder="e.g. Travel" autoFocus
              value={folderName} onChange={e => setFolderName(e.target.value)}
              helper="Group related items together."
              onKeyDown={e => { if (e.key === 'Enter') addFolder(); }} />
          </div>
        </MLModal>
      )}

      {delFolder && (
        <MLModal title="Remove folder?" danger confirmLabel="Remove folder"
          onClose={() => setDelFolder(null)} onConfirm={confirmRemoveFolder}>
          <p className="ml-del-body">Remove <strong>“{delFolder.label}”</strong> from your library? The items inside won't be deleted — they'll move back to <strong>Uncategorized</strong>.</p>
        </MLModal>
      )}
    </div>
  );
}

window.MLApp = MLApp;
