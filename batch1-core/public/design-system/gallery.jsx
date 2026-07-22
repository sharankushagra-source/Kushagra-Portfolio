/* Accessible Foundations site — live gallery. Each block has three tabs:
 * Overview (the live demo) · Specs (the basics) · Accessibility (how it's handled). */
const _AF_NS = 'AccessibleFoundationsDesignSystem_87ff79';
/* Resolved lazily: this file is compiled INTO _ds_bundle.js and runs mid-bundle,
 * before window[_AF_NS] is assigned. Destructuring eagerly would read undefined,
 * so we keep the names as `let` and bind them once the namespace is ready. */
let Button, IconButton, Input, Select, Toggle, Checkbox, Radio, RadioGroup,
  Tabs, Chip, TierPill, Card, Divider, Tooltip, Menu, MenuItem, Modal,
  Toast, Progress, List, ListItem, Accordion, Icon;
function resolveAF() {
  const AF = window[_AF_NS];
  if (!AF || !AF.Button) return false;
  ({ Button, IconButton, Input, Select, Toggle, Checkbox, Radio, RadioGroup,
    Tabs, Chip, TierPill, Card, Divider, Tooltip, Menu, MenuItem, Modal,
    Toast, Progress, List, ListItem, Accordion, Icon } = AF);
  return true;
}

const ICON_NAMES = ['home','heart','folder','folderOff','list','grid','globe','people','hourglass','puzzle','save','stop','addCircle','plus','search','settings','close','check','checkCircle','trash','edit','moreVertical','user','bell','star','clock','download','upload','eye','logOut','help','bookOpen','image','play','lock','mail','chevronDown','chevronUp','chevronLeft','chevronRight','sun'];

function SpecList({ rows }) {
  return <div className="dss-speclist">{rows.map((r, i) => (
    <div className="dss-specrow" key={i}><b>{r[0]}</b><span>{r[1]}</span></div>
  ))}</div>;
}
function A11yList({ rows }) {
  return <div className="dss-a11y">{rows.map((r, i) => (
    <div className="dss-a11y__row" key={i}>
      <Icon name="checkCircle" size={20} strokeWidth={2} />
      <div><b>{r[0]}</b><span>{r[1]}</span></div>
    </div>
  ))}</div>;
}
function Block({ id, title, count, specs, a11y, children }) {
  const [t, setT] = React.useState('overview');
  return (
    <div className="dss-group" id={id}>
      <div className="dss-group__h"><h3>{title}</h3><span>{count}</span></div>
      <div className="dss-tabwrap">
        <Tabs value={t} onChange={setT} items={[
          { id: 'overview', label: 'Overview', icon: 'eye' },
          { id: 'specs', label: 'Specs', icon: 'list' },
          { id: 'a11y', label: 'Accessibility', icon: 'checkCircle' },
        ]} />
      </div>
      {t === 'overview' && children}
      {t === 'specs' && <SpecList rows={specs} />}
      {t === 'a11y' && <A11yList rows={a11y} />}
    </div>
  );
}

