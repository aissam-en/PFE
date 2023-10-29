/**
 * Le controleur ExamensController
 */

; (function () {

	angular
		.module('QCMApp')
		.controller('ExamensController', ExamensController);

		ExamensController.$inject = ['site.config', 'QueryService', '$rootScope', '$timeout', '$location'];
		
		function ExamensController(SiteConfig, QueryService, $rootScope, $timeout, $location) {

			var self = this;

			//pour afficher la date d'aujourdhuit
			self.dateAujourdhuit = new Date();

			//Les dates d'Examen 2022
			self.dateExamen22nor = SiteConfig.DATE_EXAM_22_NOR;
			self.dateExamen22rat = SiteConfig.DATE_EXAM_22_RAT;

		//-- Examen 2021
			//Statistiques sur Examen 2021 NOR
			self.nbrEtudPass21Nor = SiteConfig.NBR_ETUD_PASS_21_NOR;
			self.nbrEtudReuss21Nor = SiteConfig.NBR_ETUD_REUSS_21_NOR;
			self.nbrEtudNonReuss21Nor = SiteConfig.NBR_ETUD_NON_REUSS_21_NOR;
			self.nbrEtudNePass21Nor = SiteConfig.NBR_ETUD_NE_PASS_21_NOR;

			//Statistiques sur Examen 2021 RAT
			self.nbrEtudPass21Rat = SiteConfig.NBR_ETUD_PASS_21_RAT;
			self.nbrEtudReuss21Rat = SiteConfig.NBR_ETUD_REUSS_21_RAT;
			self.nbrEtudNonReuss21Rat = SiteConfig.NBR_ETUD_NON_REUSS_21_RAT;
			self.nbrEtudNePass21Rat = SiteConfig.NBR_ETUD_NE_PASS_21_RAT;


		//-- Examen 2020
			//Statistiques sur Examen 2020 NOR
			self.nbrEtudPass20Nor = SiteConfig.NBR_ETUD_PASS_20_NOR;
			self.nbrEtudReuss20Nor = SiteConfig.NBR_ETUD_REUSS_20_NOR;
			self.nbrEtudNonReuss20Nor = SiteConfig.NBR_ETUD_NON_REUSS_20_NOR;
			self.nbrEtudNePass20Nor = SiteConfig.NBR_ETUD_NE_PASS_20_NOR;

			//Statistiques sur Examen 2020 RAT
			self.nbrEtudPass20Rat = SiteConfig.NBR_ETUD_PASS_20_RAT;
			self.nbrEtudReuss20Rat = SiteConfig.NBR_ETUD_REUSS_20_RAT;
			self.nbrEtudNonReuss20Rat = SiteConfig.NBR_ETUD_NON_REUSS_20_RAT;
			self.nbrEtudNePass20Rat = SiteConfig.NBR_ETUD_NE_PASS_20_RAT;





			
			$rootScope.$emit('onLocationChangeSuccess', $location.$$path);
			
			QueryService.querySystemData().then(function (response) {
				var data = response.data;
				self.timestamp = data.timestamp;
				QCMMngr.renderProcessWiseChart(data.processReport);
				QCMMngr.renderProcessWiseChart11aa(data.processReport11aa);
				QCMMngr.renderProcessWiseChart22aa(data.processReport22aa);
				QCMMngr.renderProcessWiseChart44aa(data.processReport44aa);
			});

			QueryService.queryQCM2022ListData().then(function (response) {
				var data = response.data;
				self.qcmList2022nor = data.qcmList2022nor;
				self.qcmList2022rat = data.qcmList2022rat;
			});


		}


})();