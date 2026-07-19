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
