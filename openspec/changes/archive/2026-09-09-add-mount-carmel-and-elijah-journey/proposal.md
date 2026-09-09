## Why

The map covers Abraham's and Joshua's travels but not Elijah's, one of the most
geographically distinctive narratives in the Old Testament (the Carmel contest and
the flight to Horeb). Mount Carmel — the setting of that contest and a recurring
biblical landmark — is also missing from the base map.

## What Changes

- Add **Mount Carmel** as a permanent biblical-location marker, shown by default
  with the other cities and features.
- Add **Elijah's Journey** as a toggleable route overlay under "Routes & Journeys":
  a dashed line from Mount Carmel → Jezreel → Beersheba → the wilderness → Mount
  Horeb, with the return leg to Abel-meholah where Elisha is called (1 Kings 18-19).
- Add a matching legend entry and route label for the new overlay.

No breaking changes.

## Capabilities

### New Capabilities

- `map-locations`: which biblical places appear on the base map by default and how
  they are labelled.
- `routes-and-journeys`: the toggleable dashed-line overlays for biblical journeys,
  their controls, labels, and legend entries.

### Modified Capabilities

_None._

## Impact

- `data.js`: new `Mount Carmel` entry in `BIBLICAL_LOCATIONS.features`; new
  `ELIJAH_JOURNEY` const.
- `index.html`: new `#show-elijah-journey` checkbox; `?v=` bump on `data.js` /
  `app.js`.
- `app.js`: Elijah polyline/label construction, toggle IIFE, legend branch.
- `styles.css`: `.elijah-label-text` styling.
