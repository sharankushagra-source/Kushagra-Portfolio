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
