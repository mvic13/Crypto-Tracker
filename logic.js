var APIKey = "6LT2XMVTOVBKRMI4"
var button = document.getElementById("get_data")
var URL = "https://www.alphavantage.co/query?apikey=6LT2XMVTOVBKRMI4&function=TIME_SERIES_MONTHLY_ADJUSTED&datatype=json&symbol=";
API = {};
function url() {
  return fetch(url)
    .then(response => response.json())
    .then(data => formatData(data))
};
var info = document.getElementById("timeinterval")

var apiKey = "6LT2XMVTOVBKRMI4"
button.addEventListener('click', (event) => {
  event.preventDefault()
  var input = document.getElementById("companies")
  var symbol = input.value
  console.log(symbol)
  fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=5min&apikey=6LT2XMVTOVBKRMI4")
    .then(data => data.json())
    .then(data => {
      console.log(data)
      var indtraday = document.getElementById("timeinterval")
      indtraday.innerHTML = "symbol : " + data["Meta Data"]["2. Symbol"]

    })



})




var options = {

  chart: {
    height: "500px",
    width: "500px",
    type: "candlestick",
  },
  series: [{
    data: [{
      x: new Date(2020, 01, 01),
      y: [51.98, 56.29, 51.59, 53.85]
    },
    {
      x: new Date(2020, 02, 01),
      y: [53.66, 54.99, 51.35, 52.95]
    },
    {
      x: new Date(2020, 08, 01),
      y: [52.76, 57.35, 52.15, 57.03]
    }]
  }],
};

var chart = new ApexCharts(document.querySelector("#candlestick1"), options);
chart.render();

var options = {

  chart: {
    height: "500px",
    width: "500px",
    type: "candlestick",
  },
  series: [{
    data: [{
      x: new Date(2020, 01, 01),
      y: [51.98, 56.29, 51.59, 53.85]
    },
    {
      x: new Date(2020, 02, 01),
      y: [53.66, 54.99, 51.35, 52.95]
    },
    {
      x: new Date(2020, 08, 01),
      y: [52.76, 57.35, 52.15, 57.03]
    }]
  }],
};

var chart = new ApexCharts(document.querySelector("#candlestick2"), options);
chart.render();

var options = {

  chart: {
    height: "500px",
    width: "500px",
    type: "candlestick",
  },
  series: [{
    data: [{
      x: new Date(2020, 01, 01),
      y: [51.98, 56.29, 51.59, 53.85]
    },
    {
      x: new Date(2020, 02, 01),
      y: [53.66, 54.99, 51.35, 52.95]
    },
    {
      x: new Date(2020, 08, 01),
      y: [52.76, 57.35, 52.15, 57.03]
    }]
  }],
};

var chart = new ApexCharts(document.querySelector("#candlestick3"), options);
chart.render();

var options = {

  chart: {
    height: "500px",
    width: "500px",
    type: "candlestick",
  },
  series: [{
    data: [{
      x: new Date(2020, 01, 01),
      y: [51.98, 56.29, 51.59, 53.85]
    },
    {
      x: new Date(2020, 02, 01),
      y: [53.66, 54.99, 51.35, 52.95]
    },
    {
      x: new Date(2020, 08, 01),
      y: [52.76, 57.35, 52.15, 57.03]
    }]
  }],
};

var chart = new ApexCharts(document.querySelector("#candlestick4"), options);
chart.render();








