function initMap() {
	// Create a mapQuest.js, write the initMap() function.
	L.mapquest.key = 'N4dzBzbTagDsGXeTblkH2E4FeNGVKBtT';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.88, -117.236],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false
	});

	// Create a marker on top of UCSD.
	L.marker([32.88, -117.236]).addTo(map);
}