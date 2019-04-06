var customLabel = {
  coder: {
    label: 'C'
  }
};

  function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.0522, lng: -118.2437},
      zoom: 8
      });
  var infoWindow = new google.maps.InfoWindow;

    // Change this depending on the name of your PHP or XML file
    downloadUrl('https://github.com/ep4th/project2/blob/irene/power/.php', function(data) {
      var xml = data.responseXML;
      var markers = xml.documentElement.getElementsByTagName('marker');
      Array.prototype.forEach.call(markers, function(markerElem) {
        var id = markerElem.getAttribute('id');
        var name = markerElem.getAttribute('name');
        var zip = markerElem.getAttribute('zip');
        var point = new google.maps.LatLng(
            parseFloat(markerElem.getAttribute('lat')),
            parseFloat(markerElem.getAttribute('lng')));

        var infowincontent = document.createElement('div');
        var strong = document.createElement('strong');
        strong.textContent = name
        infowincontent.appendChild(strong);
        infowincontent.appendChild(document.createElement('br'));

        var text = document.createElement('text');
        text.textContent = zip
        infowincontent.appendChild(text);
        var icon = customLabel[type] || {};
        var marker = new google.maps.Marker({
          map: map,
          position: point,
          label: icon.label
        });
        marker.addListener('click', function() {
          infoWindow.setContent(infowincontent);
          infoWindow.open(map, marker);
        });
      });
    });
  }



function downloadUrl(url, callback) {
  var request = window.ActiveXObject ?
      new ActiveXObject('Microsoft.XMLHTTP') :
      new XMLHttpRequest;

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      request.onreadystatechange = doNothing;
      callback(request, request.status);
    }
  };

  request.open('GET', url, true);
  request.send(null);
}

function doNothing() {}







// var customLabel = {
//   coder: {
//     label: 'C'
//   }
// };

// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 34.0522, lng: -118.2437 },
//     zoom: 8
//   });
//   infowindow = new google.maps.InfoWindow({
//     content: document.getElementById('form')
//   });

//   messagewindow = new google.maps.InfoWindow({
//     content: document.getElementById('message')
//   })
//   google.maps.event.addListener(marker, 'click', function () {
//     infowindow.open(map, marker);
//   });
//   function saveData() {
//     var name = escape(document.getElementById('name').value);
//     var address = escape(document.getElementById('address').value);
//     var type = document.getElementById('type').value;
//     var latlng = marker.getPosition();
//     var url = 'phpsqlinfo_addrow.php?name=' + name + '&address=' + address +
//       '&type=' + type + '&lat=' + latlng.lat() + '&lng=' + latlng.lng();

//     downloadUrl(url, function (data, responseCode) {

//       if (responseCode == 200 && data.length <= 1) {
//         infowindow.close();
//         messagewindow.open(map, marker);
//       }
//     });
//   }


//   // Change this depending on the name of your PHP or XML file
//   downloadUrl('https://github.com/ep4th/project2/blob/irene/power/.php', function (data) {
//     console.log('xml', data.responseXML);
//     var xml = data.responseXML;
//     var markers = xml.documentElement.getElementsByTagName('marker');
//     Array.prototype.forEach.call(markers, function (markerElem) {
//       var id = markerElem.getAttribute('id');
//       var name = markerElem.getAttribute('name');
//       var zip = markerElem.getAttribute('zip');
//       var point = new google.maps.LatLng(
//         parseFloat(markerElem.getAttribute('lat')),
//         parseFloat(markerElem.getAttribute('lng')));

//       var infowincontent = document.createElement('div');
//       var strong = document.createElement('strong');
//       strong.textContent = name
//       infowincontent.appendChild(strong);
//       infowincontent.appendChild(document.createElement('br'));

//       var text = document.createElement('text');
//       text.textContent = zip
//       infowincontent.appendChild(text);
//       var icon = customLabel[type] || {};
//       var marker = new google.maps.Marker({
//         map: map,
//         position: point,
//         label: icon.label
//       });
//       marker.addListener('click', function () {
//         infoWindow.setContent(infowincontent);
//         infoWindow.open(map, marker);
//       });
//     });
//   });
// }



// function downloadUrl(url, callback) {
//   var request = window.ActiveXObject ?
//     new ActiveXObject('Microsoft.XMLHTTP') :
//     new XMLHttpRequest;

//   request.onreadystatechange = function () {
//     if (request.readyState == 4) {
//       request.onreadystatechange = doNothing;
//       callback(request, request.status);
//     }
//   };

//   request.open('GET', url, true);
//   request.send(null);
// }

// function doNothing() { }