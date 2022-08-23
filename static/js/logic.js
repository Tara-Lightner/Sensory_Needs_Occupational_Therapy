// Add console.log to check to see if our code is working.
console.log("working");

// Base map
let darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40, -98.5],
	zoom: 4,
	layers: [darkMap]
});

// Create a base layer.
let baseMaps = {
  "Dark Map": darkMap
};

// Added layer
let States = new L.LayerGroup();

// Add a reference to the overlays object.
let overlays = {
  "States": States,
};
