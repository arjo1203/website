website.directive('skillItem', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './shared/skillItem/skillItem.html'
  };
});