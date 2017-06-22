website.controller('homeController', ['$scope', '$content', '$window', '$http', function($scope, $content, $window, $http) {
	// $scope.projectCols = 1;
	$scope.projsMan = {
		projsPerRow: 1,
		oProjsPerRow: 1,
		setProjsPerRow: function(projsPerRow) {
			this.projsPerRow = projsPerRow;
			$scope.updateProjects();
		},
		setOProjsPerRow: function(oProjsPerRow) {
			this.oProjsPerRow = oProjsPerRow;
			this.setProjsPerRow(this.oProjsPerRow);
		}
	};
	$scope.maxWidth = 970;
	$scope.divides12 = [1,2,3,4,6];		// since bootstrap grid is divided into 12 sections
	$scope.updateProjects = function() {
		$content.getContent().success(function(data) {
			$scope.projects = data.projects;
			if(($window.innerWidth > $scope.maxWidth) && ($scope.projsMan.projsPerRow == 1)) {
				if($('.project-head').hasClass( "col-md-12" )) {
					$('.project-head').removeClass( "col-md-12" ).addClass( "col-md-7" );
					$('.project-img').removeClass( "col-md-12" ).addClass( "col-md-5" );
				}
			}
			else {
				if($('.project-head').hasClass( "col-md-7" )) {
					$('.project-head').removeClass( "col-md-7" ).addClass( "col-md-12" );
					$('.project-img').removeClass( "col-md-5" ).addClass( "col-md-12" );
				}
			}
		});
	};
	var triggered = false;
	$scope.layoutProjects = function (width) {
		if(width < $scope.maxWidth) {
			$('#project-btns').hide();
			$('#projectHeader').html("Projects");
			$scope.projsMan.setProjsPerRow(1);
		}
		else {
			$('#project-btns').show();
			$('#projectHeader').html("Projects = Free Time");
			$scope.projsMan.setProjsPerRow($scope.projsMan.oProjsPerRow);
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
			$scope.education = data.education;
			$scope.footer = data.footer;
			$scope.layoutProjects($window.innerWidth);
		});
	};
	$scope.init();

	var appWindow = angular.element($window);

	appWindow.bind('resize', function () {
		$scope.layoutProjects($window.innerWidth);
	});
}]);


