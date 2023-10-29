(function () {


  /**
   * Modele et Controleur
   */
  angular
    .module('QCMApp', ['ngRoute', 'angularMoment'])
    .config(config);
    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * Configiration de la routage
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // les routes
    $routeProvider
      .when('/home', { 
        templateUrl: 'views/dashboard.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/examen2022', {
        templateUrl: 'views/examen-2022.html',
        controller: 'ExamensController',
        controllerAs: 'ExmCtrl'
      })
      .when('/examen2021', {
        templateUrl: 'views/anciens-examens/examen-2021.html',
        controller: 'ExamensController',
        controllerAs: 'ExmCtrl'
      })
      .when('/examen2020', {
        templateUrl: 'views/anciens-examens/examen-2020.html',
        controller: 'ExamensController',
        controllerAs: 'ExmCtrl'
      })
      .when('/examen2019', {
        templateUrl: 'views/anciens-examens/examen-2019.html',
        controller: 'ExamensController',
        controllerAs: 'ExmCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * interception des requests et errors catching
   * 
   */
  angular
    .module('QCMApp')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', '$location'];

  function authInterceptor($rootScope, $q, $location) {

    return {

      // intercept every request
      request: function (config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function (response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('QCMApp')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {
  }


})();