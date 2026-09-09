## Purpose

Defines the toggleable dashed-line overlays that trace biblical journeys across the
map, including their controls, on-map labels, and legend entries.

## ADDED Requirements

### Requirement: Journey overlays are individually toggleable

Each biblical journey SHALL be an independent overlay controlled by its own
checkbox under the "Routes & Journeys" panel section, and every journey overlay
SHALL be off on initial load.

#### Scenario: Enabling a journey

- **WHEN** the user checks a journey's checkbox
- **THEN** that journey's dashed route line and its label appear on the map
- **AND** a corresponding entry appears in the legend

#### Scenario: Disabling a journey

- **WHEN** the user clears a journey's checkbox
- **THEN** that journey's line and label are removed from the map
- **AND** its legend entry is removed, and the legend hides entirely if nothing
  else is shown

#### Scenario: Independence from territory opacity

- **WHEN** the territory opacity slider is changed
- **THEN** the visibility and appearance of journey route lines are unaffected

### Requirement: Elijah's Journey overlay

There SHALL be an "Elijah's Journey" overlay tracing Elijah's travels in
1 Kings 18-19: from Mount Carmel to Jezreel, south to Beersheba, into the
wilderness, on to Mount Horeb, and returning to Abel-meholah where Elisha is
called. Its route SHALL begin at the Mount Carmel marker's location. It SHALL be
drawn in a colour distinct from the other journeys and from the rivers.

#### Scenario: Displaying Elijah's Journey

- **WHEN** the user checks "Elijah's Journey"
- **THEN** a dashed line connects, in order, Mount Carmel, Jezreel, Beersheba, the
  wilderness of Beersheba, Mount Horeb, and Abel-meholah
- **AND** an "ELIJAH'S JOURNEY" label is shown along the route
- **AND** the legend shows the route with its scripture reference (1 Kings 18-19)

#### Scenario: Route anchored at Mount Carmel

- **WHEN** both the "Cities & Features" and "Elijah's Journey" controls are enabled
- **THEN** the start of the Elijah route coincides with the "Mount Carmel" marker
