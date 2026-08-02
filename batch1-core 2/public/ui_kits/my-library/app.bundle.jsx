/* Auto-bundled My Library — all components + mount in one file (fewer requests) */

/* ===== Sidebar.jsx ===== */
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


/* ===== LibraryHeader.jsx ===== */
/* My Library — content header: title, search, view tabs, utility actions.
 * Composes DS Input, Tabs, IconButton. Exposes window.MLHeader.
 */
const { Input: MLInput, Tabs: MLTabs, IconButton: MLIconButton } = window.AccessibleFoundationsDesignSystem_87ff79;

const ML_HEADER_CSS = `
.ml-header { position: relative; z-index: 5; background: var(--white); display: flex; flex-direction: column; gap: 18px; padding: 24px 32px 0; }
.ml-header__top { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; }
.ml-header__titles { display: flex; flex-direction: column; gap: 2px; }
.ml-header__title { font-size: 28px; font-weight: 700; color: var(--neutral-950); letter-spacing: -0.02em; line-height: 1.2; }
.ml-header__sub { font-size: 15px; color: var(--neutral-500); }
.ml-header__actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.ml-header__search { width: 300px; max-width: 36vw; }
.ml-header__bar { display: flex; align-items: center; justify-content: space-between; gap: 16px;
  flex-wrap: wrap; padding-bottom: 18px; border-bottom: 1px solid var(--neutral-300); }
`;

(function(){ var o = document.getElementById('ml-header-css'); if (o) o.remove();
  const s = document.createElement('style'); s.id = 'ml-header-css'; s.textContent = ML_HEADER_CSS; document.head.appendChild(s); })();

function MLHeader({ title, subtitle, search, onSearch, view, onView, onOpenSettings }) {
  return (
    <header className="ml-header">
      <div className="ml-header__top">
        <div className="ml-header__titles">
          <h1 className="ml-header__title">{title}</h1>
          <p className="ml-header__sub">{subtitle}</p>
        </div>
        <div className="ml-header__actions">
          <MLIconButton icon="bell" aria-label="Notifications" />
          <MLIconButton icon="help" aria-label="Help" />
          <MLIconButton icon="settings" aria-label="Settings" onClick={onOpenSettings} />
        </div>
      </div>
      <div className="ml-header__bar">
        <MLTabs value={view} onChange={onView} items={[
          { id: 'all', label: 'All', icon: 'grid' },
          { id: 'recent', label: 'Recent', icon: 'clock' },
          { id: 'shared', label: 'Shared', icon: 'people' },
        ]} />
        <div className="ml-header__search">
          <MLInput icon="search" placeholder="Search your library" aria-label="Search your library"
            value={search} onChange={e => onSearch(e.target.value)} />
        </div>
      </div>
    </header>
  );
}

window.MLHeader = MLHeader;


/* ===== ItemGrid.jsx ===== */
/* My Library — item grid. Composes DS Card, TierPill, Icon, Button. Exposes window.MLGrid. */
const { Card: MLCard, TierPill: MLTierPill, Icon: MLGridIcon, Button: MLButton } = window.AccessibleFoundationsDesignSystem_87ff79;

const ML_GRID_CSS = `
.ml-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;
  padding: 24px 32px 40px; align-content: start; }
.ml-grid__mediabox { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
.ml-grid__badges { position: absolute; top: 12px; left: 12px; display: flex; gap: 6px; }
.ml-card-media { position: relative; }
.ml-empty { padding: 64px 32px; display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center; color: var(--neutral-500); }
.ml-empty__icon { width: 72px; height: 72px; border-radius: 18px; background: var(--neutral-200); display: grid; place-items: center; color: var(--neutral-500); }
.ml-empty__title { font-size: 18px; font-weight: 600; color: var(--neutral-950); }
.ml-card__date { font-size: 13px; color: var(--neutral-500); }
`;

if (!document.getElementById('ml-grid-css')) {
  const s = document.createElement('style'); s.id = 'ml-grid-css'; s.textContent = ML_GRID_CSS; document.head.appendChild(s);
}

const ML_TIERS = { Pro: 'solid', Shared: 'brand', Auto: 'neutral' };