function ContactForm() {
  const [f, setF] = React.useState({ name: '', email: '', subject: '', reason: 'project', msg: '', news: true, consent: false });
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setF(s => ({ ...s, [k]: v }));
  const emailOk = /^\S+@\S+\.\S+$/.test(f.email);
  const emailErr = f.email && !emailOk ? 'Enter a valid email address.' : undefined;
  const valid = f.name.trim() && emailOk && f.subject && f.msg.trim() && f.consent;
  const autofill = () => setF({ name: 'Kushagra Sharan', email: 'sharan.kushagra@gmail.com', subject: 'hire', reason: 'referral', msg: "Hi Kushagra — we're hiring a senior product designer and your design-system work stood out. Could we set up a quick call this week?", news: true, consent: true });
  if (sent) {
    return (
      <div className="dss-thanks">
        <div className="dss-thanks__badge"><Icon name="checkCircle" size={40} strokeWidth={1.8} /></div>
        <h4 className="dss-thanks__title">Thank you{f.name ? ', ' + f.name.trim().split(' ')[0] : ''} — message received.</h4>
        <p className="dss-thanks__copy">Genuinely, thank you for taking the time to write. I read every message myself and I'll get back to you within a couple of days. In the meantime, feel free to keep exploring the system.</p>
        <Button variant="secondary" type="button" iconLeft="chevronLeft" onClick={() => setSent(false)}>Back to the form</Button>
      </div>
    );
  }
  return (
    <form className="dss-form" onSubmit={e => { e.preventDefault(); if (valid) setSent(true); }}>
      <div className="dss-form__head">
        <div><h4>Send me a message</h4><p>Tell me about a role, a project, or just say hi — I usually reply within two days.</p></div>
        <Button variant="secondary" size="sm" type="button" iconLeft="user" onClick={autofill} title="Fill from your saved details">Autofill</Button>
      </div>
      <div className="dss-form__row">
        <Input label="Full name" placeholder="Kushagra Sharan" value={f.name} onChange={e => set('name', e.target.value)} />
        <Input label="Email" icon="mail" placeholder="you@email.com" value={f.email} onChange={e => set('email', e.target.value)} error={emailErr} />
      </div>
      <div className="dss-form__row">
        <Select label="Subject" placeholder="Choose a topic" value={f.subject} onChange={e => set('subject', e.target.value)} options={[
          { value: 'hire', label: 'Hiring / a role' }, { value: 'freelance', label: 'Freelance project' }, { value: 'system', label: 'Design-system help' }, { value: 'hello', label: 'Just saying hi' },
        ]} />
        <div className="dss-field">
          <span className="dss-field__lab">How did you hear about me?</span>
          <RadioGroup row value={f.reason} onChange={v => set('reason', v)} options={[
            { value: 'project', label: 'A project' }, { value: 'referral', label: 'Referral' }, { value: 'social', label: 'Social' },
          ]} />
        </div>
      </div>
      <div className="dss-field">
        <label className="dss-field__lab" htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" className="dss-textarea" rows="4" placeholder="Tell me a little about what you need…" value={f.msg} onChange={e => set('msg', e.target.value)} />
      </div>
      <div className="dss-form__opts">
        <Toggle label="Email me product updates" checked={f.news} onChange={e => set('news', e.target.checked)} showState />
        <Checkbox label="I agree to be contacted about my enquiry" checked={f.consent} onChange={e => set('consent', e.target.checked)} />
      </div>
      <div className="dss-form__foot">
        <Button variant="primary" iconRight="checkCircle" type="submit" disabled={!valid}>Send message</Button>
        <span className="dss-form__note">{valid ? 'Typically replies within 2 days.' : 'Fill in your name, a valid email, subject, message & consent to send.'}</span>
      </div>
    </form>
  );
}

function IconPlayground() {
  const [sel, setSel] = React.useState({});
  const count = Object.values(sel).filter(Boolean).length;
  return (
    <div>
      <div className="dss-iconwrap">
        {ICON_NAMES.map(n => (
          <button key={n} type="button" title={n} className={'dss-iconbtn' + (sel[n] ? ' is-on' : '')} aria-pressed={!!sel[n]}
            onClick={() => setSel(s => ({ ...s, [n]: !s[n] }))}><Icon name={n} size={24} /></button>
        ))}
      </div>
      <div className="dss-iconfoot">
        <span className="dss-iconfoot__hint">{count ? count + ' selected — hover, click, then reset.' : 'Hover and click an icon to select it.'}</span>
        <Button variant="secondary" size="sm" type="button" iconLeft="close" disabled={!count} onClick={() => setSel({})}>Reset</Button>
      </div>
    </div>
  );
}

