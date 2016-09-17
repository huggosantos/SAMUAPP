var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
        /*ROTAS*/
        $routeProvider
            .when('/formularioChamado', {
                templateUrl: 'paginas/formularioChamado.html',
                controller: 'formularioChamado'
            })
               .otherwise('/home', {
               templateUrl: 'templates/home.html',
               controller: 'home'
            });
        }).run(function() {
    //remove 300ms delay touch
    //FastClick.attach(document.body);
});

app.controller('helow', function($scope) {
 //$scope.mensagem = "teste pohha";
});

 app.controller('formularioChamado', function($scope, $http) {
//----------------------------camera------------------------------------------
  var imgEnviar;
  function capturarImagem(){
     navigator.camera.getPicture(onSuccess, onFail,
  {
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.CAMERA
  }
  );
}

function onSuccess(imageData) {
  var image = document.getElementById('htmlImagem');
  imgEnviar = image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Erro: ' + message);
}
//---------------------------fim camera---------------------------------------

  $scope.enviarForm = function(chamado){
   
   // console.log($scope.chamado.htmlImagem);
 alert(imgEnviar);

    $http({
        url: 'https://modulosamu.herokuapp.com/chamado/store',
        method: 'POST',
        data: {
          
          'imagen': imgEnviar,
         
          
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          
        }
        
      }).
      success(function (data) {
        $scope.success = true;
          alert(data);
        $scope.user = {};
      }).
      error(function (data) {
        $scope.error = true;
        
      }); 

  }
  
    });