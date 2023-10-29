; (function () {

  'use strict';
  
  angular

    .module('QCMApp')
    .directive('sideBar', SideBar);
    
    SideBar.$inject = ['site.config', 'QueryService', '$rootScope', '$timeout', '$location'];

    function SideBar(SiteConfig, QueryService, $rootScope, $timeout, $location) {

      // Definition de la directive
      var directiveDefinitionObject = {
        restrict: 'E',
        scope: {},
        templateUrl: 'components/directives/sidebar.tmpl.html',
        link: SiteBarLink
      };

      function SiteBarLink(scope) {
        scope.OldExam = SiteConfig.EXAMENS;
        scope.SubMenuActive = false;
      }

      return directiveDefinitionObject;
  }

})();