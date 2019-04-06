var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.0522, lng: -118.2437},
          zoom: 8
        });
        
        var script = document.createElement('script');
        script.src = 'https://api.meetup.com/2/open_events.json?time=,1d&key=34755e7077f1951b231b5a72276260&zip=90038&category=1';
        document.getElementsByTagName('head')[0].appendChild(script);
      }
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      }