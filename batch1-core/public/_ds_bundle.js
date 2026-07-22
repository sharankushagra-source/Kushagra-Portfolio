/* @ds-bundle: {"format":4,"namespace":"AccessibleFoundationsDesignSystem_87ff79","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Chip","sourcePath":"components/chips/Chip.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"List","sourcePath":"components/lists/List.jsx"},{"name":"ListItem","sourcePath":"components/lists/List.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"MenuItem","sourcePath":"components/overlays/Menu.jsx"},{"name":"Menu","sourcePath":"components/overlays/Menu.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"},{"name":"TierPill","sourcePath":"components/status/TierPill.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Divider","sourcePath":"components/surfaces/Divider.jsx"}],"sourceHashes":{"assets/icons.js":"0adaee824e24","components/buttons/Button.jsx":"716d592ce026","components/buttons/IconButton.jsx":"cb8f44feffc4","components/chips/Chip.jsx":"455653fa2c77","components/disclosure/Accordion.jsx":"254fedda242f","components/feedback/Modal.jsx":"83b70538ea36","components/feedback/Progress.jsx":"bc8143d66d5a","components/feedback/Toast.jsx":"3fbbfec6a148","components/forms/Checkbox.jsx":"d009567e4a85","components/forms/Input.jsx":"aebefd2ca4df","components/forms/Radio.jsx":"98dcd384fbba","components/forms/Select.jsx":"f42880b636ae","components/forms/Toggle.jsx":"41edfedfdb56","components/lists/List.jsx":"f89c6d241a86","components/media/Icon.jsx":"154e092fc780","components/navigation/Tabs.jsx":"234d9adc4676","components/overlays/Menu.jsx":"2fffce2e5f4f","components/overlays/Tooltip.jsx":"06c2445c12ea","components/status/TierPill.jsx":"35f0b019e41e","components/surfaces/Card.jsx":"ec7bf07789ee","components/surfaces/Divider.jsx":"d5748bd027a6","design-system/gallery.jsx":"1efb1b1b4845","factile/case.js":"a8b5b9ea018a","factile/deck.js":"6090f929b22a","portfolio/cursor-dots.js":"9c0a3a3947f2","portfolio/facets.js":"d889b4b3a681","portfolio/image-slot.js":"0394ad34f685","portfolio/ll-cursor.js":"36d81d56d00a","portfolio/ll.js":"fd1d9c5e7c80","portfolio/motion.js":"75f3200dd915","portfolio/pf-collage.js":"b8936a4ec7be","portfolio/pf-facets.js":"acd24f813118","portfolio/pf-hero-ascii.js":"2aa89ca366b9","portfolio/pf-journey.js":"5f496f930246","portfolio/pf-morph.js":"62a5efdc2cb5","portfolio/pf-sfx.js":"96801431727f","portfolio/pf-skillmodal.js":"87a291426a36","portfolio/pf-skills.js":"054d3c5420bb","portfolio/pf.js":"fb768a216ad4","portfolio/portfolio-v3.js":"18efe3d1c3df","portfolio/portfolio.js":"623cf3171ced","portfolio/scenes.js":"52f2dde141fe","ui_kits/my-library/App.jsx":"1c61e2e2b127","ui_kits/my-library/ItemGrid.jsx":"6e72364ab045","ui_kits/my-library/LibraryHeader.jsx":"9ff8d1b94c50","ui_kits/my-library/SettingsPanel.jsx":"40ec9df767c1","ui_kits/my-library/Sidebar.jsx":"f564832236e9","ui_kits/my-library/WelcomeScreen.jsx":"c9a12fbae6ba"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/media/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.AccessibleFoundationsDesignSystem_87ff79 = window.AccessibleFoundationsDesignSystem_87ff79 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons.js
try { (() => {
/* Accessible Foundations — Icon registry (non-React contexts)
 * Outline / stroke style, 24×24 viewBox, colored via currentColor.
 * Mirrors components/media/Icon.jsx. Usage:
 *   <span class="af-ico">${afIcon('home')}</span>
 *   afIcon('search', { size: 20, stroke: 2 })
 */
(function () {
  // Inner markup only (paths). Wrapped by afIcon() in a stroke <svg>.
  var P = {
    home: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    folderOff: '<path d="M20 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v1M2 2l20 20"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    people: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    hourglass: '<path d="M5 22h14M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
    puzzle: '<path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4a2 2 0 0 0-2 2v3.8h1.5a2.5 2.5 0 0 1 0 5H2V20a2 2 0 0 0 2 2h3.8v-1.5a2.5 2.5 0 0 1 5 0V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z"/>',
    save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
    autoSave: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M9 8l3 3 3-3"/>',
    stop: '<rect x="3" y="3" width="18" height="18" rx="2"/>',
    addCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    moreVertical: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    play: '<polygon points="5 3 19 12 5 21 5 3"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    chevronDown: '<polyline points="6 9 12 15 18 9"/>',
    chevronUp: '<polyline points="18 15 12 9 6 15"/>',
    chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
    chevronRight: '<polyline points="9 18 15 12 9 6"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
  };

  // moreVertical / star / play read better filled.
  var FILLED = {
    star: false
  };
  function afIcon(name, opts) {
    opts = opts || {};
    var size = opts.size || 24;
    var stroke = opts.stroke != null ? opts.stroke : 1.8;
    var inner = P[name] || '';
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="' + stroke + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }
  window.AFIcons = P;
  window.afIcon = afIcon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons.js", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Progress (linear + circular)
 * Determinate (value 0–100) or indeterminate. Brand fill on neutral track.
 */

const CSS = `
.af-prog { display: flex; flex-direction: column; gap: 6px; }
.af-prog__top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.af-prog__label { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); }
.af-prog__pct { font-size: 14px; color: var(--neutral-500); font-variant-numeric: tabular-nums; }
.af-prog__track { position: relative; height: 8px; border-radius: var(--radius-full); background: var(--neutral-200); overflow: hidden; }
.af-prog__bar { position: absolute; inset: 0 auto 0 0; height: 100%; border-radius: var(--radius-full); background: var(--brand-700); transition: width var(--t-slow); }
.af-prog__track--indet .af-prog__bar { width: 40%; animation: af-prog-slide 1.4s ease-in-out infinite; }
@keyframes af-prog-slide { 0% { left: -40%; } 100% { left: 100%; } }
.af-prog__ring { display: inline-flex; }
.af-prog__ring svg { transform: rotate(-90deg); }
.af-prog__ring--indet svg { animation: af-prog-spin 1.1s linear infinite; transform: none; }
@keyframes af-prog-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .af-prog__track--indet .af-prog__bar { animation: none; left: 0; width: 100%; opacity: 0.4; }
  .af-prog__ring--indet svg { animation: none; }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('af-progress-css')) {
  const s = document.createElement('style');
  s.id = 'af-progress-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Progress({
  variant = 'linear',
  value,
  label,
  showValue = false,
  size = 44,
  thickness = 5,
  className = ''
}) {
  const indeterminate = value == null;
  const pct = indeterminate ? 0 : Math.max(0, Math.min(100, value));
  const aria = {
    role: 'progressbar',
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    'aria-valuenow': indeterminate ? undefined : pct,
    'aria-label': label || 'Progress'
  };
  if (variant === 'circular') {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("span", _extends({
      className: 'af-prog__ring' + (indeterminate ? ' af-prog__ring--indet' : '') + (className ? ' ' + className : '')
    }, aria), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--neutral-200)",
      strokeWidth: thickness
    }), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--brand-700)",
      strokeWidth: thickness,
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: indeterminate ? c * 0.7 : c * (1 - pct / 100)
    })));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'af-prog' + (className ? ' ' + className : '')
  }, aria), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "af-prog__top"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "af-prog__label"
  }, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    className: "af-prog__pct"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: 'af-prog__track' + (indeterminate ? ' af-prog__track--indet' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "af-prog__bar",
    style: indeterminate ? undefined : {
      width: pct + '%'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Radio & RadioGroup
 * Circular control in a 44px touch row. Brand dot when selected. Always grouped + labelled.
 */

const CSS = `
.af-radio { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; user-select: none; }
.af-radio--disabled { cursor: not-allowed; }
.af-radio input { position: absolute; opacity: 0; width: 0; height: 0; }
.af-radio__ring {
  position: relative; flex-shrink: 0; width: 22px; height: 22px; border-radius: var(--radius-full);
  border: 1.5px solid var(--neutral-500); background: var(--white); transition: border-color var(--t-fast);
}
.af-radio__ring::after {
  content: ''; position: absolute; inset: 0; margin: auto; width: 11px; height: 11px; border-radius: var(--radius-full);
  background: var(--brand-700); transform: scale(0); transition: transform var(--t-fast);
}
.af-radio input:checked + .af-radio__ring { border-color: var(--brand-700); }
.af-radio input:checked + .af-radio__ring::after { transform: scale(1); }
.af-radio input:focus-visible + .af-radio__ring { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-radio:hover input:not(:checked):not(:disabled) + .af-radio__ring { border-color: var(--neutral-800); }
.af-radio input:disabled + .af-radio__ring { border-color: var(--neutral-300); background: var(--neutral-200); }
.af-radio input:disabled:checked + .af-radio__ring::after { background: var(--disabled-primary); }
.af-radio__label { font-size: 15px; font-weight: var(--fw-medium); color: var(--text-body); }
.af-radiogroup { display: flex; flex-direction: column; gap: 4px; }
.af-radiogroup__legend { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); margin-bottom: 4px; }
.af-radiogroup--row { flex-direction: row; gap: 20px; flex-wrap: wrap; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-radio-css')) {
  const s = document.createElement('style');
  s.id = 'af-radio-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _rc = 0;
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const rid = id || `af-radio-${++_rc}`;
  const cls = ['af-radio', disabled ? 'af-radio--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: rid
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "af-radio__ring"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "af-radio__label"
  }, label));
}
function RadioGroup({
  legend,
  name,
  value,
  defaultValue,
  onChange,
  options = [],
  row = false,
  children
}) {
  const gname = React.useMemo(() => name || `af-rg-${++_rc}`, [name]);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const handle = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "af-radiogroup",
    role: "radiogroup",
    "aria-label": legend
  }, legend && /*#__PURE__*/React.createElement("span", {
    className: "af-radiogroup__legend"
  }, legend), /*#__PURE__*/React.createElement("div", {
    className: 'af-radiogroup' + (row ? ' af-radiogroup--row' : '')
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: gname,
    value: o.value,
    label: o.label,
    disabled: o.disabled,
    checked: current === o.value,
    onChange: () => handle(o.value)
  })), children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Toggle (switch)
 * Pill track + circular thumb. Always labelled; never convey state by the switch alone.
 */

const CSS = `
.af-toggle { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; user-select: none; }
.af-toggle__control {
  position: relative; flex-shrink: 0; width: 44px; height: 26px;
  background: #9E9E9E; border-radius: var(--radius-full);
  transition: background var(--t-normal);
}
.af-toggle__thumb {
  position: absolute; top: 3px; left: 3px; width: 20px; height: 20px;
  background: var(--white); border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm); transition: transform var(--t-normal), background var(--t-normal);
}
.af-toggle input { position: absolute; opacity: 0; width: 0; height: 0; }
.af-toggle input:checked + .af-toggle__control { background: #C3BEF5; }
.af-toggle input:checked + .af-toggle__control .af-toggle__thumb { transform: translateX(18px); background: var(--brand-700); }
.af-toggle input:focus-visible + .af-toggle__control { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-toggle input:disabled + .af-toggle__control { opacity: 0.45; }
.af-toggle--disabled { cursor: not-allowed; }
.af-toggle__label { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); }
.af-toggle__state { font-size: 14px; color: var(--neutral-500); margin-left: 2px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-toggle-css')) {
  const s = document.createElement('style');
  s.id = 'af-toggle-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _tc = 0;
function Toggle({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  showState = false,
  id,
  className = '',
  ...rest
}) {
  const tid = id || `af-toggle-${++_tc}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const cls = ['af-toggle', disabled ? 'af-toggle--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: tid
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: tid,
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: handle,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "af-toggle__control"
  }, /*#__PURE__*/React.createElement("span", {
    className: "af-toggle__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "af-toggle__label"
  }, label), showState && /*#__PURE__*/React.createElement("span", {
    className: "af-toggle__state"
  }, on ? 'On' : 'Off'));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Icon
 * Outline / stroke icons, 24×24 viewBox, colored via currentColor.
 * Canonical React registry (mirrors assets/icons.js for non-React contexts).
 */

const PATHS = {
  home: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  folderOff: '<path d="M20 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v1M2 2l20 20"/>',
  list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  people: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  hourglass: '<path d="M5 22h14M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  puzzle: '<path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4a2 2 0 0 0-2 2v3.8h1.5a2.5 2.5 0 0 1 0 5H2V20a2 2 0 0 0 2 2h3.8v-1.5a2.5 2.5 0 0 1 5 0V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
  stop: '<rect x="3" y="3" width="18" height="18" rx="2"/>',
  addCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  moreVertical: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  play: '<polygon points="5 3 19 12 5 21 5 3"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  chevronDown: '<polyline points="6 9 12 15 18 9"/>',
  chevronUp: '<polyline points="18 15 12 9 6 15"/>',
  chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
  chevronRight: '<polyline points="9 18 15 12 9 6"/>',
  sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
};

