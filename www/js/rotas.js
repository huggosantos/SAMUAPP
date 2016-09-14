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
    FastClick.attach(document.body);
});

app.controller('helow', function($scope) {
 $scope.mensagem = "teste pohha";
});

 app.controller('formularioChamado', function($scope, $routeParams) {
  $scope.enviarForm = function(chamado){
    console.log($scope.nome);
  }


  
    
    });