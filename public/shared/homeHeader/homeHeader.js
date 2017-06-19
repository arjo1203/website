website.directive('homeHeader', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './shared/homeHeader/homeHeader.html'
  };
});