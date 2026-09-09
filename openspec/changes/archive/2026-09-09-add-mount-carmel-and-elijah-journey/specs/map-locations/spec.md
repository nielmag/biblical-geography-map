## Purpose

Defines which biblical places are drawn on the base map by default and how each is
marked and labelled, independent of any period, empire, or route overlay.

## ADDED Requirements

### Requirement: Default biblical location markers

The map SHALL display a set of biblical cities and physical features as markers
whenever the "Cities & Features" control is enabled, and that control SHALL be
enabled on initial load.

#### Scenario: Markers shown on load

- **WHEN** the map is opened with no settings changed
- **THEN** the default cities and features are visible, each as a small dot with a
  permanent text label

#### Scenario: Toggling the control

- **WHEN** the user clears the "Cities & Features" checkbox
- **THEN** all default city and feature markers are removed from the map
- **AND** re-checking it restores them

### Requirement: Mount Carmel is a default feature

The default feature set SHALL include Mount Carmel, located at the traditional
site of Elijah's contest with the prophets of Baal on the south-eastern end of
the Carmel ridge (approximately 32.674 N, 35.115 E).

#### Scenario: Mount Carmel visible by default

- **WHEN** the map is opened with no settings changed
- **THEN** a marker labelled "Mount Carmel" is shown on the Carmel ridge
- **AND** it appears and disappears with the "Cities & Features" control like every
  other default feature
