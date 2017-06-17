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
    var $content = {
        getContent: function() {
            return $http.get('app.content.json');
        }
    };
    return $content;
}]);
/*
    Pre: [] | nRange:numItems:n
    Post:
        Ex.1:   [] | nRange:5:2 --> [0,2,4]
        Ex.1:   [] | nRange:5:3 --> [0,3]
 */
website.filter('nRange', function() {
  return function(input, numItems, n) {
    if(numItems == 0) {
        return null;
    }
    range = numItems - numItems%n;
    for(i = 0; i <= range-n; i += n) {
        input.push(i);
    }
    if(numItems%n != 0) {
        input.push(range);
    }
    return input;
  };
});
/*
    Pre: [] | range:numItems
    Post:
        Ex.1:   [] | range:5 --> [0,1,2,3,4]
        Ex.1:   [] | range:2 --> [0,1]
 */
website.filter('range', function() {
  return function(input, numItems) {
    for (var i=0; i<=numItems; i++) {
      input.push(i);
    }
    return input;
  };
});
