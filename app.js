//javascript.js
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 33.7701, lng: -118.1937 },
    zoom: 8,
  });
}
window.initMap = initMap;


//create autocomplete objects for all inputs
var options = {
    types: ['(cities)']
}

//  var input1 = document.getElementById("from");
//  var autocomplete1 = new google.maps.places.Autocomplete(input1, options);