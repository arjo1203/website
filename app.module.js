// var website = angular.module('Website', []);
var website = angular.module('Website', ['ui.router']);
website.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: './components/home/homeView.html',
        controller: 'homeController'
    });

});
website.factory('$content', ['$http', function($http) {
    return $http.get('app.content.json');
}]);
website.filter('rangeSeq', function() {
  return function(input, length, base) {
    if(length == 0) {
        return null;
    }
    range = length - length%base;
    for(i = 0; i <= range-base; i += base) {
        input.push(i);
    }
    if(length%base != 0) {
        input.push(range);
    }
    return input;
  };
});
website.filter('range', function() {
  return function(input, range) {
    for (var i=0; i<=range; i++) {
      input.push(i);
    }
    return input;
  };
});
