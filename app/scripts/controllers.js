angular.module('confusionApp')

	.controller("MenuController", ['$scope','menuFactory', function($scope, menuFactory){
		
		$scope.dishes = menuFactory.getDishes();			
		$scope.tab = 1;
		$scope.select = function(index){
			$scope.tab = index;
			if(index == 2) $scope.filtText = 'appetizer';
			else if(index == 3) $scope.filtText = 'mains';
			else if(index == 4) $scope.filtText = 'dessert';
			else $scope.filtText = '';
		};
		$scope.isSelected = function(currentTab){
			return ($scope.tab === currentTab);
		};
		$scope.filtText = '';
		
		$scope.showDetails = false;
		
		$scope.toggleDetails = function(){
			$scope.showDetails = !$scope.showDetails;
		};
	}])
	
	.controller('ContactController',['$scope',function($scope){
		$scope.feedback = {
			mychannel: '',
			firstName : '',
			lastName : '',
			agree : false,
			email : ''
		};
		
		$scope.channels =[
			{
				value : 'tel',
				label : 'TEL.'
			},
			{
				value : 'Email',
				label : 'Email'
			}
		]
		$scope.invalidChannelSelection = false;
	}])
	
	
	.controller('FeedbackController',['$scope',function($scope){
		
		$scope.sendFeedback = function(){
			
			if($scope.feedback.agree && ($scope.feedback.mychannel === '')){
				$scope.invalidChannelSelection = true;
			}else{
				$scope.invalidChannelSelection = false;
				$scope.feedback = {
					mychannel: '',
					firstName : '',
					lastName : '',
					agree : false,
					email : ''
				};
				$scope.feedbackForm.$setPristine();
			}
			
			console.log($scope.feedback);
		}
	}])
	
	.controller('NewCommentFormController', ['$scope',function($scope){
            $scope.newComment = {
                authorName : '',
                stars : 5,
                comment : ''
            }
            
            $scope.addComment = function(){
                // $scope.newComment.date = new Date();
                var temp = {
                    rating : $scope.newComment.stars,
                    comment : $scope.newComment.comment,
                    author : $scope.newComment.authorName,
                    date : new Date()
                }
                $scope.dish.comments.push(temp);
                $scope.newComment = {
                    authorName : '',
                    stars : 5,
                    comment : ''
                }
                $scope.commentForm.$setPristine();
                console.log(temp)
            }
        }])
        
        
        .controller('DishDetailController', ['$scope','$routeParams','menuFactory', function($scope, $routeParams, menuFactory) {

            $scope.sort = '';
            $scope.dish= menuFactory.getDish(parseInt($routeParams.id,10));            
            
        }]);