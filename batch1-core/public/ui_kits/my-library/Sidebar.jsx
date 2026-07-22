/* My Library — collapsible navigation sidebar.
 * System items + user folders (props-driven). Kebab + collapsed-rail flyouts
 * are portalled to <body> so the scroll container can't clip or hide them.
 * Exposes window.MLSidebar.
 */
const { Icon } = window.AccessibleFoundationsDesignSystem_87ff79;

const ML_SIDEBAR_CSS = `
.ml-sb { position: relative; flex-shrink: 0; width: 280px; height: 100%; display: flex; flex-direction: column; overflow: hidden; background: var(--white);
  border-right: 1px solid var(--neutral-300); display: flex; flex-direction: column; transition: width var(--t-slow); }
.ml-sb--closed { width: 76px; }
.ml-sb__head { display: flex; align-items: center; justify-content: space-between; gap: 8px;
  min-height: 64px; padding: 0 14px 0 18px; border-bottom: 1px solid var(--neutral-300); }
.ml-sb__brand { display: flex; align-items: center; gap: 12px; overflow: hidden; }
.ml-sb__glyph { width: 36px; height: 36px; border-radius: 10px; background: var(--brand-700); display: grid; place-items: center; flex-shrink: 0; }
.ml-sb__glyph::before { content: ''; width: 15px; height: 15px; border: 3px solid #fff; border-radius: 5px; }
.ml-sb__name { font-size: 16px; font-weight: 700; color: var(--neutral-950); white-space: nowrap; letter-spacing: -0.01em; }
.ml-sb__collapse { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;
  border: none; background: none; border-radius: 6px; color: var(--neutral-800); cursor: pointer; flex-shrink: 0; transition: background var(--t-fast), color var(--t-fast); }
.ml-sb__collapse:hover { background: var(--neutral-200); color: var(--brand-700); }
.ml-sb__body { flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; padding: 12px 0 16px; }
.ml-sb__create { display: flex; align-items: center; justify-content: center; gap: 8px;
  width: calc(100% - 28px); height: 44px; margin: 4px 14px 8px; background: var(--brand-700); color: #fff;
  border: none; border-radius: var(--radius-btn); font-family: var(--font-sans); font-size: 15px; font-weight: 700; cursor: pointer; white-space: nowrap; transition: background var(--t-fast); }
.ml-sb__create:hover { background: var(--brand-900); }
.ml-sb__create--rail { width: 56px; height: 52px; flex-direction: column; gap: 3px; margin: 8px auto 6px; font-size: 11px; font-weight: 600; border-radius: 12px; }

.ml-nav { list-style: none; margin: 0; padding: 4px 0 0; }
.ml-nav__item { display: flex; align-items: center; gap: 16px; width: 100%; min-height: 44px; padding: 0 18px;
  background: none; border: none; font-family: var(--font-sans); font-size: 15px; font-weight: 500; color: var(--neutral-500); cursor: pointer; text-align: left; transition: background var(--t-fast), color var(--t-fast); }
.ml-nav__item:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-nav__item .ml-nav__lbl { flex: 1; white-space: nowrap; }
.ml-nav__item--active { color: var(--brand-700); box-shadow: inset 3px 0 0 var(--brand-700); }
.ml-nav__chev { transition: transform var(--t-normal); color: var(--neutral-500); }
.ml-nav__item--open .ml-nav__chev { transform: rotate(180deg); }
.ml-nav__item:hover .ml-nav__chev { color: var(--brand-700); }

.ml-children { list-style: none; margin: 0; padding: 0; overflow: hidden; display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--t-slow); }
.ml-children--open { grid-template-rows: 1fr; }
.ml-children__in { overflow: hidden; min-height: 0; }
.ml-child { display: flex; align-items: center; gap: 14px; margin: 0 8px 0 40px; width: calc(100% - 48px);
  min-height: 38px; padding: 0 12px; border-radius: var(--radius-item); background: none; border: none;
  font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: var(--neutral-500); cursor: pointer; text-align: left; transition: background var(--t-fast), color var(--t-fast); }
.ml-child:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-child .ml-child__lbl { flex: 1; white-space: nowrap; }
.ml-child__count { font-size: 13px; color: var(--neutral-500); min-width: 18px; text-align: right; }
.ml-child--active { background: var(--surface-active); color: var(--brand-900); }
.ml-child--active .ml-child__count { color: var(--brand-900); }

.ml-foldhdr { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 12px 8px 6px 40px; }
.ml-foldhdr__lbl { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--neutral-500); }
.ml-addfold { display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px; background: var(--white);
  border: 1.5px solid var(--neutral-300); border-radius: 8px; color: var(--neutral-700); font-family: var(--font-sans);
  font-size: 12px; font-weight: 600; cursor: pointer; transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast); }
.ml-addfold:hover { border-color: var(--brand-700); color: var(--brand-700); background: var(--surface-hover); }

.ml-folder { display: flex; align-items: center; margin: 0 8px 0 40px; width: calc(100% - 48px);
  min-height: 38px; border-radius: var(--radius-item); color: var(--neutral-500); transition: background var(--t-fast), color var(--t-fast); }
.ml-folder:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-folder--active { background: var(--surface-active); color: var(--brand-900); }
.ml-folder__nav { flex: 1; min-width: 0; display: flex; align-items: center; gap: 14px; min-height: 38px; padding: 0 0 0 12px;
  background: none; border: none; font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: inherit; cursor: pointer; text-align: left; }
.ml-folder__nav .lbl { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ml-folder__count { font-size: 13px; min-width: 16px; text-align: right; color: inherit; }
.ml-folder__kebab { width: 28px; height: 28px; margin: 0 4px; display: grid; place-items: center; border: none; background: none;
  border-radius: 6px; color: inherit; cursor: pointer; opacity: 0; flex-shrink: 0; transition: opacity var(--t-fast), background var(--t-fast); }
.ml-folder:hover .ml-folder__kebab, .ml-folder--active .ml-folder__kebab, .ml-folder__kebab[aria-expanded="true"] { opacity: 1; }
.ml-folder__kebab:hover { background: var(--neutral-300); }

/* portalled overlays (kebab + rail flyout) — top of everything */
.ml-pop { position: fixed; z-index: 9000; background: var(--white); border: 1px solid var(--neutral-300);
  border-radius: 12px; box-shadow: var(--shadow-lg); padding: 8px; min-width: 200px; font-family: var(--font-sans); }
.ml-pop__h { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--neutral-500); padding: 6px 12px 8px; }
.ml-pop__item { display: flex; align-items: center; gap: 12px; width: 100%; min-height: 40px; padding: 0 12px; background: none;
  border: none; border-radius: 8px; font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: var(--neutral-800); cursor: pointer; text-align: left; }
.ml-pop__item .c { margin-left: auto; font-size: 13px; color: var(--neutral-500); }
.ml-pop__item:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-pop__item--active { background: var(--surface-active); color: var(--brand-900); }
.ml-pop__item.danger { color: var(--danger); }
.ml-pop__item.danger:hover { background: #FDECEC; color: var(--danger-hover); }
.ml-pop__sep { height: 1px; background: var(--neutral-300); margin: 5px 0; }
.ml-pop__add { display: flex; align-items: center; justify-content: center; gap: 6px; width: calc(100% - 16px); margin: 6px 8px 2px;
  height: 36px; background: var(--white); border: 1.5px solid var(--neutral-300); border-radius: 8px; color: var(--neutral-700);
  font-family: var(--font-sans); font-size: 13px; font-weight: 600; cursor: pointer; }
.ml-pop__add:hover { border-color: var(--brand-700); color: var(--brand-700); }

.ml-rail { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 6px; }
.ml-rail__btn { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
  width: 64px; padding: 9px 2px; background: none; border: none; border-radius: 12px; color: var(--neutral-800); cursor: pointer; transition: background var(--t-fast), color var(--t-fast); }
.ml-rail__btn:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-rail__btn--active { color: var(--brand-700); background: var(--surface-active); }
.ml-rail__lbl { font-size: 10px; font-weight: 600; line-height: 1.15; text-align: center; white-space: nowrap; }

.ml-sb__foot { border-top: 1px solid var(--neutral-300); padding: 10px; }
.ml-user { display: flex; align-items: center; gap: 12px; width: 100%; padding: 8px 10px; border-radius: var(--radius-item); background: none; border: none; cursor: pointer; text-align: left; transition: background var(--t-fast); }
.ml-user:hover { background: var(--neutral-200); }
.ml-user__av { width: 36px; height: 36px; border-radius: 50%; background: var(--surface-active); color: var(--brand-900); display: grid; place-items: center; font-weight: 700; font-size: 15px; flex-shrink: 0; }
.ml-user__meta { display: flex; flex-direction: column; overflow: hidden; }
.ml-user__name { font-size: 14px; font-weight: 600; color: var(--neutral-950); white-space: nowrap; }
.ml-user__sub { font-size: 12px; color: var(--neutral-500); white-space: nowrap; }
`;

