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

            function onSuccess(imageURL) {
                var image = document.getElementById('htmlImagem');
                image.src = "data:image/jpeg;base64," + imageURL;
                imgEnviar=image.src;
                console.log(imgEnviar);
                
            }

            function onFail(message) {
                alert('Erro: ' + message);
            }

//---------------------------fim camera---------------------------------------

 app.controller('formularioChamado', function($scope, $http) {


  $scope.enviarForm = function(chamado){
   
   // console.log($scope.chamado.htmlImagem);

    $http({
        url: 'https://modulosamu.herokuapp.com/chamado/store',
        method: 'POST',
        data: {

          'nome': $scope.chamado.nome,
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