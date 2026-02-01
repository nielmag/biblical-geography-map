/**
 * Biblical Geography Explorer - Application logic
 * Map initialization, layers, event handlers, disclaimer modal.
 */

(function () {
  'use strict';

  // --- Map initialization ---
  const JERUSALEM = [31.7683, 35.2137];
  const INITIAL_ZOOM = 6;

  const map = L.map('map', {
    center: JERUSALEM,
    zoom: INITIAL_ZOOM,
    zoomControl: true,
  });

  // Base map layer group: only tile layer(s) go here so we can switch styles without affecting overlays
  const baseMapLayerGroup = L.layerGroup().addTo(map);

  function getTileLayersForStyle(style) {
    const layers = [];
    if (style === 'topo') {
      layers.push(L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
        maxZoom: 19,
      }));
    } else if (style === 'satellite') {
      layers.push(L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics',
        maxZoom: 19,
      }));
      layers.push(L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        attribution: '',
        maxZoom: 19,
      }));
    }
    return layers;
  }

  function setMapStyle(style) {
    baseMapLayerGroup.clearLayers();
    getTileLayersForStyle(style).forEach(function (layer) {
      baseMapLayerGroup.addLayer(layer);
    });
  }

  setMapStyle('topo'); // Default: Topographic

  // Scale indicator (bottom-left; Leaflet places zoom at top-left by default)
  L.control.scale({ imperial: true, metric: true }).addTo(map);

  // --- River polylines (above base map, below territory polygons) ---
  if (typeof RIVERS !== 'undefined' && RIVERS.length) {
    const riverLayerGroup = L.layerGroup();
    RIVERS.forEach(function (r) {
      const line = L.polyline(r.coords, {
        color: r.color,
        weight: r.weight || 5,
        opacity: 1,
        fill: false,
        className: 'river-polyline',
      });
      riverLayerGroup.addLayer(line);
      const labelMarker = L.marker(r.labelPosition, {
        icon: L.divIcon({
          className: 'river-label',
          html: '<span class="river-label-text">' + (r.labelText || r.name) + '</span>',
          iconSize: null,
          iconAnchor: [0, 0],
        }),
        interactive: false,
      });
      riverLayerGroup.addLayer(labelMarker);
    });
    riverLayerGroup.addTo(map);
  }

  // --- Abraham's Journey (dashed red polyline, toggle via checkbox) ---
  const journeyLayerGroup = L.layerGroup().addTo(map);
  var journeyLine = null;
  var journeyLabel = null;
  if (typeof ABRAHAM_JOURNEY !== 'undefined' && ABRAHAM_JOURNEY.coords && ABRAHAM_JOURNEY.coords.length >= 2) {
    journeyLine = L.polyline(ABRAHAM_JOURNEY.coords, {
      color: ABRAHAM_JOURNEY.color,
      weight: ABRAHAM_JOURNEY.weight || 5,
      opacity: 1,
      dashArray: ABRAHAM_JOURNEY.dashArray || '10, 10',
      className: 'journey-polyline',
    });
    journeyLabel = L.marker(ABRAHAM_JOURNEY.labelPosition, {
      icon: L.divIcon({
        className: 'journey-label',
        html: '<span class="journey-label-text">' + (ABRAHAM_JOURNEY.labelText || ABRAHAM_JOURNEY.name) + '</span>',
        iconSize: null,
        iconAnchor: [0, 0],
      }),
      interactive: false,
    });
  }

  // --- Joshua's Conquest Route (dashed brown polyline, toggle via checkbox) ---
  const joshuaLayerGroup = L.layerGroup().addTo(map);
  var joshuaSouthernLine = null;
  var joshuaSouthernLabel = null;
  var joshuaNorthernLine = null;
  var joshuaNorthernLabel = null;
  var joshuaCityMarkers = [];

  // Create southern campaign route
  if (typeof JOSHUA_CONQUEST_ROUTE !== 'undefined' && JOSHUA_CONQUEST_ROUTE.coords && JOSHUA_CONQUEST_ROUTE.coords.length >= 2) {
    joshuaSouthernLine = L.polyline(JOSHUA_CONQUEST_ROUTE.coords, {
      color: JOSHUA_CONQUEST_ROUTE.color,
      weight: JOSHUA_CONQUEST_ROUTE.weight || 4,
      opacity: 1,
      dashArray: JOSHUA_CONQUEST_ROUTE.dashArray || '8, 6',
      className: 'joshua-polyline',
    });
    joshuaSouthernLabel = L.marker(JOSHUA_CONQUEST_ROUTE.labelPosition, {
      icon: L.divIcon({
        className: 'joshua-label',
        html: '<span class="joshua-label-text">' + (JOSHUA_CONQUEST_ROUTE.labelText || JOSHUA_CONQUEST_ROUTE.name) + '</span>',
        iconSize: null,
        iconAnchor: [0, 0],
      }),
      interactive: false,
    });
  }

  // Create northern campaign route
  if (typeof JOSHUA_NORTHERN_ROUTE !== 'undefined' && JOSHUA_NORTHERN_ROUTE.coords && JOSHUA_NORTHERN_ROUTE.coords.length >= 2) {
    joshuaNorthernLine = L.polyline(JOSHUA_NORTHERN_ROUTE.coords, {
      color: JOSHUA_NORTHERN_ROUTE.color,
      weight: JOSHUA_NORTHERN_ROUTE.weight || 4,
      opacity: 1,
      dashArray: JOSHUA_NORTHERN_ROUTE.dashArray || '8, 6',
      className: 'joshua-polyline',
    });
    joshuaNorthernLabel = L.marker(JOSHUA_NORTHERN_ROUTE.labelPosition, {
      icon: L.divIcon({
        className: 'joshua-label',
        html: '<span class="joshua-label-text">' + (JOSHUA_NORTHERN_ROUTE.labelText || JOSHUA_NORTHERN_ROUTE.name) + '</span>',
        iconSize: null,
        iconAnchor: [0, 0],
      }),
      interactive: false,
    });
  }

  // Create conquest city markers
  function createConquestCityIcon(city) {
    var bgColor = '#8B4513'; // Default brown
    if (city.type === 'crossing') bgColor = '#2E8B57'; // Green for crossing
    if (city.type === 'camp') bgColor = '#FFD700'; // Gold for camp
    if (city.type === 'treaty') bgColor = '#4169E1'; // Blue for treaty
    if (city.type === 'conquered') bgColor = '#DC143C'; // Red for conquered

    return L.divIcon({
      className: 'conquest-marker',
      html: '<div style="width:12px;height:12px;border-radius:50%;background:' + bgColor + ';border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.4);"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  }

  // Get tooltip class based on city type
  function getConquestTooltipClass(city) {
    if (city.type === 'crossing') return 'conquest-marker-label conquest-label-crossing';
    return 'conquest-marker-label conquest-label-city';
  }

  if (typeof JOSHUA_CONQUEST_CITIES !== 'undefined' && JOSHUA_CONQUEST_CITIES.length) {
    JOSHUA_CONQUEST_CITIES.forEach(function (city) {
      var marker = L.marker(city.coords, { icon: createConquestCityIcon(city) });

      // Create popup content
      var refLink = city.referenceUrl
        ? '<a href="' + city.referenceUrl + '" target="_blank" rel="noopener">' + city.reference + '</a>'
        : city.reference;
      var popupHtml =
        '<div class="conquest-popup">' +
        '<h3>' + city.name + '</h3>' +
        '<p class="conquest-order">Conquest Order: #' + city.order + '</p>' +
        '<p class="conquest-type">Type: ' + city.type.charAt(0).toUpperCase() + city.type.slice(1) + '</p>' +
        '<p class="ref">' + refLink + '</p>' +
        '<p class="description">' + city.description + '</p>' +
        '</div>';

      marker.bindPopup(popupHtml, { maxWidth: 280 });
      // Tooltip with permanent: true so labels always show when Joshua's Conquest is enabled
      marker.bindTooltip(city.name, { permanent: true, direction: city.type === 'crossing' ? 'bottom' : 'top', className: getConquestTooltipClass(city) });
      marker.cityData = city;
      joshuaCityMarkers.push(marker);
    });
  }

  // --- Territory layers ---
  const territoryLayers = {};
  const territoryLayerGroup = L.layerGroup().addTo(map);

  // Debug: verify coords are [lat, lng] (two numbers; lat -90..90, lng -180..180)
  function verifyCoordsFormat(coords, territoryId) {
    if (!Array.isArray(coords) || coords.length < 3) {
      console.warn('[Territory]', territoryId, 'invalid coords: not an array or fewer than 3 points', coords);
      return false;
    }
    for (var i = 0; i < coords.length; i++) {
      var pt = coords[i];
      if (!Array.isArray(pt) || pt.length !== 2) {
        console.warn('[Territory]', territoryId, 'point', i, 'invalid: expected [lat, lng]', pt);
        return false;
      }
      var lat = Number(pt[0]), lng = Number(pt[1]);
      if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        console.warn('[Territory]', territoryId, 'point', i, 'out of range [lat, lng]:', pt);
        return false;
      }
    }
    return true;
  }

  // Create polygon layers for each territory (all initially hidden)
  // Leaflet expects [latitude, longitude]; data.js coords are already [lat, lng]
  console.log('[Territories] Loading', TERRITORIES.length, 'territories:', TERRITORIES.map(function (t) { return t.id; }));
  TERRITORIES.forEach(function (t) {
    var isAbraham = t.id === 'abraham-promised';
    if (isAbraham) {
      console.log('[Abraham] Territory data:', { id: t.id, name: t.name, coordsLength: t.coords ? t.coords.length : 0 });
      console.log('[Abraham] Raw coordinates (expected [lat, lng] per point):', JSON.stringify(t.coords, null, 2));
    }
    var coordsValid = verifyCoordsFormat(t.coords, t.id);
    if (isAbraham) {
      console.log('[Abraham] Coordinates format valid:', coordsValid);
    }
    var layer;
    try {
      layer = L.polygon(t.coords, {
        color: t.color,
        fillColor: t.color,
        fillOpacity: 0,
        opacity: 0,
        weight: 2,
      });
      if (isAbraham) {
        console.log('[Abraham] Polygon created successfully. Bounds:', layer.getBounds ? layer.getBounds().toBBoxString() : 'N/A');
      }
    } catch (err) {
      console.error('[Territory] Failed to create polygon for', t.id, err);
      return;
    }
    layer.territoryData = t;
    layer.on('click', function () {
      showTerritoryPopup(this);
    });
    territoryLayers[t.id] = layer;
    territoryLayerGroup.addLayer(layer);
    if (isAbraham) {
      console.log('[Abraham] Polygon added to map.');
    }
  });

  // Ensure hidden territory polygons don't receive clicks (path may not exist until after render)
  map.whenReady(function () {
    Object.keys(territoryLayers).forEach(function (id) {
      const layer = territoryLayers[id];
      if (layer._path) layer._path.style.pointerEvents = 'none';
    });
  });

  // Helper: set territory layer visibility and opacity (opacityPercent 0-100 scales each territory's base opacity)
  function setTerritoryLayerVisibility(ids, visible, opacityPercent) {
    ids.forEach(function (id) {
      const layer = territoryLayers[id];
      if (!layer) return;
      const t = layer.territoryData;
      const baseFill = t.opacity;
      const fillOpacity = visible ? (opacityPercent / 100) * baseFill : 0;
      layer.setStyle({
        fillOpacity: fillOpacity,
        opacity: visible ? 1 : 0,
        fillColor: t.color,
        color: t.color,
      });
      if (layer._path) layer._path.style.pointerEvents = visible ? 'auto' : 'none';
    });
  }

  // Hide all territory layers
  function hideAllTerritories() {
    Object.keys(territoryLayers).forEach(function (id) {
      territoryLayers[id].setStyle({ fillOpacity: 0, opacity: 0 });
      if (territoryLayers[id]._path) territoryLayers[id]._path.style.pointerEvents = 'none';
    });
  }

  // Get array of selected period keys (excludes "none")
  function getSelectedPeriodKeys() {
    const checkboxes = document.querySelectorAll('.period-checkbox:checked');
    const keys = [];
    for (var i = 0; i < checkboxes.length; i++) {
      var val = checkboxes[i].value;
      if (val !== 'none') keys.push(val);
    }
    return keys;
  }

  // Apply visibility and legend from current period checkboxes (multi-select)
  function applyPeriodFromCheckboxes() {
    const noneEl = document.getElementById('period-none');
    if (noneEl && noneEl.checked) {
      hideAllTerritories();
      updateLegend([]);
      return;
    }
    const selectedKeys = getSelectedPeriodKeys();
    const opacityPercent = getOpacityPercent();
    hideAllTerritories();
    if (!selectedKeys.length) {
      updateLegend([]);
      return;
    }
    const visibleTerritories = [];
    TERRITORIES.forEach(function (t) {
      if (selectedKeys.indexOf(t.periodKey) !== -1) {
        setTerritoryLayerVisibility([t.id], true, opacityPercent);
        visibleTerritories.push(t);
      }
    });
    updateLegend(visibleTerritories);
  }

  function getOpacityPercent() {
    return Number(document.getElementById('opacity-slider').value, 10) || 100;
  }

  // --- Popup content for territory click ---
  function showTerritoryPopup(layer) {
    const t = layer.territoryData;
    const refLink = t.referenceUrl
      ? '<a href="' + t.referenceUrl + '" target="_blank" rel="noopener">' + t.reference + '</a>'
      : t.reference;
    const html =
      '<div class="territory-popup">' +
      '<h3>' + escapeHtml(t.name) + '</h3>' +
      '<p class="period">' + escapeHtml(t.period) + '</p>' +
      '<p class="ref">' + refLink + '</p>' +
      '<p class="description">' + escapeHtml(t.description) + '</p>' +
      '</div>';
    layer.bindPopup(html, { maxWidth: 320 }).openPopup();
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  // --- Legend ---
  function updateLegend(territories) {
    const legend = document.getElementById('legend');
    const container = document.getElementById('legend-items');
    const journeyCheckbox = document.getElementById('show-abraham-journey');
    const joshuaCheckbox = document.getElementById('show-joshua-conquest');
    const showJourney = journeyCheckbox && journeyCheckbox.checked;
    const showJoshua = joshuaCheckbox && joshuaCheckbox.checked;
    container.innerHTML = '';
    legend.hidden = !(territories.length || showJourney || showJoshua);
    if (legend.hidden) return;
    
    // Territory legend items
    territories.forEach(function (t) {
      const refLink = t.referenceUrl
        ? '<a href="' + t.referenceUrl + '" target="_blank" rel="noopener">' + escapeHtml(t.reference) + '</a>'
        : escapeHtml(t.reference);
      const el = document.createElement('div');
      el.className = 'legend-item';
      el.innerHTML =
        '<span class="legend-color" style="background:' + t.color + '"></span>' +
        '<span><span class="legend-name">' + escapeHtml(t.name) + '</span><br><span class="legend-ref">' + refLink + '</span><br><span>' + escapeHtml(t.description) + '</span></span>';
      container.appendChild(el);
    });
    
    // Abraham's Journey legend
    if (showJourney && typeof ABRAHAM_JOURNEY !== 'undefined') {
      const journeyEl = document.createElement('div');
      journeyEl.className = 'legend-item legend-item-journey';
      journeyEl.innerHTML =
        '<span class="legend-line legend-line-dashed" style="border-color:' + (ABRAHAM_JOURNEY.color || '#DC143C') + '"></span>' +
        '<span><span class="legend-name">' + escapeHtml(ABRAHAM_JOURNEY.labelText || ABRAHAM_JOURNEY.name) + '</span><br><span>Ur → Haran → Shechem → Bethel/Ai → Negev (Genesis 11:31–12:5)</span></span>';
      container.appendChild(journeyEl);
    }
    
    // Joshua's Conquest legend
    if (showJoshua) {
      // Southern campaign
      if (typeof JOSHUA_CONQUEST_ROUTE !== 'undefined') {
        const joshuaSouthEl = document.createElement('div');
        joshuaSouthEl.className = 'legend-item legend-item-joshua';
        joshuaSouthEl.innerHTML =
          '<span class="legend-line legend-line-dashed" style="border-color:' + (JOSHUA_CONQUEST_ROUTE.color || '#8B4513') + '"></span>' +
          '<span><span class="legend-name">Southern Campaign</span><br><span>Gilgal → Jericho → Ai → Gibeon → Southern cities (Joshua 6–10)</span></span>';
        container.appendChild(joshuaSouthEl);
      }
      
      // Northern campaign
      if (typeof JOSHUA_NORTHERN_ROUTE !== 'undefined') {
        const joshuaNorthEl = document.createElement('div');
        joshuaNorthEl.className = 'legend-item legend-item-joshua';
        joshuaNorthEl.innerHTML =
          '<span class="legend-line legend-line-dashed" style="border-color:' + (JOSHUA_NORTHERN_ROUTE.color || '#2E8B57') + '"></span>' +
          '<span><span class="legend-name">Northern Campaign</span><br><span>Gilgal → Hazor (Joshua 11)</span></span>';
        container.appendChild(joshuaNorthEl);
      }
      
      // City markers legend
      const cityLegendEl = document.createElement('div');
      cityLegendEl.className = 'legend-item legend-item-joshua-cities';
      cityLegendEl.innerHTML =
        '<span class="legend-markers">' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#2E8B57;border:1px solid #999;margin-right:4px;" title="Crossing"></span>' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#FFD700;border:1px solid #999;margin-right:4px;" title="Camp"></span>' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#DC143C;border:1px solid #999;margin-right:4px;" title="Conquered"></span>' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#4169E1;border:1px solid #999;" title="Treaty"></span>' +
        '</span>' +
        '<span><span class="legend-name">Conquest Cities</span><br><span>Green=Crossing, Gold=Camp, Red=Conquered, Blue=Treaty</span></span>';
      container.appendChild(cityLegendEl);
    }
  }

  // --- Biblical location markers (clustered) ---
  const markersCluster = L.markerClusterGroup({
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
  });

  // Small blue dot icon; label shown via tooltip
  function createLocationIcon(label) {
    return L.divIcon({
      className: 'location-marker',
      html: '<div style="width:10px;height:10px;border-radius:50%;background:#2563eb;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });
  }

  function addLocationMarkers() {
    markersCluster.clearLayers();
    BIBLICAL_LOCATIONS.cities.forEach(function (loc) {
      const marker = L.marker(loc.coords, { icon: createLocationIcon(loc.name) });
      marker.bindTooltip(loc.name, { permanent: true, direction: 'top', className: 'location-marker-label' });
      markersCluster.addLayer(marker);
    });
    BIBLICAL_LOCATIONS.features.forEach(function (loc) {
      const marker = L.marker(loc.coords, { icon: createLocationIcon(loc.name) });
      marker.bindTooltip(loc.name, { permanent: true, direction: 'top', className: 'location-marker-label' });
      markersCluster.addLayer(marker);
    });
    map.addLayer(markersCluster);
  }

  function removeLocationMarkers() {
    map.removeLayer(markersCluster);
    markersCluster.clearLayers();
  }

  addLocationMarkers();

  // --- Fit to territory (all visible periods) ---
  function fitToTerritory() {
    const selectedKeys = getSelectedPeriodKeys();
    const joshuaCheckbox = document.getElementById('show-joshua-conquest');
    const showJoshua = joshuaCheckbox && joshuaCheckbox.checked;
    
    if (!selectedKeys.length && !showJoshua) {
      map.setView(JERUSALEM, INITIAL_ZOOM);
      return;
    }
    
    var bounds = null;
    
    // Include territories
    const territories = TERRITORIES.filter(function (t) { return selectedKeys.indexOf(t.periodKey) !== -1; });
    if (territories.length) {
      bounds = L.latLngBounds(territories[0].coords);
      territories.forEach(function (t) {
        t.coords.forEach(function (c) { bounds.extend(c); });
      });
    }
    
    // Include Joshua conquest if visible
    if (showJoshua && typeof JOSHUA_CONQUEST_CITIES !== 'undefined') {
      JOSHUA_CONQUEST_CITIES.forEach(function (city) {
        if (!bounds) {
          bounds = L.latLngBounds([city.coords]);
        } else {
          bounds.extend(city.coords);
        }
      });
    }
    
    if (bounds) {
      map.fitBounds(bounds, { padding: [30, 30], maxZoom: 9 });
    }
  }

  // --- Control panel: map style ---
  document.querySelectorAll('input[name="map-style"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (this.checked) setMapStyle(this.value);
    });
  });

  // --- Control panel: period (multi-select checkboxes) ---
  document.querySelectorAll('.period-checkbox').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (this.id === 'period-none' && this.checked) {
        document.querySelectorAll('.period-checkbox').forEach(function (cb) {
          if (cb !== checkbox) cb.checked = false;
        });
      } else if (this.id !== 'period-none' && this.checked) {
        var noneEl = document.getElementById('period-none');
        if (noneEl) noneEl.checked = false;
      }
      applyPeriodFromCheckboxes();
    });
  });

  // --- Abraham's Journey checkbox: show/hide route and refresh legend ---
  (function () {
    const journeyCheckbox = document.getElementById('show-abraham-journey');
    if (!journeyCheckbox || !journeyLine || !journeyLabel) return;
    function toggleJourney() {
      if (journeyCheckbox.checked) {
        journeyLayerGroup.addLayer(journeyLine);
        journeyLayerGroup.addLayer(journeyLabel);
      } else {
        journeyLayerGroup.removeLayer(journeyLine);
        journeyLayerGroup.removeLayer(journeyLabel);
      }
      var selectedKeys = getSelectedPeriodKeys();
      var visibleTerritories = TERRITORIES.filter(function (t) { return selectedKeys.indexOf(t.periodKey) !== -1; });
      updateLegend(visibleTerritories);
    }
    journeyCheckbox.addEventListener('change', toggleJourney);
  })();

  // --- Joshua's Conquest checkbox: show/hide route, cities, and refresh legend ---
  (function () {
    const joshuaCheckbox = document.getElementById('show-joshua-conquest');
    if (!joshuaCheckbox) return;
    
    function toggleJoshuaConquest() {
      if (joshuaCheckbox.checked) {
        // Add southern campaign route
        if (joshuaSouthernLine) joshuaLayerGroup.addLayer(joshuaSouthernLine);
        if (joshuaSouthernLabel) joshuaLayerGroup.addLayer(joshuaSouthernLabel);
        
        // Add northern campaign route
        if (joshuaNorthernLine) joshuaLayerGroup.addLayer(joshuaNorthernLine);
        if (joshuaNorthernLabel) joshuaLayerGroup.addLayer(joshuaNorthernLabel);
        
        // Add city markers
        joshuaCityMarkers.forEach(function (marker) {
          joshuaLayerGroup.addLayer(marker);
        });
      } else {
        // Remove everything
        joshuaLayerGroup.clearLayers();
      }
      
      var selectedKeys = getSelectedPeriodKeys();
      var visibleTerritories = TERRITORIES.filter(function (t) { return selectedKeys.indexOf(t.periodKey) !== -1; });
      updateLegend(visibleTerritories);
    }
    
    joshuaCheckbox.addEventListener('change', toggleJoshuaConquest);
  })();

  // --- Show Biblical Locations checkbox ---
  document.getElementById('show-locations').addEventListener('change', function () {
    if (this.checked) addLocationMarkers();
    else removeLocationMarkers();
  });

  // --- Opacity slider ---
  const opacitySlider = document.getElementById('opacity-slider');
  const opacityValue = document.getElementById('opacity-value');
  opacitySlider.addEventListener('input', function () {
    opacityValue.textContent = this.value;
    applyPeriodFromCheckboxes();
  });

  // --- Fit to Territory button ---
  document.getElementById('fit-territory').addEventListener('click', fitToTerritory);

  // --- Panel toggle (mobile) ---
  const panel = document.getElementById('control-panel');
  const toggle = document.getElementById('panel-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('is-collapsed');
    });
  }

  // --- Disclaimer modal ---
  const DISCLAIMER_KEY = 'biblical-geography-disclaimer-accepted';
  const modal = document.getElementById('disclaimer-modal');
  const acceptBtn = document.getElementById('disclaimer-accept');
  const dontShowCheck = document.getElementById('disclaimer-dont-show');

  function showDisclaimer() {
    modal.classList.add('is-visible');
  }

  function hideDisclaimer() {
    modal.classList.remove('is-visible');
    if (dontShowCheck.checked) {
      try { localStorage.setItem(DISCLAIMER_KEY, '1'); } catch (e) {}
    }
  }

  try {
    if (!localStorage.getItem(DISCLAIMER_KEY)) showDisclaimer();
  } catch (e) {
    showDisclaimer();
  }

  acceptBtn.addEventListener('click', hideDisclaimer);
})();
