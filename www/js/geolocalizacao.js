var watchID;

        function iniciarCaptura(){
            watchID = navigator.geolocation.watchPosition(mostrarTela, fail, { timeout: 30000 });
        }

        function mostrarTela(position){
            var html ='Latitude: ' + position.coords.latitude         + '<br />' +
                      'Longitude: '         + position.coords.longitude         + '<br />' +
                      'Altitude: '          + position.coords.altitude          + '<br />' +
                      'Precisão: '          + position.coords.accuracy          + '<br />' +
                      'Precisão de altitude: ' + position.coords.altitudeAccuracy  + '<br />' +
                      'Direção: '           + position.coords.heading           + '<br />' +
                      'Velocidade: '        + position.coords.speed             + '<br />' +
                      'Timestamp: '         + new Date(position.timestamp)      + '<br />';


            var result = document.getElementById("result");

            result.innerHTML = html;
        }

        function fail(error){
            alert('Error: ' + error.code);
            alert('Error: ' + error.message);
        }

        function pararCaptura(){
            if(watchID){
                navigator.geolocation.clearWatch(watchID);
                watchID=null;
            }

        }


      