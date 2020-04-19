class RankingCriteria {
    constructor(Id) {
      var dv = document.getElementById(Id);
      var rates = JSON.parse(dv.getAttribute("data-rates"));
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var dataTable = google.visualization.arrayToDataTable([
          ["Element", "Điểm", { role: "style" } ],
          ["Điểm tổng thể", rates[0], "blue"],
          ["Danh tiếng học thuật", rates[1], "green"],
          ["Danh tiếng nhà tuyển dụng", rates[2], "lightgreen"],
          ["Sinh viên khoa", rates[3], "brown"],
          ["Trích dẫn khoa", rates[4], "purple"],
          ["Khoa quốc tế", rates[5], "red"],
          ["Sinh viên quốc tế", rates[6], "orange"],
        ]);

        var view = new google.visualization.DataView(dataTable);
        
        var options = {
          title: "Tiêu chuẩn xếp hạng",
          pointSize:10,
          bar: {groupWidth: "20%"},
          legend: { position: "none" },
          hAxis:{ 
            title:"Điểm", gridlines: { count: 10 },
            ticks:[1,10,20,30,40,50,60,70,80,90,100]
          },
        };
        var chart = new google.visualization.BarChart(dv);
        chart.draw(view, options);
      }      
    }  
  }