const APIKey = "6LT2XMVTOVBKRMI4"
const interval = "5min";
var APIURL = "https://www.alphavantage.co/query?apikey=6LT2XMVTOVBKRMI4&function=TIME_SERIES_MONTHLY_ADJUSTED&datatype=json";

var timeSeries = [];

var button = document.getElementById("get_data")
button.addEventListener('click', (event) => {
  event.preventDefault()
  var input = document.getElementById("companies");
  var symbol = input.value;
  var indtraday = document.getElementById("timeinterval")
  indtraday.innerHTML = `Symbol: ${symbol}`;
  GetData(symbol);
})

function GetData(symbol, chart) {
  var url = `${APIURL}&symbol=${symbol}&interval=${interval}&apikey=${APIKey}`;
  fetch(url)
    .then(data => data.json())
    .then(data => {
      var series = data["Monthly Adjusted Time Series"];
      var keys = Object.keys(series);

      timeSeries = [];

      for (var indx = 0; indx < keys.length; indx++) {
        var x = keys[indx];
        var current = series[keys[indx]];
        var y = [current["1. open"], current["2. high"], current["3. low"], current["4. close"]];

        timeSeries.push({ x, y });
      }
      chart.updateSeries([{ data: timeSeries.reverse() }], true);
      console.log(timeSeries);
    })
}

var options = {

  chart: {
    height: "500px",
    width: "500px",
    type: "candlestick"
  },
  series: [{
    data: []
  }],
};

var chart_1 = new ApexCharts(document.querySelector("#candlestick1"), options);
chart_1.render();

var chart_2 = new ApexCharts(document.querySelector("#candlestick2"), options);
chart_2.render();

var chart_3 = new ApexCharts(document.querySelector("#candlestick3"), options);
chart_3.render();

var chart_4 = new ApexCharts(document.querySelector("#candlestick4"), options);
chart_4.render();

GetData("AAPL", chart_1);
GetData("MSFT", chart_2);
GetData("IBM", chart_3);
GetData("TSLA", chart_4);


