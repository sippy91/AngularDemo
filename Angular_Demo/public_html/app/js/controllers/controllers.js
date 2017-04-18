var allCtrl = angular.module('allCtrl', [])
.controller('CtrlA', ['$scope', function ($scope) {
 $scope.cars = ['Audi', 'Honda', 'Jaguar'];
 $scope.selectCar= function(id)
 {
     $scope.$apply($scope.$broadcast('choice' , id));
 }
}])
    .controller('CtrlB',  ['$scope', '$state', function ($scope,$state) {
        $scope.$on('choice' , function(event, data)
{
     $scope.selectedCar = $scope.cars[data];
   
   
    
  
});
                }
]);
