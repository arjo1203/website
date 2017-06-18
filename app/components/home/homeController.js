website.controller('homeController', ['$scope', '$content', '$window', function($scope, $content, $window) {
	$scope.projectCols = 2;
	$scope.divides12 = [1,2,3,4,6];		// since bootstrap grid is divided into 12 sections
	$scope.updateProjects = function() {
		$content.getContent().success(function(data) {
			$scope.projects = data.projects;
		});
	};
	$scope.setProjectCols = function(cols) {
		$scope.projectCols = cols;
		$scope.updateProjects();
	};
	$scope.init = function() {
		$content.getContent().success(function(data) {
			$scope.name = data.name;
			$scope.job = data.job;
			$scope.about = data.about;
			$scope.projects = data.projects;
			$scope.skills = data.skills;
			$scope.header = {
				name: $scope.name,
				job: $scope.job
			};
			$scope.projectCols = data.projectCols;
			$scope.profilePicSrc = data.profilePicSrc;
		});
	};
	$scope.init();

	var appWindow = angular.element($window);
	$scope.trig = false;

	// appWindow.bind('resize', function (e) {
	// 	// console.log('Resized your browser');
	// 	// console.log(e);
	// 	// console.log(e.target.innerWidth);

	// 	if(e.target.innerWidth < 767) {
	// 		if(!$scope.trig) {
	// 			$('#headerBgImg').hide();
	// 			$scope.trig = true;
	// 		}
	// 	}
	// 	else {

	// 	}
	// });
}]);


