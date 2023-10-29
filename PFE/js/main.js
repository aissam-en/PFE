QCMMngr = {};
QCMMngr.load = function () {
	$('.ui.sidebar').sidebar();
}

// byme     type: bar cahrt    --tm??
QCMMngr.nbrEtud4annees = function (details) {
	var ctx = document.getElementById('nbrEtud4annees');
	var data = {
		labels: details.labels,
		datasets: [{
			backgroundColor: [
				"#00589C",
				"#30C0DA",
				"#3CB4B2",
				"#4FE3C1",

			],
			hoverBackgroundColor: [
				"#0090FF",
				"#38E1FF",
				"#55FFFC",
				"#59FFD9",
			],
			label: 'Nombre Etudient ',
			data: details.data,
		}]
	};
	var defectDoughnutChart = new Chart(ctx, {
		type: 'bar',
		animation: {
			animateScale: true
		},
		data: data,
	});
}

// byme     type: bar cahrt    --tm
QCMMngr.QltTousExams = function (details) {
	var ctx = document.getElementById('QltTousExams');
	var data = {
		labels: details.labels,
		datasets: [
			{
				label: "DIFFICILE",
				backgroundColor: "#00589C",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "#0090FF",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.difficiledata
			},
			{
				label: "MOYEN",
				backgroundColor: "#30C0DA",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "#38E1FF",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.moyendata
			},
			{
				label: "FACILE",
				backgroundColor: "#3CB4B2",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "#55FFFC",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.faciledata
			}]
	};
	var defectDoughnutChart = new Chart(ctx, {
		type: 'bar',
		animation: {
			animateScale: true
		},
		data: data,
	});
}

// byme     type: Line cahrt    --tm
QCMMngr.EtudReussiData = function (details) {
	var ctx = document.getElementById('EtudReussiData');
	var data = {
		labels: details.labels,
		datasets: [{
			label: 'Nombre Etudient ',
				data: details.data,
				fill:false,
				borderColor:'#73D216',
				tension:0.1
		}]
	};
	var defectDoughnutChart = new Chart(ctx, {
		type: 'line',
		animation: {
			animateScale: true
		},
		data: data,
	});
}

// byme     type: Line cahrt    --tm
QCMMngr.EtudPasReussiData = function (details) {
	var ctx = document.getElementById('EtudPasReussiData');
	var data = {
		labels: details.labels,
		datasets: [{
			label: 'Nombre Etudient ',
				data: details.data,
				fill:false,
				borderColor:'#F57900',
				tension:0.1
		}]
	};
	var defectDoughnutChart = new Chart(ctx, {
		type: 'line',
		animation: {
			animateScale: true
		},
		data: data,
	});
}

// byme    type: Line cahrt    --tm
QCMMngr.EtudAbsData = function (details) {
	var ctx = document.getElementById('EtudAbsData');
	var data = {
		labels: details.labels,
		datasets: [{
			label: 'Nombre Etudient ',
				data: details.data,
				fill:false,
				borderColor:'#EF2929',
				tension:0.1
		}]
	};
	var defectDoughnutChart = new Chart(ctx, {
		type: 'line',
		animation: {
			animateScale: true
		},
		data: data,
	});
}


//  id = EtudData type = bar
QCMMngr.renderProcessWiseChart = function (details) {
	var ctx = document.getElementById('EtudData');
	var data = {
		labels: details.labels,
		datasets: [
			{
				label: "Réussi",
				backgroundColor: "rgba(252,118,106,0.6)",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(252,118,106,1)",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.ReussiData
			},
			{
				label: "Non Réussi",
				backgroundColor: "rgba(175,184,179,0.6)",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(175,184,179,1)",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.NonReussiData
			},
			{
				label: "Absents",
				backgroundColor: "rgba(23,74,69,0.6)",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(23,74,69,1)",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.AbsentsData
			}]
	};
	var barChart = new Chart(ctx, {
		type: 'bar',
		animation: {
			animateScale: true
		},
		data: data,
		options: {
			legend: {
				display: true
			},
			scales: {
				yAxes: [{
					stacked: false
				}]
			}
		}
	});
}

//  id = SessionNORData type = doughnut
QCMMngr.renderProcessWiseChart11aa = function (details) {
	var ctx = document.getElementById('SessionNORData');
	var data = {
		labels: details.labels,
		datasets: [
			{
				label: "Nbr Perss",
				data: details.data,
				backgroundColor: [
					"rgba(252,28,106,0.6)",
					"rgba(54,88,106,0.6)",
					"rgba(18,18,106,0.6)",
				],
			},]
	};
	var barChart = new Chart(ctx, {
		type: 'doughnut',
		animation: {
			animateScale: true
		},
		data: data,
		options: {
			legend: {
				display: true
			},
		}
	});
}

