      //urlhyhx3lyywac5cw6eti53e2xtfsjf7rxalcqveouiuxfs4x57q
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Practice time (min)'],
          ['Jan 1',  65],
          ['Jan 2',  30],
          ['Jan 3',  90],
          ['Jan 4',  85],
          ['Jan 5', 100]
        ]);

        // Set chart options
        var options = {
          hAxis: {textStyle: {color: 'rgb(2, 84, 125)'}},
          vAxis: {minValue: 0, textStyle: {color: 'rgb(2, 84, 125)'}},
          colors: ['rgb(167, 224, 232)'],
          pointsVisible: 'true',
          legend: {position: 'none'},
          animation: {startup: 'true', duration: 500}
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }