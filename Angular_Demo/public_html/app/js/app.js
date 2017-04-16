var routerApp = angular.module('routerApp', ['ui.router', 'ngMessages', 'ui.grid']);

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
        controller: function($scope) {
            $scope.cars = ['Audi', 'Honda', 'Jaguar'];
        }
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
        "employed": true
    },
    {
        "firstName": "Pretty",
        "lastName": "Singla",
        "company": "Infosys",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "XYZ",
        "employed": false
    }
];
         }
    })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partials/About.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'This is Column1' },

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
    
});