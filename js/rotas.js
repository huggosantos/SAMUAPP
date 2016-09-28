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

function toTop(){
  $('html, body').animate({
    scrollTop: 0
  }, 800, 'linear');
}

app.controller('sobre', function($scope) {  
  toTop();
});

app.controller('formularioChamado', function($scope, $http) {

 $scope.enviarForm = function(chamado){
  if(latitude==undefined){
   Materialize.toast('Chamado não enviado !', 4000)
   Materialize.toast('Ativar geolocalização !', 4000)
 }else{
   latitude=undefined;
   longitude=undefined;
   pararCaptura();
   var value = window.localStorage.getItem("chave");
   window.localStorage.removeItem("chave");
   //console.log(latitude);
   //var imgEnviar = JSON.stringify(value);
   //alert(imgEnviar);
   $http({
    url: 'https://modulosamu.herokuapp.com/chamado/store',
    method: 'POST',
    data: {
      //'nome': $scope.chamado.nome,
      //'sobrenome': $scope.chamado.sobrenome,
      //'rua': $scope.chamado.rua,
      //'bairro': $scope.chamado.bairro,
      //'cidade': $scope.chamado.cidade,
      //'referencia': $scope.chamado.ref,
      latitude: latitude,
      longitude: longitude,
      descricao: $scope.chamado.descricao,
      img: value,
      

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }

  }).
   success(function (data) {
    $scope.success = true;
    //alert(data);
    $scope.user = {};
  }).
   error(function (data) {
    $scope.error = true;

  }); 
 }
}


});