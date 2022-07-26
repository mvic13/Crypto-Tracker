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
  
  
  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  
  chart.render();


