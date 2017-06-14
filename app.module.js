// var website = angular.module('Website', []);
var website = angular.module('Website', ['ui.router']);
website.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: './components/home/homeView.html',
            controller: 'homeController'
        });

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        // .state('whiteboard', {
        //     // we'll get to this in a bit
        //     url: '/whiteboard',
        //     templateUrl: './app/components/whiteboard/whiteboardView.html',
        //     controller: 'whiteboardController'
        // });

});
website.factory('$content', ['$http', function($http) {
    return $http.get('app.content.json');
}]);