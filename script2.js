
var myApp = angular.module('myApp', []);


var template =
`<div class="container">
  <div class="row">
    <div class="col-lg-6"><strong>Nome</strong></div>
    <div class="col-lg-6"><strong>Cognome</strong></div>
    </div>
    <br>
    <div ng-repeat="x in persone">
      <my-persone persona="x" removeelement="RemoveElement"></my-persone>
      </div>  
</div>     
`

myApp.directive('myTemplate', function() {
  return { 
    template: template,
    controller: function($scope){
      $scope.persone = [
        {
            "Nome" :"Francesca",
            "Cognome" : "Ciccarelli"
        },
        {
            "Nome" :"Mario",
            "Cognome" :"Rossi"
        },
        {
            "Nome": "Vincenzo",
            "Cognome": "Verdi"
        },
    ]
    $scope.RemoveElement = function(index){
      console.log("ciao");
      $scope.persone.splice(index,1);
    }
      }
  }
});

myApp.directive('myPersone', function(){
   
  return {
    scope :{
          nome: "=",
          cognome: "=",
          persona: "=",
          removeelement: "=",
    },
    controller: function(){},
    template:  `<div class="row">
      <div class="col-lg-6">{{persona.Nome}}</div>
      <div class="col-lg-4">{{persona.Cognome}}</div>
      <button type="button" class="btn btn-danger" ng-click="removeelement()">Submit</button>
      </div>
      <br>
        `
    
  };
});


