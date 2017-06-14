nerdboard.directive('nerdPageInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './app/directives/nerdPageInfo/nerdPageInfo.html'
  };
});