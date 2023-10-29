; (function () {


  'use strict';
  angular
    .module('QCMApp')
    .factory('QueryService', ['$http', '$q', 'site.config', QueryService]);



  // Le Factory



  function QueryService($http, $q, SiteConfig) {

    var service = {
      queryDashboardData: loadDashboardData,
      querySystemData: loadSystemData,
      queryQCM2022ListData: loadQCM2022ListData,
    };
    return service;


    // La definition

    function loadDashboardData(params, data) {
      return query('GET', SiteConfig.DASHBOARD_API_URL, params, data);
    }
    function loadSystemData(params, data) {
      return query('GET', SiteConfig.DONNEES_API_URL, params, data);
    }
    function loadQCM2022ListData(params, data) {
      return query('GET', SiteConfig.QCM2022List_API_URL, params, data);
    }



    function query(method, url, params, data) {

      var deferred = $q.defer();

      $http({
        method: method,
        url: url,
        params: params,
        data: data
      }).then(function (data) {
        if (!data.config) {
          console.log('Erreur de server.');
        }
        deferred.resolve(data);
      }, function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

  }


})();
