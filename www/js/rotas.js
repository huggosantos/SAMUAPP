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
  
  $scope.enviarForm = function(chamado){
   
    console.log($scope.chamado.htmlImagem);


    $http({
        url: 'mail.php',
        method: 'POST',
        data: {
          'nome': $scope.chamado.nome,
          'email': $scope.chamado.email,
          'mensagem': $scope.chamado.email,
          
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          
        }
        
      }).
      success(function (data) {
        $scope.success = true;
        //exemplo de retorno: alert(data['email']);
        $scope.user = {};
      }).
      error(function (data) {
        $scope.error = true;
        
      }); 

  }
  
    });