var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.0522, lng: -118.2437},
      zoom: 8
      });
      infowindow = new google.maps.InfoWindow({
        content: document.getElementById('form')
        });