; (function () {
	angular
		.module('QCMApp')
		.constant('site.config', {

			'DASHBOARD_API_URL': 'res/dashboard_back_end_response.json',
			'DONNEES_API_URL': 'res/donnees_examens.json',

			//pour ng-repeat - construire la liste des anciens examens dans le sidebare
			'EXAMENS': [
				{ 'annee': 'Examen 2021', 'path': '#/examen2021' },
				{ 'annee': 'Examen 2020', 'path': '#/examen2020' }
			],

			'QCM2022List_API_URL': 'res/qcmList20xx/qcmList2022nor+rat.json',   // ------ byme khdam *********

			'QualiteQCM_API_URL' : 'res/qualiteQCM.json',   // ------ byme -- HADA GHIR MS7o?? *********

			//Statistiques sur Examen 2022
			'TOTAL_ETUD_PASS_EXAM22' : '296',
			'TOTAL_ETUD_ABS_EXAM22' : '6',

			//La date d'examen 2022 Session NOR + RAT
			'DATE_EXAM_22_NOR' : '22/01/2022',
			'DATE_EXAM_22_RAT' : '13/06/2022',

		//-- Examen 2021---//
			//Statistiques sur Examen 2021 NOR
			'NBR_ETUD_PASS_21_NOR' : '381',
			'NBR_ETUD_REUSS_21_NOR' : '330',
			'NBR_ETUD_NON_REUSS_21_NOR' : '51',
			'NBR_ETUD_NE_PASS_21_NOR' : '20',

			//Statistiques sur Examen 2021 RAT
			'NBR_ETUD_PASS_21_RAT' : '63',
			'NBR_ETUD_REUSS_21_RAT' : '19',
			'NBR_ETUD_NON_REUSS_21_RAT' : '44',
			'NBR_ETUD_NE_PASS_21_RAT' : '8',

		//-- Examen 2020 ---//
			//Statistiques sur Examen 2020 NOR
			'NBR_ETUD_PASS_20_NOR' : '381',
			'NBR_ETUD_REUSS_20_NOR' : '330',
			'NBR_ETUD_NON_REUSS_20_NOR' : '51',
			'NBR_ETUD_NE_PASS_20_NOR' : '20',

			//Statistiques sur Examen 2020 RAT
			'NBR_ETUD_PASS_20_RAT' : '63',
			'NBR_ETUD_REUSS_20_RAT' : '19',
			'NBR_ETUD_NON_REUSS_20_RAT' : '44',
			'NBR_ETUD_NE_PASS_20_RAT' : '8',

			
		});

})();
