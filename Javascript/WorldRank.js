class WorldRank {
    constructor(Id) {
      var dv = document.getElementById(Id);
      var Data = JSON.parse(dv.getAttribute('data-year')),Ticks=JSON.parse(dv.getAttribute('data-ticks'));
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Year');
        dataTable.addColumn('number', 'Hạng');
        // A column for custom tooltip content
        dataTable.addColumn({type: 'string', role: 'tooltip'});
        dataTable.addRows(Data);
    
        var options = {
          title:"Đồ thị xếp hạng trên thế giới",
          legend: 'none',
          pointSize:10,
          series: {
            0: { color: '#003399', pointShape:'circle' }
          },
          vAxis:{ 
            title:"Hạng trên thế giới", direction:-1, gridlines: { count: 10 },
            ticks:(Ticks)?Ticks:[1,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]
          },
          hAxis:{title:"Năm"}
        };

        var chart = new google.visualization.LineChart(dv);
        chart.draw(dataTable, options);
      }
      
    }  
  }