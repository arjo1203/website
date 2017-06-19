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
	$scope.layoutProjects = function (width) {
		if(width < 767) {
			$('#project-btns').hide();
			$scope.projectCols = 1;
			$scope.updateProjects();
		}
		else {
			$('#project-btns').show();
			$scope.projectCols = 2;
			$scope.updateProjects();
		}
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
			$scope.profilePicSrc = data.profilePicSrc;
			$scope.layoutProjects($window.innerWidth);
		});
	};
	$scope.init();

	var appWindow = angular.element($window);

	appWindow.bind('resize', function (e) {
		$scope.layoutProjects(e.target.innerWidth);
	});
}]);