function Gallery() {
  const [tab, setTab] = React.useState('all');
  const [view, setView] = React.useState('grid');
  const [chips, setChips] = React.useState({ recipes: true, photos: false });
  const [tags, setTags] = React.useState(['Family', 'Garden']);
  const [modal, setModal] = React.useState(false);
  const [toast, setToast] = React.useState(true);

  return (
    <React.Fragment>
      <Block id="g-buttons" title="Buttons" count="Button · IconButton"
        specs={[['Height', '44px (lg) · 36px (sm)'], ['Radius', '--radius-btn · 10px'], ['Variants', 'primary · secondary · outline · tertiary · danger'], ['Font', '15–16px / 600–700']]}
        a11y={[['44px touch target', 'The default control height equals the touch-target minimum — no reliance on invisible padding.'], ['Visible focus', 'A 2px brand ring with 2px offset on every button.'], ['Icon-only buttons', 'IconButton requires an aria-label so screen readers announce the action.']]}>
        <div className="dss-panel">
          <div className="dss-bgrid">
            <Cell label="primary"><Button variant="primary" iconLeft="plus">Create New</Button></Cell>
            <Cell label="secondary"><Button variant="secondary">Secondary</Button></Cell>
            <Cell label="outline"><Button variant="outline">Reset</Button></Cell>
            <Cell label="tertiary"><Button variant="tertiary">Learn more</Button></Cell>
            <Cell label="danger"><Button variant="danger" iconLeft="trash">Delete</Button></Cell>
            <Cell label="small"><Button variant="primary" size="sm">Small</Button></Cell>
            <Cell label="disabled"><Button variant="primary" disabled>Disabled</Button></Cell>
            <Cell label="icon · solid"><IconButton icon="plus" solid aria-label="Add" /></Cell>
            <Cell label="icon · ghost"><IconButton icon="settings" aria-label="Settings" /></Cell>
          </div>
        </div>
      </Block>

      <Block id="g-forms" title="Forms" count="Input · Select · Toggle · Checkbox · Radio · Button"
        specs={[['Field height', '48px'], ['Radius', '--radius-lg · 14px'], ['Label', 'above the field · 14 / 500'], ['Error', 'danger text + icon, never colour alone']]}
        a11y={[['Labels', 'Every field is tied to a programmatic <label>.'], ['Errors', 'Pair text with an icon and set aria-invalid — never colour alone.'], ['Native Select', 'Uses the OS picker: fully keyboard- and screen-reader-friendly.'], ['44px rows', 'Checkbox, Radio and Toggle each sit in a ≥44px hit row.']]}>
        <div className="dss-panel"><ContactForm /></div>
      </Block>

      <Block id="g-nav" title="Navigation" count="Tabs"
        specs={[['Tab height', '≥48px'], ['Active', 'surface-active tint, 800 text'], ['Radius', 'container --radius-btn · tab --radius-item']]}
        a11y={[['Roles', 'role="tablist" / "tab" with aria-selected on the active tab.'], ['Focus', 'Visible focus ring on each tab.'], ['Not colour-only', 'The active tab is a solid fill + weight, not just a hue change.']]}>
        <div className="dss-panel">
          <div className="dss-row" style={{ gap: 24 }}>
            <Tabs value={tab} onChange={setTab} items={[{ id: 'all', label: 'All', icon: 'list' }, { id: 'active', label: 'Active', icon: 'hourglass' }, { id: 'done', label: 'Archived', icon: 'stop' }]} />
            <Tabs value={view} onChange={setView} items={[{ id: 'grid', label: 'Grid', icon: 'grid' }, { id: 'list', label: 'List', icon: 'list' }]} />
          </div>
        </div>
      </Block>

      <Block id="g-chips" title="Chips & Status" count="Chip · TierPill"
        specs={[['Chip height', '44px'], ['Radius', '--radius-pill · 8px'], ['Pill tones', 'solid · brand · neutral · success (cohesive, brand-harmonised)']]}
        a11y={[['Filter state', 'Selectable chips report aria-pressed.'], ['Pill + label', 'Status pills always pair colour with a text label.'], ['Contrast', 'Every tone meets AA text contrast on its surface.']]}>
        <div className="dss-panel">
          <div className="dss-row" style={{ marginBottom: 16 }}>
            <Chip variant="assist" icon="download">Save offline</Chip>
            {Object.keys(chips).map(k => (
              <Chip key={k} variant="filter" selected={chips[k]} onClick={() => setChips(c => ({ ...c, [k]: !c[k] }))}>{k[0].toUpperCase() + k.slice(1)}</Chip>
            ))}
            {tags.map(t => (<Chip key={t} variant="input" icon="folder" onRemove={() => setTags(l => l.filter(x => x !== t))}>{t}</Chip>))}
          </div>
          <div className="dss-row">
            <TierPill tier="solid" icon="check">Pro</TierPill>
            <TierPill tier="brand">Plus</TierPill>
            <TierPill tier="neutral" icon="stop">Archived</TierPill>
            <TierPill tier="success" icon="checkCircle">Active</TierPill>
          </div>
        </div>
      </Block>

      <Block id="g-surfaces" title="Surfaces" count="Card · Divider · List"
        specs={[['Card radius', '--radius-btn · 10px'], ['Border', '1px --neutral-300, no shadow at rest'], ['Elevation', 'flat at rest → --shadow-md on hover'], ['List row', '≥56px when interactive']]}
        a11y={[['Roles', 'List uses role="list" / "listitem".'], ['Hit area', 'Interactive rows are full-width buttons ≥44px tall.'], ['Focus', 'Cards and rows show the focus ring when interactive.']]}>
        <div className="dss-panel">
          <div className="dss-cols">
            <Card interactive title="Morning Crossword" meta="Edited 2 days ago" media={<Icon name="puzzle" size={40} />}
              footer={<><span className="af-card__meta">15 items</span><Button variant="tertiary" size="sm">Open</Button></>} />
            <List bordered>
              <ListItem leading="folder" title="Recipes" description="6 items · shared" trailing={<TierPill tier="brand">Shared</TierPill>} onClick={() => {}} />
              <ListItem leading="image" title="Photos" description="128 photos" onClick={() => {}} chevron />
              <ListItem leading="clock" title="Recently viewed" onClick={() => {}} chevron />
            </List>
          </div>
          <div style={{ marginTop: 20 }}><Divider label="or" /></div>
        </div>
      </Block>

      <Block id="g-overlays" title="Overlays" count="Tooltip · Menu · Modal"
        specs={[['Tooltip', 'dark label, on hover + focus'], ['Menu item', '≥44px rows'], ['Modal', 'radius 14px · backdrop blur']]}
        a11y={[['Keyboard', 'Tooltip shows on focus; Menu and Modal close on Esc.'], ['Dialog', 'Modal uses role="dialog" aria-modal, labelled by its title.'], ['Trigger', 'Menu trigger exposes aria-haspopup and aria-expanded.']]}>
        <div className="dss-panel">
          <div className="dss-row" style={{ gap: 16 }}>
            <Tooltip label="Collapse sidebar"><IconButton icon="chevronLeft" aria-label="Collapse" /></Tooltip>
            <Tooltip label="Auto-saved 2 min ago" placement="bottom"><IconButton icon="checkCircle" aria-label="Saved" /></Tooltip>
            <Menu trigger={<Button variant="secondary" iconRight="chevronDown">Folder options</Button>} items={[
              { label: 'Rename', icon: 'edit', onClick: () => {} }, { label: 'Share', icon: 'people', onClick: () => {} }, { separator: true }, { label: 'Delete', icon: 'trash', danger: true, onClick: () => {} },
            ]} />
            <Button variant="primary" onClick={() => setModal(true)}>Open dialog</Button>
          </div>
          {modal && (
            <Modal title="Delete Folder" danger confirmLabel="Delete" onClose={() => setModal(false)} onConfirm={() => setModal(false)}>
              Are you sure you want to delete <strong style={{ color: 'var(--neutral-950)' }}>"Recipes"</strong>? Items inside will not be deleted.
            </Modal>
          )}
        </div>
      </Block>

      <Block id="g-feedback" title="Feedback" count="Toast · Progress"
        specs={[['Toast', 'light surface (default) · tone="dark" inverse'], ['Action', 'one optional action + dismiss'], ['Progress', 'linear / circular · determinate or indeterminate']]}
        a11y={[['Announce', 'Toast is role="status" aria-live="polite" — announced without stealing focus.'], ['Progress value', 'role="progressbar" with aria-valuenow.'], ['Reduced motion', 'Indeterminate animation respects prefers-reduced-motion.']]}>
        <div className="dss-panel">
          <div className="dss-stack" style={{ maxWidth: 520 }}>
            <Toast fixed={false} status="success" message="Item saved to Recipes" actionLabel="Undo" onAction={() => {}} onClose={() => setToast(false)} open={toast} />
            <Progress variant="linear" value={64} label="Uploading photos" showValue />
            <div className="dss-row" style={{ gap: 28 }}>
              <Progress variant="circular" value={72} /><Progress variant="circular" /><span style={{ fontSize: 14, color: 'var(--neutral-500)' }}>Determinate &amp; indeterminate</span>
            </div>
          </div>
        </div>
      </Block>

      <Block id="g-disclosure" title="Disclosure" count="Accordion"
        specs={[['Header', '≥56px, rotating chevron'], ['Mode', 'single-open (default) or allowMultiple'], ['Motion', 'grid-rows height animation']]}
        a11y={[['ARIA', 'Headers are buttons with aria-expanded and aria-controls.'], ['Region', 'Each panel uses role="region".'], ['Reduced motion', 'Height animation is disabled under prefers-reduced-motion.']]}>
        <div className="dss-panel">
          <Accordion defaultOpen={['a']} items={[
            { id: 'a', icon: 'help', title: 'How do I create an item?', content: 'Tap Create New in the sidebar, give it a clear name, and it appears in your library right away.' },
            { id: 'b', icon: 'people', title: 'Sharing & permissions', content: 'Anything you share stays read-only for others unless you invite them to edit.' },
            { id: 'c', icon: 'lock', title: 'Privacy', content: 'Your library is private by default.' },
          ]} />
        </div>
      </Block>

      <Block id="g-icons" title="Iconography" count="Outline set · interactive"
        specs={[['Grid', '24×24, currentColor'], ['Stroke', '1.8 (nav) · 2 (utility)'], ['Targets', 'interactive icons sit in ≥44px hit areas']]}
        a11y={[['currentColor', 'Icons inherit text colour so contrast is controlled by context.'], ['Labels', 'Standalone icons take a title / aria-label; decorative ones are aria-hidden.'], ['Focus', 'Interactive icons show the focus ring and report aria-pressed.']]}>
        <div className="dss-panel"><IconPlayground /></div>
      </Block>
    </React.Fragment>
  );
}

function Cell({ label, children }) {
  return <div className="dss-cell"><div className="dss-cell__demo">{children}</div><span className="dss-cell__lab">{label}</span></div>;
}

/* Deferred, retrying, idempotent mount. gallery.jsx runs from the compiled
 * _ds_bundle.js mid-load (before the namespace is assigned), so we retry on a
 * timer until the namespace + React are ready, then mount exactly one root. */
(function mountGallery(tries) {
  tries = tries || 0;
  var el = document.getElementById('dss-components');
  if (!el || typeof ReactDOM === 'undefined') {
    if (tries < 200) setTimeout(function () { mountGallery(tries + 1); }, 20);
    return;
  }
  if (!resolveAF()) {
    if (tries < 200) setTimeout(function () { mountGallery(tries + 1); }, 20);
    return;
  }
  var root = el.__dssRoot || (el.__dssRoot = ReactDOM.createRoot(el));
  root.render(<Gallery />);
})();
