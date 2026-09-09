## Context

See proposal.md - Why. The codebase already has an established pattern for
toggleable route overlays (Abraham's Journey, Joshua's Conquest): a `const` route
object in `data.js`, a checkbox in `index.html`, and an IIFE in `app.js` that
adds/removes a Leaflet `layerGroup` on `change` and refreshes the legend.

## Goals / Non-Goals

- **Goal**: Reuse the existing overlay pattern exactly, so the new route behaves
  like the others (label, legend, opacity-independent).
- **Non-Goal**: Historical/archaeological precision of the route vertices. The map
  is explicitly illustrative; approximate traditional locations are acceptable.
- **Non-Goal**: Making Mount Carmel independently toggleable — it rides with the
  existing "Cities & Features" checkbox.

## Decisions

- **Elijah route as a single polyline** (Carmel → Jezreel → Beersheba →
  wilderness → Horeb → Abel-meholah) rather than separate outbound/return layers.
  Rationale: the narrative is one continuous itinerary and a single dashed line
  matches Abraham's Journey; separate layers (as Joshua uses) are only warranted
  when campaigns diverge geographically.
- **Colour `#FF8C00` (dark orange)** for the line, `#E67E00` for the label text.
  Rationale: distinct from Abraham (crimson), Joshua southern (saddle brown) and
  northern (sea green), and the rivers (blue).
- **Mount Carmel coordinates `[32.674, 35.115]`** — el-Muhraqa, the traditional
  site of the contest — so the marker and the route's first vertex coincide.
- **Mount Carmel as a `feature`**, not a `city`. It is a landmark, and `features`
  already holds non-settlement entries (Dead Sea, Jordan River).

## Risks / Trade-offs

- Route vertices are approximate (esp. Abel-meholah, whose location is debated) →
  acceptable given the map's stated illustrative framing; kept as a single
  editable array in `data.js`.
- The Horeb → Abel-meholah return leg crosses back over the outbound path → this
  is geographically faithful and the dashed styling keeps it readable.

## Migration Plan

Static site; no data migration. Deploy = commit + push to `main` (Netlify
auto-build). The `?v=` bump on `data.js`/`app.js` busts the browser/CDN cache.
Rollback = revert the commit.
