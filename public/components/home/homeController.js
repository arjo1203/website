website.controller('homeController', ['$scope', '$content', '$window', '$http', function($scope, $content, $window, $http) {
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
		if(width < 1170) {
			$('#project-btns').hide();
			$scope.projectCols = 1;
			$scope.updateProjects();
		}
		else {
			$('#project-btns').show();
			$scope.projectCols = 2;
			$scope.updateProjects();
		}

		if(width < 750) {
			$('#projectHeader').html("Projects");
		}
		else {
			$('#projectHeader').html("Projects = Free Time");
		}
	};


	$scope.msg = {
		name: "",
		email: "",
		content: ""
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
			$scope.education = data.education;
			$scope.footer = data.footer;
			$scope.layoutProjects($window.innerWidth);
		});
	};
	$scope.init();

	var appWindow = angular.element($window);

	appWindow.bind('resize', function (e) {
		$scope.layoutProjects(e.target.innerWidth);
	});


	$scope.loading = false;
	$scope.send = function (msg){
		$scope.loading = true;
		$http.post('/sendmail', {
			from: msg.email,
			to: 'pw9099uy@gmail.com',
			subject: msg.email,
			text: msg.content + "\n\n- " + msg.name
		}).then(res=>{
			$scope.loading = false;
			$scope.serverMessage = 'Email sent successfully';
		});
	};

	$scope.sendEmail = function() {
		console.log($scope.msg);
		$scope.send($scope.msg);
	};
}]);


