website.controller('homeController', ['$scope', '$content', function($scope, $content) {
	$content.success(function(data) {
		// console.log(data);
		$scope.name = data.name;
		$scope.job = data.job;
		$scope.about = data.about;
		$scope.projects = data.projects;
		$scope.skills = data.skills;
		$scope.header = {
			name: $scope.name,
			job: $scope.job
		};
	});
	// console.log($scope);
}]);