function MLGrid({ items, onCreate, onOpen }) {
  if (!items.length) {
    return (
      <div className="ml-empty">
        <div className="ml-empty__icon"><MLGridIcon name="search" size={32} /></div>
        <div className="ml-empty__title">Nothing here yet</div>
        <p style={{ maxWidth: 360, lineHeight: 1.55, margin: 0 }}>
          Try a different search, or create your first item to get started.
        </p>
        <MLButton variant="primary" iconLeft="plus" onClick={onCreate}>Create New</MLButton>
      </div>
    );
  }
  return (
    <div className="ml-grid">
      {items.map(it => (
        <MLCard key={it.id} interactive onClick={() => onOpen(it)}
          title={it.title}
          meta={it.kind}
          media={
            <div className="ml-card-media ml-grid__mediabox" style={{ background: 'var(--neutral-200)', color: 'var(--neutral-500)' }}>
              <MLGridIcon name={it.icon} size={44} />
              {it.badge && (
                <div className="ml-grid__badges">
                  <MLTierPill tier={ML_TIERS[it.badge] || 'neutral'}>{it.badge}</MLTierPill>
                </div>
              )}
            </div>
          }
          footer={<>
            <span className="ml-card__date">{it.loc}</span>
            <MLButton variant="tertiary" size="sm">Open</MLButton>
          </>}>
          <span className="ml-card__date">{it.updated}</span>
        </MLCard>
      ))}
    </div>
  );
}

window.MLGrid = MLGrid;


/* ===== SettingsPanel.jsx ===== */
/* My Library — settings drawer. Composes DS Toggle, Button, IconButton, Icon. Exposes window.MLSettings. */
const { Toggle: MLToggle, Button: MLSetBtn, IconButton: MLSetIconBtn, Icon: MLSetIcon } = window.AccessibleFoundationsDesignSystem_87ff79;

const ML_SETTINGS_CSS = `
.ml-drawer-scrim { position: absolute; inset: 0; background: var(--backdrop); backdrop-filter: blur(2px);
  z-index: var(--z-modal); animation: ml-fade var(--t-slow); }
@keyframes ml-fade { from { opacity: 0; } to { opacity: 1; } }
.ml-drawer { position: absolute; top: 0; right: 0; bottom: 0; width: 380px; max-width: 92vw; background: var(--white);
  box-shadow: var(--shadow-lg); display: flex; flex-direction: column; animation: ml-slide var(--t-slow); }
@keyframes ml-slide { from { transform: translateX(24px); opacity: 0.6; } to { transform: none; opacity: 1; } }
.ml-drawer__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
  padding: 20px 20px 18px; border-bottom: 1px solid var(--neutral-300); }
.ml-drawer__title { font-size: 18px; font-weight: 700; color: var(--neutral-950); letter-spacing: -0.01em; }
.ml-drawer__sub { font-size: 13px; color: var(--neutral-500); margin-top: 2px; }
.ml-drawer__body { flex: 1; overflow-y: auto; padding: 8px 0; }
.ml-set-group { padding: 14px 20px 6px; }
.ml-set-group__label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--neutral-500); }
.ml-set-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 20px;
  border-bottom: 1px solid var(--neutral-200); }
.ml-set-row__text { display: flex; flex-direction: column; gap: 2px; }
.ml-set-row__name { font-size: 15px; font-weight: 600; color: var(--neutral-950); }
.ml-set-row__desc { font-size: 13px; color: var(--neutral-500); max-width: 200px; line-height: 1.4; }
.ml-set-nav { display: flex; align-items: center; gap: 14px; width: 100%; min-height: 48px; padding: 0 20px;
  background: none; border: none; font-family: var(--font-sans); font-size: 15px; font-weight: 500;
  color: var(--neutral-800); cursor: pointer; text-align: left; transition: background var(--t-fast), color var(--t-fast); }
.ml-set-nav:hover { background: var(--surface-hover); color: var(--brand-700); }
.ml-set-nav__lbl { flex: 1; }
.ml-drawer__foot { padding: 16px 20px; border-top: 1px solid var(--neutral-300); display: flex; flex-direction: column; gap: 10px; }
`;

if (!document.getElementById('ml-settings-css')) {
  const s = document.createElement('style'); s.id = 'ml-settings-css'; s.textContent = ML_SETTINGS_CSS; document.head.appendChild(s);
}

