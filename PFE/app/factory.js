 /**
   * Sample factory
   */
  
 ; (function () {
  angular
    .module('QCMApp')
    .factory('getDataFromAPI', getDataFromAPI);
    getDataFromAPI.$inject = ['$http', 'LocalStorage'];

    function getDataFromAPI($http, LocalStorage) {
      return {
        loadData: loadData
      };
    }
})();
