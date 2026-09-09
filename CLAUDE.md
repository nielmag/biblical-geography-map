# CLAUDE.md

Guidance for working in this repository.

## Project

**Biblical Geography Explorer** — a single-page, static Leaflet map showing biblical
territories, empires, routes, and locations for educational purposes. No build step,
no framework, no dependencies beyond CDN-hosted Leaflet.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page shell, control-panel markup, CDN script/style tags. Loads `data.js` and `app.js` with `?v=N` cache-busting query strings. |
| `data.js` | All map content as plain `const` objects/arrays: `REFERENCE`, `GARDEN_EDEN_LOCATIONS`, `BIBLICAL_LOCATIONS`, `JOSHUA_CONQUEST_CITIES`, `JOSHUA_CONQUEST_ROUTE`, `JOSHUA_NORTHERN_ROUTE`, `RIVERS`, `ABRAHAM_JOURNEY`, `ELIJAH_JOURNEY`, `ANCIENT_EMPIRES`, `TERRITORIES`. |
| `app.js` | One IIFE. Map init, builds Leaflet layers from the `data.js` globals, wires control-panel checkboxes/sliders, legend rendering, disclaimer modal. |
| `styles.css` | All styling: full-viewport map, control panel, legend, popups, marker/label classes. |

`files/`, `files.zip`, `debug.log` are not part of the app (`debug.log` is gitignored).

## Coordinates

- All coordinates are `[latitude, longitude]` — the order Leaflet expects. Do not swap.
- Region of interest is the Levant / Near East; precision is intentionally low
  (this is an illustrative "biblical maximalist" map, not an archaeological one).

## Conventions

- Vanilla ES5-ish JS (`var`, `function`, IIFEs, no modules). Match the surrounding style.
- Each toggleable overlay follows the same pattern: a `const` in `data.js`, a
  `L.layerGroup`, layer + label construction guarded by `typeof X !== 'undefined'`,
  an `id="show-..."` checkbox in `index.html`, an IIFE in `app.js` that adds/removes
  layers on `change` and calls `updateLegend(...)`.
- `updateLegend()` reads every relevant checkbox by id and appends a `.legend-item`
  per active overlay; add new overlays to its `legend.hidden` guard condition too.
- Route/journey polylines are dashed and carry a `divIcon` text label at
  `labelPosition`.
- **When editing `data.js` or `app.js`, bump the matching `?v=N` in `index.html`**
  so Netlify/browsers pick up the change.

## Deploy

Netlify auto-builds from GitHub `main` on push (no `netlify.toml`; the repo folder
is not linked to the Netlify CLI locally). To ship: commit and `git push`.
Remote: `https://github.com/nielmag/biblical-geography-map.git`.
