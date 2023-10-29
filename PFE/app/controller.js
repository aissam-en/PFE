/**
 * Le controller principale de l'application
 */
; (function () {

	angular
		.module('QCMApp')
		.controller('MainController', MainController);

		MainController.$inject = ['site.config', 'QueryService', '$rootScope', '$timeout', '$location', 'moment'];

		function MainController(SiteConfig, QueryService, $rootScope, $timeout, $location, moment) {

			var self = this;
			self.DefectsStats = [];
			self.dateAujourdhuit = new Date();
			self.severityList = SiteConfig.SEVERITYLIST;
			$rootScope.$emit('onLocationChangeSuccess', $location.$$path);

			self.totalEtudPassExam22 = SiteConfig.TOTAL_ETUD_PASS_EXAM22;
			self.totalEtudAbsExam22 = SiteConfig.TOTAL_ETUD_ABS_EXAM22;

			QueryService.queryDashboardData().then(function (response) {
				QCMMngr.nbrEtud4annees(response.data[0].nbrEtud4anneesData);
				QCMMngr.EtudReussiData(response.data[0].ramreport2222);
				QCMMngr.EtudPasReussiData(response.data[0].ramreport3333);
				QCMMngr.EtudAbsData(response.data[0].ramreport4444);
				QCMMngr.QltTousExams(response.data[0].ramreport5555);
				QCMMngr.renderDiscUsageChart(response.data[0].discreport);
				QCMMngr.renderBandwidthUsageChart(response.data[0].bandwidthreport);
				QCMMngr.renderBandwidthUsageChart1111(response.data[0].bandwidthreport1111);
			});
		}


})();