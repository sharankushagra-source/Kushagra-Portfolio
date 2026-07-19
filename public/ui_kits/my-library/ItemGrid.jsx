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
