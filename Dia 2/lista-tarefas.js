(function() {
    "use_strict";

    angular.module('listaTarefasApp', []);

    angular.module('listaTarefasApp')
        .controller('listaTarefasController', listaTarefasController);


    // $inject serve para injetar dependências do controller
    listaTarefasController.$inject = ['$scope'];


    // A ordem dos parâmetros importa (no caso só tem o parâmetro $scope, mas quando tem mais de um parâmetro a ordem deve ser a mesma do comando $inject)
    function listaTarefasController($scope){
        // Esse this está referenciando o $scope, mas você deve tomar cuidado com o lugar em que você coloca o this
        // Se o this não for colocado no contexto certo ele poderá estar referenciando outra coisa
        var vm = this;

        vm.tarefas = [
            {text: 'Estudar AngularJS', feito: true},
            {text: 'Fazer uma aplicação em AngularJS', feito: false}
        ]

        vm.restam = restam;
        vm.addTarefas = addTarefas;
        vm.arquivar = arquivar;

        function restam(){
            var count = 0;

            angular.forEach(vm.tarefas, function (trf){
                if(!trf.feito) count++;
            });

            return count;
        }

        function addTarefas() {
            vm.tarefas.push({text: vm.tarefaText, feito: false});
            vm.tarefaText = '';
        }

        function arquivar(){
            // var oldTarefas = vm.tarefas;
            // vm.tarefas = [];
            // angular.forEach(oldTarefas, function(trf){
            //     if(!trf.feito) vm.tarefas.push(trf);
            // });

            vm.tarefas = vm.tarefas.filter(function (trf){ return !trf.feito });
        }

    }

})();   