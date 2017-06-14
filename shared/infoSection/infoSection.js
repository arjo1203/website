website.directive('infoSection', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './shared/infoSection/infoSection.html'
  };
});