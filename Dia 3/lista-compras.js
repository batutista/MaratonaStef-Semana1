(function () {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);

    // FILTROS
    // criando um filtro
    angular.module('listaTarefasApp')
        .filter('capitalize', function(){
            return function(input) {return input.charAt(0).toUpperCase() + input.substring(1); }
        });

    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    // nomeDoFiltro + Filter => só chama o filtro específico. Ex: limitToFilter
    listaTarefasController.$inject = ['$rootScope', 'limitToFilter'];

    function listaTarefasController(root, limitTo) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

        root.listaMensagens = [
            { id: 1, text: 'Mensagem aqui', tipo: 'danger'},
            { id: 2, text: 'Mensagem aqui', tipo: 'info'},
            { id: 3, text: 'Mensagem aqui', tipo: 'success'},
            { id: 4, text: 'Mensagem aqui', tipo: 'warning'}
        ]

        vm.teste = 'teste'
        vm.teste2 = limitTo(vm.teste, 3);

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();
