# Tasks

All tasks are complete — this change was implemented before the OpenSpec artifacts
were written, and records the shipped work.

## 1. Data

- [x] 1.1 Add `Mount Carmel` (`[32.674, 35.115]`, type `feature`) to
  `BIBLICAL_LOCATIONS.features` in `data.js`; verify the labelled marker shows on
  load with "Cities & Features" checked.
- [x] 1.2 Add `ELIJAH_JOURNEY` const in `data.js` (id, name, `coords` Carmel →
  Jezreel → Beersheba → wilderness → Horeb → Abel-meholah, `color` `#FF8C00`,
  `dashArray`, `labelPosition`, `labelText`); verify coords are `[lat, lng]`.

## 2. Controls

- [x] 2.1 Add `#show-elijah-journey` checkbox under "Routes & Journeys" in
  `index.html`; verify it renders unchecked.
- [x] 2.2 Bump `data.js` / `app.js` `?v=` query strings in `index.html`; verify the
  browser loads the new files.

## 3. Map behaviour

- [x] 3.1 Build the Elijah polyline + divIcon label in `app.js` guarded by
  `typeof ELIJAH_JOURNEY !== 'undefined'`, in its own `layerGroup`.
- [x] 3.2 Add the toggle IIFE that adds/removes the line and label on `change` and
  calls `updateLegend(...)`; verify checking/unchecking shows/hides the route.
- [x] 3.3 Add the Elijah branch to `updateLegend()` and include `showElijah` in the
  `legend.hidden` guard; verify the legend entry appears only when checked and the
  legend hides when nothing is shown.

## 4. Styling

- [x] 4.1 Add `.elijah-label` / `.elijah-label-text` rules in `styles.css`; verify
  the on-map label is orange and legible.

## 5. Verification

- [x] 5.1 Load the map: Mount Carmel visible by default; toggling "Elijah's
  Journey" shows a dashed orange route starting at Mount Carmel with label and
  legend entry; opacity slider does not affect the route.
