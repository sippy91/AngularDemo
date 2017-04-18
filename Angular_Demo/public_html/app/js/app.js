var routerApp = angular.module('routerApp', ['ui.router', 'ngMessages', 'ui.grid', 'allCtrl']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/Home.html'
        })
        // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'partials/Home-List.html',
        controller: 'CtrlA'
    })
     .state('home.search', {
            url: '/searchresult',
            templateUrl: 'partials/Search-Results   .html'
        })

    // nested list with just some random string data
    .state('home.grid', {
        url: '/grid',
        templateUrl: 'partials/AngularGrid.html',
         controller: function($scope) {
              $scope.myData = [
    {
        "firstName": "Gagandeep",
        "lastName": "Kaur",
        "company": "Infosys",
        "startDate": 1288323623006
    },
    {
        "firstName": "Pretty",
        "lastName": "Singla",
        "company": "Infosys",
         "startDate": 1088329723606

    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "XYZ",
             "startDate": 1148393729006

    }
];
             $scope.gridOptions = {
                 data: $scope.myData,

             
                 columnDefs: [
{ field: 'firstName', displayName: 'First Name'},
{ field: 'lastName', displayName: 'Last Name'},
{ field: 'company', displayName: 'Organization'},
{field: 'startDate', displayName: 'Date of Joining',type: 'date', cellFilter: 'date:\'yyyy-MM-dd\'' }
                     ]
            
         }
     }
 })
    
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partials/About.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'This is Column1 Content  TBD' , 
            controller: 'bookController'},

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'partials/Table-Data.html',
                controller: 'bookController'
            }
        }
        
    })
     .state('contact', {
            url: '/contact',
            templateUrl: 'partials/Contact.html'
        })
          .state('search', {
            url: '/search',
            templateUrl: 'partials/Search-Results.html'
        })
        .state('congrats', {
            url: '/congrats',
            templateUrl: 'partials/Congrats.html',
            
        })

}); // closes $routerApp.config()


// let's define the scotch controller that we call up in the about state
routerApp.controller('bookController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.books = [
        {
            name: 'Two States',
            price: 50
        },
        {
            name: 'Harry Potter',
            price: 70
        },
        {
            name: 'The Monk who sold his Ferrari',
            price: 20
        }
    ];
    $scope.getMessage = function() {
 
    setTimeout(function() {
          $scope.$apply(function() {
            //wrapped this within $apply
                $scope.message = 'Your session is about to expire in 1 mintue';

           alert( $scope.message);
          });
        }, 2000);
      }
      
$scope.getMessage();
    
});
routerApp.controller('dataController', function($scope, $http) {
    
   routerApp.controller('bookController', function($scope) {
    
 $http.get("data/country.json")
    .then(function(response) {
        $scope.res = response.data;
alert(res);
    });
    
});
});