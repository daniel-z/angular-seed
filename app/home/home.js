(function () {

    angular.module('myApp.home')
        .controller('HomeCtrl',  HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
        this.name = 'Kaiser Sose';
        this.number = '867-5309';
    }
})();
