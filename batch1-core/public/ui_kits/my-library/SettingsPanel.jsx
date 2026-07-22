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
