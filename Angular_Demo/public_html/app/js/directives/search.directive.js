routerApp.directive('search', function($state) {
  return {
      restrict:'E',
    templateUrl: 'partials/search.html',
    link: function(scope) {
      
    },
    controller: function($scope){
       
       $scope.goSearch = function()
      {
           
          alert('You searched for' +" " +$scope.query);
      }; 
    }
    }
}
);


