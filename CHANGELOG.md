# Changes to bakung.css

### v26.3.0

* Update `background-color` of `appear--*offcanvas` to `blur(1px)`;

* Update `.navbar--breadcrumb, .navbar--breadcrumb > .nav` set `background: unset`.

* Fix `.header-*` typo `dsiplay`.

* Update `.header-*` move `display, margin` properties to lower specifity.

* Add `.font-weight-100 ... .font-weight-900` properties.

* Update elements with `backdrop-filter` property, set their value to `blur(1px)`.

* Fix `slide__item` center in viewport when active.

* Update `_utilites.css` set `c-*` to `cursor-*`, `d-*` to `display-*`, and `z-index--*` to `z-index-*`.

* Add `header-8` to `_utilites.css set`.

* Remove redudancy variable `--avatar-size`, `--badge-size`, `--btn-size`, `--visual-aside-size`, and `--visual-indicator-size`.

### v26.2.0

* Add `[data-appear-active]` for `appear` component.

* Change `data-notify-open` into `data-notify-active`.

* Change `navbar--compact-expand` into `[data-navbar-active]`.

* Change `tooltip--active` into `[data-tooltip-active]`.

* Update `step__indicator` to support `button` as indicator.

* Add element `toggle__indicator` for `toggle`.

* Add variable `--toggle-path-size`, set default to .5rem.

* Change `appear-sibling` into `appear-aside`'.

* Update `btn--icon` has its own variable `--btn--icon-font-size`, default value is 1em.

* Change `visual-aside` and `visual-indicator` default size from 1rem to 1em.

* Add new class `.ignore-visited` for link.

* Remove `.btn--*` `:focus`, `:hover` and `:active` styles.

* Remove some styles for `.panel` and `.panel__body`.

* Add new background variables to every `.appear--*-offcanvas`.

* Add padding for `.panel__header`.

* Add and update variables name.

* Update `popper__item`.

* Update `popper__line`.

* Fix `.data-is-invalid` into `\[data-is-invalid\]`.

* Fix `.data-is-valid` into `\[data-is-valid\]`.

* Named `css/_bakung.css` into `css/_styles.css`.

* Add `css/_utilities.css`.

* Add `css/_helpers.css`.

* Named `css/_bakung.css` into `css/_styles.css`.

* Add `css/index.css` file to act as entry file for merge css files.

* Update `postcss.config.js`.

* Add file `cssnano.config.js`.

* Update `package.json` for build scripts and add entry point for unpkg.

* Add compiled static files (replaces variable with static value) to distribution files.

### 26.1.2

* Update package.json, add `@bakung-ui/minimax.css` in devDependencies 

### 26.01.1

* Update package.json add entry point for unpkg

* Fix `popper__item `

### 26.01 (Januari 2026)

* Publish to public