/** Names available in the Accessible Foundations icon set. */
const iconNames = Object.keys(PATHS);
function Icon({
  name,
  size = 24,
  strokeWidth = 1.8,
  title,
  style,
  className,
  ...rest
}) {
  const inner = PATHS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    className: className,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? `<title>${title}</title>` : '') + inner
    }
  }, rest));
}
Object.assign(__ds_scope, { iconNames, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Button
 * One interactive hue. Five variants, two sizes. Height ≥36px, explicit font-family.
 */

const CSS = `
.af-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  border-radius: var(--radius-btn); border: 1.5px solid transparent;
  cursor: pointer; white-space: nowrap; text-decoration: none;
  transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast);
}
.af-btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-btn--lg { height: 44px; padding: 0 20px; font-size: 16px; font-weight: var(--fw-bold); }
.af-btn--sm { height: 36px; padding: 0 14px; font-size: 14px; font-weight: var(--fw-semibold); }
.af-btn--full { width: 100%; }
.af-btn[disabled] { cursor: not-allowed; }

/* primary */
.af-btn--primary { background: var(--brand-700); color: var(--white); }
.af-btn--primary:hover:not([disabled]) { background: var(--brand-900); }
.af-btn--primary[disabled] { background: var(--disabled-primary); }

/* secondary — neutral outline (white, never transparent) */
.af-btn--secondary { background: var(--white); color: var(--neutral-500); border-color: var(--neutral-300); }
.af-btn--secondary:hover:not([disabled]) { background: var(--surface-hover); color: var(--neutral-800); border-color: var(--border-strong); }
.af-btn--secondary[disabled] { opacity: 0.4; }

/* outline — brand outline */
.af-btn--outline { background: var(--white); color: var(--brand-700); border-color: var(--brand-700); }
.af-btn--outline:hover:not([disabled]) { background: var(--surface-outline-hover); }
.af-btn--outline[disabled] { opacity: 0.4; }

/* tertiary — text / link */
.af-btn--tertiary { background: transparent; color: var(--brand-700); border-color: transparent; padding-left: 8px; padding-right: 8px; }
.af-btn--tertiary:hover:not([disabled]) { color: var(--brand-900); text-decoration: underline; }
.af-btn--tertiary[disabled] { opacity: 0.4; }

/* danger — destructive only */
.af-btn--danger { background: var(--danger); color: var(--white); border-color: var(--danger); }
.af-btn--danger:hover:not([disabled]) { background: var(--danger-hover); border-color: var(--danger-hover); }
.af-btn--danger[disabled] { opacity: 0.4; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-button-css')) {
  const s = document.createElement('style');
  s.id = 'af-button-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'lg',
  iconLeft,
  iconRight,
  fullWidth = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['af-btn', `af-btn--${variant}`, `af-btn--${size}`, fullWidth ? 'af-btn--full' : '', className].filter(Boolean).join(' ');
  const icoSize = size === 'lg' ? 18 : 16;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: icoSize,
    strokeWidth: 2
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: icoSize,
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — IconButton
 * Square icon-only control. Always pass aria-label. ≥44px touch target via padding.
 */

const CSS = `
.af-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border: none; background: none; cursor: pointer; color: var(--neutral-800);
  border-radius: var(--radius-sm); flex-shrink: 0;
  transition: background var(--t-fast), color var(--t-fast), transform var(--t-fast);
}
.af-iconbtn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-iconbtn:hover:not([disabled]) { background: var(--surface-hover); color: var(--brand-700); }
.af-iconbtn:active:not([disabled]) { transform: scale(0.94); }
.af-iconbtn[disabled] { color: rgba(26,26,46,0.25); cursor: not-allowed; }
.af-iconbtn--sm { width: 36px; height: 36px; }
.af-iconbtn--md { width: 44px; height: 44px; }
.af-iconbtn--lg { width: 48px; height: 48px; }
/* solid: filled interactive variant */
.af-iconbtn--solid { background: var(--brand-700); color: var(--white); }
.af-iconbtn--solid:hover:not([disabled]) { background: var(--brand-900); color: var(--white); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-iconbutton-css')) {
  const s = document.createElement('style');
  s.id = 'af-iconbutton-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  icon,
  size = 'md',
  solid = false,
  strokeWidth = 2,
  className = '',
  'aria-label': ariaLabel,
  ...rest
}) {
  const px = size === 'sm' ? 18 : size === 'lg' ? 24 : 20;
  const cls = ['af-iconbtn', `af-iconbtn--${size}`, solid ? 'af-iconbtn--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": ariaLabel
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: px,
    strokeWidth: strokeWidth
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/chips/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Chip
 * Compact, labelled tokens. assist · filter (selectable) · input (removable) · suggestion.
 * Pill radius (8px), 36px tall. Selected filter uses the active surface + brand text.
 */

const CSS = `
.af-chip {
  display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px;
  border-radius: var(--radius-pill); border: 1.5px solid var(--neutral-300); background: var(--white);
  font-family: var(--font-sans); font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body);
  cursor: pointer; white-space: nowrap; transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast);
}
.af-chip:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-chip[disabled] { opacity: 0.4; cursor: not-allowed; }
.af-chip:hover:not([disabled]) { background: var(--surface-hover); border-color: var(--border-strong); }
.af-chip--static { cursor: default; }
.af-chip--selected { background: var(--surface-active); border-color: var(--surface-active); color: var(--brand-900); }
.af-chip--selected:hover:not([disabled]) { background: var(--surface-active); border-color: var(--brand-700); }
.af-chip__remove {
  display: inline-flex; align-items: center; justify-content: center; margin: 0 -6px 0 0;
  width: 22px; height: 22px; border: none; background: none; color: inherit; cursor: pointer;
  border-radius: var(--radius-full); flex-shrink: 0; transition: background var(--t-fast);
}
.af-chip__remove:hover { background: rgba(0,0,0,0.08); }
.af-chip__remove:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 1px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-chip-css')) {
  const s = document.createElement('style');
  s.id = 'af-chip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Chip({
  variant = 'assist',
  selected = false,
  icon,
  onRemove,
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  const isFilter = variant === 'filter';
  const isInput = variant === 'input';
  const showCheck = isFilter && selected;
  const cls = ['af-chip', selected ? 'af-chip--selected' : '', isInput && !onRemove ? 'af-chip--static' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    disabled: disabled,
    "aria-pressed": isFilter ? selected : undefined
  }, rest), showCheck ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.5
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, children, isInput && onRemove && /*#__PURE__*/React.createElement("span", {
    className: "af-chip__remove",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 14,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chips/Chip.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
/* Accessible Foundations — Accordion
 * Collapsible sections. Single-open by default; allowMultiple for independent panels.
 */

const CSS = `
.af-accordion { display: flex; flex-direction: column; border: 1px solid var(--neutral-300); border-radius: var(--radius-btn); overflow: hidden; background: var(--white); }
.af-acc-item + .af-acc-item { border-top: 1px solid var(--neutral-300); }
.af-acc-header {
  display: flex; align-items: center; gap: 14px; width: 100%; min-height: 56px; padding: 12px 18px;
  background: none; border: none; cursor: pointer; text-align: left; font-family: var(--font-sans);
  font-size: 16px; font-weight: var(--fw-semibold); color: var(--neutral-950);
  transition: background var(--t-fast);
}
.af-acc-header:hover { background: var(--surface-hover); }
.af-acc-header:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.af-acc-header__lbl { flex: 1; }
.af-acc-header__lead { color: var(--neutral-700); display: flex; flex-shrink: 0; }
.af-acc-header__chev { color: var(--neutral-500); transition: transform var(--t-normal); flex-shrink: 0; }
.af-acc-header[aria-expanded="true"] .af-acc-header__chev { transform: rotate(180deg); }
.af-acc-header[aria-expanded="true"] { color: var(--brand-900); }
.af-acc-header[aria-expanded="true"] .af-acc-header__lead { color: var(--brand-700); }
.af-acc-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--t-slow); }
.af-acc-panel--open { grid-template-rows: 1fr; }
.af-acc-panel__inner { overflow: hidden; min-height: 0; }
.af-acc-panel__pad { padding: 0 18px 18px; font-size: 15px; line-height: var(--lh-body); color: var(--text-body); }
@media (prefers-reduced-motion: reduce) { .af-acc-panel { transition: none; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-accordion-css')) {
  const s = document.createElement('style');
  s.id = 'af-accordion-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _ac = 0;
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = ''
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const baseId = React.useMemo(() => `af-acc-${++_ac}`, []);
  const toggle = id => setOpen(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(id)) {
      if (allowMultiple) next.delete(id); /* else next already empty */
    } else next.add(id);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: 'af-accordion ' + className
  }, items.map((it, i) => {
    const id = it.id || `${baseId}-${i}`;
    const isOpen = open.has(id);
    return /*#__PURE__*/React.createElement("div", {
      className: "af-acc-item",
      key: id
    }, /*#__PURE__*/React.createElement("button", {
      className: "af-acc-header",
      "aria-expanded": isOpen,
      "aria-controls": `${id}-panel`,
      onClick: () => toggle(id)
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      className: "af-acc-header__lead"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      className: "af-acc-header__lbl"
    }, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevronDown",
      size: 20,
      className: "af-acc-header__chev"
    })), /*#__PURE__*/React.createElement("div", {
      id: `${id}-panel`,
      className: 'af-acc-panel' + (isOpen ? ' af-acc-panel--open' : ''),
      role: "region"
    }, /*#__PURE__*/React.createElement("div", {
      className: "af-acc-panel__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "af-acc-panel__pad"
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/* Accessible Foundations — Modal / Dialog
 * Backdrop blur, radius 14px. role=dialog aria-modal. Close on Esc, backdrop, button.
 * Footer: cancel (neutral) left, confirm (primary/danger) right.
 */

const CSS = `
.af-modal-overlay {
  position: fixed; inset: 0; z-index: var(--z-modal);
  display: flex; align-items: center; justify-content: center; padding: 20px;
  background: var(--backdrop); backdrop-filter: blur(2px);
  animation: af-modal-fade var(--t-slow);
}
@keyframes af-modal-fade { from { opacity: 0; } to { opacity: 1; } }
.af-modal {
  width: 420px; max-width: 100%; background: var(--white);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-modal); overflow: hidden;
  animation: af-modal-rise var(--t-slow);
}
@keyframes af-modal-rise { from { transform: translateY(8px) scale(0.98); } to { transform: none; } }
.af-modal__header {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 18px 20px 16px; border-bottom: 1px solid var(--neutral-300);
}
.af-modal__title { font-size: 16px; font-weight: var(--fw-semibold); color: var(--neutral-950); letter-spacing: var(--ls-heading); }
.af-modal__body { padding: 20px; font-size: 14px; color: var(--text-body); line-height: var(--lh-body); }
.af-modal__footer { display: flex; align-items: center; justify-content: flex-end; gap: 10px; padding: 16px 20px 18px; }
@media (prefers-reduced-motion: reduce) {
  .af-modal-overlay, .af-modal { animation: none; }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('af-modal-css')) {
  const s = document.createElement('style');
  s.id = 'af-modal-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _mc = 0;
function Modal({
  open = true,
  title,
  onClose,
  onConfirm,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  danger = false,
  showFooter = true,
  children,
  width
}) {
  const titleId = React.useMemo(() => `af-modal-title-${++_mc}`, []);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "af-modal-overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "af-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    style: width ? {
      width
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "af-modal__header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "af-modal__title",
    id: titleId
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    size: "sm",
    "aria-label": "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "af-modal__body"
  }, children), showFooter && /*#__PURE__*/React.createElement("div", {
    className: "af-modal__footer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onClose
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: danger ? 'danger' : 'primary',
    size: "sm",
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/* Accessible Foundations — Toast / Snackbar
 * Brief, low-emphasis feedback. Light surface by default (matches the light
 * theme); pass tone="dark" for the inverse-surface variant. role=status (polite).
 */

const CSS = `
.af-toast-wrap { position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); z-index: var(--z-modal); display: flex; flex-direction: column; gap: 10px; align-items: center; pointer-events: none; }
.af-toast {
  pointer-events: auto; display: flex; align-items: center; gap: 14px;
  min-width: 280px; max-width: min(92vw, 520px); padding: 12px 12px 12px 16px;
  border-radius: var(--radius-btn); box-shadow: var(--shadow-lg); font-size: 14px; line-height: 1.4;
  animation: af-toast-in var(--t-slow);
}
@keyframes af-toast-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
.af-toast__icon { flex-shrink: 0; display: flex; }
.af-toast__msg { flex: 1; }
.af-toast__action {
  flex-shrink: 0; border: none; background: none; cursor: pointer; padding: 6px 10px; border-radius: var(--radius-item);
  font-family: var(--font-sans); font-size: 14px; font-weight: var(--fw-bold); transition: background var(--t-fast);
}
.af-toast__close {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;
  border: none; background: none; cursor: pointer; border-radius: var(--radius-full);
  transition: background var(--t-fast), color var(--t-fast);
}

/* light (default) — on the white theme */
.af-toast--light { background: var(--white); color: var(--neutral-700); border: 1px solid var(--neutral-300); }
.af-toast--light .af-toast__icon--success { color: #1F8A5B; }
.af-toast--light .af-toast__icon--danger { color: var(--danger); }
.af-toast--light .af-toast__icon--info { color: var(--brand-700); }
.af-toast--light .af-toast__action { color: var(--brand-700); }
.af-toast--light .af-toast__action:hover { background: var(--surface-hover); }
.af-toast--light .af-toast__action:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 1px; }
.af-toast--light .af-toast__close { color: var(--neutral-500); }
.af-toast--light .af-toast__close:hover { background: var(--neutral-200); color: var(--neutral-800); }
.af-toast--light .af-toast__close:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 1px; }

/* dark — inverse surface, for use over busy / media backgrounds */
.af-toast--dark { background: var(--neutral-950); color: var(--white); }
.af-toast--dark .af-toast__icon--success { color: #8FE3B0; }
.af-toast--dark .af-toast__icon--danger { color: #FF9B95; }
.af-toast--dark .af-toast__icon--info { color: #C3BEF5; }
.af-toast--dark .af-toast__action { color: #C3BEF5; }
.af-toast--dark .af-toast__action:hover { background: rgba(255,255,255,0.12); }
.af-toast--dark .af-toast__action:focus-visible { outline: 2px solid #C3BEF5; outline-offset: 1px; }
.af-toast--dark .af-toast__close { color: rgba(255,255,255,0.8); }
.af-toast--dark .af-toast__close:hover { background: rgba(255,255,255,0.12); color: var(--white); }
.af-toast--dark .af-toast__close:focus-visible { outline: 2px solid var(--white); outline-offset: 1px; }

@media (prefers-reduced-motion: reduce) { .af-toast { animation: none; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-toast-css-2')) {
  const s = document.createElement('style');
  s.id = 'af-toast-css-2';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const TOAST_ICON = {
  success: 'checkCircle',
  danger: 'help',
  info: 'bell'
};
function Toast({
  open = true,
  message,
  status,
  actionLabel,
  onAction,
  onClose,
  duration = 0,
  fixed = true,
  tone = 'light'
}) {
  React.useEffect(() => {
    if (!open || !duration || !onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);
  if (!open) return null;
  const card = /*#__PURE__*/React.createElement("div", {
    className: `af-toast af-toast--${tone === 'dark' ? 'dark' : 'light'}`,
    role: "status",
    "aria-live": "polite"
  }, status && /*#__PURE__*/React.createElement("span", {
    className: `af-toast__icon af-toast__icon--${status}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TOAST_ICON[status] || 'bell',
    size: 20,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "af-toast__msg"
  }, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    className: "af-toast__action",
    onClick: onAction
  }, actionLabel), onClose && /*#__PURE__*/React.createElement("button", {
    className: "af-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18,
    strokeWidth: 2.2
  })));
  if (!fixed) return card;
  return /*#__PURE__*/React.createElement("div", {
    className: "af-toast-wrap"
  }, card);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Checkbox
 * 20px box in a 44px touch row. Brand fill when checked. Always labelled.
 */

const CSS = `
.af-check { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; cursor: pointer; user-select: none; }
.af-check--disabled { cursor: not-allowed; }
.af-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.af-check__box {
  position: relative; flex-shrink: 0; width: 22px; height: 22px; border-radius: var(--radius-sm);
  border: 1.5px solid var(--neutral-500); background: var(--white); color: var(--white);
  display: grid; place-items: center; transition: background var(--t-fast), border-color var(--t-fast);
}
.af-check__box svg, .af-check__dash { opacity: 0; transition: opacity var(--t-fast); }
.af-check__dash { width: 11px; height: 2.5px; border-radius: 2px; background: currentColor; }
.af-check input:checked + .af-check__box,
.af-check input:indeterminate + .af-check__box { background: var(--brand-700); border-color: var(--brand-700); }
.af-check input:checked + .af-check__box svg,
.af-check input:indeterminate + .af-check__box .af-check__dash { opacity: 1; }
.af-check input:focus-visible + .af-check__box { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-check:hover input:not(:checked):not(:disabled) + .af-check__box { border-color: var(--neutral-800); }
.af-check input:disabled + .af-check__box { border-color: var(--neutral-300); background: var(--neutral-200); }
.af-check input:disabled:checked + .af-check__box { background: var(--disabled-primary); border-color: var(--disabled-primary); }
.af-check--error .af-check__box { border-color: var(--danger); }
.af-check__label { font-size: 15px; font-weight: var(--fw-medium); color: var(--text-body); }
.af-check__label--err { color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-checkbox-css')) {
  const s = document.createElement('style');
  s.id = 'af-checkbox-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _cc = 0;
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  indeterminate = false,
  error = false,
  id,
  className = '',
  ...rest
}) {
  const cid = id || `af-check-${++_cc}`;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate, checked]);
  const cls = ['af-check', disabled ? 'af-check--disabled' : '', error ? 'af-check--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: cid
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: cid,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": error || undefined
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "af-check__box"
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    className: "af-check__dash"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    className: 'af-check__label' + (error ? ' af-check__label--err' : '')
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Input / Search field
 * 48px tall, radius 14px. Label above, helper/error below. Errors pair text + icon.
 */

const CSS = `
.af-field { display: flex; flex-direction: column; gap: 8px; }
.af-field__label { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); letter-spacing: var(--ls-label); }
.af-field__wrap {
  display: flex; align-items: center; gap: 10px;
  height: 48px; padding: 0 14px;
  background: var(--white); border: 1.5px solid var(--neutral-300);
  border-radius: var(--radius-lg);
  transition: border-color var(--t-normal), box-shadow var(--t-normal);
}
.af-field__wrap:hover { box-shadow: var(--shadow-sm); }
.af-field__wrap:focus-within { border-color: var(--brand-700); border-width: 2px; box-shadow: var(--shadow-md); padding: 0 13.5px; }
.af-field__icon { color: var(--neutral-500); flex-shrink: 0; display: flex; }
.af-field__input {
  flex: 1; min-width: 0; height: 100%; border: none; outline: none; background: transparent;
  font-family: var(--font-sans); font-size: 14px; font-weight: var(--fw-regular); color: var(--neutral-950);
}
.af-field__input::placeholder { color: var(--neutral-500); }
.af-field__msg { display: flex; align-items: center; gap: 6px; font-size: 14px; color: var(--neutral-500); }
.af-field__msg--error { color: var(--danger); }
.af-field--error .af-field__wrap { border-color: var(--danger); }
.af-field--error .af-field__wrap:focus-within { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(224,58,58,0.12); }
.af-field--disabled .af-field__wrap { background: var(--neutral-200); opacity: 0.7; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-input-css')) {
  const s = document.createElement('style');
  s.id = 'af-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _idc = 0;
function Input({
  label,
  helper,
  error,
  icon,
  id,
  disabled = false,
  className = '',
  ...rest
}) {
  const fid = id || `af-input-${++_idc}`;
  const msgId = `${fid}-msg`;
  const cls = ['af-field', error ? 'af-field--error' : '', disabled ? 'af-field--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "af-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "af-field__wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "af-field__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "af-field__input",
    disabled: disabled,
    "aria-invalid": !!error,
    "aria-describedby": error || helper ? msgId : undefined
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: "af-field__msg af-field__msg--error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "help",
    size: 16,
    strokeWidth: 2
  }), " ", error) : helper ? /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: "af-field__msg"
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Select
 * A styled NATIVE <select> (most accessible for the audience). Label above, helper/error below.
 */

const CSS = `
.af-select { display: flex; flex-direction: column; gap: 8px; }
.af-select__label { font-size: 14px; font-weight: var(--fw-medium); color: var(--text-body); letter-spacing: var(--ls-label); }
.af-select__wrap { position: relative; display: flex; align-items: center; }
.af-select__el {
  appearance: none; -webkit-appearance: none; width: 100%; height: 48px;
  padding: 0 44px 0 14px; background: var(--white); border: 1.5px solid var(--neutral-300); border-radius: var(--radius-lg);
  font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-medium); color: var(--neutral-950); cursor: pointer;
  transition: border-color var(--t-normal), box-shadow var(--t-normal);
}
.af-select__el:hover { box-shadow: var(--shadow-sm); }
.af-select__el:focus-visible { outline: none; border-color: var(--brand-700); border-width: 2px; box-shadow: var(--shadow-md); padding-left: 13.5px; }
.af-select__el:disabled { background: var(--neutral-200); color: var(--neutral-500); cursor: not-allowed; }
.af-select__el--placeholder { color: var(--neutral-500); }
.af-select__chev { position: absolute; right: 14px; pointer-events: none; color: var(--neutral-500); display: flex; }
.af-select--error .af-select__el { border-color: var(--danger); }
.af-select__msg { display: flex; align-items: center; gap: 6px; font-size: 14px; color: var(--neutral-500); }
.af-select__msg--error { color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-select-css')) {
  const s = document.createElement('style');
  s.id = 'af-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _sc = 0;
function Select({
  label,
  helper,
  error,
  options = [],
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const sid = id || `af-select-${++_sc}`;
  const msgId = `${sid}-msg`;
  const isPlaceholder = (value ?? defaultValue ?? '') === '' && !!placeholder;
  const cls = ['af-select', error ? 'af-select--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "af-select__label",
    htmlFor: sid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "af-select__wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    className: 'af-select__el' + (isPlaceholder ? ' af-select__el--placeholder' : ''),
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": !!error,
    "aria-describedby": error || helper ? msgId : undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "af-select__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 20
  }))), error ? /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: "af-select__msg af-select__msg--error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "help",
    size: 16,
    strokeWidth: 2
  }), " ", error) : helper ? /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: "af-select__msg"
  }, helper) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/lists/List.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — List & ListItem
 * Scannable rows: leading visual, primary + secondary text, trailing slot.
 * Interactive rows are ≥56px and behave like buttons.
 */

const CSS = `
.af-list { display: flex; flex-direction: column; background: var(--white); }
.af-list--bordered { border: 1px solid var(--neutral-300); border-radius: var(--radius-btn); overflow: hidden; }
.af-list--divided .af-listitem + .af-listitem { border-top: 1px solid var(--neutral-300); }

.af-listitem { display: flex; align-items: center; gap: 14px; width: 100%; min-height: 56px; padding: 10px 16px;
  background: none; border: none; text-align: left; font-family: var(--font-sans); color: var(--text-body); }
button.af-listitem { cursor: pointer; transition: background var(--t-fast); }
button.af-listitem:hover { background: var(--surface-hover); }
button.af-listitem:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.af-listitem--selected { background: var(--surface-active); box-shadow: inset 3px 0 0 var(--brand-700); }
.af-listitem--selected:hover { background: var(--surface-active); }

.af-listitem__lead { flex-shrink: 0; display: grid; place-items: center; width: 40px; height: 40px;
  border-radius: var(--radius-item); background: var(--neutral-200); color: var(--neutral-700); }
.af-listitem__lead--bare { width: auto; height: auto; background: none; color: var(--neutral-700); }
.af-listitem__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.af-listitem__title { font-size: 15px; font-weight: var(--fw-semibold); color: var(--neutral-950);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-listitem--selected .af-listitem__title { color: var(--brand-900); }
.af-listitem__desc { font-size: 14px; color: var(--neutral-500); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-listitem__trail { flex-shrink: 0; display: flex; align-items: center; gap: 10px; color: var(--neutral-500); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-list-css')) {
  const s = document.createElement('style');
  s.id = 'af-list-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function List({
  bordered = false,
  divided = true,
  className = '',
  children,
  ...rest
}) {
  const cls = ['af-list', bordered ? 'af-list--bordered' : '', divided ? 'af-list--divided' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "list"
  }, rest), children);
}
function ListItem({
  title,
  description,
  leading,
  trailing,
  bareLeading = false,
  onClick,
  selected = false,
  chevron = false,
  className = '',
  ...rest
}) {
  const interactive = !!onClick;
  const Tag = interactive ? 'button' : 'div';
  const cls = ['af-listitem', selected ? 'af-listitem--selected' : '', className].filter(Boolean).join(' ');
  const lead = leading != null && /*#__PURE__*/React.createElement("span", {
    className: 'af-listitem__lead' + (bareLeading ? ' af-listitem__lead--bare' : '')
  }, typeof leading === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leading,
    size: bareLeading ? 22 : 20
  }) : leading);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    role: "listitem",
    onClick: onClick,
    "aria-current": selected ? 'true' : undefined
  }, rest), lead, /*#__PURE__*/React.createElement("span", {
    className: "af-listitem__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "af-listitem__title"
  }, title), description && /*#__PURE__*/React.createElement("span", {
    className: "af-listitem__desc"
  }, description)), (trailing || chevron) && /*#__PURE__*/React.createElement("span", {
    className: "af-listitem__trail"
  }, trailing, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 20
  })));
}
Object.assign(__ds_scope, { List, ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/List.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/* Accessible Foundations — Tabs (segmented control)
 * White container, 4px pad, shadow. Active tab = surface-active tint + 800 text.
 */

const CSS = `
.af-tabs { display: inline-flex; gap: 4px; padding: 4px; background: var(--white); border-radius: var(--radius-btn); box-shadow: var(--shadow-md); }
.af-tabs--full { display: flex; width: 100%; }
.af-tab {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  flex: 1; min-height: 48px; padding: 0 18px;
  border: none; background: transparent; cursor: pointer;
  font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-semibold);
  color: var(--neutral-800); border-radius: var(--radius-item);
  transition: background var(--t-fast), color var(--t-fast);
  white-space: nowrap;
}
.af-tab:hover:not(.af-tab--active) { background: var(--surface-hover); color: var(--brand-900); }
.af-tab:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-tab--active { background: var(--surface-active); color: var(--neutral-800); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'af-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  fullWidth = false,
  className = ''
}) {
  const [internal, setInternal] = React.useState(value ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  const cls = ['af-tabs', fullWidth ? 'af-tabs--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "tablist"
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      className: 'af-tab' + (on ? ' af-tab--active' : ''),
      onClick: () => select(it.id)
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18,
      strokeWidth: 2
    }), it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Menu
 * Dropdown of actions anchored to a trigger. Closes on outside-click, Esc, or selection.
 * Pass a `trigger` element and either `items` or <MenuItem> children.
 */

const CSS = `
.af-menu { position: relative; display: inline-flex; }
.af-menu__pop {
  position: absolute; z-index: var(--z-menu); min-width: 200px; padding: 6px;
  background: var(--white); border: 1px solid var(--neutral-300); border-radius: var(--radius-btn);
  box-shadow: var(--shadow-lg); display: flex; flex-direction: column; gap: 2px;
  animation: af-menu-in var(--t-fast);
}
@keyframes af-menu-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
.af-menu__pop--start { left: 0; } .af-menu__pop--end { right: 0; }
.af-menu__pop--top { bottom: calc(100% + 6px); } .af-menu__pop--bottom { top: calc(100% + 6px); }
.af-menuitem {
  display: flex; align-items: center; gap: 12px; width: 100%; min-height: 44px; padding: 0 12px;
  background: none; border: none; border-radius: var(--radius-item); cursor: pointer; text-align: left;
  font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-medium); color: var(--text-body);
  transition: background var(--t-fast), color var(--t-fast);
}
.af-menuitem:hover { background: var(--surface-hover); color: var(--brand-700); }
.af-menuitem:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.af-menuitem__lbl { flex: 1; }
.af-menuitem--danger { color: var(--danger); }
.af-menuitem--danger:hover { background: #FDECEC; color: var(--danger-hover); }
.af-menuitem:disabled { color: var(--neutral-300); cursor: not-allowed; }
.af-menuitem:disabled:hover { background: none; }
.af-menu__sep { height: 1px; background: var(--neutral-300); margin: 4px 0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-menu-css')) {
  const s = document.createElement('style');
  s.id = 'af-menu-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function MenuItem({
  icon,
  danger = false,
  children,
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: 'af-menuitem' + (danger ? ' af-menuitem--danger' : ''),
    role: "menuitem",
    onClick: onClick
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "af-menuitem__lbl"
  }, children));
}
function Menu({
  trigger,
  items,
  align = 'start',
  side = 'bottom',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const triggerEl = React.cloneElement(trigger, {
    onClick: e => {
      trigger.props.onClick && trigger.props.onClick(e);
      setOpen(o => !o);
    },
    'aria-haspopup': 'menu',
    'aria-expanded': open
  });
  const close = () => setOpen(false);
  const renderedItems = items ? items.map((it, i) => it.separator ? /*#__PURE__*/React.createElement("div", {
    key: 'sep' + i,
    className: "af-menu__sep"
  }) : /*#__PURE__*/React.createElement(MenuItem, {
    key: it.label + i,
    icon: it.icon,
    danger: it.danger,
    disabled: it.disabled,
    onClick: () => {
      it.onClick && it.onClick();
      close();
    }
  }, it.label)) : React.Children.map(children, child => child && child.type === MenuItem ? React.cloneElement(child, {
    onClick: e => {
      child.props.onClick && child.props.onClick(e);
      close();
    }
  }) : child);
  return /*#__PURE__*/React.createElement("span", {
    className: "af-menu",
    ref: ref
  }, triggerEl, open && /*#__PURE__*/React.createElement("div", {
    className: `af-menu__pop af-menu__pop--${align} af-menu__pop--${side}`,
    role: "menu"
  }, renderedItems));
}
Object.assign(__ds_scope, { MenuItem, Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
/* Accessible Foundations — Tooltip
 * Dark label on hover/focus. Short, supplementary text only — never essential content.
 */

const CSS = `
.af-tip { position: relative; display: inline-flex; }
.af-tip__pop {
  position: absolute; z-index: var(--z-menu); pointer-events: none;
  background: var(--neutral-950); color: var(--white);
  font-size: 13px; font-weight: var(--fw-medium); line-height: 1.35;
  padding: 7px 10px; border-radius: var(--radius-item); max-width: 220px; width: max-content;
  box-shadow: var(--shadow-lg); opacity: 0; transform: translateY(2px);
  transition: opacity var(--t-fast), transform var(--t-fast); white-space: normal;
}
.af-tip:hover .af-tip__pop, .af-tip:focus-within .af-tip__pop { opacity: 1; transform: none; }
.af-tip__pop--top { bottom: calc(100% + 8px); left: 50%; transform: translate(-50%, 2px); }
.af-tip:hover .af-tip__pop--top, .af-tip:focus-within .af-tip__pop--top { transform: translateX(-50%); }
.af-tip__pop--bottom { top: calc(100% + 8px); left: 50%; transform: translateX(-50%) translateY(2px); }
.af-tip:hover .af-tip__pop--bottom, .af-tip:focus-within .af-tip__pop--bottom { transform: translateX(-50%); }
.af-tip__pop--left { right: calc(100% + 8px); top: 50%; transform: translateY(-50%) translateX(2px); }
.af-tip:hover .af-tip__pop--left, .af-tip:focus-within .af-tip__pop--left { transform: translateY(-50%); }
.af-tip__pop--right { left: calc(100% + 8px); top: 50%; transform: translateY(-50%) translateX(-2px); }
.af-tip:hover .af-tip__pop--right, .af-tip:focus-within .af-tip__pop--right { transform: translateY(-50%); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-tooltip-css')) {
  const s = document.createElement('style');
  s.id = 'af-tooltip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _tt = 0;
function Tooltip({
  label,
  placement = 'top',
  children,
  className = ''
}) {
  const id = React.useMemo(() => `af-tip-${++_tt}`, []);
  const child = React.Children.only(children);
  const trigger = React.cloneElement(child, {
    'aria-describedby': id
  });
  return /*#__PURE__*/React.createElement("span", {
    className: 'af-tip ' + className
  }, trigger, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    id: id,
    className: `af-tip__pop af-tip__pop--${placement}`
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/status/TierPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — TierPill & Badge
 * Non-interactive status indicators. Cohesive, brand-harmonious tones (no stray hues).
 * Always pair the swatch with a text label.
 */

const CSS = `
.af-pill {
  display: inline-flex; align-items: center; gap: 6px;
  height: 24px; padding: 0 10px; border-radius: var(--radius-pill);
  font-family: var(--font-sans); font-size: 13px; font-weight: var(--fw-semibold);
  white-space: nowrap; line-height: 1;
}
.af-pill svg { flex-shrink: 0; }
/* solid + brand + neutral form the core; success/warning are soft, desaturated to harmonise */
.af-pill--tier0, .af-pill--solid { background: var(--neutral-950); color: #FFFFFF; }
.af-pill--tier1, .af-pill--brand { background: var(--surface-active); color: var(--brand-900); }
.af-pill--tier2, .af-pill--neutral { background: var(--neutral-200); color: var(--neutral-700); }
.af-pill--tier3, .af-pill--success { background: #E6F0EA; color: #1F7A52; }
.af-pill--warning { background: #F4ECDD; color: #8A5A12; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-pill-css-2')) {
  const s = document.createElement('style');
  s.id = 'af-pill-css-2';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function TierPill({
  tier = 'tier0',
  icon,
  children,
  className = '',
  ...rest
}) {
  const cls = ['af-pill', `af-pill--${tier}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    strokeWidth: 2
  }), children);
}
Object.assign(__ds_scope, { TierPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/TierPill.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Card
 * White surface; separation from border + spacing, not tint. Optional hover lift.
 */

const CSS = `
.af-card {
  display: flex; flex-direction: column;
  background: var(--surface-card); border: 1px solid var(--neutral-300);
  border-radius: var(--radius-btn); overflow: hidden;
  transition: box-shadow var(--t-normal), border-color var(--t-normal), transform var(--t-normal);
}
.af-card--interactive { cursor: pointer; }
.af-card--interactive:hover { box-shadow: var(--shadow-md); border-color: var(--border-strong); }
.af-card--interactive:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.af-card__media {
  display: flex; align-items: center; justify-content: center;
  aspect-ratio: 16 / 9; background: var(--neutral-200); color: var(--neutral-500);
}
.af-card__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.af-card__body { display: flex; flex-direction: column; gap: 4px; padding: 16px; }
.af-card__title { font-size: 16px; font-weight: var(--fw-semibold); color: var(--neutral-950); letter-spacing: var(--ls-heading); }
.af-card__meta { font-size: 14px; color: var(--neutral-500); }
.af-card__footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; border-top: 1px solid var(--neutral-300); }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-card-css')) {
  const s = document.createElement('style');
  s.id = 'af-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  title,
  meta,
  media,
  footer,
  interactive = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['af-card', interactive ? 'af-card--interactive' : '', className].filter(Boolean).join(' ');
  const interactiveProps = interactive ? {
    tabIndex: 0,
    role: 'button'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, interactiveProps, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "af-card__media"
  }, media), (title || meta || children) && /*#__PURE__*/React.createElement("div", {
    className: "af-card__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "af-card__title"
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    className: "af-card__meta"
  }, meta), children), footer && /*#__PURE__*/React.createElement("div", {
    className: "af-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accessible Foundations — Divider
 * 1px hairline separator. Horizontal or vertical; optional centered label; optional inset.
 */

const CSS = `
.af-divider { border: none; background: var(--neutral-300); }
.af-divider--h { height: 1px; width: 100%; margin: 0; }
.af-divider--h.af-divider--inset { width: auto; margin-left: 16px; margin-right: 16px; }
.af-divider--v { width: 1px; align-self: stretch; min-height: 16px; margin: 0; }
.af-divider-labelled { display: flex; align-items: center; gap: 14px; width: 100%; }
.af-divider-labelled::before, .af-divider-labelled::after { content: ''; flex: 1; height: 1px; background: var(--neutral-300); }
.af-divider-labelled__txt { font-size: 12px; font-weight: var(--fw-semibold); letter-spacing: 0.04em; text-transform: uppercase; color: var(--neutral-500); white-space: nowrap; }
`;
if (typeof document !== 'undefined' && !document.getElementById('af-divider-css')) {
  const s = document.createElement('style');
  s.id = 'af-divider-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Divider({
  orientation = 'horizontal',
  inset = false,
  label,
  className = '',
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: 'af-divider-labelled ' + className,
      role: "separator"
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "af-divider-labelled__txt"
    }, label));
  }
  const vertical = orientation === 'vertical';
  const cls = ['af-divider', vertical ? 'af-divider--v' : 'af-divider--h', inset ? 'af-divider--inset' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "separator",
    "aria-orientation": vertical ? 'vertical' : 'horizontal'
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Divider.jsx", error: String((e && e.message) || e) }); }

// design-system/gallery.jsx
try { (() => {
/* Accessible Foundations site — live gallery. Each block has three tabs:
 * Overview (the live demo) · Specs (the basics) · Accessibility (how it's handled). */
const _AF_NS = 'AccessibleFoundationsDesignSystem_87ff79';
/* Resolved lazily: this file is compiled INTO _ds_bundle.js and runs mid-bundle,
 * before window[_AF_NS] is assigned. Destructuring eagerly would read undefined,
 * so we keep the names as `let` and bind them once the namespace is ready. */
let Button, IconButton, Input, Select, Toggle, Checkbox, Radio, RadioGroup, Tabs, Chip, TierPill, Card, Divider, Tooltip, Menu, MenuItem, Modal, Toast, Progress, List, ListItem, Accordion, Icon;
function resolveAF() {
  const AF = window[_AF_NS];
  if (!AF || !AF.Button) return false;
  ({
    Button,
    IconButton,
    Input,
    Select,
    Toggle,
    Checkbox,
    Radio,
    RadioGroup,
    Tabs,
    Chip,
    TierPill,
    Card,
    Divider,
    Tooltip,
    Menu,
    MenuItem,
    Modal,
    Toast,
    Progress,
    List,
    ListItem,
    Accordion,
    Icon
  } = AF);
  return true;
}
const ICON_NAMES = ['home', 'heart', 'folder', 'folderOff', 'list', 'grid', 'globe', 'people', 'hourglass', 'puzzle', 'save', 'stop', 'addCircle', 'plus', 'search', 'settings', 'close', 'check', 'checkCircle', 'trash', 'edit', 'moreVertical', 'user', 'bell', 'star', 'clock', 'download', 'upload', 'eye', 'logOut', 'help', 'bookOpen', 'image', 'play', 'lock', 'mail', 'chevronDown', 'chevronUp', 'chevronLeft', 'chevronRight', 'sun'];
function SpecList({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-speclist"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "dss-specrow",
    key: i
  }, /*#__PURE__*/React.createElement("b", null, r[0]), /*#__PURE__*/React.createElement("span", null, r[1]))));
}
function A11yList({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-a11y"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "dss-a11y__row",
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 20,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, r[0]), /*#__PURE__*/React.createElement("span", null, r[1])))));
}
function Block({
  id,
  title,
  count,
  specs,
  a11y,
  children
}) {
  const [t, setT] = React.useState('overview');
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-group",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-group__h"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("span", null, count)), /*#__PURE__*/React.createElement("div", {
    className: "dss-tabwrap"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: t,
    onChange: setT,
    items: [{
      id: 'overview',
      label: 'Overview',
      icon: 'eye'
    }, {
      id: 'specs',
      label: 'Specs',
      icon: 'list'
    }, {
      id: 'a11y',
      label: 'Accessibility',
      icon: 'checkCircle'
    }]
  })), t === 'overview' && children, t === 'specs' && /*#__PURE__*/React.createElement(SpecList, {
    rows: specs
  }), t === 'a11y' && /*#__PURE__*/React.createElement(A11yList, {
    rows: a11y
  }));
}
function ContactForm() {
  const [f, setF] = React.useState({
    name: '',
    email: '',
    subject: '',
    reason: 'project',
    msg: '',
    news: true,
    consent: false
  });
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setF(s => ({
    ...s,
    [k]: v
  }));
  const emailOk = /^\S+@\S+\.\S+$/.test(f.email);
  const emailErr = f.email && !emailOk ? 'Enter a valid email address.' : undefined;
  const valid = f.name.trim() && emailOk && f.subject && f.msg.trim() && f.consent;
  const autofill = () => setF({
    name: 'Kushagra Sharan',
    email: 'sharan.kushagra@gmail.com',
    subject: 'hire',
    reason: 'referral',
    msg: "Hi Kushagra — we're hiring a senior product designer and your design-system work stood out. Could we set up a quick call this week?",
    news: true,
    consent: true
  });
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: "dss-thanks"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dss-thanks__badge"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "checkCircle",
      size: 40,
      strokeWidth: 1.8
    })), /*#__PURE__*/React.createElement("h4", {
      className: "dss-thanks__title"
    }, "Thank you", f.name ? ', ' + f.name.trim().split(' ')[0] : '', " \u2014 message received."), /*#__PURE__*/React.createElement("p", {
      className: "dss-thanks__copy"
    }, "Genuinely, thank you for taking the time to write. I read every message myself and I'll get back to you within a couple of days. In the meantime, feel free to keep exploring the system."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      type: "button",
      iconLeft: "chevronLeft",
      onClick: () => setSent(false)
    }, "Back to the form"));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "dss-form",
    onSubmit: e => {
      e.preventDefault();
      if (valid) setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-form__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Send me a message"), /*#__PURE__*/React.createElement("p", null, "Tell me about a role, a project, or just say hi \u2014 I usually reply within two days.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    type: "button",
    iconLeft: "user",
    onClick: autofill,
    title: "Fill from your saved details"
  }, "Autofill")), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Kushagra Sharan",
    value: f.name,
    onChange: e => set('name', e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    placeholder: "you@email.com",
    value: f.email,
    onChange: e => set('email', e.target.value),
    error: emailErr
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__row"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Subject",
    placeholder: "Choose a topic",
    value: f.subject,
    onChange: e => set('subject', e.target.value),
    options: [{
      value: 'hire',
      label: 'Hiring / a role'
    }, {
      value: 'freelance',
      label: 'Freelance project'
    }, {
      value: 'system',
      label: 'Design-system help'
    }, {
      value: 'hello',
      label: 'Just saying hi'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "dss-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dss-field__lab"
  }, "How did you hear about me?"), /*#__PURE__*/React.createElement(RadioGroup, {
    row: true,
    value: f.reason,
    onChange: v => set('reason', v),
    options: [{
      value: 'project',
      label: 'A project'
    }, {
      value: 'referral',
      label: 'Referral'
    }, {
      value: 'social',
      label: 'Social'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dss-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "dss-field__lab",
    htmlFor: "cf-msg"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "cf-msg",
    className: "dss-textarea",
    rows: "4",
    placeholder: "Tell me a little about what you need\u2026",
    value: f.msg,
    onChange: e => set('msg', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__opts"
  }, /*#__PURE__*/React.createElement(Toggle, {
    label: "Email me product updates",
    checked: f.news,
    onChange: e => set('news', e.target.checked),
    showState: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to be contacted about my enquiry",
    checked: f.consent,
    onChange: e => set('consent', e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    className: "dss-form__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "checkCircle",
    type: "submit",
    disabled: !valid
  }, "Send message"), /*#__PURE__*/React.createElement("span", {
    className: "dss-form__note"
  }, valid ? 'Typically replies within 2 days.' : 'Fill in your name, a valid email, subject, message & consent to send.')));
}
function IconPlayground() {
  const [sel, setSel] = React.useState({});
  const count = Object.values(sel).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dss-iconwrap"
  }, ICON_NAMES.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    title: n,
    className: 'dss-iconbtn' + (sel[n] ? ' is-on' : ''),
    "aria-pressed": !!sel[n],
    onClick: () => setSel(s => ({
      ...s,
      [n]: !s[n]
    }))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 24
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dss-iconfoot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dss-iconfoot__hint"
  }, count ? count + ' selected — hover, click, then reset.' : 'Hover and click an icon to select it.'), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    type: "button",
    iconLeft: "close",
    disabled: !count,
    onClick: () => setSel({})
  }, "Reset")));
}
function Gallery() {
  const [tab, setTab] = React.useState('all');
  const [view, setView] = React.useState('grid');
  const [chips, setChips] = React.useState({
    recipes: true,
    photos: false
  });
  const [tags, setTags] = React.useState(['Family', 'Garden']);
  const [modal, setModal] = React.useState(false);
  const [toast, setToast] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Block, {
    id: "g-buttons",
    title: "Buttons",
    count: "Button \xB7 IconButton",
    specs: [['Height', '44px (lg) · 36px (sm)'], ['Radius', '--radius-btn · 10px'], ['Variants', 'primary · secondary · outline · tertiary · danger'], ['Font', '15–16px / 600–700']],
    a11y: [['44px touch target', 'The default control height equals the touch-target minimum — no reliance on invisible padding.'], ['Visible focus', 'A 2px brand ring with 2px offset on every button.'], ['Icon-only buttons', 'IconButton requires an aria-label so screen readers announce the action.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-bgrid"
  }, /*#__PURE__*/React.createElement(Cell, {
    label: "primary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "plus"
  }, "Create New")), /*#__PURE__*/React.createElement(Cell, {
    label: "secondary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Secondary")), /*#__PURE__*/React.createElement(Cell, {
    label: "outline"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Reset")), /*#__PURE__*/React.createElement(Cell, {
    label: "tertiary"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary"
  }, "Learn more")), /*#__PURE__*/React.createElement(Cell, {
    label: "danger"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    iconLeft: "trash"
  }, "Delete")), /*#__PURE__*/React.createElement(Cell, {
    label: "small"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Small")), /*#__PURE__*/React.createElement(Cell, {
    label: "disabled"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: true
  }, "Disabled")), /*#__PURE__*/React.createElement(Cell, {
    label: "icon \xB7 solid"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    solid: true,
    "aria-label": "Add"
  })), /*#__PURE__*/React.createElement(Cell, {
    label: "icon \xB7 ghost"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    "aria-label": "Settings"
  }))))), /*#__PURE__*/React.createElement(Block, {
    id: "g-forms",
    title: "Forms",
    count: "Input \xB7 Select \xB7 Toggle \xB7 Checkbox \xB7 Radio \xB7 Button",
    specs: [['Field height', '48px'], ['Radius', '--radius-lg · 14px'], ['Label', 'above the field · 14 / 500'], ['Error', 'danger text + icon, never colour alone']],
    a11y: [['Labels', 'Every field is tied to a programmatic <label>.'], ['Errors', 'Pair text with an icon and set aria-invalid — never colour alone.'], ['Native Select', 'Uses the OS picker: fully keyboard- and screen-reader-friendly.'], ['44px rows', 'Checkbox, Radio and Toggle each sit in a ≥44px hit row.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(ContactForm, null))), /*#__PURE__*/React.createElement(Block, {
    id: "g-nav",
    title: "Navigation",
    count: "Tabs",
    specs: [['Tab height', '≥48px'], ['Active', 'surface-active tint, 800 text'], ['Radius', 'container --radius-btn · tab --radius-item']],
    a11y: [['Roles', 'role="tablist" / "tab" with aria-selected on the active tab.'], ['Focus', 'Visible focus ring on each tab.'], ['Not colour-only', 'The active tab is a solid fill + weight, not just a hue change.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'all',
      label: 'All',
      icon: 'list'
    }, {
      id: 'active',
      label: 'Active',
      icon: 'hourglass'
    }, {
      id: 'done',
      label: 'Archived',
      icon: 'stop'
    }]
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: view,
    onChange: setView,
    items: [{
      id: 'grid',
      label: 'Grid',
      icon: 'grid'
    }, {
      id: 'list',
      label: 'List',
      icon: 'list'
    }]
  })))), /*#__PURE__*/React.createElement(Block, {
    id: "g-chips",
    title: "Chips & Status",
    count: "Chip \xB7 TierPill",
    specs: [['Chip height', '44px'], ['Radius', '--radius-pill · 8px'], ['Pill tones', 'solid · brand · neutral · success (cohesive, brand-harmonised)']],
    a11y: [['Filter state', 'Selectable chips report aria-pressed.'], ['Pill + label', 'Status pills always pair colour with a text label.'], ['Contrast', 'Every tone meets AA text contrast on its surface.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "assist",
    icon: "download"
  }, "Save offline"), Object.keys(chips).map(k => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    variant: "filter",
    selected: chips[k],
    onClick: () => setChips(c => ({
      ...c,
      [k]: !c[k]
    }))
  }, k[0].toUpperCase() + k.slice(1))), tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    variant: "input",
    icon: "folder",
    onRemove: () => setTags(l => l.filter(x => x !== t))
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "dss-row"
  }, /*#__PURE__*/React.createElement(TierPill, {
    tier: "solid",
    icon: "check"
  }, "Pro"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "brand"
  }, "Plus"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "neutral",
    icon: "stop"
  }, "Archived"), /*#__PURE__*/React.createElement(TierPill, {
    tier: "success",
    icon: "checkCircle"
  }, "Active")))), /*#__PURE__*/React.createElement(Block, {
    id: "g-surfaces",
    title: "Surfaces",
    count: "Card \xB7 Divider \xB7 List",
    specs: [['Card radius', '--radius-btn · 10px'], ['Border', '1px --neutral-300, no shadow at rest'], ['Elevation', 'flat at rest → --shadow-md on hover'], ['List row', '≥56px when interactive']],
    a11y: [['Roles', 'List uses role="list" / "listitem".'], ['Hit area', 'Interactive rows are full-width buttons ≥44px tall.'], ['Focus', 'Cards and rows show the focus ring when interactive.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-cols"
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "Morning Crossword",
    meta: "Edited 2 days ago",
    media: /*#__PURE__*/React.createElement(Icon, {
      name: "puzzle",
      size: 40
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "af-card__meta"
    }, "15 items"), /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      size: "sm"
    }, "Open"))
  }), /*#__PURE__*/React.createElement(List, {
    bordered: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    leading: "folder",
    title: "Recipes",
    description: "6 items \xB7 shared",
    trailing: /*#__PURE__*/React.createElement(TierPill, {
      tier: "brand"
    }, "Shared"),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListItem, {
    leading: "image",
    title: "Photos",
    description: "128 photos",
    onClick: () => {},
    chevron: true
  }), /*#__PURE__*/React.createElement(ListItem, {
    leading: "clock",
    title: "Recently viewed",
    onClick: () => {},
    chevron: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "or"
  })))), /*#__PURE__*/React.createElement(Block, {
    id: "g-overlays",
    title: "Overlays",
    count: "Tooltip \xB7 Menu \xB7 Modal",
    specs: [['Tooltip', 'dark label, on hover + focus'], ['Menu item', '≥44px rows'], ['Modal', 'radius 14px · backdrop blur']],
    a11y: [['Keyboard', 'Tooltip shows on focus; Menu and Modal close on Esc.'], ['Dialog', 'Modal uses role="dialog" aria-modal, labelled by its title.'], ['Trigger', 'Menu trigger exposes aria-haspopup and aria-expanded.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Collapse sidebar"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevronLeft",
    "aria-label": "Collapse"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Auto-saved 2 min ago",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "checkCircle",
    "aria-label": "Saved"
  })), /*#__PURE__*/React.createElement(Menu, {
    trigger: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "chevronDown"
    }, "Folder options"),
    items: [{
      label: 'Rename',
      icon: 'edit',
      onClick: () => {}
    }, {
      label: 'Share',
      icon: 'people',
      onClick: () => {}
    }, {
      separator: true
    }, {
      label: 'Delete',
      icon: 'trash',
      danger: true,
      onClick: () => {}
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setModal(true)
  }, "Open dialog")), modal && /*#__PURE__*/React.createElement(Modal, {
    title: "Delete Folder",
    danger: true,
    confirmLabel: "Delete",
    onClose: () => setModal(false),
    onConfirm: () => setModal(false)
  }, "Are you sure you want to delete ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--neutral-950)'
    }
  }, "\"Recipes\""), "? Items inside will not be deleted."))), /*#__PURE__*/React.createElement(Block, {
    id: "g-feedback",
    title: "Feedback",
    count: "Toast \xB7 Progress",
    specs: [['Toast', 'light surface (default) · tone="dark" inverse'], ['Action', 'one optional action + dismiss'], ['Progress', 'linear / circular · determinate or indeterminate']],
    a11y: [['Announce', 'Toast is role="status" aria-live="polite" — announced without stealing focus.'], ['Progress value', 'role="progressbar" with aria-valuenow.'], ['Reduced motion', 'Indeterminate animation respects prefers-reduced-motion.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-stack",
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    fixed: false,
    status: "success",
    message: "Item saved to Recipes",
    actionLabel: "Undo",
    onAction: () => {},
    onClose: () => setToast(false),
    open: toast
  }), /*#__PURE__*/React.createElement(Progress, {
    variant: "linear",
    value: 64,
    label: "Uploading photos",
    showValue: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "dss-row",
    style: {
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    variant: "circular",
    value: 72
  }), /*#__PURE__*/React.createElement(Progress, {
    variant: "circular"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-500)'
    }
  }, "Determinate & indeterminate"))))), /*#__PURE__*/React.createElement(Block, {
    id: "g-disclosure",
    title: "Disclosure",
    count: "Accordion",
    specs: [['Header', '≥56px, rotating chevron'], ['Mode', 'single-open (default) or allowMultiple'], ['Motion', 'grid-rows height animation']],
    a11y: [['ARIA', 'Headers are buttons with aria-expanded and aria-controls.'], ['Region', 'Each panel uses role="region".'], ['Reduced motion', 'Height animation is disabled under prefers-reduced-motion.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: ['a'],
    items: [{
      id: 'a',
      icon: 'help',
      title: 'How do I create an item?',
      content: 'Tap Create New in the sidebar, give it a clear name, and it appears in your library right away.'
    }, {
      id: 'b',
      icon: 'people',
      title: 'Sharing & permissions',
      content: 'Anything you share stays read-only for others unless you invite them to edit.'
    }, {
      id: 'c',
      icon: 'lock',
      title: 'Privacy',
      content: 'Your library is private by default.'
    }]
  }))), /*#__PURE__*/React.createElement(Block, {
    id: "g-icons",
    title: "Iconography",
    count: "Outline set \xB7 interactive",
    specs: [['Grid', '24×24, currentColor'], ['Stroke', '1.8 (nav) · 2 (utility)'], ['Targets', 'interactive icons sit in ≥44px hit areas']],
    a11y: [['currentColor', 'Icons inherit text colour so contrast is controlled by context.'], ['Labels', 'Standalone icons take a title / aria-label; decorative ones are aria-hidden.'], ['Focus', 'Interactive icons show the focus ring and report aria-pressed.']]
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-panel"
  }, /*#__PURE__*/React.createElement(IconPlayground, null))));
}
function Cell({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dss-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dss-cell__demo"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "dss-cell__lab"
  }, label));
}

/* Deferred, retrying, idempotent mount. gallery.jsx runs from the compiled
 * _ds_bundle.js mid-load (before the namespace is assigned), so we retry on a
 * timer until the namespace + React are ready, then mount exactly one root. */
(function mountGallery(tries) {
  tries = tries || 0;
  var el = document.getElementById('dss-components');
  if (!el || typeof ReactDOM === 'undefined') {
    if (tries < 200) setTimeout(function () {
      mountGallery(tries + 1);
    }, 20);
    return;
  }
  if (!resolveAF()) {
    if (tries < 200) setTimeout(function () {
      mountGallery(tries + 1);
    }, 20);
    return;
  }
  var root = el.__dssRoot || (el.__dssRoot = ReactDOM.createRoot(el));
  root.render(/*#__PURE__*/React.createElement(Gallery, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design-system/gallery.jsx", error: String((e && e.message) || e) }); }

// factile/case.js
try { (() => {
/* Factile scroll case study — interactions */
(function () {
  'use strict';

  /* progress bar */
  var fill = document.querySelector('.topbar .fill');
  function prog() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    fill.style.width = (max > 0 ? h.scrollTop / max * 100 : 0) + '%';
  }
  window.addEventListener('scroll', prog, {
    passive: true
  });
  prog();

  /* reveal on scroll */
  var io = new IntersectionObserver(function (en) {
    en.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: .08
  });
  document.querySelectorAll('.rise').forEach(function (el) {
    io.observe(el);
  });

  /* rails: debt (rail1) and section (rail2) — mutually exclusive, driven by one scroll fn */
  var rail = document.querySelector('.rail');
  var rail2 = document.querySelector('.rail2');
  var railZone = document.querySelector('[data-railzone]');
  var closing = document.getElementById('closing');
  var layers = [].slice.call(document.querySelectorAll('[data-layer]'));
  var navs = [].slice.call(document.querySelectorAll('[data-nav]'));
  if (rail && layers.length) {
    var links = [].slice.call(rail.querySelectorAll('a'));
    var rio = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.getAttribute('data-layer');
          links.forEach(function (a) {
            a.classList.toggle('on', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, {
      rootMargin: '-45% 0px -45% 0px'
    });
    layers.forEach(function (l) {
      rio.observe(l);
    });
  }
  var links2 = rail2 ? [].slice.call(rail2.querySelectorAll('a')) : [];
  function activeNav() {
    if (!navs.length || !links2.length) return;
    var line = window.innerHeight * 0.4,
      cur = null;
    navs.forEach(function (n) {
      if (n.getBoundingClientRect().top <= line) cur = n.id;
    });
    links2.forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('href') === '#' + cur);
    });
  }
  function rails() {
    var vh = window.innerHeight;
    /* rail1: while the debt zone occupies the viewport center */
    var inZone = false;
    if (railZone) {
      var z = railZone.getBoundingClientRect();
      inZone = z.top < vh * 0.5 && z.bottom > vh * 0.35;
    }
    /* rail2: debt zone scrolled above the 35% line, and not on the closing canvas */
    var onClosing = false;
    if (closing) {
      var c = closing.getBoundingClientRect();
      onClosing = c.top < vh * 0.6 && c.bottom > 0;
    }
    var passed = railZone ? railZone.getBoundingClientRect().bottom < vh * 0.35 : false;
    if (rail) rail.classList.toggle('show', inZone && !onClosing);
    if (rail2) rail2.classList.toggle('show', passed && !inZone && !onClosing);
  }
  window.addEventListener('scroll', function () {
    rails();
    activeNav();
  }, {
    passive: true
  });
  window.addEventListener('resize', function () {
    rails();
    activeNav();
  });
  rails();
  activeNav();

  /* before/after sliders */
  document.querySelectorAll('.ba').forEach(function (el) {
    var after = el.querySelector('.after-lyr'),
      handle = el.querySelector('.handle'),
      aimg = after.querySelector('img');
    function size() {
      aimg.style.width = el.clientWidth + 'px';
    }
    function set(px) {
      var r = el.getBoundingClientRect();
      var p = Math.max(0, Math.min(1, (px - r.left) / r.width));
      after.style.width = p * 100 + '%';
      handle.style.left = p * 100 + '%';
    }
    var drag = false;
    function down(e) {
      drag = true;
      set(e.touches ? e.touches[0].clientX : e.clientX);
      e.preventDefault();
    }
    function move(e) {
      if (!drag) return;
      set(e.touches ? e.touches[0].clientX : e.clientX);
      if (e.cancelable) e.preventDefault();
    }
    function up() {
      drag = false;
    }
    el.addEventListener('mousedown', down);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    el.addEventListener('touchstart', down, {
      passive: false
    });
    window.addEventListener('touchmove', move, {
      passive: false
    });
    window.addEventListener('touchend', up);
    size();
    window.addEventListener('resize', size);
  });

  /* lightbox */
  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbimg = lb.querySelector('img');
    function open(src, alt) {
      lbimg.src = src;
      lbimg.alt = alt || '';
      lb.classList.add('open');
    }
    function close() {
      lb.classList.remove('open');
      lbimg.removeAttribute('src');
    }
    document.querySelectorAll('.frame img,.annot img,.zc .zi img').forEach(function (im) {
      im.addEventListener('click', function (e) {
        e.stopPropagation();
        open(im.currentSrc || im.src, im.alt);
      });
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.closest('.lbx')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('open')) close();
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "factile/case.js", error: String((e && e.message) || e) }); }

// factile/deck.js
try { (() => {
/* Factile case study deck — manual engine (no autoplay) */
(function () {
  'use strict';

  var canvas = document.querySelector('.canvas');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var n = slides.length;
  var i = 0;
  var counter = document.querySelector('.counter');
  var fsBtn = document.querySelector('.ctrl.fs');
  var hint = document.querySelector('.hint');
  function fit() {
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    canvas.style.transform = 'scale(' + s + ')';
  }
  window.addEventListener('resize', fit);
  fit();
  function render() {
    slides.forEach(function (sl, idx) {
      sl.classList.toggle('active', idx === i);
    });
    counter.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
  }
  function go(idx) {
    i = (idx + n) % n;
    render();
  }
  function next() {
    go(i + 1);
  }
  function prev() {
    go(i - 1);
  }
  function toggleFs() {
    var el = document.documentElement;
    var rf = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    var xf = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
    try {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (xf) xf.call(document);
      } else if (rf) {
        var r = rf.call(el);
        if (r && r.catch) r.catch(function () {});
      }
    } catch (e) {}
  }

  /* before/after sliders */
  function initBA(el) {
    var after = el.querySelector('.after-lyr');
    var handle = el.querySelector('.handle');
    var afterImg = after.querySelector('img');
    function sizeAfter() {
      afterImg.style.width = el.clientWidth + 'px';
    }
    function set(px) {
      var r = el.getBoundingClientRect();
      var pct = Math.max(0, Math.min(1, (px - r.left) / r.width));
      after.style.width = pct * 100 + '%';
      handle.style.left = pct * 100 + '%';
    }
    var drag = false;
    function down(e) {
      drag = true;
      move(e);
      e.preventDefault();
      e.stopPropagation();
    }
    function move(e) {
      if (!drag) return;
      var x = e.touches ? e.touches[0].clientX : e.clientX;
      set(x);
      if (e.cancelable) e.preventDefault();
    }
    function up() {
      drag = false;
    }
    el.addEventListener('mousedown', down);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    el.addEventListener('touchstart', down, {
      passive: false
    });
    window.addEventListener('touchmove', move, {
      passive: false
    });
    window.addEventListener('touchend', up);
    sizeAfter();
    window.addEventListener('resize', sizeAfter);
  }
  document.querySelectorAll('.ba').forEach(initBA);
  document.querySelector('.ctrl.prev').addEventListener('click', function () {
    prev();
  });
  document.querySelector('.ctrl.next').addEventListener('click', function () {
    next();
  });
  if (fsBtn) fsBtn.addEventListener('click', toggleFs);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault();
      toggleFs();
    } else if (e.key === 'Home') {
      go(0);
    } else if (e.key === 'End') {
      go(n - 1);
    }
  });
  setTimeout(function () {
    if (hint) hint.classList.add('hidden');
  }, 6000);

  /* image lightbox — click any static image to magnify; backdrop / close / Esc dismiss */
  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbimg = lb.querySelector('img');
    function openLb(src, alt) {
      lbimg.src = src;
      lbimg.alt = alt || '';
      lb.classList.add('open');
    }
    function closeLb() {
      lb.classList.remove('open');
      lbimg.removeAttribute('src');
    }
    document.querySelectorAll('.imgframe img,.annot img,.callout .cimg img').forEach(function (im) {
      im.addEventListener('click', function (e) {
        e.stopPropagation();
        openLb(im.currentSrc || im.src, im.alt);
      });
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.closest('.lbclose')) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('open')) closeLb();
    });
  }
  render();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "factile/deck.js", error: String((e && e.message) || e) }); }

// portfolio/cursor-dots.js
try { (() => {
/* ============================================================
   DOT CURSOR — the signature.
   A spring cluster of dots that:
     · idles as a small ring of dots
     · lags into a smudge (stretched along velocity) when moving fast
     · is magnetically pulled onto [data-magnetic] targets, reforming
       into a ring that outlines the element + shows a label
   Rendered on a canvas with mix-blend-mode:difference (set in CSS)
   so it inverts against black / white / media / accent.
   Same dot DNA as the skills field = connective motif.
   Disabled on touch / coarse pointer / reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var fine = matchMedia('(pointer:fine)').matches;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches && !/[?&]motion=on/.test(location.search);
  if (!fine || reduce) return;
  var cv = document.getElementById('dotcanvas');
  if (!cv) {
    cv = document.createElement('canvas');
    cv.id = 'dotcanvas';
    document.body.appendChild(cv);
  }
  var ctx = cv.getContext('2d');
  document.body.classList.add('dotcursor');
  var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  var W = 0,
    H = 0;
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    cv.style.width = W + 'px';
    cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  /* ---- pointer ---- */
  var mx = W / 2,
    my = H / 2,
    pmx = mx,
    pmy = my,
    down = false;
  var seen = false;
  window.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
    seen = true;
  }, {
    passive: true
  });
  window.addEventListener('mousedown', function () {
    down = true;
  });
  window.addEventListener('mouseup', function () {
    down = false;
  });
  window.addEventListener('mouseleave', function () {
    seen = false;
  });

  /* ---- particles: a ring of dots (count driven by Tweaks density) ---- */
  var DENS = {
    low: 12,
    med: 20,
    high: 32
  };
  var parts = [];
  function buildParts() {
    var N = DENS[window.KS_DENSITY] || 20;
    parts = [];
    for (var i = 0; i < N; i++) {
      var a = i / N * Math.PI * 2;
      parts.push({
        a: a,
        x: mx,
        y: my,
        vx: 0,
        vy: 0,
        k: 0.16 + Math.random() * 0.16,
        r: 1.4 + Math.random() * 1.1
      });
    }
  }
  buildParts();
  window.addEventListener('ks-density', buildParts);

  /* ---- cluster center (springs to pointer, or to a magnetic target) ---- */
  var cx = mx,
    cy = my,
    cvx = 0,
    cvy = 0;

  /* ---- magnetic targeting ---- */
  var target = null,
    tRect = null,
    label = '';
  function scanTargets() {
    return Array.prototype.slice.call(document.querySelectorAll('[data-magnetic]'));
  }
  var targets = scanTargets();
  window.addEventListener('load', function () {
    targets = scanTargets();
  });
  // re-scan when menu opens etc.
  var reScan = 0;
  function pickTarget() {
    if ((reScan = (reScan + 1) % 30) === 0) targets = scanTargets();
    var best = null,
      bestRect = null,
      bestD = 1e9;
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      if (!el.isConnected || el.offsetParent === null && el.getClientRects().length === 0) continue;
      var r = el.getBoundingClientRect();
      if (r.width === 0 || r.bottom < 0 || r.top > H) continue;
      var ecx = r.left + r.width / 2,
        ecy = r.top + r.height / 2;
      var dx = mx - ecx,
        dy = my - ecy;
      // pull field: inside element, or within a margin around it
      var mgn = 26;
      var inside = mx > r.left - mgn && mx < r.right + mgn && my > r.top - mgn && my < r.bottom + mgn;
      var d = Math.sqrt(dx * dx + dy * dy);
      if (inside && d < bestD) {
        bestD = d;
        best = el;
        bestRect = r;
      }
    }
    target = best;
    tRect = bestRect;
    label = best ? best.getAttribute('data-cursor-label') || '' : '';
  }

  /* ---- main loop ---- */
  var accent = getAccent();
  function getAccent() {
    var v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    return v || '#FF3B14';
  }
  window.addEventListener('ks-accent', function () {
    accent = getAccent();
  });
  function loop() {
    requestAnimationFrame(loop);
    pickTarget();

    // desired center
    var tx = mx,
      ty = my,
      magnet = 0;
    if (target && tRect) {
      var ecx = tRect.left + tRect.width / 2,
        ecy = tRect.top + tRect.height / 2;
      // blend cursor toward element center → magnetic snap
      tx = mx + (ecx - mx) * 0.55;
      ty = my + (ecy - my) * 0.55;
      magnet = 1;
    }
    // spring center
    var stiff = magnet ? 0.28 : 0.22;
    cvx += (tx - cx) * stiff;
    cvy += (ty - cy) * stiff;
    cvx *= 0.62;
    cvy *= 0.62;
    cx += cvx;
    cy += cvy;

    // pointer velocity → smudge stretch
    var mvx = mx - pmx,
      mvy = my - pmy;
    pmx = mx;
    pmy = my;
    var speed = Math.min(1, Math.sqrt(mvx * mvx + mvy * mvy) / 26);
    var ang = Math.atan2(mvy, mvx);
    var stretch = 1 + speed * 1.8; // elongate along motion
    var squash = 1 - speed * 0.4;

    // formation radius
    var baseR = 12;
    var ringR = baseR;
    if (magnet && tRect) {
      // outline the element: ring radius = half the larger dim + padding, capped
      ringR = Math.min(Math.max(tRect.width, tRect.height) / 2 + 12, 120);
    }
    var pulse = down ? 0.78 : 1;
    ringR *= pulse;
    ctx.clearRect(0, 0, W, H);
    if (!seen || document.body.classList.contains('no-dotcursor')) {
      document.body.classList.toggle('dotcursor', !document.body.classList.contains('no-dotcursor'));
      return;
    }
    ctx.fillStyle = '#fff'; // white + blend-difference adapts to bg

    var cos = Math.cos(ang),
      sin = Math.sin(ang);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      p.a += magnet ? 0.02 : 0.006; // slow rotation for life
      // home position around the ring, stretched along velocity axis
      var ox = Math.cos(p.a) * ringR;
      var oy = Math.sin(p.a) * ringR;
      // apply stretch/squash in motion frame (only when loose, not magnet)
      var sx = ox,
        sy = oy;
      if (!magnet) {
        var lx = ox * cos + oy * sin; // project onto motion axis
        var ly = -ox * sin + oy * cos;
        lx *= stretch;
        ly *= squash;
        sx = lx * cos - ly * sin; // back to screen
        sy = lx * sin + ly * cos;
      }
      var hx = cx + sx,
        hy = cy + sy;
      // per-dot spring toward home → trailing lag
      p.vx += (hx - p.x) * p.k;
      p.vy += (hy - p.y) * p.k;
      p.vx *= 0.66;
      p.vy *= 0.66;
      p.x += p.vx;
      p.y += p.vy;
      var rr = p.r * (magnet ? 1.25 : 1) * (1 + speed * 0.5);
      ctx.beginPath();
      ctx.arc(p.x, p.y, rr, 0, Math.PI * 2);
      ctx.fill();
    }

    // center anchor dot (accent when magnetic, else white)
    ctx.beginPath();
    ctx.fillStyle = magnet ? hexToRgb(accent) : '#fff';
    ctx.arc(cx, cy, magnet ? 3 : 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';

    // label
    if (magnet && label) {
      ctx.font = '700 12px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label.toUpperCase(), cx, cy);
    }
  }
  function hexToRgb(h) {
    h = h.replace('#', '');
    if (h.length === 3) h = h.split('').map(function (c) {
      return c + c;
    }).join('');
    var n = parseInt(h, 16);
    return 'rgb(' + (n >> 16 & 255) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ')';
  }
  loop();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cursor-dots.js", error: String((e && e.message) || e) }); }

// portfolio/facets.js
try { (() => {
/* ============================================================
   KUSHAGRA SHARAN — "A PERSON, IN QUESTIONS"  —  interactions
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  document.body.classList.add(reduce ? 'reduced' : 'motion');

  /* ---------- LOADER ---------- */
  var load = document.querySelector('.load');
  function endLoad() {
    if (!load) return;
    load.classList.add('done');
    document.body.classList.remove('loading');
    setTimeout(function () {
      if (load && load.parentNode) load.parentNode.removeChild(load);
    }, 1100);
    kickHero();
  }
  if (load) {
    var q = load.querySelector('.load__q');
    var bar = load.querySelector('.load__bar i');
    var pct = load.querySelector('.load__pct');
    if (q) requestAnimationFrame(function () {
      q.classList.add('on');
    });
    if (reduce) {
      setTimeout(endLoad, 500);
    } else {
      var p = 0;
      var t = setInterval(function () {
        p += Math.random() * 16 + 5;
        if (p >= 100) {
          p = 100;
          clearInterval(t);
          setTimeout(endLoad, 420);
        }
        if (bar) bar.style.width = p + '%';
        if (pct) pct.textContent = String(Math.floor(p)).padStart(3, '0');
      }, 130);
    }
  } else {
    document.body.classList.remove('loading');
    kickHero();
  }
  function kickHero() {
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('in');
  }

  /* ---------- CUSTOM CURSOR ---------- */
  if (fine) {
    document.body.classList.add('cur');
    var dot = el('div', 'cur-dot'),
      ring = el('div', 'cur-ring'),
      clab = el('div', 'cur-lab');
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.appendChild(clab);
    var mx = innerWidth / 2,
      my = innerHeight / 2,
      rx = mx,
      ry = my;
    addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      clab.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
    });
    (function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)' + ring._extra;
      requestAnimationFrame(loop);
    })();
    ring._extra = ' scale(.55)';
    function setRing(cls, extra) {
      ring.className = 'cur-ring ' + cls;
      ring._extra = extra;
    }
    // hover targets
    document.querySelectorAll('a,button,.workrow,.craft span').forEach(function (t) {
      t.addEventListener('mouseenter', function () {
        setRing('hov', ' scale(1)');
      });
      t.addEventListener('mouseleave', function () {
        setRing('', ' scale(.55)');
        clab.classList.remove('on');
      });
    });
    // "view" targets — images / art
    document.querySelectorAll('[data-view]').forEach(function (t) {
      t.addEventListener('mouseenter', function () {
        setRing('hov view', ' scale(1)');
        clab.textContent = t.getAttribute('data-view');
        clab.classList.add('on');
      });
      t.addEventListener('mouseleave', function () {
        setRing('', ' scale(.55)');
        clab.classList.remove('on');
      });
    });
  }

  /* ---------- REVEAL (IntersectionObserver) ---------- */
  var revealEls = [].slice.call(document.querySelectorAll('.facet,.reveal'));
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  });
  revealEls.forEach(function (s) {
    io.observe(s);
  });
  // scroll fallback — guarantees reveal even if IO misses a programmatic scroll
  function revealCheck() {
    var vh = innerHeight;
    for (var i = revealEls.length - 1; i >= 0; i--) {
      var el = revealEls[i],
        r = el.getBoundingClientRect();
      if (r.top < vh * 0.86 && r.bottom > 0) {
        el.classList.add('in');
        revealEls.splice(i, 1);
      }
    }
  }
  addEventListener('scroll', revealCheck, {
    passive: true
  });
  addEventListener('resize', revealCheck);
  revealCheck();

  /* ---------- PARALLAX (data-para = speed, +down / -up) ---------- */
  var paras = [].slice.call(document.querySelectorAll('[data-para]'));
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var vh = innerHeight;
      paras.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var mid = r.top + r.height / 2;
        var off = (mid - vh / 2) / vh; // -0.5..0.5 through viewport
        var sp = parseFloat(el.getAttribute('data-para')) || 0;
        el.style.transform = 'translate3d(0,' + (off * sp * 100).toFixed(1) + 'px,0)';
      });
      ticking = false;
    });
  }
  if (!reduce && paras.length) {
    addEventListener('scroll', onScroll, {
      passive: true
    });
    addEventListener('resize', onScroll);
    onScroll();
  }

  /* ---------- FACET INDEX active state ---------- */
  var sections = [].slice.call(document.querySelectorAll('[data-facet]'));
  var idxItems = [].slice.call(document.querySelectorAll('.index__i'));
  if (sections.length && idxItems.length) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = en.target.getAttribute('data-facet');
          idxItems.forEach(function (it) {
            it.classList.toggle('on', it.getAttribute('data-goto') === id);
          });
        }
      });
    }, {
      threshold: 0.5
    });
    sections.forEach(function (s) {
      io2.observe(s);
    });
    idxItems.forEach(function (it) {
      it.addEventListener('click', function () {
        var t = document.getElementById(it.getAttribute('data-goto'));
        if (t) t.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start'
        });
      });
    });
  }

  /* ---------- MARQUEE ---------- */
  var mq = document.querySelector('.mq__t');
  if (mq && !reduce) {
    var clone = mq.cloneNode(true);
    mq.parentNode.appendChild(clone);
    var x = 0,
      w = mq.getBoundingClientRect().width;
    function mloop() {
      x -= 0.5;
      if (-x >= w) x = 0;
      mq.style.transform = 'translateX(' + x + 'px)';
      clone.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(mloop);
    }
    clone.style.position = 'absolute';
    clone.style.left = w + 'px';
    clone.style.top = '0';
    mq.parentNode.style.position = 'relative';
    requestAnimationFrame(mloop);
  }

  /* ---------- WORK cursor-follow float ---------- */
  var floatEl = document.querySelector('.workfloat');
  if (floatEl && fine) {
    var rows = [].slice.call(document.querySelectorAll('.workrow'));
    var imgs = {};
    rows.forEach(function (r) {
      var src = r.getAttribute('data-img');
      if (src && !imgs[src]) {
        var im = el('img');
        im.src = src;
        im.setAttribute('data-k', src);
        floatEl.appendChild(im);
        imgs[src] = im;
      }
    });
    var fx = 0,
      fy = 0,
      tx = 0,
      ty = 0;
    addEventListener('mousemove', function (e) {
      tx = e.clientX;
      ty = e.clientY;
    });
    (function floop() {
      fx += (tx - fx) * 0.14;
      fy += (ty - fy) * 0.14;
      floatEl.style.transform = 'translate(' + fx + 'px,' + fy + 'px) translate(-50%,-50%)' + (floatEl.classList.contains('show') ? ' scale(1)' : ' scale(.6)');
      requestAnimationFrame(floop);
    })();
    rows.forEach(function (r) {
      r.addEventListener('mouseenter', function () {
        var src = r.getAttribute('data-img');
        floatEl.classList.add('show');
        for (var k in imgs) imgs[k].classList.toggle('on', k === src);
      });
      r.addEventListener('mouseleave', function () {
        floatEl.classList.remove('show');
      });
    });
  }

  /* ---------- year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  function el(tag, cls) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/facets.js", error: String((e && e.message) || e) }); }

// portfolio/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(0,0,0,.12);border-top-color:rgba(0,0,0,.45);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/image-slot.js", error: String((e && e.message) || e) }); }

// portfolio/ll-cursor.js
try { (() => {
/* ============================================================
   LAMA LAMA — dot-swarm cursor.
   A dense cloud of small square dots. Each dot chases the
   pointer with its own lag, so at rest they gather into a soft
   blob and on motion they string out into a long comet/smear
   trail. Over links/media the swarm tightens (magnetized).
   White dots on a mix-blend-difference canvas → auto-inverts
   against white / black / red.  (Faithful to lamalama.com.)
   ============================================================ */
(function () {
  'use strict';

  var fine = matchMedia('(pointer:fine)').matches;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches && !/[?&]motion=on/.test(location.search);
  if (!fine || reduce) return;
  var cv = document.getElementById('dotcanvas');
  if (!cv) {
    cv = document.createElement('canvas');
    cv.id = 'dotcanvas';
    document.body.appendChild(cv);
  }
  var ctx = cv.getContext('2d');
  document.body.classList.add('llcursor');
  var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
    W,
    H;
  function resize() {
    W = innerWidth;
    H = innerHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    cv.style.width = W + 'px';
    cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  addEventListener('resize', resize);
  var mx = W / 2,
    my = H / 2,
    seen = false;
  addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
    seen = true;
  }, {
    passive: true
  });
  addEventListener('mouseleave', function () {
    seen = false;
  });

  /* ---- particle cloud: many dots, spread across lag values ---- */
  var N = 640,
    parts = [];
  for (var i = 0; i < N; i++) {
    var kn = i / (N - 1); // 0 = laggy tail, 1 = fast head
    // ~45% slow "tail" dots for a long comet, rest snappier "head" dots
    var k = kn < 0.45 ? 0.015 + kn / 0.45 * 0.06 // 0.015 → 0.075  (long-lag tail)
    : 0.09 + (kn - 0.45) / 0.55 * 0.28; // 0.09 → 0.37 (head)
    var ang = Math.random() * Math.PI * 2;
    var tail = 1 - kn; // tail dots sit further out → wider smear
    var rad = Math.pow(Math.random(), 0.55) * (12 + tail * 120);
    parts.push({
      k: k,
      ox: Math.cos(ang) * rad,
      oy: Math.sin(ang) * rad,
      x: mx,
      y: my,
      s: Math.random() < 0.5 ? 1.3 : 1.9,
      ph: Math.random() * 6.28
    });
  }

  /* ---- magnetic targets ---- */
  var SEL = '[data-view], .nav__btn, .menu__list a, .contact__col a, .wk__go, .foot a';
  var targets = [];
  function scan() {
    targets = [].slice.call(document.querySelectorAll(SEL));
  }
  scan();
  addEventListener('load', scan);
  var rc = 0,
    tRect = null;
  function pick() {
    if ((rc = (rc + 1) % 30) === 0) scan();
    var best = null,
      bd = 1e9;
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      if (!el.isConnected) continue;
      var r = el.getBoundingClientRect();
      if (!r.width || r.bottom < 0 || r.top > H) continue;
      var m = 18;
      if (!(mx > r.left - m && mx < r.right + m && my > r.top - m && my < r.bottom + m)) continue;
      var dx = mx - (r.left + r.width / 2),
        dy = my - (r.top + r.height / 2),
        d = dx * dx + dy * dy;
      if (d < bd) {
        bd = d;
        best = r;
      }
    }
    tRect = best;
  }
  var mag = 0,
    t = 0;
  function loop() {
    requestAnimationFrame(loop);
    pick();
    t += 0.016;

    // magnetize toward element center, tighten the swarm
    var tx = mx,
      ty = my,
      want = 0;
    if (tRect) {
      tx = tRect.left + tRect.width / 2;
      ty = tRect.top + tRect.height / 2;
      want = 1;
    }
    mag += (want - mag) * 0.12;
    ctx.clearRect(0, 0, W, H);
    if (!seen) return;
    ctx.fillStyle = '#fff';
    var gather = 1 - mag * 0.82; // shrink offsets when magnetized
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      var kk = p.k + mag * (0.34 - p.k) * 0.9; // magnet → all dots rush in
      var jx = Math.sin(t * 1.6 + p.ph) * 0.5;
      var jy = Math.cos(t * 1.7 + p.ph) * 0.5;
      var hx = tx + p.ox * gather + jx,
        hy = ty + p.oy * gather + jy;
      p.x += (hx - p.x) * kk;
      p.y += (hy - p.y) * kk;
      ctx.fillRect(p.x - p.s * 0.5, p.y - p.s * 0.5, p.s, p.s);
    }
  }
  loop();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/ll-cursor.js", error: String((e && e.message) || e) }); }

// portfolio/ll.js
try { (() => {
/* ============================================================
   KS Portfolio — LAMA LAMA DIRECTION · behaviour
   Loader · custom cursor · full-screen menu · text-reveals ·
   clip-path work reveals · marquee · dark-section cursor invert.
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches && !/[?&]motion=on/.test(location.search);
  var fine = matchMedia('(pointer:fine)').matches;
  var doc = document.documentElement;
  doc.classList.add(reduce ? 'reduced' : 'motion');

  /* ============ split text for reveal (walk text nodes; preserve em/.a/br) ============ */
  function splitNode(node) {
    var kids = Array.prototype.slice.call(node.childNodes);
    kids.forEach(function (n) {
      if (n.nodeType === 3) {
        var toks = n.textContent.split(/(\s+)/);
        var frag = document.createDocumentFragment();
        toks.forEach(function (tok) {
          if (tok === '') return;
          if (/^\s+$/.test(tok)) {
            frag.appendChild(document.createTextNode(' '));
            return;
          }
          var wrap = document.createElement('span');
          wrap.className = 'tr-w';
          var inner = document.createElement('span');
          inner.className = 'tr-word';
          inner.textContent = tok;
          wrap.appendChild(inner);
          frag.appendChild(wrap);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') {
        splitNode(n);
      }
    });
  }
  document.querySelectorAll('.tr').forEach(function (el) {
    splitNode(el);
    el.querySelectorAll('.tr-word').forEach(function (w, i) {
      w.style.transitionDelay = i * 0.04 + 's';
    });
  });

  /* ============ LOADER ============ */
  var load = document.querySelector('.ll-load');
  var pct = document.querySelector('.ll-load__pct');
  document.body.classList.add('loading');
  function endLoad() {
    document.body.classList.remove('loading');
    if (load) load.classList.add('done');
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('in');
  }
  if (reduce || !pct) {
    if (pct) pct.textContent = '100%';
    setTimeout(endLoad, 200);
  } else {
    var t0 = performance.now(),
      DUR = 1500;
    (function step(t) {
      var p = Math.min(1, (t - t0) / DUR),
        e = 1 - Math.pow(1 - p, 2);
      pct.textContent = Math.round(e * 100) + '%';
      if (p < 1) requestAnimationFrame(step);else setTimeout(endLoad, 280);
    })(t0);
  }

  /* ============ CURSOR ============ */
  /* handled by portfolio/ll-cursor.js (canvas dot cluster) */

  /* ============ MENU ============ */
  var menuBtn = document.querySelector('.nav__btn');
  if (menuBtn) menuBtn.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
  });
  document.querySelectorAll('.menu__list a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
    });
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (href.length < 2) return;
    var t = document.querySelector(href);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({
      top: t.getBoundingClientRect().top + window.scrollY - 8,
      behavior: reduce ? 'auto' : 'smooth'
    });
  });

  /* ============ REVEALS ============ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -6% 0px'
  });
  document.querySelectorAll('.tr, .wk').forEach(function (el) {
    io.observe(el);
  });

  /* ============ MARQUEE ============ */
  document.querySelectorAll('.mq__t').forEach(function (tr) {
    if (reduce) return;
    tr.innerHTML += tr.innerHTML;
    var x = 0,
      w = tr.scrollWidth / 2,
      dir = tr.getAttribute('data-dir') === 'r' ? 1 : -1;
    (function tick() {
      x += 0.55 * dir;
      if (dir < 0 && x <= -w) x = 0;
      if (dir > 0 && x >= 0) x = -w;
      tr.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(tick);
    })();
  });

  /* ============ year ============ */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/ll.js", error: String((e && e.message) || e) }); }

// portfolio/motion.js
try { (() => {
/* KS portfolio — motion layer
   - Lenis-style inertial wheel scrolling (desktop, pointer:fine only)
   - Scroll-reveal (fade + rise) with stagger via IntersectionObserver
   - Hero load stagger
   - Parallax on gradient/image blocks
   Honors prefers-reduced-motion: reduce → everything static & visible.
   Preview override (bypass OS setting): add ?motion=on to the URL, or run
   localStorage.setItem('ksMotion','on') once. */
(function () {
  'use strict';

  var FORCE = /[?&]motion=on/.test(location.search) || function () {
    try {
      return localStorage.getItem('ksMotion') === 'on';
    } catch (e) {
      return false;
    }
  }();
  if (/[?&]motion=off/.test(location.search)) {
    try {
      localStorage.removeItem('ksMotion');
    } catch (e) {}
  }
  if (/[?&]motion=on/.test(location.search)) {
    try {
      localStorage.setItem('ksMotion', 'on');
    } catch (e) {}
  }
  var RM = !FORCE && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COARSE = matchMedia('(pointer: coarse)').matches;
  var doc = document.documentElement;

  /* ---------- tag elements for reveal ---------- */
  function tag(el, delay) {
    if (!el) return;
    el.setAttribute('data-reveal', '');
    if (delay) el.style.transitionDelay = delay.toFixed(2) + 's';
  }
  function staggerChildren(parent, els, base, gap) {
    els.forEach(function (el, i) {
      tag(el, (base || 0) + i * (gap || 0.07));
    });
  }

  /* hero — animate in on load */
  var heroKids = ['.hero__chip', 'h1', '.hero__sub', '.hero__meta', '.hero__cta'].map(function (s) {
    return document.querySelector('.hero ' + s);
  }).filter(Boolean);

  /* each section: header bits stagger, then blocks reveal */
  document.querySelectorAll('main .section').forEach(function (sec) {
    var head = [sec.querySelector('.eyebrow'), sec.querySelector('.sec-title'), sec.querySelector('.lede')].filter(Boolean);
    staggerChildren(sec, head, 0, 0.08);
    var blocks = sec.querySelectorAll(':scope .wrap-wide > .card, :scope .found-grid, :scope .token-row, :scope .gcard--wide, :scope .plotbig, :scope .swork, :scope .feature, :scope .release, :scope .contact__links');
    blocks.forEach(function (b) {
      tag(b);
    });
    /* principles: stagger the editorial pieces */
    var pr = sec.querySelectorAll('.principles-ed > *');
    if (pr.length) staggerChildren(sec, Array.prototype.slice.call(pr), 0, 0.06);
    /* foundation grid children stagger */
    var fg = sec.querySelectorAll('.found-grid > .card');
    if (fg.length) staggerChildren(sec, Array.prototype.slice.call(fg), 0, 0.08);
  });
  if (RM) {
    doc.classList.add('reduced-motion');
    return;
  }
  doc.classList.add('motion');

  /* ---------- reveal observer ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    if (heroKids.indexOf(el) === -1) io.observe(el);
  });

  /* hero plays immediately */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      heroKids.forEach(function (el) {
        el.classList.add('in');
      });
    });
  });

  /* ---------- parallax ---------- */
  var pxT = []; /* transform-based (inner elements, no reveal conflict) */
  var pxBg = []; /* background-drift (the reveal'd gradient cards) */
  document.querySelectorAll('.pr-img').forEach(function (el) {
    pxBg.push({
      el: el,
      k: 0.10
    });
  });
  document.querySelectorAll('.feature__media--art .arch').forEach(function (el) {
    pxT.push({
      el: el,
      k: 0.05
    });
  });
  function applyParallax() {
    var vh = window.innerHeight;
    for (var i = 0; i < pxT.length; i++) {
      var p = pxT[i],
        r = p.el.getBoundingClientRect(),
        mid = r.top + r.height / 2;
      p.el.style.transform = 'translate3d(0,' + ((mid - vh / 2) * p.k * -1).toFixed(1) + 'px,0)';
    }
    for (var j = 0; j < pxBg.length; j++) {
      var q = pxBg[j],
        rr = q.el.getBoundingClientRect(),
        m2 = rr.top + rr.height / 2;
      q.el.style.backgroundPositionY = ((m2 - vh / 2) * q.k).toFixed(1) + 'px';
    }
  }

  /* ---------- inertial smooth scroll (Lenis-style, desktop pointer:fine only) ---------- */
  if (!COARSE) {
    /* take over from CSS smooth-scroll so our lerp is the only animator */
    doc.style.scrollBehavior = 'auto';
    var target = window.scrollY,
      current = target,
      animating = false;
    function maxScroll() {
      return Math.max(0, doc.scrollHeight - window.innerHeight);
    }
    function tick() {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        animating = false;
      }
      window.scrollTo(0, current);
      applyParallax();
      if (animating) requestAnimationFrame(tick);
    }
    function kick() {
      if (!animating) {
        animating = true;
        requestAnimationFrame(tick);
      }
    }
    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey) return; /* allow pinch-zoom */
      e.preventDefault();
      target += e.deltaY * (e.deltaMode === 1 ? 28 : e.deltaMode === 2 ? window.innerHeight : 1);
      target = Math.max(0, Math.min(target, maxScroll()));
      kick();
    }, {
      passive: false
    });
    /* sync when scrolled by keyboard / scrollbar / programmatic, while idle */
    window.addEventListener('scroll', function () {
      if (!animating) {
        target = current = window.scrollY;
      }
      applyParallax();
    }, {
      passive: true
    });
    /* smooth anchor jumps */
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (href.length < 2) return;
      var el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      target = Math.max(0, Math.min(el.getBoundingClientRect().top + window.scrollY - 24, maxScroll()));
      kick();
    });
    window.addEventListener('resize', function () {
      target = current = window.scrollY;
      applyParallax();
    });
  } else {
    /* touch: native momentum; just ride the scroll for parallax */
    var sticking = false;
    window.addEventListener('scroll', function () {
      if (sticking) return;
      sticking = true;
      requestAnimationFrame(function () {
        applyParallax();
        sticking = false;
      });
    }, {
      passive: true
    });
    window.addEventListener('resize', function () {
      applyParallax();
    });
  }
  applyParallax();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/motion.js", error: String((e && e.message) || e) }); }

// portfolio/pf-collage.js
try { (() => {
/* ============================================================
   KS Portfolio — SKETCHBOOK COLLAGE
   Live ASCII console: re-types the arrangement inside the frame
   as the visitor drags/scales pieces, and "Capture" downloads
   the collage rendered as colored ASCII art (PNG).
   Relies on card state (_st) set by pf-facets.js.
   ============================================================ */
(function () {
  'use strict';

  var g = document.querySelector('[data-gallery]');
  if (!g) return;
  var frame = g.querySelector('.collage-frame');
  var stack = g.querySelector('.gallery__stack');
  var pre = g.querySelector('.console__pre');
  var cap = g.querySelector('[data-capture]');
  var dl = g.querySelector('[data-download]');
  var flash = g.querySelector('.collage-flash');
  if (!frame || !stack || !pre) return;
  var cards = Array.prototype.slice.call(g.querySelectorAll('.gcard'));
  var RAMP = '@#%&*+=~-:,. '; /* dark pixel -> dense glyph */
  var CREAM = '#F1EEE7',
    INK = '#16110C';
  function outs() {
    return cards.filter(function (c) {
      return c.classList.contains('is-out') && c._st;
    }).sort(function (a, b) {
      return (parseInt(a.style.zIndex, 10) || 0) - (parseInt(b.style.zIndex, 10) || 0);
    });
  }

  /* rasterize the frame contents at a uniform scale (px per CSS px) */
  function drawScene(scale) {
    var fr = frame.getBoundingClientRect(),
      st = stack.getBoundingClientRect();
    var W = Math.max(2, Math.round(fr.width * scale)),
      H = Math.max(2, Math.round(fr.height * scale));
    var cv = document.createElement('canvas');
    cv.width = W;
    cv.height = H;
    var x = cv.getContext('2d');
    x.fillStyle = CREAM;
    x.fillRect(0, 0, W, H);
    outs().forEach(function (c) {
      var img = c.querySelector('img');
      if (!img || !img.complete || !img.naturalWidth) return;
      var s = c._st;
      var cx = (st.left + st.width / 2 + s.x - fr.left) * scale;
      var cy = (st.top + st.height / 2 + s.y - fr.top) * scale;
      var w = c.offsetWidth * s.scale * scale,
        h = c.offsetHeight * s.scale * scale;
      x.save();
      x.translate(cx, cy);
      x.rotate((s.rot || 0) * Math.PI / 180);
      /* object-fit: cover crop */
      var br = w / h,
        ir = img.naturalWidth / img.naturalHeight,
        sw,
        sh,
        sx0,
        sy0;
      if (ir > br) {
        sh = img.naturalHeight;
        sw = sh * br;
        sx0 = (img.naturalWidth - sw) / 2;
        sy0 = 0;
      } else {
        sw = img.naturalWidth;
        sh = sw / br;
        sx0 = 0;
        sy0 = (img.naturalHeight - sh) / 2;
      }
      x.drawImage(img, sx0, sy0, sw, sh, -w / 2, -h / 2, w, h);
      x.restore();
    });
    return cv;
  }
  function sample(scene, cols, rows) {
    var t = document.createElement('canvas');
    t.width = cols;
    t.height = rows;
    var tx = t.getContext('2d');
    tx.fillStyle = CREAM;
    tx.fillRect(0, 0, cols, rows);
    tx.drawImage(scene, 0, 0, cols, rows);
    try {
      return tx.getImageData(0, 0, cols, rows).data;
    } catch (e) {
      return null;
    }
  }

  /* ---------- live console ---------- */
  var dirty = true,
    visible = true;
  function syncBtns() {
    var has = outs().length > 0;
    if (cap) cap.disabled = !has;
    if (dl) dl.disabled = !has;
  }
  g.addEventListener('collage:change', function () {
    dirty = true;
    syncBtns();
  });
  syncBtns();
  if ('IntersectionObserver' in window) new IntersectionObserver(function (en) {
    visible = en[0].isIntersecting;
  }, {
    threshold: 0.01
  }).observe(g);
  function renderLive() {
    var os = outs();
    if (cap) cap.disabled = !os.length;
    if (dl) dl.disabled = !os.length;
    if (!os.length) {
      pre.textContent = '> collage.tty ready\n> deal the pile to begin _';
      return;
    }
    var fr = frame.getBoundingClientRect();
    if (fr.width < 4) return;
    var cols = 46,
      rows = Math.max(6, Math.round(cols * (fr.height / fr.width) * 0.52));
    var d = sample(drawScene(150 / fr.width), cols, rows);
    if (!d) return;
    var str = '',
      i = 0;
    for (var yy = 0; yy < rows; yy++) {
      for (var xx = 0; xx < cols; xx++, i += 4) {
        var lum = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114) / 255;
        str += RAMP[Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length))];
      }
      str += '\n';
    }
    pre.textContent = str;
  }
  (function tick() {
    requestAnimationFrame(tick);
    if (!dirty || !visible) return;
    dirty = false;
    renderLive();
  })();

  /* ---------- capture: PNG styled like the live console window ---------- */
  var GREEN = '#7CF03A',
    TERM = '#14100B',
    BAR = '#1D1710';
  function capture() {
    var os = outs();
    if (!os.length) return;
    var fr = frame.getBoundingClientRect();
    var cols = 220,
      rows = Math.max(10, Math.round(cols * (fr.height / fr.width) * 0.52));
    var d = sample(drawScene(1400 / fr.width), cols, rows);
    if (!d) return;
    var lines = [],
      i = 0;
    for (var yy = 0; yy < rows; yy++) {
      var line = '';
      for (var xx = 0; xx < cols; xx++, i += 4) {
        var lum = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114) / 255;
        line += RAMP[Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length))];
      }
      lines.push(line);
    }
    var cw = 9,
      ch = 17,
      pad = 44,
      bar = 52;
    var W = pad * 2 + cols * cw,
      H = bar + pad * 2 + rows * ch + 40;
    var cv = document.createElement('canvas');
    cv.width = W;
    cv.height = H;
    var x = cv.getContext('2d');
    /* window body */
    x.fillStyle = TERM;
    if (x.roundRect) {
      x.beginPath();
      x.roundRect(0, 0, W, H, 18);
      x.fill();
      x.clip();
    } else x.fillRect(0, 0, W, H);
    /* title bar */
    x.fillStyle = BAR;
    x.fillRect(0, 0, W, bar);
    var dots = ['#E01E8F', '#6522E0', '#7CF03A'];
    for (var k = 0; k < 3; k++) {
      x.fillStyle = dots[k];
      x.beginPath();
      x.arc(30 + k * 24, bar / 2, 7, 0, 6.2832);
      x.fill();
    }
    x.fillStyle = '#8A8177';
    x.font = '16px ui-monospace, Menlo, Consolas, monospace';
    x.textBaseline = 'middle';
    x.fillText('collage.tty — live ascii', 108, bar / 2);
    /* ascii art */
    x.textBaseline = 'top';
    x.font = '700 15px ui-monospace, Menlo, Consolas, monospace';
    x.fillStyle = GREEN;
    for (var r2 = 0; r2 < rows; r2++) {
      var ln = lines[r2];
      for (var c2 = 0; c2 < cols; c2++) {
        if (ln[c2] === ' ') continue;
        x.fillText(ln[c2], pad + c2 * cw, bar + pad + r2 * ch);
      }
    }
    /* footer details */
    x.fillStyle = GREEN;
    x.font = '800 13px Archivo, system-ui, sans-serif';
    try {
      x.letterSpacing = '2px';
    } catch (e) {}
    x.textBaseline = 'middle';
    x.fillText('SKETCHBOOK COLLAGE — KUSHAGRA SHARAN', pad, H - 34);
    x.textAlign = 'right';
    x.fillText('ASCII · ' + new Date().toISOString().slice(0, 10), W - pad, H - 34);
    x.textAlign = 'left';
    if (flash) {
      flash.classList.remove('go');
      void flash.offsetWidth;
      flash.classList.add('go');
    }
    var url;
    try {
      url = cv.toDataURL('image/png');
    } catch (e) {
      return;
    }
    var a = document.createElement('a');
    a.href = url;
    a.download = 'ks-sketchbook-collage-ascii.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  if (cap) cap.addEventListener('click', capture);

  /* ---------- plain-image download: the collage exactly as arranged ---------- */
  function drawFull(scale) {
    var fr = frame.getBoundingClientRect(),
      st = stack.getBoundingClientRect();
    var os = outs();
    var minX = 0,
      minY = 0,
      maxX = fr.width,
      maxY = fr.height;
    os.forEach(function (c) {
      var s = c._st;
      var cx = st.left + st.width / 2 + s.x - fr.left,
        cy = st.top + st.height / 2 + s.y - fr.top;
      var diag = Math.sqrt(Math.pow(c.offsetWidth * s.scale, 2) + Math.pow(c.offsetHeight * s.scale, 2)) / 2;
      minX = Math.min(minX, cx - diag);
      minY = Math.min(minY, cy - diag);
      maxX = Math.max(maxX, cx + diag);
      maxY = Math.max(maxY, cy + diag);
    });
    var W = Math.max(2, Math.round((maxX - minX) * scale)),
      H = Math.max(2, Math.round((maxY - minY) * scale));
    var cv = document.createElement('canvas');
    cv.width = W;
    cv.height = H;
    var x = cv.getContext('2d');
    os.forEach(function (c) {
      var img = c.querySelector('img');
      if (!img || !img.complete || !img.naturalWidth) return;
      var s = c._st;
      var cx = (st.left + st.width / 2 + s.x - fr.left - minX) * scale;
      var cy = (st.top + st.height / 2 + s.y - fr.top - minY) * scale;
      var w = c.offsetWidth * s.scale * scale,
        h = c.offsetHeight * s.scale * scale;
      x.save();
      x.translate(cx, cy);
      x.rotate((s.rot || 0) * Math.PI / 180);
      var br = w / h,
        ir = img.naturalWidth / img.naturalHeight,
        sw,
        sh,
        sx0,
        sy0;
      if (ir > br) {
        sh = img.naturalHeight;
        sw = sh * br;
        sx0 = (img.naturalWidth - sw) / 2;
        sy0 = 0;
      } else {
        sw = img.naturalWidth;
        sh = sw / br;
        sx0 = 0;
        sy0 = (img.naturalHeight - sh) / 2;
      }
      x.drawImage(img, sx0, sy0, sw, sh, -w / 2, -h / 2, w, h);
      x.restore();
    });
    return cv;
  }
  function downloadCollage() {
    var os = outs();
    if (!os.length) return;
    var art = drawFull(2); /* transparent collage, tight bounds */
    var pad = 64,
      foot = 60;
    var W = art.width + pad * 2,
      H = art.height + pad * 2 + foot;
    var cv = document.createElement('canvas');
    cv.width = W;
    cv.height = H;
    var x = cv.getContext('2d');
    /* no fill — background stays transparent */
    x.drawImage(art, pad, pad);
    /* frame boundary only (double hairline, no fill) */
    x.strokeStyle = INK;
    x.lineWidth = 3;
    x.strokeRect(22, 22, W - 44, H - 44);
    x.lineWidth = 1;
    x.strokeRect(30, 30, W - 60, H - 60);
    /* KUSHAGRA SHARAN watermark, terminal/ascii styling */
    x.fillStyle = INK;
    x.textBaseline = 'middle';
    x.font = '800 15px ui-monospace, Menlo, Consolas, monospace';
    try {
      x.letterSpacing = '2px';
    } catch (e) {}
    x.textAlign = 'left';
    x.fillText('SKETCHBOOK COLLAGE — KUSHAGRA SHARAN', pad, H - 42);
    x.textAlign = 'right';
    x.fillText(new Date().toISOString().slice(0, 10), W - pad, H - 42);
    x.textAlign = 'left';
    if (flash) {
      flash.classList.remove('go');
      void flash.offsetWidth;
      flash.classList.add('go');
    }
    var url;
    try {
      url = cv.toDataURL('image/png');
    } catch (e) {
      return;
    }
    var a = document.createElement('a');
    a.href = url;
    a.download = 'ks-sketchbook-collage.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  if (dl) dl.addEventListener('click', downloadCollage);
  renderLive();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf-collage.js", error: String((e && e.message) || e) }); }

// portfolio/pf-facets.js
try { (() => {
/* ============================================================
   KS Portfolio — FACETS KIT · added behaviours
   Top-nav scroll-spy + click, controlled gallery stack
   (click the top card to deal it out), and a cursor that
   differentiates the flagship "Explore" from external "Behance".
   Loads alongside pf.js; touches only its own hooks.
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- TOP NAV (scroll-spy + click) ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll('.hindex__i'));
  if (items.length) {
    var secs = items.map(function (it) {
      return document.getElementById(it.getAttribute('data-goto'));
    });
    items.forEach(function (it) {
      it.addEventListener('click', function () {
        var t = document.getElementById(it.getAttribute('data-goto'));
        if (!t) return;
        window.scrollTo({
          top: t.getBoundingClientRect().top + window.scrollY - 2,
          behavior: reduce ? 'auto' : 'smooth'
        });
      });
    });
    var spy = function () {
      var mid = innerHeight * 0.42,
        cur = -1;
      secs.forEach(function (s, i) {
        if (s && s.getBoundingClientRect().top <= mid) cur = i;
      });
      items.forEach(function (it, i) {
        it.classList.toggle('on', i === cur);
      });
    };
    addEventListener('scroll', spy, {
      passive: true
    });
    addEventListener('resize', spy);
    spy();
  }

  /* ---------- CURSOR — Explore vs Behance differentiation ---------- */
  var ring = document.querySelector('.cursor__ring');
  var lab = document.querySelector('.cursor__lab');
  if (ring) {
    document.addEventListener('mouseover', function (e) {
      var v = e.target.closest('[data-view]');
      ring.classList.remove('view-explore', 'view-ext');
      if (lab) lab.classList.remove('view-explore', 'view-ext');
      if (!v) return;
      var val = (v.getAttribute('data-view') || '').toLowerCase();
      var kind = val === 'explore' ? 'view-explore' : val === 'behance' ? 'view-ext' : '';
      if (kind) {
        ring.classList.add(kind);
        if (lab) lab.classList.add(kind);
      }
    });
  }

  /* ---------- GALLERY STACK — deal, drag, select & zoom ---------- */
  var g = document.querySelector('[data-gallery]');
  if (g) {
    var stack = g.querySelector('.gallery__stack');
    var cards = Array.prototype.slice.call(g.querySelectorAll('.gcard'));
    var zoomUI = g.querySelector('.gallery__zoom');
    var zin = g.querySelector('[data-zoom="in"]');
    var zout = g.querySelector('[data-zoom="out"]');
    /* deterministic scatter slots: [x vw, y vh, rotate deg] from centre */
    var slots = [[-30, -17, -6], [29, -18, 5], [-34, 9, -4], [33, 8, 6], [-19, 24, -3], [21, 24, 4], [-8, -25, 3], [9, 21, -5], [-27, -2, 2], [27, -6, -4]];
    var revealed = 0,
      busy = false,
      selected = null,
      topZ = 200;
    var frame = g.querySelector('.collage-frame');
    function ping() {
      g.dispatchEvent(new CustomEvent('collage:change'));
    }
    /* keep a dealt card fully inside the collage frame */
    function clampSt(c) {
      if (!frame || !c._st) return;
      var fr = frame.getBoundingClientRect(),
        st = stack.getBoundingClientRect();
      if (fr.width < 4) return;
      var pad = 16;
      var hw = c.offsetWidth * c._st.scale / 2,
        hh = c.offsetHeight * c._st.scale / 2;
      var cx = st.left + st.width / 2,
        cy = st.top + st.height / 2;
      var minX = fr.left + pad + hw - cx,
        maxX = fr.right - pad - hw - cx;
      var minY = fr.top + pad + hh - cy,
        maxY = fr.bottom - pad - hh - cy;
      if (minX > maxX) {
        minX = maxX = (minX + maxX) / 2;
      }
      if (minY > maxY) {
        minY = maxY = (minY + maxY) / 2;
      }
      c._st.x = Math.max(minX, Math.min(maxX, c._st.x));
      c._st.y = Math.max(minY, Math.min(maxY, c._st.y));
    }
    function stackTransform(i) {
      var r = (i % 2 ? -1 : 1) * (1.5 + i % 3);
      var lift = i * 1.4; // subtle staggered pile
      return {
        r: r,
        css: 'translate(-50%, calc(-50% - ' + lift + 'px)) rotate(' + r + 'deg)'
      };
    }
    function applyOut(c) {
      clampSt(c);
      var s = c._st;
      c.style.transform = 'translate(calc(-50% + ' + s.x + 'px), calc(-50% + ' + s.y + 'px)) rotate(' + s.rot + 'deg) scale(' + s.scale + ')';
      ping();
    }
    function setTop() {
      cards.forEach(function (c) {
        c.classList.remove('is-top');
      });
      if (cards[revealed]) cards[revealed].classList.add('is-top');
    }
    function layoutStack() {
      cards.forEach(function (c, i) {
        if (c.classList.contains('is-out')) return;
        var t = stackTransform(i - revealed);
        c.dataset.r = t.r;
        c.style.zIndex = cards.length - i;
        c.style.transform = t.css;
      });
    }
    function seedStack() {
      cards.forEach(function (c, i) {
        var t = stackTransform(i);
        c.dataset.r = t.r;
        c.style.zIndex = cards.length - i;
        c.style.transform = t.css;
      });
    }
    seedStack();
    setTop();

    /* lift a card straight off the pile into a draggable state */
    function dealCard(c) {
      if (c.classList.contains('is-out')) return;
      c._st = {
        x: 0,
        y: 0,
        rot: parseFloat(c.dataset.r) || 0,
        scale: 1
      };
      c.classList.add('is-out');
      c.classList.remove('is-top');
      c.style.zIndex = ++topZ;
      revealed++;
      applyOut(c);
      g.classList.add('gallery--started');
      if (revealed >= cards.length) g.classList.add('gallery--done');
      layoutStack();
      setTop();
    }
    function deal() {
      if (busy || revealed >= cards.length) return;
      var c = cards[revealed],
        sl = slots[revealed % slots.length];
      c._st = {
        x: sl[0] / 100 * window.innerWidth,
        y: sl[1] / 100 * window.innerHeight,
        rot: sl[2],
        scale: 1
      };
      c.classList.add('is-out');
      c.classList.remove('is-top');
      c.style.zIndex = ++topZ;
      applyOut(c);
      revealed++;
      busy = true;
      setTimeout(function () {
        busy = false;
      }, 140);
      g.classList.add('gallery--started');
      g.classList.toggle('gallery--done', revealed >= cards.length);
      layoutStack();
      setTop();
    }
    function select(c) {
      if (selected && selected !== c) selected.classList.remove('is-sel');
      selected = c || null;
      if (selected) {
        selected.classList.add('is-sel');
        selected.style.zIndex = ++topZ;
      }
      if (zin) zin.disabled = !selected;
      if (zout) zout.disabled = !selected;
      ping();
    }
    function restackAll() {
      revealed = 0;
      select(null);
      g.classList.remove('gallery--done', 'gallery--started');
      cards.forEach(function (c) {
        c.classList.remove('is-out', 'is-sel');
        c._st = null;
      });
      seedStack();
      setTop();
      ping();
    }

    /* drag straight from the pile: pointerdown on the top card deals it, then drags */

    /* drag + select for dealt cards */
    var drag = null;
    cards.forEach(function (c) {
      c.addEventListener('pointerdown', function (e) {
        if (!c.classList.contains('is-out')) {
          if (!c.classList.contains('is-top')) return;
          dealCard(c);
        }
        e.preventDefault();
        select(c);
        c.classList.add('is-dragging');
        drag = {
          c: c,
          sx: e.clientX,
          sy: e.clientY,
          ox: c._st.x,
          oy: c._st.y
        };
        try {
          c.setPointerCapture(e.pointerId);
        } catch (_) {}
      });
      c.addEventListener('pointermove', function (e) {
        if (!drag || drag.c !== c) return;
        c._st.x = drag.ox + (e.clientX - drag.sx);
        c._st.y = drag.oy + (e.clientY - drag.sy);
        applyOut(c);
      });
      function end(e) {
        if (drag && drag.c === c) {
          drag = null;
          c.classList.remove('is-dragging');
          try {
            c.releasePointerCapture(e.pointerId);
          } catch (_) {}
        }
      }
      c.addEventListener('pointerup', end);
      c.addEventListener('pointercancel', end);
    });

    /* click empty space to deselect */
    g.addEventListener('click', function (e) {
      if (e.target === g || e.target === stack) select(null);
    });
    function zoom(step) {
      if (!selected || !selected._st) return;
      selected._st.scale = Math.max(0.55, Math.min(2.6, selected._st.scale + step));
      applyOut(selected);
    }
    if (zin) zin.addEventListener('click', function (e) {
      e.stopPropagation();
      zoom(0.18);
    });
    if (zout) zout.addEventListener('click', function (e) {
      e.stopPropagation();
      zoom(-0.18);
    });
    var reset = g.querySelector('.gallery__reset');
    if (reset) reset.addEventListener('click', restackAll);
  }

  /* ---------- CONTACT reveal (footer headline uses data-lines) ---------- */
  var contact = document.querySelector('.contact');
  if (contact) {
    if (reduce) {
      contact.classList.add('in');
    } else {
      var cio = new IntersectionObserver(function (en) {
        en.forEach(function (e) {
          if (e.isIntersecting) {
            contact.classList.add('in');
            cio.disconnect();
          }
        });
      }, {
        threshold: 0.12
      });
      cio.observe(contact);
    }
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf-facets.js", error: String((e && e.message) || e) }); }

// portfolio/pf-hero-ascii.js
try { (() => {
/* ============================================================
   KS Portfolio — HERO ASCII PORTRAIT
   Converts the halftone portrait to green ASCII art, printed
   bottom-centre behind the hero text and in front of the grid.
   ============================================================ */
(function () {
  'use strict';

  var pre = document.querySelector('.hero__ascii');
  if (!pre) return;
  var src = pre.getAttribute('data-src');
  if (!src) return;
  var RAMP = '@#%&*+=~-:,. ';
  var img = new Image();
  img.onload = function () {
    var COLS = 132;
    var ar = img.naturalHeight / img.naturalWidth;
    var rows = Math.max(8, Math.round(COLS * ar * 0.5));
    var c = document.createElement('canvas');
    c.width = COLS;
    c.height = rows;
    var x = c.getContext('2d');
    x.drawImage(img, 0, 0, COLS, rows);
    var d;
    try {
      d = x.getImageData(0, 0, COLS, rows).data;
    } catch (e) {
      return;
    }
    var out = '';
    for (var yy = 0; yy < rows; yy++) {
      var line = '';
      for (var xx = 0; xx < COLS; xx++) {
        var i = (yy * COLS + xx) * 4;
        var a = d[i + 3] / 255;
        var lum = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114) / 255;
        var dens = a * (1 - lum); /* opaque + dark => dense glyph */
        var idx = Math.round((1 - dens) * (RAMP.length - 1));
        line += RAMP[Math.max(0, Math.min(RAMP.length - 1, idx))];
      }
      out += line + '\n';
    }
    pre.textContent = out;
  };
  img.src = src;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf-hero-ascii.js", error: String((e && e.message) || e) }); }

// portfolio/pf-journey.js
try { (() => {
/* ============================================================
   KS Portfolio — EXPERIENCE journey map
   Scroll-driven: a winding trail is drawn through centred map pins.
   A milestone reveals the moment its pin enters the reading zone
   (its info then appears one item at a time), and the coloured
   route's head travels to match. The route continues past the
   final milestone (journey still ongoing).
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var map = document.querySelector('[data-journey]');
  if (!map) return;
  var steps = Array.prototype.slice.call(map.querySelectorAll('[data-step]'));
  var more = map.querySelector('.jrny__more');
  var base = map.querySelector('.jrny__trail-base');
  var prog = map.querySelector('.jrny__trail-prog');
  var svg = map.querySelector('.jrny__trail');
  var len = 0,
    pinY = [],
    pinLen = [];
  function buildTrail() {
    if (!svg || !base || !prog || !steps.length) return;
    var W = map.clientWidth,
      H = map.clientHeight;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    map.classList.add('jrny--measuring');
    var mr = map.getBoundingClientRect();
    var pts = steps.map(function (s) {
      var r = s.querySelector('.jstep__pin').getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - mr.left,
        y: r.top + r.height / 2 - mr.top
      };
    });
    map.classList.remove('jrny--measuring');
    pinY = pts.map(function (p) {
      return p.y;
    });
    var segs = [];
    var d = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1],
        b = pts[i],
        my = (a.y + b.y) / 2;
      var dir = i % 2 ? 1 : -1;
      var cx = W / 2 + dir * Math.min(W * 0.34, 210);
      segs.push(' C ' + cx.toFixed(1) + ' ' + my.toFixed(1) + ' ' + cx.toFixed(1) + ' ' + my.toFixed(1) + ' ' + b.x.toFixed(1) + ' ' + b.y.toFixed(1));
      d += segs[segs.length - 1];
    }
    base.setAttribute('d', d);
    prog.setAttribute('d', d);
    len = prog.getTotalLength();
    var tmp = document.createElementNS(SVGNS, 'path');
    pinLen = [0];
    var acc = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
    for (var j = 0; j < segs.length; j++) {
      acc += segs[j];
      tmp.setAttribute('d', acc);
      pinLen.push(tmp.getTotalLength());
    }
    prog.style.strokeDasharray = len;
    prog.style.strokeDashoffset = len;
  }
  function onScroll() {
    if (!prog || !len || !pinY.length) return;
    var mr = map.getBoundingClientRect();
    var L = window.innerHeight * 0.72; // reading line — reveal as a pin enters view
    var n = pinY.length;

    // reveal each milestone the moment its pin crosses the line
    for (var i = 0; i < n; i++) {
      if (mr.top + pinY[i] <= L) steps[i].classList.add('is-active');
    }
    if (more && mr.top + pinY[n - 1] <= L - 30) more.classList.add('is-active');

    // continuous travel position (in pin-index space) for the glowing head
    var t = 0;
    for (var k = 0; k < n; k++) {
      var vy = mr.top + pinY[k];
      if (vy > L) {
        if (k === 0) {
          t = 0;
        } else {
          var vp = mr.top + pinY[k - 1];
          t = k - 1 + (vp > vy ? (vp - L) / (vp - vy) : 1);
        }
        break;
      }
      t = k;
    }
    t = Math.max(0, Math.min(n - 1, t));
    var f = Math.floor(t),
      fr = t - f;
    var drawn = pinLen[f] + ((pinLen[Math.min(f + 1, n - 1)] || pinLen[f]) - pinLen[f]) * fr;
    prog.style.strokeDashoffset = (len - drawn).toFixed(1);
  }
  function refresh() {
    buildTrail();
    onScroll();
  }
  window.addEventListener('resize', refresh);
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
  refresh();
  requestAnimationFrame(refresh);
  setTimeout(refresh, 500);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf-journey.js", error: String((e && e.message) || e) }); }

// portfolio/pf-morph.js
try { (() => {
/* ============================================================
   GRID MORPH  ·  reusable interaction module
   ------------------------------------------------------------
   A ruled lattice drawn on <canvas>. Points idle-breathe and are
   repelled by the pointer, so the grid "morphs" (a lens/bulge)
   around wherever attention lands. Lines & nodes near the pointer
   brighten into a two-tone accent (violet on the left, magenta on
   the right).

   USAGE
     <div data-morph>            (host must be position:relative-ish)
       <canvas></canvas>         (optional — created if absent)
       ...your content...
     </div>
   The host is the pointer target, so its own children can sit on
   top; give the <canvas> pointer-events:none so hovers pass through.
   Line colour is read from the host's computed `color`, so it
   inherits the section's theme automatically. Auto-inits every
   [data-morph] on load; also exposed as window.KSMorph(host, opts).
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var VIOLET = [101, 34, 224],
    MAGENTA = [224, 30, 143];
  function parseRGB(str) {
    var m = (str || '').match(/-?\d+(\.\d+)?/g);
    if (!m || m.length < 3) return [26, 22, 30];
    return [+m[0], +m[1], +m[2]];
  }
  function initMorph(host, opts) {
    opts = opts || {};
    var cv = host.querySelector('canvas');
    if (!cv) {
      cv = document.createElement('canvas');
      host.insertBefore(cv, host.firstChild);
    }
    var ctx = cv.getContext('2d');
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      gap = 46,
      pts = [];
    var mx = -9999,
      my = -9999,
      tmx = -9999,
      tmy = -9999;
    var RAD = opts.radius || 240,
      PUSH = opts.push || 34;
    var BASE = parseRGB(getComputedStyle(host).color);
    var idle = opts.idle == null ? 2.1 : opts.idle;
    var visible = true;
    function refreshBase() {
      BASE = parseRGB(getComputedStyle(host).color);
    }
    function build() {
      var r = host.getBoundingClientRect();
      W = r.width;
      H = r.height;
      if (!W || !H) return;
      cv.width = Math.round(W * DPR);
      cv.height = Math.round(H * DPR);
      cv.style.width = W + 'px';
      cv.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      gap = W < 640 ? 34 : opts.gap || 46;
      cols = Math.ceil(W / gap) + 2;
      rows = Math.ceil(H / gap) + 2;
      var offx = (W - (cols - 1) * gap) / 2;
      var offy = (H - (rows - 1) * gap) / 2;
      pts = [];
      for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
        var ox = offx + x * gap,
          oy = offy + y * gap;
        pts.push({
          ox: ox,
          oy: oy,
          x: ox,
          y: oy,
          f: 0,
          ph: x * 0.55 + y * 0.85
        });
      }
    }
    function id(x, y) {
      return y * cols + x;
    }
    function mix(c, f) {
      return 'rgba(' + Math.round(BASE[0] + (c[0] - BASE[0]) * f) + ',' + Math.round(BASE[1] + (c[1] - BASE[1]) * f) + ',' + Math.round(BASE[2] + (c[2] - BASE[2]) * f) + ',';
    }
    function seg(a, b) {
      var f = Math.max(a.f, b.f);
      var accent = a.ox + b.ox < W ? VIOLET : MAGENTA;
      ctx.strokeStyle = mix(accent, f) + (0.085 + f * 0.5) + ')';
      ctx.lineWidth = 1 + f * 1.3;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    function node(q) {
      var accent = q.ox < W * 0.5 ? VIOLET : MAGENTA;
      ctx.fillStyle = mix(accent, q.f) + (0.18 + q.f * 0.72) + ')';
      ctx.beginPath();
      ctx.arc(q.x, q.y, 1.3 + q.f * 3.6, 0, 6.2832);
      ctx.fill();
    }
    var t = 0,
      _half = 0;
    function frame() {
      requestAnimationFrame(frame);
      if (!visible || !pts.length) return;
      _half ^= 1;
      if (_half) return; /* cap ~30fps — keeps scroll smooth, no site-wide jank */
      t += 0.032;
      mx += (tmx - mx) * 0.14;
      my += (tmy - my) * 0.14;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i],
          bx = 0,
          by = 0;
        if (!reduce && idle) {
          bx = Math.sin(t * 0.8 + p.ph) * idle;
          by = Math.cos(t * 0.66 + p.ph * 1.1) * idle;
        }
        var dx = p.ox - mx,
          dy = p.oy - my,
          d = Math.sqrt(dx * dx + dy * dy);
        var f = 0;
        if (d < RAD) {
          f = 1 - d / RAD;
          f *= f;
          var a = Math.atan2(dy, dx);
          bx += Math.cos(a) * PUSH * f;
          by += Math.sin(a) * PUSH * f;
        }
        p.x = p.ox + bx;
        p.y = p.oy + by;
        p.f = f;
      }
      for (var yy = 0; yy < rows; yy++) for (var xx = 0; xx < cols; xx++) {
        var c = pts[id(xx, yy)];
        if (xx < cols - 1) seg(c, pts[id(xx + 1, yy)]);
        if (yy < rows - 1) seg(c, pts[id(xx, yy + 1)]);
      }
      for (var j = 0; j < pts.length; j++) if (pts[j].f > 0.02) node(pts[j]);
    }
    host.addEventListener('pointermove', function (e) {
      var r = host.getBoundingClientRect();
      tmx = e.clientX - r.left;
      tmy = e.clientY - r.top;
    });
    host.addEventListener('pointerleave', function () {
      tmx = -9999;
      tmy = -9999;
    });
    window.addEventListener('resize', build);
    if ('ResizeObserver' in window) new ResizeObserver(build).observe(host);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (en) {
      visible = en[0].isIntersecting;
    }, {
      threshold: 0.02
    }).observe(host);
    new MutationObserver(refreshBase).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    build();
    requestAnimationFrame(frame);
    return {
      rebuild: build
    };
  }
  window.KSMorph = initMorph;
  document.querySelectorAll('[data-morph]').forEach(function (h) {
    initMorph(h);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf-morph.js", error: String((e && e.message) || e) }); }

// portfolio/pf-sfx.js
try { (() => {
/* ============================================================
   KS Portfolio — SOUND EFFECTS layer (opt-in, persisted)
   - grass  → grid-morph pointer movement (footstep, distance-gated)
   - birds  → hover over interactive / content elements (cooldown)
   - thud   → click / pointerdown on buttons & links
   Web Audio API: low-latency, overlapping playback, one master gain.
   Toggle wired by the page; state in localStorage 'pf-sfx'.
   ============================================================ */
(function () {
  'use strict';

  var KEY = 'pf-sfx';
  var SRC = {
    grass: 'portfolio/sfx/grass.wav',
    birds: 'portfolio/sfx/birds.wav',
    leaves: 'portfolio/sfx/leaves.wav',
    fish: 'portfolio/sfx/fish.wav',
    click: 'portfolio/sfx/click.wav',
    meadow: 'portfolio/sfx/meadow.wav'
  };
  var VOL = {
    grass: 0.28,
    birds: 0.32,
    leaves: 0.5,
    fish: 0.42,
    click: 0.5,
    meadow: 0.55
  };
  var ctx = null,
    master = null,
    buffers = {},
    ready = false,
    loading = false;
  var on = false;
  function enabled() {
    return on;
  }

  /* First-gesture unlock: a fresh page (e.g. returning from a case study, where the
     Enter gate is skipped) starts with a SUSPENDED AudioContext. pointermove (grass)
     is not a user gesture, so audio can't start until a real click/tap/key. Resume on
     the earliest such gesture so the SFX come back to life without re-showing the gate. */
  function primeAudio() {
    if (!on) return;
    boot();
    if (ctx && ctx.state === 'suspended') {
      try {
        ctx.resume();
      } catch (e) {}
    }
  }
  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, primeAudio, {
      passive: true
    });
  });
  function boot() {
    if (ctx || loading) return;
    loading = true;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);
    } catch (e) {
      loading = false;
      return;
    }
    Object.keys(SRC).forEach(function (name) {
      fetch(SRC[name]).then(function (r) {
        return r.arrayBuffer();
      }).then(function (buf) {
        return ctx.decodeAudioData(buf);
      }).then(function (audio) {
        buffers[name] = audio;
        ready = true;
      }).catch(function () {});
    });
  }

  /* play a buffer, optional playbackRate jitter + gain, optional slice length */
  function play(name, gain, rateJit, maxDur) {
    if (!on || !ctx || !buffers[name]) return;
    if (ctx.state === 'suspended') ctx.resume();
    var src = ctx.createBufferSource();
    src.buffer = buffers[name];
    if (rateJit) src.playbackRate.value = 1 + (Math.random() * 2 - 1) * rateJit;
    var g = ctx.createGain();
    g.gain.value = (gain != null ? gain : 1) * (VOL[name] || 0.5);
    src.connect(g);
    g.connect(master);
    src.start(0);
    if (maxDur) {
      // quick fade-out so a long clip only contributes a short tactile hit
      var t = ctx.currentTime;
      g.gain.setValueAtTime(g.gain.value, t + maxDur * 0.7);
      g.gain.linearRampToValueAtTime(0.0001, t + maxDur);
      src.stop(t + maxDur + 0.02);
    }
  }

  /* ---------- GRASS: footsteps as the pointer crosses the grid (dimmed in the sketchbook) ---------- */
  var lastX = null,
    lastY = null,
    acc = 0,
    lastStep = 0;
  var STEP_DIST = 190; // px of travel per footstep
  var STEP_GAP = 240; // ms min between steps
  var sketchEl = document.getElementById('sketchbook');
  function gateVisible() {
    // the Enter gate blocks grass ONLY while it's actually on screen. On a skip-intro
    // return the gate is display:none (but has no .hide class), so check real visibility.
    var g = document.querySelector('.enter');
    return g && g.offsetParent !== null;
  }
  function grassFactor(y) {
    // 30% volume while the pointer is within the sketchbook section (grass there is distracting)
    if (!sketchEl) return 1;
    var r = sketchEl.getBoundingClientRect();
    return y >= r.top && y <= r.bottom ? 0.3 : 1;
  }
  window.addEventListener('pointermove', function (e) {
    if (!on) {
      lastX = e.clientX;
      lastY = e.clientY;
      return;
    }
    if (gateVisible()) {
      lastX = e.clientX;
      lastY = e.clientY;
      return;
    } // no grass while the Enter gate is on screen
    if (lastX != null) {
      acc += Math.hypot(e.clientX - lastX, e.clientY - lastY);
      var now = performance.now();
      if (acc >= STEP_DIST && now - lastStep > STEP_GAP) {
        acc = 0;
        lastStep = now;
        play('grass', 0.9 * grassFactor(e.clientY), 0.14, 0.5);
      }
    }
    lastX = e.clientX;
    lastY = e.clientY;
  }, {
    passive: true
  });

  /* ---------- BIRDS: hover over INTERACTIVE elements (buttons, logo, nav, toggles) ---------- */
  var HOVER_SEL = 'a,button,[role="button"],.sfxbtn,.themebtn button,.index__i,.workrow,nav a,.nav a';
  /* ---------- LEAVES: dry-leaf rustle WHILE hovering a skill — loudness & speed track
     how hard the text is morphing (driven by pointer movement over the label) ---------- */
  var SKILL_SEL = '[data-skill],.svc .skill,.skill';
  var lastChirp = 0,
    CHIRP_GAP = 420;
  var leafEl = null,
    leafOn = false,
    leafTimer = 0;
  var morphAmt = 0; // 0..1 warp intensity from pointer speed

  /* one short crush of leaves (a slice of the clip, quick attack + decay) */
  function leafGrain() {
    if (!on || !ctx || !buffers.leaves) return;
    var buf = buffers.leaves;
    var src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = 0.82 + Math.random() * 0.5 + morphAmt * 0.4; // faster = harder crush
    var dur = 0.28 + Math.random() * 0.22; // short crush per grain
    var off = Math.random() * Math.max(0.001, buf.duration - dur - 0.05); // random slice for variation
    var g = ctx.createGain();
    var lvl = VOL.leaves * (0.35 + 0.75 * morphAmt) * (0.7 + Math.random() * 0.3);
    var t = ctx.currentTime;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(lvl, t + 0.02); // crisp attack
    g.gain.setValueAtTime(lvl, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur); // decay
    src.connect(g);
    g.connect(master);
    try {
      src.start(t, off, dur + 0.02);
    } catch (e) {
      src.start(t);
    }
  }

  /* self-scheduling loop: grains overlap so it sounds like leaves continuously crushed;
     denser & louder the harder the text morphs, sparser when the pointer rests */
  function leafSchedule() {
    if (!leafOn) {
      leafTimer = 0;
      return;
    }
    leafGrain();
    morphAmt *= 0.86; // decay when still
    var gap = 90 + (1 - morphAmt) * 150; // ~90ms (busy) → ~240ms (calm)
    gap *= 0.75 + Math.random() * 0.5; // irregular = organic
    leafTimer = setTimeout(leafSchedule, gap);
  }
  function startLeaf() {
    if (!on || leafOn) return;
    if (ctx && ctx.state === 'suspended') ctx.resume();
    leafOn = true;
    leafSchedule();
  }
  function stopLeaf() {
    leafOn = false;
    if (leafTimer) {
      clearTimeout(leafTimer);
      leafTimer = 0;
    }
    morphAmt = 0;
  }
  document.addEventListener('pointerover', function (e) {
    if (!on || !e.target.closest) return;
    if (e.target.closest('.enter')) return; // no SFX on the Enter gate
    var sk = e.target.closest(SKILL_SEL);
    if (sk) {
      if (sk !== leafEl) {
        leafEl = sk;
        morphAmt = Math.max(morphAmt, 0.35);
        startLeaf();
      }
      return;
    }
    var now = performance.now();
    var t = e.target.closest(HOVER_SEL);
    if (!t) return;
    if (e.relatedTarget && t.contains(e.relatedTarget)) return;
    if (now - lastChirp < CHIRP_GAP) return;
    lastChirp = now;
    play('birds', 0.6, 0.08, 1.1);
  }, {
    passive: true
  });
  document.addEventListener('pointerout', function (e) {
    if (!leafEl || !e.target.closest) return;
    var sk = e.target.closest(SKILL_SEL);
    if (!sk) return;
    if (e.relatedTarget && sk.contains(e.relatedTarget)) return;
    leafEl = null;
    stopLeaf();
  }, {
    passive: true
  });
  /* pointer speed over a skill → morph intensity */
  var pmX = null,
    pmY = null;
  document.addEventListener('pointermove', function (e) {
    if (!leafEl) {
      pmX = e.clientX;
      pmY = e.clientY;
      return;
    }
    if (pmX != null) {
      var d = Math.hypot(e.clientX - pmX, e.clientY - pmY);
      morphAmt = Math.min(1, morphAmt + d / 90); // faster movement = bigger warp = louder rustle
    }
    pmX = e.clientX;
    pmY = e.clientY;
  }, {
    passive: true
  });

  /* ---------- FISH: one flap per keyword chip as the journey milestone reveals ---------- */
  (function () {
    var mapEl = document.querySelector('[data-journey]');
    if (!mapEl) return;
    var steps = [].slice.call(mapEl.querySelectorAll('[data-step]'));
    var seen = steps.map(function (s) {
      return s.classList.contains('is-active');
    });
    var mo = new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        var i = steps.indexOf(m.target);
        if (i < 0) return;
        var active = m.target.classList.contains('is-active');
        if (active && !seen[i]) {
          seen[i] = true;
          if (!on) return;
          // one flap as the role + company name appear, another as the chips start appearing
          setTimeout(function () {
            if (on) play('fish', 0.9, 0.08, 0.8);
          }, 340); // role / org reveal
          setTimeout(function () {
            if (on) play('fish', 0.9, 0.08, 0.8);
          }, 600); // chips begin
        }
        if (!active) seen[i] = false;
      });
    });
    steps.forEach(function (s) {
      mo.observe(s, {
        attributes: true,
        attributeFilter: ['class']
      });
    });
  })();

  /* ---------- CLICK: bird-flutter on press of interactive elements ---------- */
  document.addEventListener('pointerdown', function (e) {
    if (!on) return;
    if (e.target.closest && e.target.closest('.enter')) return; // no click SFX on the Enter gate
    var t = e.target.closest && e.target.closest('a,button,[role="button"],.workrow,.index__i,.sfxbtn,.themebtn button');
    if (!t) return;
    play('click', 0.95, 0.08, 0.6);
  }, {
    passive: true
  });

  /* ---------- looping ambience (e.g. meadow wind while hovering) ---------- */
  var loopSrc = null,
    loopGain = null;
  function loopStart(name, gain) {
    if (!on || !ctx || !buffers[name] || loopSrc) return;
    if (ctx.state === 'suspended') ctx.resume();
    loopSrc = ctx.createBufferSource();
    loopSrc.buffer = buffers[name];
    loopSrc.loop = true;
    loopGain = ctx.createGain();
    loopGain.gain.value = 0.0001;
    loopSrc.connect(loopGain);
    loopGain.connect(master);
    loopSrc.start(0);
    var t = ctx.currentTime,
      target = (gain != null ? gain : 1) * (VOL[name] || 0.5);
    loopGain.gain.linearRampToValueAtTime(target, t + 0.35);
  }
  function loopStop() {
    if (!loopSrc) return;
    var s = loopSrc,
      g = loopGain;
    loopSrc = null;
    loopGain = null;
    try {
      var t = ctx.currentTime;
      g.gain.cancelScheduledValues(t);
      g.gain.setValueAtTime(g.gain.value, t);
      g.gain.linearRampToValueAtTime(0.0001, t + 0.4);
      s.stop(t + 0.45);
    } catch (e) {
      try {
        s.stop();
      } catch (e2) {}
    }
  }

  /* ---------- public API for the page toggle ---------- */
  window.KSSound = {
    loopStart: function (name, gain) {
      loopStart(name, gain);
    },
    loopStop: function () {
      loopStop();
    },
    set: function (v) {
      on = !!v;
      if (on) {
        boot();
        if (ctx && ctx.state === 'suspended') ctx.resume();
      } else {
        leafEl = null;
        stopLeaf();
        loopStop();
      }
      try {
        localStorage.setItem(KEY, on ? 'on' : 'off');
      } catch (e) {}
      document.documentElement.classList.toggle('sfx-on', on);
      return on;
    },
    toggle: function () {
      return this.set(!on);
    },
    isOn: function () {
      return on;
    },
    initial: function () {
      var v = 'off';
      try {
        v = localStorage.getItem(KEY) || 'off';
      } catch (e) {}
      // don't auto-play audio; just reflect stored intent visually and boot lazily on first gesture
      on = v === 'on';
      document.documentElement.classList.toggle('sfx-on', on);
      if (on) boot();
      return on;
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf-sfx.js", error: String((e && e.message) || e) }); }

// portfolio/pf-skillmodal.js
try { (() => {
/* Strength stat overlay — reveals a facets-style card on hover, anchored to a screen edge so the skills stay visible */
(function () {
  'use strict';

  var DATA = {
    'UX Design': {
      ey: '02',
      side: 'left',
      stats: [{
        f: '2M+',
        l: 'users designed for on Factile'
      }, {
        f: '+22.5%',
        l: 'new paid users'
      }]
    },
    'Design Systems': {
      ey: '03',
      side: 'left',
      stats: [{
        f: '24',
        l: 'components in one system'
      }, {
        f: '100+',
        l: 'design tokens'
      }]
    },
    'Problem Framing': {
      ey: '01',
      side: 'left',
      stats: [{
        f: '23 → 15',
        l: 'steps to onboard a seller'
      }, {
        f: '3',
        l: 'roles mapped end-to-end'
      }]
    },
    'Accessibility': {
      ey: '05',
      side: 'left',
      stats: [{
        f: 'AA / AAA',
        l: 'WCAG conformance across the product'
      }]
    },
    'Rapid Execution': {
      ey: '04',
      side: 'left',
      stats: [{
        f: '1,104',
        l: 'screens across Vesta’s 3 roles'
      }, {
        f: '25+',
        l: 'Vesta flows in 6 months'
      }, {
        f: '100+',
        l: 'Factile screens'
      }, {
        f: '9+',
        l: 'Factile flows'
      }]
    },
    'Communication': {
      ey: '06',
      side: 'left',
      stats: [{
        f: '4',
        l: 'juniors mentored'
      }, {
        f: 'Eng · PM · Founders',
        l: 'aligned around one shared “why”'
      }]
    }
  };
  var modal = document.getElementById('skmodal');
  if (!modal) return;
  var ey = document.getElementById('skmodal-ey');
  var title = document.getElementById('skmodal-title');
  var grid = document.getElementById('skmodal-grid');
  var card = modal.querySelector('.skmodal__card');
  function open(name, sk) {
    var d = DATA[name];
    if (!d) return;
    ey.textContent = d.ey;
    title.textContent = name;
    grid.innerHTML = '';
    d.stats.forEach(function (s) {
      var cell = document.createElement('div');
      cell.className = 'skstat' + (s.f.length > 12 ? ' skstat--wide' : '');
      var fig = document.createElement('span');
      fig.className = 'skstat__fig';
      fig.textContent = s.f;
      var lab = document.createElement('span');
      lab.className = 'skstat__lab';
      lab.textContent = s.l;
      cell.appendChild(fig);
      cell.appendChild(lab);
      grid.appendChild(cell);
    });
    modal.className = 'skmodal open skmodal--' + d.side;
    modal.setAttribute('aria-hidden', 'false');
    if (sk && card) {
      var r = sk.getBoundingClientRect();
      var top = Math.min(Math.max(r.top - 20, 12), window.innerHeight - card.offsetHeight - 12);
      card.style.top = top + 'px';
    }
  }
  function close() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  var activeName = null;
  function openSkill(name, sk, svc) {
    open(name, sk);
    activeName = name;
    if (svc) {
      svc.classList.add('svc-dim');
      document.querySelectorAll('.skill.is-active').forEach(function (s) {
        s.classList.remove('is-active');
      });
      sk.classList.add('is-active');
    }
  }
  function closeSkill(svc) {
    close();
    activeName = null;
    if (svc) {
      svc.classList.remove('svc-dim');
      document.querySelectorAll('.skill.is-active').forEach(function (s) {
        s.classList.remove('is-active');
      });
    }
  }
  var canHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  var hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  document.querySelectorAll('.skill').forEach(function (sk) {
    var t = sk.querySelector('.skill__t');
    if (!t) return;
    var name = t.textContent.trim();
    var svc = sk.closest('.svc');
    if (canHover) {
      sk.addEventListener('mouseenter', function () {
        openSkill(name, sk, svc);
      });
      sk.addEventListener('mouseleave', function () {
        closeSkill(svc);
      });
    }
    function toggle(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (activeName === name) {
        closeSkill(svc);
      } else {
        openSkill(name, sk, svc);
      }
    }
    if (hasTouch) {
      sk.addEventListener('touchend', toggle, {
        passive: false
      });
    }
    sk.addEventListener('click', toggle);
  });
  function outside(e) {
    if (!activeName) return;
    if (e.target.closest('.skill') || e.target.closest('.skmodal__card')) {
      if (e.target.closest('.skmodal__x')) {
        closeSkill(document.querySelector('.svc'));
      }
      return;
    }
    closeSkill(document.querySelector('.svc'));
  }
  document.addEventListener('click', outside);
  document.addEventListener('touchend', outside);
  var xbtn = document.querySelector('#skmodal .skmodal__x');
  if (xbtn) {
    var xclose = function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeSkill(document.querySelector('.svc'));
    };
    xbtn.addEventListener('touchend', xclose, {
      passive: false
    });
    xbtn.addEventListener('click', xclose);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf-skillmodal.js", error: String((e && e.message) || e) }); }

// portfolio/pf-skills.js
try { (() => {
/* ============================================================
   KS Portfolio — WHAT I DO · skills warp with the grid
   The mesh bulges away from the pointer (pf-morph.js). Each
   skill label behaves like it is painted on that mesh: near the
   pointer it is pushed along the same vector as the grid points,
   stretches out from the pointer, and a displacement filter
   roughens the glyph edges. Distance is measured to the label's
   BOX (not its centre) so long words react anywhere you touch.
   Pointer-driven, so it runs regardless of reduced-motion (the
   grid's pointer response does too).
   ============================================================ */
(function () {
  'use strict';

  var host = document.querySelector('#services .svc');
  if (!host) return;
  var skills = Array.prototype.slice.call(host.querySelectorAll('[data-skill]')).map(function (el, i) {
    var t = el.querySelector('.skill__t');
    var m = (t.getAttribute('style') || '').match(/#(\w+)/);
    var disp = document.querySelector((m ? '#' + m[1] : '#warp' + (i + 1)) + ' feDisplacementMap');
    return {
      el: el,
      t: t,
      disp: disp,
      inf: 0
    };
  }).filter(function (s) {
    return s.t;
  });
  if (!skills.length) return;
  var R = 300,
    TEX = 26,
    GROW = typeof window.KS_SKILL_GROW === 'number' ? window.KS_SKILL_GROW : 0.55,
    PUSH = 30;
  var px = -99999,
    py = -99999,
    visible = true;
  host.addEventListener('pointermove', function (e) {
    px = e.clientX;
    py = e.clientY;
  });
  host.addEventListener('pointerleave', function () {
    px = -99999;
    py = -99999;
  });
  if ('IntersectionObserver' in window) new IntersectionObserver(function (en) {
    visible = en[0].isIntersecting;
  }, {
    threshold: 0.01
  }).observe(host);
  function clamp(v, a, b) {
    return v < a ? a : v > b ? b : v;
  }
  function loop() {
    requestAnimationFrame(loop);
    if (!visible) return;
    for (var i = 0; i < skills.length; i++) {
      var s = skills[i],
        t = s.t;
      /* .skill wrapper is NOT transformed → stable reference */
      var sr = s.el.getBoundingClientRect();
      var ox = t.offsetLeft,
        oy = t.offsetTop,
        ow = t.offsetWidth,
        oh = t.offsetHeight;
      var L = sr.left + ox,
        T = sr.top + oy;
      /* distance from pointer to nearest point of the label box */
      var nx = clamp(px, L, L + ow),
        ny = clamp(py, T, T + oh);
      var d = Math.hypot(px - nx, py - ny);
      var target = d < R ? (1 - d / R) * (1 - d / R) : 0;
      s.inf += (target - s.inf) * 0.16;
      if (s.inf < 0.008) s.inf = 0;
      if (s.inf === 0) {
        t.style.transform = '';
        t.style.transformOrigin = '';
        s.el.style.zIndex = '';
        if (s.disp) s.disp.setAttribute('scale', '0');
        continue;
      }
      /* push along the same vector as the grid points (away from pointer) */
      var cx = L + ow / 2,
        cy = T + oh / 2;
      var a = Math.atan2(cy - py, cx - px);
      var txp = Math.cos(a) * PUSH * s.inf,
        typ = Math.sin(a) * PUSH * s.inf;
      /* stretch anchored where the pointer meets the label */
      var originX = clamp(px - L, 0, ow),
        originY = clamp(py - T, 0, oh);
      t.style.transformOrigin = originX.toFixed(1) + 'px ' + originY.toFixed(1) + 'px';
      t.style.transform = 'translate(' + txp.toFixed(1) + 'px,' + typ.toFixed(1) + 'px) scale(' + (1 + s.inf * GROW).toFixed(3) + ')';
      s.el.style.zIndex = 6;
      if (s.disp) s.disp.setAttribute('scale', (s.inf * TEX).toFixed(2));
    }
  }
  requestAnimationFrame(loop);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf-skills.js", error: String((e && e.message) || e) }); }

// portfolio/pf.js
try { (() => {
/* ============================================================
   KS Portfolio — PLAYFIGHT DIRECTION · behaviour
   Loader counter · circular cursor · full-screen menu ·
   typewriter subline · scroll reveals · hero collage parallax ·
   selected-work cursor-follow image reveal · marquee.
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches && !/[?&]motion=on/.test(location.search);
  var fine = matchMedia('(pointer:fine)').matches;
  var doc = document.documentElement;
  doc.classList.add(reduce ? 'reduced' : 'motion');

  /* ============ LOADER ============ */
  var loader = document.querySelector('.loader');
  var numEl = document.querySelector('.loader__num');
  document.body.classList.add('loading');
  var _ended = false;
  var _loaderStart = window.performance && performance.now ? performance.now() : Date.now();
  /* optional page-scoped HOLD: if a page sets window.KS_LOADER_HOLD = true, the loader
     waits (no auto-rollout) until KS_releaseLoader() is called — used by an Enter gate
     so the loader/audio start on a real user gesture. Backwards-compatible: pages that
     never set it behave exactly as before. */
  window.KS_releaseLoader = function () {
    window.KS_LOADER_HOLD = false;
    _loaderStart = window.performance && performance.now ? performance.now() : Date.now();
  };
  function endLoader() {
    if (_ended) return;
    if (window.KS_LOADER_HOLD) {
      setTimeout(endLoader, 60);
      return;
    }
    /* optional page-scoped minimum loader time (used to sync the rollout with an
       audio cue). Backwards-compatible: no-op unless a page sets the global. */
    var minMs = window.KS_LOADER_MIN_MS;
    if (typeof minMs === 'number' && minMs > 0) {
      var now = window.performance && performance.now ? performance.now() : Date.now();
      var el = now - _loaderStart;
      if (el < minMs) {
        setTimeout(endLoader, minMs - el);
        return;
      }
    }
    _ended = true;
    document.body.classList.remove('loading');
    if (loader) loader.classList.add('done');
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('in');
    startTypewriter();
  }
  /* absolute fail-safe: never leave the page scroll-locked, even if the
     stepped-loader timers are throttled (background tab, slow paint, etc.) */
  setTimeout(endLoader, 4500);
  var _reached100 = false;
  /* the `load` fallback must NOT preempt the stepped counter — otherwise it
     ends the loader before 100 is ever shown/held. Only let it end once the
     counter has actually landed on 100. */
  window.addEventListener('load', function () {
    setTimeout(function () {
      if (_reached100) endLoader();
    }, 400);
  });
  if (reduce || !numEl) {
    if (numEl) numEl.textContent = '100';
    setTimeout(endLoader, 200);
  } else {
    /* 8 fixed, jumpy stops leading to a clearly-held 100 */
    var stops = [0, 46, 13, 72, 34, 91, 58, 84];
    var i = 0,
      HOLD = 185;
    (function jump() {
      numEl.textContent = stops[i];
      if (++i < stops.length) {
        setTimeout(jump, HOLD);
        return;
      }
      /* land on 100 and hold it long enough to read before rolling out */
      numEl.textContent = 100;
      _reached100 = true;
      setTimeout(endLoader, 232);
    })();
  }

  /* ============ CURSOR ============ */
  if (fine && !reduce) {
    var dot = document.querySelector('.cursor');
    var ring = document.querySelector('.cursor__ring');
    var lab = document.querySelector('.cursor__lab');
    if (dot && ring) {
      document.body.classList.add('pfcursor');
      var mx = innerWidth / 2,
        my = innerHeight / 2,
        rx = mx,
        ry = my;
      window.addEventListener('mousemove', function (e) {
        mx = e.clientX;
        my = e.clientY;
      }, {
        passive: true
      });
      (function rl() {
        requestAnimationFrame(rl);
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        if (lab) {
          lab.style.left = rx + 'px';
          lab.style.top = ry + 'px';
        }
      })();
      document.addEventListener('mouseover', function (e) {
        var view = e.target.closest('[data-view]');
        var hov = e.target.closest('a,button,[data-magnetic],[data-view]');
        if (view) {
          ring.classList.add('is-hover', 'is-view');
          if (lab) {
            lab.textContent = view.getAttribute('data-view') || 'View';
            lab.classList.add('on');
          }
        } else if (hov) {
          ring.classList.add('is-hover');
          ring.classList.remove('is-view');
          if (lab) lab.classList.remove('on');
        }
      });
      document.addEventListener('mouseout', function (e) {
        var hov = e.target.closest('a,button,[data-magnetic],[data-view]');
        if (hov && !e.relatedTarget) {
          ring.classList.remove('is-hover', 'is-view');
          if (lab) lab.classList.remove('on');
        } else if (hov && !hov.contains(e.relatedTarget)) {
          ring.classList.remove('is-hover', 'is-view');
          if (lab) lab.classList.remove('on');
        }
      });
    }
  }

  /* ============ MENU (hover draw-out + tap toggle) ============ */
  var navGroup = document.querySelector('.nav__group');
  var menuBtn = document.querySelector('.nav__menu');
  if (navGroup && menuBtn) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = navGroup.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navGroup.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        navGroup.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function (e) {
      if (!navGroup.contains(e.target)) {
        navGroup.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* smooth anchor scroll */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (href.length < 2) return;
    var t = document.querySelector(href);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({
      top: t.getBoundingClientRect().top + window.scrollY - 8,
      behavior: reduce ? 'auto' : 'smooth'
    });
  });

  /* ============ TYPEWRITER ============ */
  function startTypewriter() {
    var el = document.querySelector('[data-typewrite]');
    if (!el) return;
    var lines = (el.getAttribute('data-typewrite') || '').split('|');
    if (reduce) {
      el.innerHTML = '<span class="cw">' + lines[0] + '</span>';
      return;
    }
    var li = 0;
    function typeLine() {
      var full = lines[li],
        i = 0;
      (function type() {
        el.innerHTML = '<span class="cw">' + full.slice(0, i) + '</span><span class="caret">|</span>';
        i++;
        if (i <= full.length) setTimeout(type, 34 + Math.random() * 40);else setTimeout(erase, 2100);
      })();
      function erase() {
        (function del() {
          el.innerHTML = '<span class="cw">' + full.slice(0, i) + '</span><span class="caret">|</span>';
          i--;
          if (i >= 0) setTimeout(del, 18);else {
            li = (li + 1) % lines.length;
            setTimeout(typeLine, 260);
          }
        })();
      }
    }
    typeLine();
  }

  /* ============ REVEALS ============ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  });
  document.querySelectorAll('[data-rise], .sechead, .svc, .work, .xp').forEach(function (el) {
    io.observe(el);
  });

  // wrap reveal-line headings' inner text so overflow clip works
  document.querySelectorAll('[data-lines]').forEach(function (h) {
    var parts = h.innerHTML.split('<br>');
    h.innerHTML = parts.map(function (p) {
      return '<span class="reveal-line"><span>' + p + '</span></span>';
    }).join('');
  });

  /* ============ HERO COLLAGE PARALLAX ============ */
  var phs = Array.prototype.slice.call(document.querySelectorAll('.hero__ph'));
  phs.forEach(function (p, i) {
    p.dataset.k = (0.04 + i % 3 * 0.03).toFixed(3);
  });
  var pmx = 0,
    pmy = 0;
  if (fine && !reduce) {
    window.addEventListener('mousemove', function (e) {
      pmx = e.clientX / innerWidth - 0.5;
      pmy = e.clientY / innerHeight - 0.5;
    }, {
      passive: true
    });
  }
  function parallax() {
    var sy = window.scrollY;
    for (var i = 0; i < phs.length; i++) {
      var k = parseFloat(phs[i].dataset.k);
      var tx = pmx * 40 * k * 8,
        ty = -sy * k + pmy * 40 * k * 8;
      phs[i].style.transform = 'translate3d(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0)';
    }
    requestAnimationFrame(parallax);
  }
  if (phs.length) parallax();

  /* ============ WORK — cursor-follow image reveal ============ */
  var floatEl = document.querySelector('.work__float');
  if (floatEl && fine) {
    var imgs = {},
      current = null,
      fx = 0,
      fy = 0,
      tx = 0,
      ty = 0,
      shown = false;
    document.querySelectorAll('.work__row').forEach(function (row) {
      var key = row.getAttribute('data-img');
      if (!key) return;
      if (!imgs[key]) {
        var im = document.createElement('img');
        im.src = key;
        im.alt = '';
        im.loading = 'lazy';
        floatEl.appendChild(im);
        imgs[key] = im;
      }
      row.addEventListener('mouseenter', function () {
        Object.keys(imgs).forEach(function (k) {
          imgs[k].classList.toggle('on', k === key);
        });
        floatEl.classList.add('show');
        shown = true;
        current = key;
      });
      row.addEventListener('mouseleave', function () {
        floatEl.classList.remove('show');
        shown = false;
      });
    });
    window.addEventListener('mousemove', function (e) {
      tx = e.clientX;
      ty = e.clientY;
    }, {
      passive: true
    });
    (function ff() {
      requestAnimationFrame(ff);
      fx += (tx - fx) * 0.12;
      fy += (ty - fy) * 0.12;
      floatEl.style.left = fx + 'px';
      floatEl.style.top = fy + 'px';
    })();
  }

  /* ============ MARQUEE ============ */
  document.querySelectorAll('.mq__t').forEach(function (tr) {
    if (reduce) return;
    tr.innerHTML += tr.innerHTML;
    var x = 0,
      w = tr.scrollWidth / 2,
      dir = tr.getAttribute('data-dir') === 'r' ? 1 : -1;
    (function tick() {
      x += 0.75 * dir;
      if (dir < 0 && x <= -w) x = 0;
      if (dir > 0 && x >= 0) x = -w;
      tr.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(tick);
    })();
  });

  /* ============ year ============ */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ============ invert cursor over dark sections ============ */
  var darkEls = document.querySelectorAll('.contact, [data-theme="dark"]');
  if (darkEls.length) {
    function checkDark() {
      var mid = window.innerHeight / 2,
        on = false;
      darkEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) on = true;
      });
      document.body.classList.toggle('on-dark', on);
    }
    window.addEventListener('scroll', checkDark, {
      passive: true
    });
    window.addEventListener('resize', checkDark);
    checkDark();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/pf.js", error: String((e && e.message) || e) }); }

// portfolio/portfolio-v3.js
try { (() => {
/* KS portfolio — behavior: scrollspy nav, theme switcher, mobile nav, copy. */
(function () {
  'use strict';

  /* ---- Theme (accent) switcher, persisted ---- */
  var ACCENTS = ['clay', 'indigo', 'forest', 'ink'];
  var stored = null;
  try {
    stored = localStorage.getItem('ks-accent-v2');
  } catch (e) {}
  var accent = ACCENTS.indexOf(stored) >= 0 ? stored : 'indigo';
  applyAccent(accent);
  function applyAccent(a) {
    document.documentElement.setAttribute('data-accent', a);
    try {
      localStorage.setItem('ks-accent-v2', a);
    } catch (e) {}
    document.querySelectorAll('.swatch-btn').forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-accent') === a);
    });
  }
  document.addEventListener('click', function (e) {
    var sw = e.target.closest('.swatch-btn');
    if (sw) {
      applyAccent(sw.getAttribute('data-accent'));
      return;
    }

    /* copy install command */
    var cp = e.target.closest('.install__copy');
    if (cp) {
      var txt = cp.getAttribute('data-copy') || '';
      if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(function () {});
      var old = cp.textContent;
      cp.textContent = 'copied';
      setTimeout(function () {
        cp.textContent = old;
      }, 1400);
      return;
    }

    /* mobile nav: open/close + close on link click */
    if (e.target.closest('.navtoggle')) {
      setNav(true);
      return;
    }
    if (e.target.closest('.scrim')) {
      setNav(false);
      return;
    }
    if (e.target.closest('.docnav__link')) {
      if (window.innerWidth <= 940) setNav(false);
    }
  });
  function setNav(open) {
    var nav = document.querySelector('.docnav');
    var scrim = document.querySelector('.scrim');
    if (nav) nav.classList.toggle('is-open', open);
    if (scrim) scrim.classList.toggle('is-open', open);
  }

  /* ---- Scrollspy: highlight the nav link for the section in view ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.docnav__link'));
  var byId = {};
  links.forEach(function (l) {
    var id = (l.getAttribute('href') || '').replace('#', '');
    if (id) byId[id] = l;
  });
  var sections = links.map(function (l) {
    return document.getElementById((l.getAttribute('href') || '').replace('#', ''));
  }).filter(Boolean);
  function setActive(id) {
    links.forEach(function (l) {
      l.classList.toggle('is-active', (l.getAttribute('href') || '') === '#' + id);
    });
  }
  if ('IntersectionObserver' in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0;
      });
      var best = null,
        bestR = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestR) {
          bestR = visible[id];
          best = id;
        }
      });
      if (best) setActive(best);
    }, {
      rootMargin: '-45% 0px -50% 0px',
      threshold: [0, 0.25, 0.6, 1]
    });
    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  /* ---- Year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/portfolio-v3.js", error: String((e && e.message) || e) }); }

// portfolio/portfolio.js
try { (() => {
/* KS portfolio — behavior: scrollspy nav, theme switcher, mobile nav, copy. */
(function () {
  'use strict';

  /* ---- Theme (accent) switcher, persisted ---- */
  var ACCENTS = ['clay', 'indigo', 'forest', 'ink'];
  var stored = null;
  try {
    stored = localStorage.getItem('ks-accent-v3');
  } catch (e) {}
  var accent = ACCENTS.indexOf(stored) >= 0 ? stored : 'forest';
  applyAccent(accent);
  function applyAccent(a) {
    document.documentElement.setAttribute('data-accent', a);
    try {
      localStorage.setItem('ks-accent-v3', a);
    } catch (e) {}
    document.querySelectorAll('.swatch-btn').forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-accent') === a);
    });
  }
  document.addEventListener('click', function (e) {
    var sw = e.target.closest('.swatch-btn');
    if (sw) {
      applyAccent(sw.getAttribute('data-accent'));
      return;
    }

    /* copy install command */
    var cp = e.target.closest('.install__copy');
    if (cp) {
      var txt = cp.getAttribute('data-copy') || '';
      if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(function () {});
      var old = cp.textContent;
      cp.textContent = 'copied';
      setTimeout(function () {
        cp.textContent = old;
      }, 1400);
      return;
    }

    /* sidebar: open via FAB, close via close-button / scrim / link */
    if (e.target.closest('.fab')) {
      setNav(true);
      return;
    }
    if (e.target.closest('.scrim') || e.target.closest('.docnav__close')) {
      setNav(false);
      return;
    }
    if (e.target.closest('.docnav__link')) {
      setNav(false);
    }
  });
  function setNav(open) {
    var nav = document.querySelector('.docnav');
    var scrim = document.querySelector('.scrim');
    if (nav) {
      nav.classList.toggle('is-open', open);
      nav.style.transform = open ? 'none' : 'translateX(-100%)';
    }
    if (scrim) scrim.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  }

  /* ---- Scrollspy: highlight the nav link for the section in view ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.docnav__link'));
  var byId = {};
  links.forEach(function (l) {
    var id = (l.getAttribute('href') || '').replace('#', '');
    if (id) byId[id] = l;
  });
  var sections = links.map(function (l) {
    return document.getElementById((l.getAttribute('href') || '').replace('#', ''));
  }).filter(Boolean);
  function setActive(id) {
    links.forEach(function (l) {
      l.classList.toggle('is-active', (l.getAttribute('href') || '') === '#' + id);
    });
  }
  if ('IntersectionObserver' in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0;
      });
      var best = null,
        bestR = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestR) {
          bestR = visible[id];
          best = id;
        }
      });
      if (best) setActive(best);
    }, {
      rootMargin: '-45% 0px -50% 0px',
      threshold: [0, 0.25, 0.6, 1]
    });
    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  /* ---- Skills: one 2D field. x = strategy↔execution, y = craft↔leadership.
     White map, black dot grid (gooey-merge on hover), prominent axes, 4 quadrants. ---- */
  var SKILLS = {
    frame: {
      x: 18,
      y: 26,
      n: 'Problem Framing',
      c: '#C75D3C',
      i: 'Find the real problem before designing the obvious one.'
    },
    ux: {
      x: 40,
      y: 40,
      n: 'UX Design',
      c: '#2F7A57',
      i: 'Flows so clear the interface feels inevitable.'
    },
    system: {
      x: 26,
      y: 60,
      n: 'Design Systems',
      c: '#4F46E5',
      i: 'One system — every screen consistent, faster to build.'
    },
    exec: {
      x: 82,
      y: 26,
      n: 'Rapid Execution',
      c: '#B8860B',
      i: 'High craft, shipped fast when the timeline is tight.'
    },
    comm: {
      x: 70,
      y: 74,
      n: 'Communication',
      c: '#1E8A8A',
      i: 'I narrate the why so teams move together.'
    },
    lead: {
      x: 56,
      y: 88,
      n: 'Leadership',
      c: '#C2185B',
      i: 'Calm direction when scope and pressure climb.'
    }
  };
  var QUADRANTS = [{
    cls: 'tl',
    t: 'Set direction'
  }, {
    cls: 'tr',
    t: 'Lead delivery'
  }, {
    cls: 'bl',
    t: 'Frame problems'
  }, {
    cls: 'br',
    t: 'Make & ship'
  }];
  var EDGES = [{
    cls: 't',
    t: 'Leadership'
  }, {
    cls: 'b',
    t: 'Craft'
  }, {
    cls: 'l',
    t: 'Strategy'
  }, {
    cls: 'r',
    t: 'Execution'
  }];
  function buildField(surf) {
    surf.classList.add('field');
    /* gooey filter (merges overlapping dots) */
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'field__defs');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = '<defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="g"/><feComposite in="SourceGraphic" in2="g" operator="atop"/></filter></defs>';
    surf.appendChild(svg);
    var grid = document.createElement('div');
    grid.className = 'field__grid';
    surf.appendChild(grid);

    /* axes (cross) + quadrant + edge labels */
    ['h', 'v'].forEach(function (d) {
      var c = document.createElement('span');
      c.className = 'field__cross field__cross--' + d;
      surf.appendChild(c);
    });
    QUADRANTS.forEach(function (q) {
      var el = document.createElement('span');
      el.className = 'field__quad field__quad--' + q.cls;
      el.textContent = q.t;
      surf.appendChild(el);
    });
    EDGES.forEach(function (q) {
      var el = document.createElement('span');
      el.className = 'field__edge field__edge--' + q.cls;
      el.textContent = q.t;
      surf.appendChild(el);
    });
    var SP = 9,
      dots = [],
      cols = 0,
      rows = 0,
      offx = 0,
      offy = 0,
      gmap = null;
    function layout() {
      grid.innerHTML = '';
      dots = [];
      var w = surf.clientWidth,
        h = surf.clientHeight;
      if (!w || !h) return;
      cols = Math.max(2, Math.floor((w - 16) / SP));
      rows = Math.max(2, Math.floor((h - 16) / SP));
      offx = (w - (cols - 1) * SP) / 2;
      offy = (h - (rows - 1) * SP) / 2;
      /* faint static dot grid (always visible; sits behind the goo'd interactive dots) */
      surf.style.backgroundImage = 'radial-gradient(circle, rgba(140,130,121,.16) 1px, transparent 1.7px)';
      surf.style.backgroundSize = SP + 'px ' + SP + 'px';
      surf.style.backgroundPosition = offx - SP / 2 + 'px ' + (offy - SP / 2) + 'px';
      gmap = new Int32Array(cols * rows);
      var frag = document.createDocumentFragment(),
        gi = 0;
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
        var d = document.createElement('span');
        d.className = 'field__dot';
        var x = offx + c * SP,
          y = offy + r * SP;
        d.style.left = x + 'px';
        d.style.top = y + 'px';
        frag.appendChild(d);
        dots.push({
          el: d,
          x: x,
          y: y
        });
        gmap[c * rows + r] = gi++;
      }
      grid.appendChild(frag);
    }
    layout();

    /* colored, equal-size skill dots + labels */
    var skillEls = {};
    Object.keys(SKILLS).forEach(function (k) {
      var s = SKILLS[k];
      var d = document.createElement('span');
      d.className = 'field__skill';
      d.setAttribute('data-skill-dot', k);
      d.style.left = s.x + '%';
      d.style.bottom = s.y + '%';
      d.style.background = s.c;
      d.style.boxShadow = '0 0 0 4px ' + s.c + '26, 0 2px 6px rgba(40,30,20,.18)';
      surf.appendChild(d);
      var lab = document.createElement('span');
      lab.className = 'field__lab' + (s.x > 56 ? ' field__lab--left' : '');
      lab.textContent = s.n;
      lab.style.left = s.x + '%';
      lab.style.bottom = s.y + '%';
      lab.setAttribute('data-skill-dot', k);
      surf.appendChild(lab);
      skillEls[k] = {
        dot: d,
        lab: lab,
        x: s.x,
        y: s.y,
        moved: false
      };
      d.addEventListener('mouseenter', function () {
        focusSkill(k);
      });
      lab.addEventListener('mouseenter', function () {
        focusSkill(k);
      });
    });

    /* lens */
    var lens = document.createElement('div');
    lens.className = 'field__lens';
    surf.appendChild(lens);
    var focused = null,
      unfocusT = null;

    /* magnify + gooey-merge near cursor (rAF-throttled; only touches dots in range) */
    var mx = -9999,
      my = -9999,
      RAD = 42,
      prevHot = [],
      moveQueued = false;
    function frame() {
      for (var p = 0; p < prevHot.length; p++) {
        prevHot[p].el.style.transform = 'translate(-50%,-50%) scale(1)';
        prevHot[p].el.style.background = '';
      }
      prevHot = [];
      if (mx < -1000) return;
      for (var i = 0; i < dots.length; i++) {
        var dt = dots[i],
          dx = dt.x - mx,
          dy = dt.y - my;
        if (dx < -RAD || dx > RAD || dy < -RAD || dy > RAD) continue;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < RAD) {
          var t = 1 - dist / RAD;
          var sc = 1 + t * t * 1.9;
          dt.el.style.transform = 'translate(-50%,-50%) scale(' + sc.toFixed(3) + ')';
          dt.el.style.background = '#5A5249';
          prevHot.push(dt);
        }
      }
    }
    surf.addEventListener('mousemove', function (e) {
      if (focused) return;
      var r = surf.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      lens.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      lens.style.opacity = '1';
      if (!moveQueued) {
        moveQueued = true;
        requestAnimationFrame(function () {
          moveQueued = false;
          frame();
        });
      }
    });
    surf.addEventListener('mouseleave', function () {
      if (focused) {
        unfocus();
        return;
      }
      mx = my = -9999;
      lens.style.opacity = '0';
      frame();
    });

    /* ---- text morph: grid dots rearrange to spell a skill's insight ---- */
    function wrapText(ctx, text, maxW) {
      var words = text.split(' '),
        lines = [],
        line = '';
      for (var i = 0; i < words.length; i++) {
        var test = line ? line + ' ' + words[i] : words[i];
        if (ctx.measureText(test).width > maxW && line) {
          lines.push(line);
          line = words[i];
        } else line = test;
      }
      if (line) lines.push(line);
      return lines;
    }
    function textPoints(text) {
      var w = surf.clientWidth,
        h = surf.clientHeight;
      var cv = document.createElement('canvas'),
        ctx = cv.getContext('2d');
      var fs = 50,
        ff = '700 ' + fs + "px 'Google Sans Flex', system-ui, sans-serif";
      ctx.font = ff;
      var maxW = Math.min(w * 0.78, 620);
      var lines = wrapText(ctx, text, maxW);
      var lineH = fs * 1.14,
        blockW = 0;
      lines.forEach(function (l) {
        blockW = Math.max(blockW, ctx.measureText(l).width);
      });
      cv.width = Math.ceil(blockW) + 6;
      cv.height = Math.ceil(lines.length * lineH) + 8;
      ctx.font = ff;
      ctx.fillStyle = '#000';
      ctx.textBaseline = 'top';
      lines.forEach(function (l, i) {
        var lw = ctx.measureText(l).width;
        ctx.fillText(l, (cv.width - lw) / 2, i * lineH);
      });
      var data = ctx.getImageData(0, 0, cv.width, cv.height).data;
      /* fixed sampling step → every skill morphs at the same alphabet density */
      var pts = [],
        step = 3;
      for (var y = 0; y < cv.height; y += step) for (var x = 0; x < cv.width; x += step) {
        if (data[(y * cv.width + x) * 4 + 3] > 128) pts.push({
          x: x,
          y: y
        });
      }
      var ox = (w - cv.width) / 2,
        oy = (h - cv.height) / 2;
      for (var i = 0; i < pts.length; i++) {
        pts[i].x += ox;
        pts[i].y += oy;
      }
      return pts;
    }
    function nearestFreeDot(px, py, used) {
      var c0 = Math.round((px - offx) / SP),
        r0 = Math.round((py - offy) / SP);
      for (var ring = 0; ring < 12; ring++) {
        for (var dc = -ring; dc <= ring; dc++) for (var dr = -ring; dr <= ring; dr++) {
          if (ring > 0 && Math.abs(dc) !== ring && Math.abs(dr) !== ring) continue;
          var c = c0 + dc,
            r = r0 + dr;
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
          var idx = gmap[c * rows + r];
          if (!used[idx]) return idx;
        }
      }
      return -1;
    }
    function focusSkill(k) {
      if (unfocusT) {
        clearTimeout(unfocusT);
        unfocusT = null;
      }
      if (focused === k) return;
      if (focused && focused !== k) {/* switching skills */}
      focused = k;
      lens.style.opacity = '0';
      surf.classList.add('is-focused');
      surf.classList.remove('is-returning');
      var pts = textPoints(SKILLS[k].i),
        col = SKILLS[k].c;
      var used = new Uint8Array(dots.length);
      for (var i = 0; i < dots.length; i++) {
        dots[i].el.style.opacity = '0.05';
        dots[i].el.style.background = '';
        dots[i].el.style.transform = 'translate(-50%,-50%) scale(0.55)';
      }
      for (var p = 0; p < pts.length; p++) {
        var best = nearestFreeDot(pts[p].x, pts[p].y, used);
        if (best < 0) continue;
        used[best] = 1;
        var dt = dots[best];
        dt.el.style.opacity = '1';
        dt.el.style.background = col;
        dt.el.style.transform = 'translate(' + (pts[p].x - dt.x).toFixed(1) + 'px,' + (pts[p].y - dt.y).toFixed(1) + 'px) translate(-50%,-50%) scale(0.92)';
      }
      for (var key in skillEls) {
        var on = key === k;
        skillEls[key].dot.style.opacity = on ? '1' : '0.12';
        skillEls[key].lab.style.opacity = on ? '1' : '0.12';
        skillEls[key].lab.style.color = on ? col : '';
      }
    }
    function unfocus() {
      if (!focused) return;
      focused = null;
      surf.classList.remove('is-focused');
      surf.classList.add('is-returning');
      for (var i = 0; i < dots.length; i++) {
        dots[i].el.style.opacity = '';
        dots[i].el.style.background = '';
        dots[i].el.style.transform = 'translate(-50%,-50%) scale(1)';
      }
      for (var key in skillEls) {
        var e = skillEls[key];
        e.dot.style.opacity = '';
        e.lab.style.opacity = '';
        e.lab.style.color = '';
      }
      setTimeout(function () {
        surf.classList.remove('is-returning');
      }, 680);
    }
    function deferUnfocus() {
      if (unfocusT) clearTimeout(unfocusT);
      unfocusT = setTimeout(unfocus, 80);
    }

    /* mobile: tap a skill to toggle, tap elsewhere to clear */
    surf.addEventListener('click', function (e) {
      var hit = e.target.closest('[data-skill-dot]');
      if (hit) {
        var k = hit.getAttribute('data-skill-dot');
        if (focused === k) unfocus();else focusSkill(k);
      } else unfocus();
    });
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        unfocus();
        layout();
      }, 150);
    });
  }
  var fullPlot = document.querySelector('.plot--full');
  if (fullPlot) buildField(fullPlot);

  /* ---- Year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/portfolio.js", error: String((e && e.message) || e) }); }

// portfolio/scenes.js
try { (() => {
/* ============================================================
   SCENES — hero letter-split, scroll reveals, HUD progress,
   marquee, full-screen menu, and the dot-morph skills field.
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches && !/[?&]motion=on/.test(location.search);
  var doc = document.documentElement;
  doc.classList.add(reduce ? 'reduced' : 'motion');

  /* ---------- hero letter split ---------- */
  document.querySelectorAll('[data-split]').forEach(function (el) {
    var html = el.innerHTML;
    // split only top-level text, keep nested <span> wrappers
    walkSplit(el);
  });
  function walkSplit(node) {
    var kids = Array.prototype.slice.call(node.childNodes);
    kids.forEach(function (n) {
      if (n.nodeType === 3) {
        var frag = document.createDocumentFragment();
        n.textContent.split('').forEach(function (ch, i) {
          if (ch === ' ') {
            frag.appendChild(document.createTextNode(' '));
            return;
          }
          var s = document.createElement('span');
          s.className = 'ch';
          s.textContent = ch;
          s.style.transitionDelay = 0.03 * splitI++ + 's';
          frag.appendChild(s);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1 && !n.classList.contains('ch')) {
        walkSplit(n);
      }
    });
  }
  var splitI = 0;
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      var hero = document.querySelector('.hero');
      if (hero) hero.classList.add('in');
    });
  });

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  });
  document.querySelectorAll('[data-rise], .proj, .band').forEach(function (el, i) {
    if (el.hasAttribute('data-rise')) el.style.transitionDelay = i % 4 * 0.05 + 's';
    io.observe(el);
  });

  /* band words fade */
  document.querySelectorAll('[data-words]').forEach(function (el) {
    var words = el.textContent.split(' ');
    el.innerHTML = words.map(function (w, i) {
      if (w === '—') return w;
      return '<span class="w" style="transition-delay:' + i * 0.045 + 's">' + w + '</span>';
    }).join(' ');
    // keep <em> — re-mark accent words wrapped in [] ... handled in HTML directly
  });

  /* ---------- HUD scroll progress ---------- */
  var bar = document.querySelector('.hud__bar i');
  function prog() {
    if (!bar) return;
    var h = doc.scrollHeight - window.innerHeight;
    var p = h > 0 ? window.scrollY / h * 100 : 0;
    bar.style.width = p.toFixed(1) + '%';
  }
  window.addEventListener('scroll', prog, {
    passive: true
  });
  window.addEventListener('resize', prog);
  prog();

  /* ---------- marquee ---------- */
  document.querySelectorAll('.strip__track').forEach(function (tr) {
    if (reduce) return;
    tr.innerHTML += tr.innerHTML; // duplicate for seamless loop
    var x = 0,
      w = tr.scrollWidth / 2,
      dir = tr.getAttribute('data-dir') === 'r' ? 1 : -1;
    (function tick() {
      x += 0.4 * dir;
      if (dir < 0 && x <= -w) x = 0;
      if (dir > 0 && x >= 0) x = -w;
      tr.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(tick);
    })();
  });

  /* ---------- full-screen menu ---------- */
  var navbtn = document.querySelector('.navbtn');
  if (navbtn) navbtn.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
  });
  document.querySelectorAll('.menu__list a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
    });
  });

  /* smooth anchor scroll */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (href.length < 2) return;
    var t = document.querySelector(href);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({
      top: t.getBoundingClientRect().top + window.scrollY - 10,
      behavior: reduce ? 'auto' : 'smooth'
    });
  });

  /* ---------- year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ============================================================
     SKILLS FIELD — dot grid morphs to spell each skill's insight.
     Restyled stark B&W + accent. Adapted from the base portfolio.
     ============================================================ */
  var SKILLS = {
    frame: {
      x: 18,
      y: 26,
      n: 'Problem Framing',
      i: 'Find the real problem before designing the obvious one.'
    },
    ux: {
      x: 40,
      y: 40,
      n: 'UX Design',
      i: 'Flows so clear the interface feels inevitable.'
    },
    system: {
      x: 26,
      y: 60,
      n: 'Design Systems',
      i: 'One system — every screen consistent, faster to build.'
    },
    exec: {
      x: 82,
      y: 26,
      n: 'Rapid Execution',
      i: 'High craft, shipped fast when the timeline is tight.'
    },
    comm: {
      x: 70,
      y: 74,
      n: 'Communication',
      i: 'I narrate the why so teams move together.'
    },
    lead: {
      x: 56,
      y: 88,
      n: 'Leadership',
      i: 'Calm direction when scope and pressure climb.'
    }
  };
  var QUAD = [['tl', 'Set direction'], ['tr', 'Lead delivery'], ['bl', 'Frame problems'], ['br', 'Make & ship']];
  var EDGE = [['t', 'Leadership'], ['b', 'Craft'], ['l', 'Strategy'], ['r', 'Execution']];
  function accentHex() {
    return getComputedStyle(doc).getPropertyValue('--accent').trim() || '#FF3B14';
  }
  function buildField(surf) {
    surf.classList.add('field');
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'field__defs');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = '<defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="g"/><feComposite in="SourceGraphic" in2="g" operator="atop"/></filter></defs>';
    surf.appendChild(svg);
    var grid = document.createElement('div');
    grid.className = 'field__grid';
    surf.appendChild(grid);
    ['h', 'v'].forEach(function (d) {
      var c = document.createElement('span');
      c.className = 'field__cross field__cross--' + d;
      surf.appendChild(c);
    });
    QUAD.forEach(function (q) {
      var el = document.createElement('span');
      el.className = 'field__quad field__quad--' + q[0];
      el.textContent = q[1];
      surf.appendChild(el);
    });
    EDGE.forEach(function (q) {
      var el = document.createElement('span');
      el.className = 'field__edge field__edge--' + q[0];
      el.textContent = q[1];
      surf.appendChild(el);
    });
    var SP = 9,
      dots = [],
      cols = 0,
      rows = 0,
      offx = 0,
      offy = 0,
      gmap = null;
    function layout() {
      grid.innerHTML = '';
      dots = [];
      var w = surf.clientWidth,
        h = surf.clientHeight;
      if (!w || !h) return;
      cols = Math.max(2, Math.floor((w - 16) / SP));
      rows = Math.max(2, Math.floor((h - 16) / SP));
      offx = (w - (cols - 1) * SP) / 2;
      offy = (h - (rows - 1) * SP) / 2;
      surf.style.backgroundImage = 'radial-gradient(circle, rgba(10,10,10,.12) 1px, transparent 1.7px)';
      surf.style.backgroundSize = SP + 'px ' + SP + 'px';
      surf.style.backgroundPosition = offx - SP / 2 + 'px ' + (offy - SP / 2) + 'px';
      gmap = new Int32Array(cols * rows);
      var frag = document.createDocumentFragment(),
        gi = 0;
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
        var d = document.createElement('span');
        d.className = 'field__dot';
        var x = offx + c * SP,
          y = offy + r * SP;
        d.style.left = x + 'px';
        d.style.top = y + 'px';
        frag.appendChild(d);
        dots.push({
          el: d,
          x: x,
          y: y
        });
        gmap[c * rows + r] = gi++;
      }
      grid.appendChild(frag);
    }
    layout();
    var skillEls = {},
      ACC = accentHex();
    Object.keys(SKILLS).forEach(function (k) {
      var s = SKILLS[k];
      var d = document.createElement('span');
      d.className = 'field__skill';
      d.setAttribute('data-skill-dot', k);
      d.setAttribute('data-magnetic', '');
      d.setAttribute('data-cursor-label', s.n.split(' ')[0]);
      d.style.left = s.x + '%';
      d.style.bottom = s.y + '%';
      d.style.background = 'var(--ink)';
      surf.appendChild(d);
      var lab = document.createElement('span');
      lab.className = 'field__lab' + (s.x > 56 ? ' field__lab--left' : '');
      lab.textContent = s.n;
      lab.style.left = s.x + '%';
      lab.style.bottom = s.y + '%';
      lab.setAttribute('data-skill-dot', k);
      surf.appendChild(lab);
      skillEls[k] = {
        dot: d,
        lab: lab
      };
      d.addEventListener('mouseenter', function () {
        focusSkill(k);
      });
      lab.addEventListener('mouseenter', function () {
        focusSkill(k);
      });
    });
    var lens = document.createElement('div');
    lens.className = 'field__lens';
    surf.appendChild(lens);
    var focused = null,
      unfocusT = null;
    var mx = -9999,
      my = -9999,
      RAD = 42,
      prevHot = [],
      moveQueued = false;
    function frame() {
      for (var p = 0; p < prevHot.length; p++) {
        prevHot[p].el.style.transform = 'translate(-50%,-50%) scale(1)';
        prevHot[p].el.style.background = '';
      }
      prevHot = [];
      if (mx < -1000) return;
      for (var i = 0; i < dots.length; i++) {
        var dt = dots[i],
          dx = dt.x - mx,
          dy = dt.y - my;
        if (dx < -RAD || dx > RAD || dy < -RAD || dy > RAD) continue;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < RAD) {
          var t = 1 - dist / RAD;
          var sc = 1 + t * t * 1.9;
          dt.el.style.transform = 'translate(-50%,-50%) scale(' + sc.toFixed(3) + ')';
          dt.el.style.background = 'var(--accent)';
          prevHot.push(dt);
        }
      }
    }
    surf.addEventListener('mousemove', function (e) {
      if (focused) return;
      var r = surf.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      lens.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      lens.style.opacity = '1';
      if (!moveQueued) {
        moveQueued = true;
        requestAnimationFrame(function () {
          moveQueued = false;
          frame();
        });
      }
    });
    surf.addEventListener('mouseleave', function () {
      if (focused) {
        unfocus();
        return;
      }
      mx = my = -9999;
      lens.style.opacity = '0';
      frame();
    });
    function wrapText(ctx, text, maxW) {
      var words = text.split(' '),
        lines = [],
        line = '';
      for (var i = 0; i < words.length; i++) {
        var test = line ? line + ' ' + words[i] : words[i];
        if (ctx.measureText(test).width > maxW && line) {
          lines.push(line);
          line = words[i];
        } else line = test;
      }
      if (line) lines.push(line);
      return lines;
    }
    function textPoints(text) {
      var w = surf.clientWidth,
        h = surf.clientHeight;
      var cv = document.createElement('canvas'),
        ctx = cv.getContext('2d');
      var fs = Math.max(30, Math.min(52, w / 13)),
        ff = '800 ' + fs + "px Archivo, system-ui, sans-serif";
      ctx.font = ff;
      var maxW = Math.min(w * 0.78, 620);
      var lines = wrapText(ctx, text, maxW);
      var lineH = fs * 1.14,
        blockW = 0;
      lines.forEach(function (l) {
        blockW = Math.max(blockW, ctx.measureText(l).width);
      });
      cv.width = Math.ceil(blockW) + 6;
      cv.height = Math.ceil(lines.length * lineH) + 8;
      ctx.font = ff;
      ctx.fillStyle = '#000';
      ctx.textBaseline = 'top';
      lines.forEach(function (l, i) {
        var lw = ctx.measureText(l).width;
        ctx.fillText(l, (cv.width - lw) / 2, i * lineH);
      });
      var data = ctx.getImageData(0, 0, cv.width, cv.height).data;
      var pts = [],
        step = 3;
      for (var y = 0; y < cv.height; y += step) for (var x = 0; x < cv.width; x += step) {
        if (data[(y * cv.width + x) * 4 + 3] > 128) pts.push({
          x: x,
          y: y
        });
      }
      var ox = (w - cv.width) / 2,
        oy = (h - cv.height) / 2;
      for (var i = 0; i < pts.length; i++) {
        pts[i].x += ox;
        pts[i].y += oy;
      }
      return pts;
    }
    function nearestFreeDot(px, py, used) {
      var c0 = Math.round((px - offx) / SP),
        r0 = Math.round((py - offy) / SP);
      for (var ring = 0; ring < 12; ring++) {
        for (var dc = -ring; dc <= ring; dc++) for (var dr = -ring; dr <= ring; dr++) {
          if (ring > 0 && Math.abs(dc) !== ring && Math.abs(dr) !== ring) continue;
          var c = c0 + dc,
            r = r0 + dr;
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
          var idx = gmap[c * rows + r];
          if (!used[idx]) return idx;
        }
      }
      return -1;
    }
    function focusSkill(k) {
      if (unfocusT) {
        clearTimeout(unfocusT);
        unfocusT = null;
      }
      if (focused === k) return;
      focused = k;
      lens.style.opacity = '0';
      surf.classList.add('is-focused');
      var pts = textPoints(SKILLS[k].i),
        col = accentHex();
      var used = new Uint8Array(dots.length);
      for (var i = 0; i < dots.length; i++) {
        dots[i].el.style.opacity = '0.06';
        dots[i].el.style.background = '';
        dots[i].el.style.transform = 'translate(-50%,-50%) scale(0.55)';
      }
      for (var p = 0; p < pts.length; p++) {
        var best = nearestFreeDot(pts[p].x, pts[p].y, used);
        if (best < 0) continue;
        used[best] = 1;
        var dt = dots[best];
        dt.el.style.opacity = '1';
        dt.el.style.background = 'var(--ink)';
        dt.el.style.transform = 'translate(' + (pts[p].x - dt.x).toFixed(1) + 'px,' + (pts[p].y - dt.y).toFixed(1) + 'px) translate(-50%,-50%) scale(0.92)';
      }
      for (var key in skillEls) {
        var on = key === k;
        skillEls[key].dot.style.opacity = on ? '1' : '0.14';
        skillEls[key].dot.style.background = on ? 'var(--accent)' : '';
        skillEls[key].lab.style.opacity = on ? '1' : '0.14';
        skillEls[key].lab.style.color = on ? col : '';
      }
    }
    function unfocus() {
      if (!focused) return;
      focused = null;
      surf.classList.remove('is-focused');
      for (var i = 0; i < dots.length; i++) {
        dots[i].el.style.opacity = '';
        dots[i].el.style.background = '';
        dots[i].el.style.transform = 'translate(-50%,-50%) scale(1)';
      }
      for (var key in skillEls) {
        var e = skillEls[key];
        e.dot.style.opacity = '';
        e.dot.style.background = '';
        e.lab.style.opacity = '';
        e.lab.style.color = '';
      }
    }
    surf.addEventListener('click', function (e) {
      var hit = e.target.closest('[data-skill-dot]');
      if (hit) {
        var k = hit.getAttribute('data-skill-dot');
        if (focused === k) unfocus();else focusSkill(k);
      } else unfocus();
    });
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        unfocus();
        layout();
      }, 150);
    });
    if (dots.length === 0 && 'ResizeObserver' in window) {
      var ro = new ResizeObserver(function () {
        if (dots.length === 0 && surf.clientHeight > 0) {
          layout();
        }
      });
      ro.observe(surf);
    }
  }
  var fullPlot = document.querySelector('.plot--full');
  if (fullPlot) buildField(fullPlot);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/scenes.js", error: String((e && e.message) || e) }); }

// ui_kits/my-library/App.jsx
try { (() => {
/* My Library — app orchestrator. Owns items + folders + all overlays so they
 * render at app root (never clipped) and stay in sync. Exposes window.MLApp. */
const ML_DS = window.AccessibleFoundationsDesignSystem_87ff79;
const {
  Modal: MLModal,
  Input: MLAppInput
} = ML_DS;
const ML_APP_CSS = `
.ml-app { position: relative; height: 100%; display: flex; background: var(--neutral-200); overflow: hidden; }
.ml-main { flex: 1; display: flex; flex-direction: column; min-width: 0; min-height: 0; background: var(--white); overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; }
.ml-create-body { display: flex; flex-direction: column; gap: 4px; }
.ml-del-body { font-size: 15px; line-height: 1.55; color: var(--neutral-700); }
.ml-del-body strong { color: var(--neutral-950); }
`;
(function () {
  var o = document.getElementById('ml-app-css');
  if (o) o.remove();
  const s = document.createElement('style');
  s.id = 'ml-app-css';
  s.textContent = ML_APP_CSS;
  document.head.appendChild(s);
})();
const ML_INITIAL_ITEMS = [{
  id: 'i1',
  title: 'Morning Crossword',
  icon: 'puzzle',
  folders: [],
  recent: true,
  kind: 'Puzzle',
  updated: 'Edited 2 days ago'
}, {
  id: 'i2',
  title: 'Garden Notes',
  icon: 'bookOpen',
  folders: [],
  recent: true,
  kind: 'Note',
  updated: 'Edited yesterday'
}, {
  id: 'i3',
  title: 'Sunday Roast',
  icon: 'bookOpen',
  folders: ['recipes'],
  kind: 'Recipe',
  updated: 'Edited last week',
  badge: 'Shared',
  shared: true
}, {
  id: 'i4',
  title: 'Banana Bread',
  icon: 'bookOpen',
  folders: ['recipes'],
  kind: 'Recipe',
  updated: 'Edited 3 weeks ago'
}, {
  id: 'i5',
  title: 'Lemon Cake',
  icon: 'bookOpen',
  folders: ['recipes'],
  kind: 'Recipe',
  updated: 'Auto-saved',
  badge: 'Auto'
}, {
  id: 'i6',
  title: 'Grandkids Visit',
  icon: 'image',
  folders: ['photos'],
  kind: '42 photos',
  updated: 'Edited today',
  recent: true
}, {
  id: 'i7',
  title: 'Coast Trip',
  icon: 'image',
  folders: ['photos'],
  kind: '128 photos',
  updated: 'Edited last month',
  badge: 'Shared',
  shared: true
}, {
  id: 'i8',
  title: 'Old Letters',
  icon: 'mail',
  folders: [],
  kind: '23 scans',
  updated: 'Edited 2 months ago'
}, {
  id: 'i9',
  title: 'Medication Times',
  icon: 'clock',
  folders: [],
  kind: 'Checklist',
  updated: 'Edited today',
  badge: 'Pro'
}, {
  id: 'i10',
  title: 'Phone Numbers',
  icon: 'people',
  folders: [],
  kind: '31 contacts',
  updated: 'Edited last week',
  shared: true
}, {
  id: 'i11',
  title: 'Birthday List',
  icon: 'star',
  folders: [],
  kind: '12 dates',
  updated: 'Edited yesterday',
  recent: true
}, {
  id: 'i12',
  title: 'Knitting Patterns',
  icon: 'bookOpen',
  folders: ['recipes'],
  kind: '9 patterns',
  updated: 'Edited 5 days ago'
}];
const ML_INITIAL_FOLDERS = [{
  id: 'recipes',
  label: 'Recipes',
  icon: 'bookOpen'
}, {
  id: 'photos',
  label: 'Photos',
  icon: 'image'
}];
function MLApp() {
  const [userName, setUserName] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const [activeId, setActiveId] = React.useState('all');
  const [view, setView] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [items, setItems] = React.useState(ML_INITIAL_ITEMS);
  const [folders, setFolders] = React.useState(ML_INITIAL_FOLDERS);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [prefs, setPrefs] = React.useState({
    largeText: true,
    highContrast: false,
    reduceMotion: false
  });

  // overlays
  const [createFor, setCreateFor] = React.useState(null); // folderId | '' (uncategorized) | null (closed)
  const [newName, setNewName] = React.useState('');
  const [folderModal, setFolderModal] = React.useState(false);
  const [folderName, setFolderName] = React.useState('');
  const [delFolder, setDelFolder] = React.useState(null); // {id,label} | null

  const isFolder = id => folders.some(f => f.id === id);
  const folderLabel = id => (folders.find(f => f.id === id) || {}).label;
  const labelFor = id => {
    if (id === 'all') return 'All Items';
    if (id === 'uncategorized') return 'Uncategorized';
    if (isFolder(id)) return folderLabel(id);
    for (const n of window.ML_NAV) {
      if (n.id === id) return n.label;
      for (const c of n.children || []) if (c.id === id) return c.label;
    }
    return 'My Library';
  };
  const baseFilter = it => {
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
  const systemItems = [{
    id: 'all',
    label: 'All Items',
    icon: 'list',
    count: items.length
  }, {
    id: 'uncategorized',
    label: 'Uncategorized',
    icon: 'folderOff',
    count: items.filter(i => i.folders.length === 0).length
  }];
  const folderItems = folders.map(f => ({
    ...f,
    count: items.filter(i => i.folders.includes(f.id)).length
  }));
  const visible = items.filter(baseFilter).filter(it => view === 'all' ? true : view === 'recent' ? it.recent : it.shared).filter(it => it.title.toLowerCase().includes(search.trim().toLowerCase()));
  const title = labelFor(activeId);
  const subtitle = `${visible.length} item${visible.length === 1 ? '' : 's'}` + (search ? ` matching “${search}”` : '');
  const navigate = id => {
    setActiveId(id);
    setView('all');
  };

  // create item — targets the folder it was launched from (or the active folder)
  const openCreate = folderId => {
    setCreateFor(folderId != null ? folderId : isFolder(activeId) ? activeId : '');
    setNewName('');
  };
  const doCreate = () => {
    const name = newName.trim();
    if (!name) return;
    const target = createFor && isFolder(createFor) ? createFor : '';
    const icon = target === 'recipes' ? 'bookOpen' : target === 'photos' ? 'image' : 'save';
    setItems(list => [{
      id: 'n' + Date.now(),
      title: name,
      icon,
      folders: target ? [target] : [],
      recent: true,
      kind: 'New',
      updated: 'Just now'
    }, ...list]);
    setCreateFor(null);
    setNewName('');
    setActiveId(target || 'all');
    setView('all');
  };
  const addFolder = () => {
    const name = folderName.trim();
    if (!name) return;
    const id = 'folder-' + Date.now();
    setFolders(f => [...f, {
      id,
      label: name,
      icon: 'folder'
    }]);
    setFolderModal(false);
    setFolderName('');
    setActiveId(id);
    setView('all');
  };
  const confirmRemoveFolder = () => {
    const id = delFolder.id;
    setFolders(f => f.filter(x => x.id !== id));
    setItems(list => list.map(i => i.folders.includes(id) ? {
      ...i,
      folders: i.folders.filter(x => x !== id)
    } : i));
    if (activeId === id) setActiveId('all');
    setDelFolder(null);
  };
  if (!userName) return /*#__PURE__*/React.createElement(window.MLWelcome, {
    onContinue: n => setUserName(n)
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-app"
  }, /*#__PURE__*/React.createElement(window.MLSidebar, {
    open: open,
    onToggle: () => setOpen(o => !o),
    activeId: activeId,
    onNavigate: navigate,
    systemItems: systemItems,
    folders: folderItems,
    onCreate: () => openCreate(null),
    onAddFolder: () => {
      setFolderName('');
      setFolderModal(true);
    },
    onAddToFolder: fid => openCreate(fid),
    onRemoveFolder: f => setDelFolder(f),
    onOpenSettings: () => setSettingsOpen(true),
    userName: userName
  }), /*#__PURE__*/React.createElement("main", {
    className: "ml-main"
  }, /*#__PURE__*/React.createElement(window.MLHeader, {
    title: title,
    subtitle: subtitle,
    search: search,
    onSearch: setSearch,
    view: view,
    onView: setView,
    onOpenSettings: () => setSettingsOpen(true)
  }), /*#__PURE__*/React.createElement(window.MLGrid, {
    items: visible.map(it => ({
      ...it,
      loc: it.folders.length ? 'In ' + folderLabel(it.folders[0]) : 'Uncategorized'
    })),
    onCreate: () => openCreate(null),
    onOpen: () => {}
  })), settingsOpen && /*#__PURE__*/React.createElement(window.MLSettings, {
    onClose: () => setSettingsOpen(false),
    prefs: prefs,
    onPref: (k, v) => setPrefs(p => ({
      ...p,
      [k]: v
    })),
    onSignOut: () => {
      setSettingsOpen(false);
      setUserName(null);
    }
  }), createFor !== null && /*#__PURE__*/React.createElement(MLModal, {
    title: "Create New Item",
    confirmLabel: "Create",
    onClose: () => setCreateFor(null),
    onConfirm: doCreate
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-create-body"
  }, /*#__PURE__*/React.createElement(MLAppInput, {
    label: "Name",
    placeholder: "e.g. Weekly Shopping List",
    autoFocus: true,
    value: newName,
    onChange: e => setNewName(e.target.value),
    helper: createFor && isFolder(createFor) ? 'Will be added to ' + folderLabel(createFor) + '.' : 'Will be added to Uncategorized.',
    onKeyDown: e => {
      if (e.key === 'Enter') doCreate();
    }
  }))), folderModal && /*#__PURE__*/React.createElement(MLModal, {
    title: "New Folder",
    confirmLabel: "Create Folder",
    onClose: () => setFolderModal(false),
    onConfirm: addFolder
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-create-body"
  }, /*#__PURE__*/React.createElement(MLAppInput, {
    label: "Folder name",
    placeholder: "e.g. Travel",
    autoFocus: true,
    value: folderName,
    onChange: e => setFolderName(e.target.value),
    helper: "Group related items together.",
    onKeyDown: e => {
      if (e.key === 'Enter') addFolder();
    }
  }))), delFolder && /*#__PURE__*/React.createElement(MLModal, {
    title: "Remove folder?",
    danger: true,
    confirmLabel: "Remove folder",
    onClose: () => setDelFolder(null),
    onConfirm: confirmRemoveFolder
  }, /*#__PURE__*/React.createElement("p", {
    className: "ml-del-body"
  }, "Remove ", /*#__PURE__*/React.createElement("strong", null, "\u201C", delFolder.label, "\u201D"), " from your library? The items inside won't be deleted \u2014 they'll move back to ", /*#__PURE__*/React.createElement("strong", null, "Uncategorized"), ".")));
}
window.MLApp = MLApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/ItemGrid.jsx
try { (() => {
/* My Library — item grid. Composes DS Card, TierPill, Icon, Button. Exposes window.MLGrid. */
const {
  Card: MLCard,
  TierPill: MLTierPill,
  Icon: MLGridIcon,
  Button: MLButton
} = window.AccessibleFoundationsDesignSystem_87ff79;
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
  const s = document.createElement('style');
  s.id = 'ml-grid-css';
  s.textContent = ML_GRID_CSS;
  document.head.appendChild(s);
}
const ML_TIERS = {
  Pro: 'solid',
  Shared: 'brand',
  Auto: 'neutral'
};
function MLGrid({
  items,
  onCreate,
  onOpen
}) {
  if (!items.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ml-empty"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ml-empty__icon"
    }, /*#__PURE__*/React.createElement(MLGridIcon, {
      name: "search",
      size: 32
    })), /*#__PURE__*/React.createElement("div", {
      className: "ml-empty__title"
    }, "Nothing here yet"), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 360,
        lineHeight: 1.55,
        margin: 0
      }
    }, "Try a different search, or create your first item to get started."), /*#__PURE__*/React.createElement(MLButton, {
      variant: "primary",
      iconLeft: "plus",
      onClick: onCreate
    }, "Create New"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-grid"
  }, items.map(it => /*#__PURE__*/React.createElement(MLCard, {
    key: it.id,
    interactive: true,
    onClick: () => onOpen(it),
    title: it.title,
    meta: it.kind,
    media: /*#__PURE__*/React.createElement("div", {
      className: "ml-card-media ml-grid__mediabox",
      style: {
        background: 'var(--neutral-200)',
        color: 'var(--neutral-500)'
      }
    }, /*#__PURE__*/React.createElement(MLGridIcon, {
      name: it.icon,
      size: 44
    }), it.badge && /*#__PURE__*/React.createElement("div", {
      className: "ml-grid__badges"
    }, /*#__PURE__*/React.createElement(MLTierPill, {
      tier: ML_TIERS[it.badge] || 'neutral'
    }, it.badge))),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "ml-card__date"
    }, it.loc), /*#__PURE__*/React.createElement(MLButton, {
      variant: "tertiary",
      size: "sm"
    }, "Open"))
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-card__date"
  }, it.updated))));
}
window.MLGrid = MLGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/ItemGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/LibraryHeader.jsx
try { (() => {
/* My Library — content header: title, search, view tabs, utility actions.
 * Composes DS Input, Tabs, IconButton. Exposes window.MLHeader.
 */
const {
  Input: MLInput,
  Tabs: MLTabs,
  IconButton: MLIconButton
} = window.AccessibleFoundationsDesignSystem_87ff79;
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
(function () {
  var o = document.getElementById('ml-header-css');
  if (o) o.remove();
  const s = document.createElement('style');
  s.id = 'ml-header-css';
  s.textContent = ML_HEADER_CSS;
  document.head.appendChild(s);
})();
function MLHeader({
  title,
  subtitle,
  search,
  onSearch,
  view,
  onView,
  onOpenSettings
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "ml-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-header__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-header__titles"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ml-header__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "ml-header__sub"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "ml-header__actions"
  }, /*#__PURE__*/React.createElement(MLIconButton, {
    icon: "bell",
    "aria-label": "Notifications"
  }), /*#__PURE__*/React.createElement(MLIconButton, {
    icon: "help",
    "aria-label": "Help"
  }), /*#__PURE__*/React.createElement(MLIconButton, {
    icon: "settings",
    "aria-label": "Settings",
    onClick: onOpenSettings
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-header__bar"
  }, /*#__PURE__*/React.createElement(MLTabs, {
    value: view,
    onChange: onView,
    items: [{
      id: 'all',
      label: 'All',
      icon: 'grid'
    }, {
      id: 'recent',
      label: 'Recent',
      icon: 'clock'
    }, {
      id: 'shared',
      label: 'Shared',
      icon: 'people'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "ml-header__search"
  }, /*#__PURE__*/React.createElement(MLInput, {
    icon: "search",
    placeholder: "Search your library",
    "aria-label": "Search your library",
    value: search,
    onChange: e => onSearch(e.target.value)
  }))));
}
window.MLHeader = MLHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/LibraryHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/SettingsPanel.jsx
try { (() => {
/* My Library — settings drawer. Composes DS Toggle, Button, IconButton, Icon. Exposes window.MLSettings. */
const {
  Toggle: MLToggle,
  Button: MLSetBtn,
  IconButton: MLSetIconBtn,
  Icon: MLSetIcon
} = window.AccessibleFoundationsDesignSystem_87ff79;
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
  const s = document.createElement('style');
  s.id = 'ml-settings-css';
  s.textContent = ML_SETTINGS_CSS;
  document.head.appendChild(s);
}
function MLSettings({
  onClose,
  prefs,
  onPref,
  onSignOut
}) {
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer-scrim",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ml-drawer",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__title"
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__sub"
  }, "Adjust how My Library looks and behaves.")), /*#__PURE__*/React.createElement(MLSetIconBtn, {
    icon: "close",
    size: "sm",
    "aria-label": "Close settings",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-set-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-set-group__label"
  }, "Accessibility")), [{
    key: 'largeText',
    name: 'Larger text',
    desc: 'Increase the base text size across the app.'
  }, {
    key: 'highContrast',
    name: 'High contrast',
    desc: 'Boost contrast for titles and controls.'
  }, {
    key: 'reduceMotion',
    name: 'Reduce motion',
    desc: 'Minimise animations and transitions.'
  }].map(r => /*#__PURE__*/React.createElement("div", {
    className: "ml-set-row",
    key: r.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-set-row__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-set-row__name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "ml-set-row__desc"
  }, r.desc)), /*#__PURE__*/React.createElement(MLToggle, {
    checked: !!prefs[r.key],
    onChange: e => onPref(r.key, e.target.checked),
    "aria-label": r.name,
    showState: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-set-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-set-group__label"
  }, "Account")), /*#__PURE__*/React.createElement("button", {
    className: "ml-set-nav"
  }, /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "user",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-set-nav__lbl"
  }, "Profile"), /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "chevronRight",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "ml-set-nav"
  }, /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "bell",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-set-nav__lbl"
  }, "Notifications"), /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "chevronRight",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "ml-set-nav"
  }, /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "lock",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-set-nav__lbl"
  }, "Privacy & security"), /*#__PURE__*/React.createElement(MLSetIcon, {
    name: "chevronRight",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-drawer__foot"
  }, /*#__PURE__*/React.createElement(MLSetBtn, {
    variant: "secondary",
    iconLeft: "logOut",
    onClick: onSignOut,
    fullWidth: true
  }, "Sign out"))));
}
window.MLSettings = MLSettings;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/SettingsPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/Sidebar.jsx
try { (() => {
/* My Library — collapsible navigation sidebar.
 * System items + user folders (props-driven). Kebab + collapsed-rail flyouts
 * are portalled to <body> so the scroll container can't clip or hide them.
 * Exposes window.MLSidebar.
 */
const {
  Icon
} = window.AccessibleFoundationsDesignSystem_87ff79;
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
(function () {
  var o = document.getElementById('ml-sidebar-css-5');
  if (o) o.remove();
  const s = document.createElement('style');
  s.id = 'ml-sidebar-css-5';
  s.textContent = ML_SIDEBAR_CSS;
  document.head.appendChild(s);
})();
const ML_NAV = [{
  id: 'library',
  label: 'My Library',
  icon: 'home',
  expandable: true
}, {
  id: 'favorites',
  label: 'Favorites',
  icon: 'heart',
  expandable: false
}, {
  id: 'recent',
  label: 'Recently Viewed',
  icon: 'clock',
  expandable: false
}, {
  id: 'shared',
  label: 'Shared With Me',
  icon: 'people',
  expandable: true,
  children: [{
    id: 'sh-github',
    label: 'GitHub',
    icon: 'grid',
    count: 4
  }, {
    id: 'sh-gdrive',
    label: 'Google Drive',
    icon: 'folder',
    count: 12
  }, {
    id: 'sh-onedrive',
    label: 'OneDrive',
    icon: 'save',
    count: 3
  }, {
    id: 'sh-dropbox',
    label: 'Dropbox',
    icon: 'download',
    count: 0
  }]
}, {
  id: 'community',
  label: 'Community',
  icon: 'globe',
  expandable: false
}];
const ML_RAIL_LABEL = {
  library: 'My',
  favorites: 'Favorites',
  recent: 'Recent',
  shared: 'Shared',
  community: 'Community'
};
function MLSidebar({
  open,
  onToggle,
  activeId,
  onNavigate,
  systemItems = [],
  folders = [],
  onCreate,
  onAddFolder,
  onAddToFolder,
  onRemoveFolder,
  onOpenSettings,
  userName
}) {
  const [expanded, setExpanded] = React.useState({
    library: true,
    shared: false
  });
  const [menu, setMenu] = React.useState(null); // folder kebab { folder, x, y }
  const [fly, setFly] = React.useState(null); // collapsed-rail flyout { id, x, y }
  const flyTimer = React.useRef(null);
  const initial = (userName || 'You').trim().charAt(0).toUpperCase();
  React.useEffect(() => {
    if (!menu && !fly) return;
    const close = e => {
      if (!e.target.closest('.ml-folder__kebab') && !e.target.closest('.ml-pop')) setMenu(null);
      if (!e.target.closest('.ml-rail__btn') && !e.target.closest('.ml-pop')) setFly(null);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menu, fly]);
  const openMenu = (e, folder) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMenu(m => m && m.folder.id === folder.id ? null : {
      folder,
      x: r.right,
      y: r.bottom
    });
  };
  const sharedKids = ML_NAV.find(n => n.id === 'shared').children;

  // ---- collapsed rail ----
  if (!open) {
    const railActive = item => item.id === activeId || item.id === 'library' && [...systemItems, ...folders].some(c => c.id === activeId) || (item.children || []).some(c => c.id === activeId);
    const clearFlyTimer = () => {
      if (flyTimer.current) {
        clearTimeout(flyTimer.current);
        flyTimer.current = null;
      }
    };
    const scheduleClose = () => {
      clearFlyTimer();
      flyTimer.current = setTimeout(() => setFly(null), 180);
    };
    const onRailHover = (e, item) => {
      if (item.id === 'library' || item.id === 'shared') {
        clearFlyTimer();
        const r = e.currentTarget.getBoundingClientRect();
        setFly({
          id: item.id,
          x: r.right,
          y: r.top
        });
      } else scheduleClose();
    };
    const onRailClick = item => {
      if (item.id !== 'shared') {
        onNavigate(item.id === 'library' ? 'all' : item.id);
      }
    };
    return /*#__PURE__*/React.createElement("nav", {
      className: "ml-sb ml-sb--closed",
      "aria-label": "Main navigation"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ml-sb__head",
      style: {
        justifyContent: 'center',
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "ml-sb__collapse",
      onClick: onToggle,
      "aria-label": "Expand sidebar"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ml-sb__body"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ml-sb__create ml-sb__create--rail",
      onClick: onCreate,
      "aria-label": "Create new item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 20,
      strokeWidth: 2.4
    }), /*#__PURE__*/React.createElement("span", null, "Create")), /*#__PURE__*/React.createElement("div", {
      className: "ml-rail"
    }, ML_NAV.map(item => /*#__PURE__*/React.createElement("button", {
      key: item.id,
      className: 'ml-rail__btn' + (railActive(item) ? ' ml-rail__btn--active' : ''),
      "aria-label": item.label,
      "aria-expanded": fly && fly.id === item.id,
      onMouseEnter: e => onRailHover(e, item),
      onMouseLeave: scheduleClose,
      onClick: () => onRailClick(item)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      className: "ml-rail__lbl"
    }, ML_RAIL_LABEL[item.id] || item.label))))), fly && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      className: "ml-pop",
      style: {
        top: Math.min(fly.y, window.innerHeight - 360),
        left: fly.x + 8
      },
      role: "menu",
      onMouseEnter: clearFlyTimer,
      onMouseLeave: scheduleClose
    }, fly.id === 'library' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ml-pop__h"
    }, "My Library"), systemItems.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: 'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : ''),
      onClick: () => {
        onNavigate(c.id);
        setFly(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 18
    }), " ", c.label, " ", /*#__PURE__*/React.createElement("span", {
      className: "c"
    }, c.count))), /*#__PURE__*/React.createElement("div", {
      className: "ml-pop__sep"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ml-pop__h"
    }, "Folders"), folders.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: 'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : ''),
      onClick: () => {
        onNavigate(c.id);
        setFly(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 18
    }), " ", c.label, " ", /*#__PURE__*/React.createElement("span", {
      className: "c"
    }, c.count))), /*#__PURE__*/React.createElement("button", {
      className: "ml-pop__add",
      onClick: () => {
        onAddFolder();
        setFly(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14,
      strokeWidth: 2.4
    }), " Add folder")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ml-pop__h"
    }, "Shared With Me"), sharedKids.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: 'ml-pop__item' + (c.id === activeId ? ' ml-pop__item--active' : ''),
      onClick: () => {
        onNavigate(c.id);
        setFly(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 18
    }), " ", c.label, " ", /*#__PURE__*/React.createElement("span", {
      className: "c"
    }, c.count))))), document.body));
  }

  // ---- open sidebar ----
  const childBtn = c => /*#__PURE__*/React.createElement("li", {
    key: c.id
  }, /*#__PURE__*/React.createElement("button", {
    className: 'ml-child' + (c.id === activeId ? ' ml-child--active' : ''),
    "aria-current": c.id === activeId ? 'page' : undefined,
    onClick: () => onNavigate(c.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-child__lbl"
  }, c.label), c.count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "ml-child__count"
  }, c.count)));
  return /*#__PURE__*/React.createElement("nav", {
    className: "ml-sb",
    "aria-label": "Main navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__glyph"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-sb__name"
  }, "My Library")), /*#__PURE__*/React.createElement("button", {
    className: "ml-sb__collapse",
    onClick: onToggle,
    "aria-label": "Collapse sidebar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__body"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ml-sb__create",
    onClick: onCreate
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    strokeWidth: 2.4
  }), " Create New"), /*#__PURE__*/React.createElement("ul", {
    className: "ml-nav"
  }, ML_NAV.map(item => {
    const isOpen = !!expanded[item.id];
    if (!item.expandable) {
      const active = item.id === activeId;
      return /*#__PURE__*/React.createElement("li", {
        key: item.id
      }, /*#__PURE__*/React.createElement("button", {
        className: 'ml-nav__item' + (active ? ' ml-nav__item--active' : ''),
        "aria-current": active ? 'page' : undefined,
        onClick: () => onNavigate(item.id)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: item.icon,
        size: 22
      }), /*#__PURE__*/React.createElement("span", {
        className: "ml-nav__lbl"
      }, item.label)));
    }
    const isLibrary = item.id === 'library';
    const kids = isLibrary ? [...systemItems, ...folders] : item.children;
    const sectionActive = item.id === activeId || kids.some(c => c.id === activeId);
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, /*#__PURE__*/React.createElement("button", {
      className: 'ml-nav__item' + (sectionActive ? ' ml-nav__item--active' : '') + (isOpen ? ' ml-nav__item--open' : ''),
      "aria-expanded": isOpen,
      onClick: () => setExpanded(e => ({
        ...e,
        [item.id]: !e[item.id]
      }))
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      className: "ml-nav__lbl"
    }, item.label), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronDown",
      size: 18,
      className: "ml-nav__chev"
    })), /*#__PURE__*/React.createElement("ul", {
      className: 'ml-children' + (isOpen ? ' ml-children--open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "ml-children__in"
    }, isLibrary ? /*#__PURE__*/React.createElement(React.Fragment, null, systemItems.map(childBtn), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
      className: "ml-foldhdr"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ml-foldhdr__lbl"
    }, "Folders"), /*#__PURE__*/React.createElement("button", {
      className: "ml-addfold",
      onClick: onAddFolder,
      "aria-label": "Add folder"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 13,
      strokeWidth: 2.4
    }), " Add folder"))), folders.map(c => /*#__PURE__*/React.createElement("li", {
      key: c.id
    }, /*#__PURE__*/React.createElement("div", {
      className: 'ml-folder' + (c.id === activeId ? ' ml-folder--active' : '')
    }, /*#__PURE__*/React.createElement("button", {
      className: "ml-folder__nav",
      "aria-current": c.id === activeId ? 'page' : undefined,
      onClick: () => onNavigate(c.id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      className: "lbl"
    }, c.label), /*#__PURE__*/React.createElement("span", {
      className: "ml-folder__count"
    }, c.count)), /*#__PURE__*/React.createElement("button", {
      className: "ml-folder__kebab",
      "aria-label": 'Options for ' + c.label,
      "aria-expanded": menu && menu.folder.id === c.id,
      onClick: e => openMenu(e, c)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "moreVertical",
      size: 16
    })))))) : item.children.map(childBtn))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-sb__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ml-user",
    onClick: onOpenSettings
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-user__av"
  }, initial), /*#__PURE__*/React.createElement("span", {
    className: "ml-user__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ml-user__name"
  }, userName || 'You'), /*#__PURE__*/React.createElement("span", {
    className: "ml-user__sub"
  }, "Settings & account")))), menu && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "ml-pop",
    role: "menu",
    style: {
      top: menu.y + 4,
      left: Math.max(12, menu.x - 196)
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ml-pop__item",
    onClick: () => {
      onAddToFolder(menu.folder.id);
      setMenu(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), " Add item to folder"), /*#__PURE__*/React.createElement("button", {
    className: "ml-pop__item",
    onClick: () => {
      onNavigate(menu.folder.id);
      setMenu(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder",
    size: 16
  }), " Open folder"), /*#__PURE__*/React.createElement("div", {
    className: "ml-pop__sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "ml-pop__item danger",
    onClick: () => {
      onRemoveFolder(menu.folder);
      setMenu(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 16
  }), " Remove folder")), document.body));
}
window.MLSidebar = MLSidebar;
window.ML_NAV = ML_NAV;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-library/WelcomeScreen.jsx
try { (() => {
/* My Library — welcome / sign-in screen. Composes DS Input, Button, Icon. Exposes window.MLWelcome. */
const {
  Input: MLWInput,
  Button: MLWButton,
  Icon: MLWIcon
} = window.AccessibleFoundationsDesignSystem_87ff79;
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
  const s = document.createElement('style');
  s.id = 'ml-welcome-css';
  s.textContent = ML_WELCOME_CSS;
  document.head.appendChild(s);
}
function MLWelcome({
  onContinue
}) {
  const [name, setName] = React.useState('');
  const submit = () => onContinue(name.trim() || 'Friend');
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-welcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-welcome__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-welcome__glyph"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "ml-welcome__title"
  }, "Welcome to My Library"), /*#__PURE__*/React.createElement("p", {
    className: "ml-welcome__sub"
  }, "Keep everything you save in one calm, easy-to-read place."), /*#__PURE__*/React.createElement("div", {
    className: "ml-welcome__form"
  }, /*#__PURE__*/React.createElement(MLWInput, {
    label: "What should we call you?",
    placeholder: "Type your name",
    icon: "user",
    value: name,
    onChange: e => setName(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') submit();
    }
  }), /*#__PURE__*/React.createElement(MLWButton, {
    variant: "primary",
    fullWidth: true,
    iconRight: "chevronRight",
    onClick: submit
  }, "Continue"), /*#__PURE__*/React.createElement("p", {
    className: "ml-welcome__hint"
  }, "No account needed \u2014 this is a guided demo."))));
}
window.MLWelcome = MLWelcome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-library/WelcomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.List = __ds_scope.List;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.TierPill = __ds_scope.TierPill;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

})();
