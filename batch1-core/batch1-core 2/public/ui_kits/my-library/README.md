# My Library — UI Kit

A high-fidelity, interactive recreation of **My Library**, the reference product the Accessible Foundations sidebar was built for: a calm content-management app for older adults. Every surface composes the design-system primitives — it does **not** re-implement them.

## Run
Open `index.html`. It loads `../../styles.css` + `../../_ds_bundle.js`, then the screen modules.

## Flow
1. **Welcome** — large, single-field sign-in (`WelcomeScreen.jsx`). Enter a name → Continue.
2. **Library home** — collapsible `Sidebar` + `LibraryHeader` (title, search, view tabs, utility actions) + `ItemGrid` of cards.
3. **Create** — the sidebar / empty-state "Create New" opens a `Modal` with a labelled `Input`; the new item is added to the current section.
4. **Settings** — the avatar or gear opens a right-hand drawer (`SettingsPanel.jsx`) with accessibility toggles and account rows. Sign out returns to Welcome.
5. **Navigate / filter** — sidebar sections + view tabs + search narrow the grid live.

## Files
| File | Role | DS components used |
|---|---|---|
| `App.jsx` | State + flow orchestrator, item data, create modal | Modal, Input |
| `Sidebar.jsx` | Collapsible nav (sections, counts, active accent bar, icon rail) | Icon |
| `LibraryHeader.jsx` | Title, search, view tabs, utility actions | Input, Tabs, IconButton |
| `ItemGrid.jsx` | Responsive card grid + empty state | Card, TierPill, Icon, Button |
| `SettingsPanel.jsx` | Right drawer: accessibility toggles + account | Toggle, Button, IconButton, Icon |
| `WelcomeScreen.jsx` | Sign-in gate | Input, Button, Icon |

## Source of truth
Modelled on the original `components/Sidebar/Sidebar.html` (collapse behaviour, 280/76px widths, inset accent bar, sub-item active fill) and the v2.0.0 design guide. Layout shells use plain CSS on the design tokens; all interactive primitives come from the bundle.

## Notes / fidelity gaps
- Folder rename/delete context menus and the collapsed-rail hover flyouts from the original sidebar are **not** reproduced here — this kit focuses on the core browse → create → settings loop. The full menu/flyout behaviour lives in the original `Sidebar.html` reference.
- Item data is fake and in-memory; "Open" on a card is a no-op placeholder.
