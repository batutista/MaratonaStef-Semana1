(function() {
    "use_strict";

    angular
    .module('app1', [])
    .controller('controlador1', function($scope){
        $scope.name = 'Ronaldo';
        $scope.contador = 10;

    });
    
    angular
    .module('app2', [])
    .controller('controlador2', function($scope){
        $scope.name = 'Italo';
        $scope.contador = 25;

    });

    angular.module("CombineModule", ["app1", "app2"]);

})();   