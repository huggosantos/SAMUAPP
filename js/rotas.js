var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
  /*ROTAS*/
  $routeProvider
  .when('/formularioChamado', {
    templateUrl: 'paginas/formularioChamado.html',
    controller: 'formularioChamado'
  })
  .when('/sobre', {
    templateUrl: 'paginas/sobre.html',
    controller: 'sobre'
  })
  .otherwise('/home', {
   templateUrl: 'templates/home.html',
   controller: 'home'
 });
}).run(function() {
    //remove 300ms delay touch
    //FastClick.attach(document.body);
  });



app.controller('formularioChamado', function($scope, $http) {
 $(document).ready(function() {
  $('select').material_select();
});

 $scope.enviarForm = function(chamado){


  $http({
    url: 'https://modulosamu.herokuapp.com/chamado/store',
    method: 'POST',
    data: {

      'nome': $scope.chamado.nome,
      'sobrenome': $scope.chamado.sobrenome,
      'rua': $scope.chamado.rua,
      'bairro': $scope.chamado.bairro,
      'cidade': $scope.chamado.cidade,
      'referencia': $scope.chamado.ref,
      'descricao': $scope.chamado.descricao,
      'img': imgEnviar,
      'latitude': geolocalizacao.coords.latitude,
      'longitude': geolocalizacao.coords.longitude,


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