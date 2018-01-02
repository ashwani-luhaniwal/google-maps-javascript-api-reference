/**
 * ----------
 * Map Types
 * ----------
 * The API uses "MapType" object to hold information about these maps. A "MapType" is an
 * interface that defines the display and usage of map tiles and the translation of
 * coordinate systems from screen coordinates to world coordinates. Each "MapType" must
 * contain a few methods to handle retrieval and release of tiles, and properties that 
 * define its visual behavior.
 */

/**
 * Basic Map Types
 * ----------------
 * There are 4 types of maps available within Google Maps JavaScript API. 
 * The following map types are available in Maps JavaScript API:
 * - "roadmap": displays the default road map view. This is default map type.
 * - "satellite": displays Google Earth satellite images.
 * - "hybrid": displays a mixture of normal and satellite views.
 * - "terrain": displays a physical map based on terrain information.
 * 
 * You modify the map type in use by "Map" by setting its "mapTypeId" property, either within
 * the constructor via setting its "Map options" object, or by calling the map's
 * "setMapTypeId()" method. The "mapTypeID" property defaults to "roadmap".
 */
// Setting the "mapTypeId" upon construction:
var myLatlng = new google.maps.LatLng(-34.397, 150.644);
var mapOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: 'satellite'
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// Modifying the mapTypeId dynamically
map.setMapTypeId('terrain');

// You don't actually set the map's map type directly, but instead set its "mapTypeId" to
// reference a "MapType" using an identifier. The Maps JavaScript API uses a map type
// registry to manage these references.

/**
 * Modifying Map Type Registry
 * ----------------------------
 * A map's "mapTypeId" is string identifier that is used to associate a "MapType" with a unique
 * value. Each "Map" object maintains a "MapTypeRegistry" which contains the collection of
 * available "MapType" for that map. This registry is used to select the types of maps which are
 * avaibale in Map's MapType control.
 */

// Modify the control to only display two maptypes, the default ROADMAP and the custom 'mymap'
// Note that because this is simply an association, we don't need to modify the 
// MapTypeRegistry beforehand.
var MY_MAPTYPE_ID = 'mymaps';

var mapOptions = {
    zoom: 12,
    center: brooklyn,
    mapTypeControlOptions: {
        mapTypeIds: ['roadmap', MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
};
// Create our map. This creation will implicitly create a map type registry
map = new google.maps.Map(document.getElementById('map'), mapOptions);

// Create your custom map type using your own code
var myMapType = new MY_MAPTYPE_ID();

// Set the registry to associate 'mymap' with the custom map type we created, and set the
// map to show that map type.
map.mapTypes.set(MY_MAPTYPE_ID, myMapType);

/**
 * Styled Maps
 * ------------
 * The StyledMapType allows you to customize the presentation of standard Google base maps,
 * changing the visual display of such elements as roads, parks and built-up areas to reflect
 * a different style than that used in default map type.
 */