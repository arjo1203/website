website.directive('projectItem', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './shared/projectItem/projectItem.html'
  };
});