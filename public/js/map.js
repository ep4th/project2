function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(34.0522,-118.2437),
    zoom:12,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
  }
  myMap();