(function(){ var o = document.getElementById('ml-sidebar-css-5'); if (o) o.remove();
  const s = document.createElement('style'); s.id = 'ml-sidebar-css-5'; s.textContent = ML_SIDEBAR_CSS; document.head.appendChild(s); })();

const ML_NAV = [
  { id: 'library', label: 'My Library', icon: 'home', expandable: true },
  { id: 'favorites', label: 'Favorites', icon: 'heart', expandable: false },
  { id: 'recent', label: 'Recently Viewed', icon: 'clock', expandable: false },
  { id: 'shared', label: 'Shared With Me', icon: 'people', expandable: true, children: [
    { id: 'sh-github', label: 'GitHub', icon: 'grid', count: 4 },
    { id: 'sh-gdrive', label: 'Google Drive', icon: 'folder', count: 12 },
    { id: 'sh-onedrive', label: 'OneDrive', icon: 'save', count: 3 },
    { id: 'sh-dropbox', label: 'Dropbox', icon: 'download', count: 0 },
  ]},
  { id: 'community', label: 'Community', icon: 'globe', expandable: false },
];
const ML_RAIL_LABEL = { library: 'My', favorites: 'Favorites', recent: 'Recent', shared: 'Shared', community: 'Community' };

function MLSidebar({ open, onToggle, activeId, onNavigate, systemItems = [], folders = [],
  onCreate, onAddFolder, onAddToFolder, onRemoveFolder, onOpenSettings, userName }) {
  const [expanded, setExpanded] = React.useState({ library: true, shared: false });
  const [menu, setMenu] = React.useState(null);    // folder kebab { folder, x, y }
  const [fly, setFly] = React.useState(null);       // collapsed-rail flyout { id, x, y }
  const flyTimer = React.useRef(null);
  const initial = (userName || 'You').trim().charAt(0).toUpperCase();

  React.useEffect(() => {
    if (!menu && !fly) return;
    const close = (e) => {
      if (!e.target.closest('.ml-folder__kebab') && !e.target.closest('.ml-pop')) setMenu(null);
      if (!e.target.closest('.ml-rail__btn') && !e.target.closest('.ml-pop')) setFly(null);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menu, fly]);

  const openMenu = (e, folder) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMenu(m => m && m.folder.id === folder.id ? null : { folder, x: r.right, y: r.bottom });
  };
  const sharedKids = ML_NAV.find(n => n.id === 'shared').children;

  // ---- collapsed rail ----
  if (!open) {
    const railActive = (item) => item.id === activeId
      || (item.id === 'library' && [...systemItems, ...folders].some(c => c.id === activeId))
      || (item.children || []).some(c => c.id === activeId);
    const clearFlyTimer = () => { if (flyTimer.current) { clearTimeout(flyTimer.current); flyTimer.current = null; } };
    const scheduleClose = () => { clearFlyTimer(); flyTimer.current = setTimeout(() => setFly(null), 180); };
    const onRailHover = (e, item) => {
      if (item.id === 'library' || item.id === 'shared') { clearFlyTimer(); const r = e.currentTarget.getBoundingClientRect(); setFly({ id: item.id, x: r.right, y: r.top }); }
      else scheduleClose();
    };
    const onRailClick = (item) => { if (item.id !== 'shared') { onNavigate(item.id === 'library' ? 'all' : item.id); } };
    return (
      <nav className="ml-sb ml-sb--closed" aria-label="Main navigation">
        <div className="ml-sb__head" style={{ justifyContent: 'center', padding: 0 }}>
          <button className="ml-sb__collapse" onClick={onToggle} aria-label="Expand sidebar"><Icon name="chevronRight" size={20} /></button>
        </div>
        <div className="ml-sb__body">
          <button className="ml-sb__create ml-sb__create--rail" onClick={onCreate} aria-label="Create new item"><Icon name="plus" size={20} strokeWidth={2.4} /><span>Create</span></button>
          <div className="ml-rail">
            {ML_NAV.map(item => (
              <button key={item.id} className={'ml-rail__btn' + (railActive(item) ? ' ml-rail__btn--active' : '')}
                aria-label={item.label} aria-expanded={fly && fly.id === item.id}
                onMouseEnter={(e) => onRailHover(e, item)} onMouseLeave={scheduleClose} onClick={() => onRailClick(item)}>
                <Icon name={item.icon} size={22} /><span className="ml-rail__lbl">{ML_RAIL_LABEL[item.id] || item.label}</span>
              </button>
            ))}
          </div>
        </div>
        {fly && ReactDOM.createPortal(
          <div className="ml-pop" style={{ top: Math.min(fly.y, window.innerHeight - 360), left: fly.x + 8 }} role="menu" onMouseEnter={clearFlyTimer} onMouseLeave={scheduleClose}>
            {fly.id === 'library' ? (
              <React.Fragment>
                <div className="ml-pop__h">My Library</div>
                {systemItems.map(c => (
                  <button key={c.id} className={'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : '')} onClick={() => { onNavigate(c.id); setFly(null); }}>
                    <Icon name={c.icon} size={18} /> {c.label} <span className="c">{c.count}</span>
                  </button>
                ))}
                <div className="ml-pop__sep" />
                <div className="ml-pop__h">Folders</div>
                {folders.map(c => (
                  <button key={c.id} className={'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : '')} onClick={() => { onNavigate(c.id); setFly(null); }}>
                    <Icon name={c.icon} size={18} /> {c.label} <span className="c">{c.count}</span>
                  </button>
                ))}
                <button className="ml-pop__add" onClick={() => { onAddFolder(); setFly(null); }}><Icon name="plus" size={14} strokeWidth={2.4} /> Add folder</button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="ml-pop__h">Shared With Me</div>
                {sharedKids.map(c => (
                  <button key={c.id} className={'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : '')} onClick={() => { onNavigate(c.id); setFly(null); }}>
                    <Icon name={c.icon} size={18} /> {c.label} <span className="c">{c.count}</span>
                  </button>
                ))}
              </React.Fragment>
            )}
          </div>, document.body)}
      </nav>
    );
  }

  // ---- open sidebar ----
  const childBtn = (c) => (
    <li key={c.id}>
      <button className={'ml-child' + (c.id === activeId ? ' ml-child--active' : '')} aria-current={c.id === activeId ? 'page' : undefined} onClick={() => onNavigate(c.id)}>
        <Icon name={c.icon} size={16} /><span className="ml-child__lbl">{c.label}</span>
        {c.count !== undefined && <span className="ml-child__count">{c.count}</span>}
      </button>
    </li>
  );

  return (
    <nav className="ml-sb" aria-label="Main navigation">
      <div className="ml-sb__head">
        <div className="ml-sb__brand"><div className="ml-sb__glyph" /><span className="ml-sb__name">My Library</span></div>
        <button className="ml-sb__collapse" onClick={onToggle} aria-label="Collapse sidebar"><Icon name="chevronLeft" size={20} /></button>
      </div>
      <div className="ml-sb__body">
        <button className="ml-sb__create" onClick={onCreate}><Icon name="plus" size={18} strokeWidth={2.4} /> Create New</button>
        <ul className="ml-nav">
          {ML_NAV.map(item => {
            const isOpen = !!expanded[item.id];
            if (!item.expandable) {
              const active = item.id === activeId;
              return (
                <li key={item.id}>
                  <button className={'ml-nav__item' + (active ? ' ml-nav__item--active' : '')} aria-current={active ? 'page' : undefined} onClick={() => onNavigate(item.id)}>
                    <Icon name={item.icon} size={22} /><span className="ml-nav__lbl">{item.label}</span>
                  </button>
                </li>
              );
            }
            const isLibrary = item.id === 'library';
            const kids = isLibrary ? [...systemItems, ...folders] : item.children;
            const sectionActive = item.id === activeId || kids.some(c => c.id === activeId);
            return (
              <li key={item.id}>
                <button className={'ml-nav__item' + (sectionActive ? ' ml-nav__item--active' : '') + (isOpen ? ' ml-nav__item--open' : '')}
                  aria-expanded={isOpen} onClick={() => setExpanded(e => ({ ...e, [item.id]: !e[item.id] }))}>
                  <Icon name={item.icon} size={22} /><span className="ml-nav__lbl">{item.label}</span><Icon name="chevronDown" size={18} className="ml-nav__chev" />
                </button>
                <ul className={'ml-children' + (isOpen ? ' ml-children--open' : '')}>
                  <div className="ml-children__in">
                    {isLibrary ? (
                      <React.Fragment>
                        {systemItems.map(childBtn)}
                        <li>
                          <div className="ml-foldhdr">
                            <span className="ml-foldhdr__lbl">Folders</span>
                            <button className="ml-addfold" onClick={onAddFolder} aria-label="Add folder"><Icon name="plus" size={13} strokeWidth={2.4} /> Add folder</button>
                          </div>
                        </li>
                        {folders.map(c => (
                          <li key={c.id}>
                            <div className={'ml-folder' + (c.id === activeId ? ' ml-folder--active' : '')}>
                              <button className="ml-folder__nav" aria-current={c.id === activeId ? 'page' : undefined} onClick={() => onNavigate(c.id)}>
                                <Icon name={c.icon} size={16} /><span className="lbl">{c.label}</span><span className="ml-folder__count">{c.count}</span>
                              </button>
                              <button className="ml-folder__kebab" aria-label={'Options for ' + c.label} aria-expanded={menu && menu.folder.id === c.id} onClick={(e) => openMenu(e, c)}>
                                <Icon name="moreVertical" size={16} />
                              </button>
                            </div>
                          </li>
                        ))}
                      </React.Fragment>
                    ) : item.children.map(childBtn)}
                  </div>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ml-sb__foot">
        <button className="ml-user" onClick={onOpenSettings}>
          <span className="ml-user__av">{initial}</span>
          <span className="ml-user__meta"><span className="ml-user__name">{userName || 'You'}</span><span className="ml-user__sub">Settings &amp; account</span></span>
        </button>
      </div>

      {menu && ReactDOM.createPortal(
        <div className="ml-pop" role="menu" style={{ top: menu.y + 4, left: Math.max(12, menu.x - 196) }}>
          <button className="ml-pop__item" onClick={() => { onAddToFolder(menu.folder.id); setMenu(null); }}><Icon name="plus" size={16} /> Add item to folder</button>
          <button className="ml-pop__item" onClick={() => { onNavigate(menu.folder.id); setMenu(null); }}><Icon name="folder" size={16} /> Open folder</button>
          <div className="ml-pop__sep" />
          <button className="ml-pop__item danger" onClick={() => { onRemoveFolder(menu.folder); setMenu(null); }}><Icon name="trash" size={16} /> Remove folder</button>
        </div>, document.body)}
    </nav>
  );
}

window.MLSidebar = MLSidebar;
window.ML_NAV = ML_NAV;
