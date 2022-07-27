var options = {
    chart: {
      type: 'bar',
      width: "250px",
      height: "250px",
      border: "25px solid black",
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  
  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  
  chart.render();
  var options = {
    chart: {
      type: 'bar',
      width: "250px",
      height: "250px",
      border: "25px solid black",
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  
  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  
  chart.render();
  var options = {
    chart: {
      type: 'bar',
      width: "250px",
      height: "250px",
      border: "25px solid black",
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
  
  chart3.render();

  series: [{
    data: [{
      x: new Date(2016, 01, 01),
      y: [51.98, 56.29, 51.59, 53.85]
    },
    {
      x: new Date(2016, 02, 01),
      y: [53.66, 54.99, 51.35, 52.95]
    },
    .
    .
    .
    {
      x: new Date(2016, 08, 01),
      y: [52.76, 57.35, 52.15, 57.03]
    }]
  }]
