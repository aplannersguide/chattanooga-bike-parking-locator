!function(){"use strict";function a(a){var b=new L.LatLng(a.coords.latitude,a.coords.longitude),d=leafletKnn(c).nearest(b,5),e=$("#entries");i.setLatLng(b),h.setView(b),e.html(""),$.each(d,function(a,b){b.layer.setIcon(f);var c=b.layer.feature.properties;e.append("<tr><td>"+c.Name+"</td><td>"+c.type+"</td><td>"+c.capacity+"</td></tr>")})}function b(){Modernizr.geolocation&&navigator.geolocation.getCurrentPosition(a)}var c=null,d=[35.0456,-85.2672],e=L.AwesomeMarkers.icon({icon:"user",markerColor:"gray"}),f=L.AwesomeMarkers.icon({icon:"ok",markerColor:"green"}),g=L.AwesomeMarkers.icon({icon:"remove",markerColor:"red"}),h=L.map("map");h.on("load",function(){$.getJSON("scripts/data/bicycle_parking.geojson",function(a){c=L.geoJson(a,{pointToLayer:function(a,b){return L.marker(b,{icon:g})}}),c.addTo(h)})}),h.setView(d,18);var i=L.marker(d,{icon:e});L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',maxZoom:18}).addTo(h),i.addTo(h),setInterval(b,1e3)}();