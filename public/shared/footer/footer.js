website.directive('wbFooter', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './shared/footer/footer.html'
  };
});