//  id = SessionRATData type = doughnut
QCMMngr.renderProcessWiseChart22aa = function (details) {
	var ctx = document.getElementById('SessionRATData');
	var data = {
		labels: details.labels,
		datasets: [
			{
				label: "Nbr Perss",
				data: details.data,
				backgroundColor: [
					"rgba(252,28,106,0.6)",
					"rgba(54,88,106,0.6)",
					"rgba(18,18,106,0.6)",
				],
			},]
	};
	var barChart = new Chart(ctx, {
		type: 'doughnut',
		animation: {
			animateScale: true
		},
		data: data,
		options: {
			legend: {
				display: true
			},
		}
	});
}

//  id = QltExam type = bar
QCMMngr.renderProcessWiseChart44aa = function (details) {
	var ctx = document.getElementById('QltExam');
	var data = {
		labels: details.labels,
		datasets: [
			{
				label: "DIFFICILE",
				backgroundColor: "rgba(252,118,106,0.6)",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(252,118,106,1)",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.difficiledata
			},
			{
				label: "MOYEN",
				backgroundColor: "rgba(175,184,179,0.6)",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(175,184,179,1)",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.moyendata
			},
			{
				label: "FACILE",
				backgroundColor: "rgba(23,74,69,0.6)",
				borderColor: "rgba(0,0,0,0.1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(23,74,69,1)",
				hoverBorderColor: "rgba(0,0,0,1)",
				data: details.faciledata
			}]
	};
	var barChart = new Chart(ctx, {
		type: 'bar',
		animation: {
			animateScale: true
		},
		data: data,
		
		options: {
			scales: {
				yAxes:[{
					ticks:{
						beginAtZero: true,
					}
					
				}],
			}
		}
	});
}

//  id = discUsageChart type = pie
QCMMngr.renderDiscUsageChart = function (details) {
	var ctx = document.getElementById('discUsageChart');
	var data = {
		labels: details.labels,
		datasets: [
			{
				data: details.data,
				backgroundColor: [
					"#23C596",
					"#F7CF5C",
					"#E66D7E"
				],
				hoverBackgroundColor: [
					"#21BA45",
					"#EDA62B",
					"#DB2828"
				],
				hoverBorderWidth: 1,
				hoverBorderColor:"#000",				
			}]
	};
	var pieChart = new Chart(ctx, {
		type: 'pie',
		animation: {
			animateRotate: true,
		},
		data: data,
		options: {
			legend: {
				display: false
			}
		}
	});
	$('.chartData').html(QCMMngr.generateTabularData(data));
}



//  id = bandwidthUsageChart type = pie
QCMMngr.renderBandwidthUsageChart = function (details) {
	var ctx = document.getElementById('bandwidthUsageChart');
	var data = {
		labels: details.labels,
		datasets: [
			{
				label: 'in GB',
				data: details.data,
				backgroundColor: [
					"#09622A",
					"#27823B",
					"#69A761",
					"#BCCFB4",
				],
				hoverBackgroundColor: [
					"#17FF6D",
					"#4DFF74",
					"#A0FF94",
					"#E8FFDE",
				]
			}]
	};
	var barAreaChart = new Chart(ctx, {
		type: 'bar',
		animation: {
			animateScale: true
		},
		data: data,
		options: {
			legend: {
				display: true
			}
		}
	});
}

//  id = bandwidthUsageChart1111 type = pie
QCMMngr.renderBandwidthUsageChart1111 = function (details) {
	var ctx = document.getElementById('bandwidthUsageChart1111');
	var data = {
		labels: details.labels,
		datasets: [
			{
				label: 'in GB',
				data: details.data,
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#21ba45",
					"#a333c8",
					"#4BC0C0"
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#21ba45",
					"#a333c8",
					"#4BC0C0"
				]
			}]
	};
	var barAreaChart = new Chart(ctx, {
		type: 'bar',
		animation: {
			animateScale: true
		},
		data: data,
		options: {
			legend: {
				display: true
			}
		}
	});
}


QCMMngr.generateTabularData = function (data) {
	var labels = data.labels,
	color = data.datasets[0].backgroundColor,
	dataset = data.datasets[0].data;
	var tableHtml = "<table>";
	for (var i = 0, len = labels.length; i < len; i++) {
		tableHtml += '<tr><td><i style="color:' + color[i] + 
					 '" class="icon square"></i>' + labels[i] + 
					 '</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><i class="users icon"></i> ' + dataset[i] + 
					 '</td></tr>';
	}
	tableHtml += "</table>";
	return tableHtml;

}


// attach ready event
$(document).ready(QCMMngr.load);
