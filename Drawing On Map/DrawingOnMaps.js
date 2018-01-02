/**
 * ---------------
 * Drawing on Map
 * ---------------
 * You can add objects to map to designate points, lines, areas or collections of objects.
 * The Google Maps JavaScript API calls these objects "overlays". Overlays are tied to
 * latitude/longitude coordinates, so they move when you drag or zoom the map.
 * 
 * ------------------
 * Types of Overlays
 * ------------------
 * - Single locations on map are displayed using "markers". Markers may sometimes display 
 *   custom icon images, so they might referred as "icons".
 * - "Info window" is a special kind of overlay for displaying content within a popup
 *   ballon at a given location on map.
 * - Lines on map are displayed using "polylines" representing an ordered sequence of locations.
 * - Areas of arbitrary shape on map are displayed using "polygons". Like polylines, polygons
 *   are an ordered sequence of locations. Unlike, polylines, polygons define a region which
 *   they enclose.
 * - You can define circles and rectangles on map
 * - Use "symbol" to customize the icon on a marker or add images to a polyline. A symbol is a
 *   vector-based image defined by a path, using SVG path notation. The API also provides
 *   options to control how the symbol will be displayed.
 * - If you want to place an image on map, you can use a "ground overlay".
 * - You can also implement your own "custom overlays" by implementing the "OverlayView" interface.
 * - Map layers may be displayed using "overlay map types". You can create your own set of tiles
 *   by creating custom map types which either replace base map tile sets, or appear on top
 *   of existing base map tile sets as overlays.
 */