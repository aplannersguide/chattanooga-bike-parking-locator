!function(){"use strict";function a(a){var b=new L.LatLng(a.coords.latitude,a.coords.longitude),d=leafletKnn(c).nearest(b,5),e=$("#entries");i.setLatLng(b),h.setView(b),e.html(""),$.each(d,function(a,b){var c=b.layer.feature.properties,d=void 0===c.name?"?":c.name,g=void 0===c.type?"?":c.type,h=void 0===c.capacity?"?":c.capacity;b.layer.setIcon(f),e.append("<tr><td>"+d+"</td><td>"+g+"</td><td>"+h+"</td></tr>")})}function b(){Modernizr.geolocation&&navigator.geolocation.getCurrentPosition(a)}var c=null,d=[35.0456,-85.2672],e=L.AwesomeMarkers.icon({prefix:"fa",icon:"user",markerColor:"gray"}),f=L.AwesomeMarkers.icon({prefix:"fa",icon:"check",markerColor:"green"}),g=L.AwesomeMarkers.icon({prefix:"fa",icon:"times",markerColor:"red"}),h=L.map("map");h.on("load",function(){$.getJSON("https://data.chattlibrary.org/resource/bicycle-parking-locations-in-the-city-of-chattanooga.json",function(a){var b=[{type:"FeatureCollection",features:$.map(a,function(a){return{type:"Feature",properties:{name:a.name,capacity:a.capacity,description:a.description,type:a.type},geometry:{type:"Point",coordinates:[a.location_1.longitude,a.location_1.latitude]}}})}];c=L.geoJson(b,{pointToLayer:function(a,b){return L.marker(b,{icon:g})}}),c.addTo(h)})}),h.setView(d,18);var i=L.marker(d,{icon:e}),j=new L.StamenTileLayer("toner");h.addLayer(j),i.addTo(h),setInterval(b,1e3)}();