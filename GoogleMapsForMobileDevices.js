/**
 * ------------------------------------------
 * Developing Google Maps for Mobile Devices
 * ------------------------------------------
 * The Google Maps JavaScript API has been designed to load quickly and work well on mobile
 * devices. In particular, we have focused on development for advanced mobile devices such 
 * as Android and iOS handsets. Mobile devices have smaller screen sizes than typical
 * browsers on the desktop. As well, they often have particular behavior specific to those
 * devices. 
 * In order to display Google Maps on mobile devices, follow the steps:
 * - Set <div> containing your map to have width and height attributes of 100%. 
 * - You can detect iPhone and Android devices by inspecting the "navigator.userAgent"
 *   property within the DOM:
 */
function detectBrowser() {
    var useragent = navigator.userAgent;
    var mapdiv = document.getElementById("map");

    if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
        mapdiv.style.width = '100%';
        mapdiv.style.height = '100%';
    } else {
        mapdiv.style.width = '600px';
        mapdiv.style.height = '800px';
    }
}

// Android and iOS devices respect the following <meta> tag:
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
// This setting specifies that the map should be displayed full-screen and should not be
// resizable by user.