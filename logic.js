var APIKey = "6LT2XMVTOVBKRMI4"
var button = document.getElementById("get_data")
var URL = "https://www.alphavantage.co/query?apikey=6LT2XMVTOVBKRMI4&function=TIME_SERIES_MONTHLY_ADJUSTED&datatype=json&symbol=";
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
  fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=60min&apikey=6LT2XMVTOVBKRMI4")
  .then(data => data.json())
  .then(data => {
    console.log(data)
    const chartOptions = convertToChartData(data["Time Series (60min)"])
    var chart = new ApexCharts(document.querySelector("#candlestick1"), chartOptions);
    chart.render();
  });
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&apikey=6LT2XMVTOVBKRMI4")
      .then(data => data.json())
      .then(data => {
        console.log(data)
        const chartOptions = convertToChartData(data["Time Series (Daily)"])
        var chart = new ApexCharts(document.querySelector("#candlestick2"), chartOptions);
        chart.render();
      });
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=" + symbol + "&apikey=6LT2XMVTOVBKRMI4")
    .then(data => data.json())
    .then(data => {
      console.log(data)
      const chartOptions = convertToChartData(data["Weekly Time Series"])
      var chart = new ApexCharts(document.querySelector("#candlestick3"), chartOptions);
      chart.render();
    });
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=" + symbol + "&apikey=6LT2XMVTOVBKRMI4")
    .then(data => data.json())
    .then(data => {
      console.log(data)
      const chartOptions = convertToChartData(data["Monthly Time Series"])
      var chart = new ApexCharts(document.querySelector("#candlestick4"), chartOptions);
      chart.render();
    });
})

function convertToChartData(apiData) {
  const chartData = []
  for (const key in apiData) {
    chartData.push({
      x: new Date(key),
      y: [apiData[key]["1. open"],
      apiData[key]["2. high"],
      apiData[key]["3. low"],
      apiData[key]["4. close"]]
    })
  }
chartData.reverse()

  const chartOptions = {

    chart: {
      height: "500px",
      width: "500px",
      type: "candlestick",
    },
    series: [{
      data: chartData
    }],
  };
  return chartOptions
}


// var options = {

//   chart: {
//     height: "500px",
//     width: "500px",
//     type: "candlestick",
//   },
//   series: [{
//     data: [{
//       x: new Date(2020, 01, 01),
//       y: [51.98, 56.29, 51.59, 53.85]
//     },
//     {
//       x: new Date(2020, 02, 01),
//       y: [53.66, 54.99, 51.35, 52.95]
//     },
//     {
//       x: new Date(2020, 08, 01),
//       y: [52.76, 57.35, 52.15, 57.03]
//     }]
//   }],
// };

// var chart = new ApexCharts(document.querySelector("#candlestick1"), options);
// chart.render();