function MLSettings({ onClose, prefs, onPref, onSignOut }) {
  React.useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="ml-drawer-scrim" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <aside className="ml-drawer" role="dialog" aria-modal="true" aria-label="Settings">
        <div className="ml-drawer__head">
          <div>
            <div className="ml-drawer__title">Settings</div>
            <div className="ml-drawer__sub">Adjust how My Library looks and behaves.</div>
          </div>
          <MLSetIconBtn icon="close" size="sm" aria-label="Close settings" onClick={onClose} />
        </div>
        <div className="ml-drawer__body">
          <div className="ml-set-group"><span className="ml-set-group__label">Accessibility</span></div>
          {[
            { key: 'largeText', name: 'Larger text', desc: 'Increase the base text size across the app.' },
            { key: 'highContrast', name: 'High contrast', desc: 'Boost contrast for titles and controls.' },
            { key: 'reduceMotion', name: 'Reduce motion', desc: 'Minimise animations and transitions.' },
          ].map(r => (
            <div className="ml-set-row" key={r.key}>
              <div className="ml-set-row__text">
                <span className="ml-set-row__name">{r.name}</span>
                <span className="ml-set-row__desc">{r.desc}</span>
              </div>
              <MLToggle checked={!!prefs[r.key]} onChange={e => onPref(r.key, e.target.checked)}
                aria-label={r.name} showState />
            </div>
          ))}
          <div className="ml-set-group"><span className="ml-set-group__label">Account</span></div>
          <button className="ml-set-nav"><MLSetIcon name="user" size={20} /><span className="ml-set-nav__lbl">Profile</span><MLSetIcon name="chevronRight" size={18} /></button>
          <button className="ml-set-nav"><MLSetIcon name="bell" size={20} /><span className="ml-set-nav__lbl">Notifications</span><MLSetIcon name="chevronRight" size={18} /></button>
          <button className="ml-set-nav"><MLSetIcon name="lock" size={20} /><span className="ml-set-nav__lbl">Privacy &amp; security</span><MLSetIcon name="chevronRight" size={18} /></button>
        </div>
        <div className="ml-drawer__foot">
          <MLSetBtn variant="secondary" iconLeft="logOut" onClick={onSignOut} fullWidth>Sign out</MLSetBtn>
        </div>
      </aside>
    </div>
  );
}

window.MLSettings = MLSettings;


/* ===== WelcomeScreen.jsx ===== */
/* My Library — welcome / sign-in screen. Composes DS Input, Button, Icon. Exposes window.MLWelcome. */
const { Input: MLWInput, Button: MLWButton, Icon: MLWIcon } = window.AccessibleFoundationsDesignSystem_87ff79;

const ML_WELCOME_CSS = `
.ml-welcome { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: var(--white); padding: 24px; }
.ml-welcome__card { width: 440px; max-width: 100%; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
.ml-welcome__glyph { width: 64px; height: 64px; border-radius: 18px; background: var(--brand-700); display: grid; place-items: center;
  box-shadow: var(--shadow-md); margin-bottom: 8px; }
.ml-welcome__glyph::before { content: ''; width: 26px; height: 26px; border: 5px solid #fff; border-radius: 8px; }
.ml-welcome__title { font-size: 40px; font-weight: 700; color: var(--neutral-950); letter-spacing: -0.02em; line-height: 1.1; }
.ml-welcome__sub { font-size: 17px; color: var(--neutral-700); line-height: 1.5; max-width: 380px; margin-bottom: 16px; }
.ml-welcome__form { width: 100%; display: flex; flex-direction: column; gap: 16px; text-align: left; }
.ml-welcome__hint { font-size: 13px; color: var(--neutral-500); text-align: center; margin-top: 4px; }
`;

if (!document.getElementById('ml-welcome-css')) {
  const s = document.createElement('style'); s.id = 'ml-welcome-css'; s.textContent = ML_WELCOME_CSS; document.head.appendChild(s);
}

function MLWelcome({ onContinue }) {
  const [name, setName] = React.useState('');
  const submit = () => onContinue(name.trim() || 'Friend');
  return (
    <div className="ml-welcome">
      <div className="ml-welcome__card">
        <div className="ml-welcome__glyph" />
        <h1 className="ml-welcome__title">Welcome to My Library</h1>
        <p className="ml-welcome__sub">Keep everything you save in one calm, easy-to-read place.</p>
        <div className="ml-welcome__form">
          <MLWInput label="What should we call you?" placeholder="Type your name" icon="user"
            value={name} onChange={e => setName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') submit(); }} />
          <MLWButton variant="primary" fullWidth iconRight="chevronRight" onClick={submit}>Continue</MLWButton>
          <p className="ml-welcome__hint">No account needed — this is a guided demo.</p>
        </div>
      </div>
    </div>
  );
}

window.MLWelcome = MLWelcome;


/* ===== App.jsx ===== */
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


/* ===== mount ===== */
ReactDOM.createRoot(document.getElementById("ml-root")).render(React.createElement(window.MLApp));
