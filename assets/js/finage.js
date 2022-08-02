var symbol = document.querySelector("#djisymbol")
var price = document.querySelector("#djiprice")
var time = document.querySelector("#djitime")

function getAPI() {

    var requestURL = "https://api.finage.co.uk/last/index/dji?apikey=API_KEY900IE613D2MKZ1AQDQ0O1LR5VCPFIPXE"

    fetch (requestURL)

    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data)

        var dowSymbol = data.symbol
        
        var dowPrice = data.price
            var commas = dowPrice.toLocaleString("en-US");
            var commas = dowPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var dowCommas = commas;
                dowCommas = "$" + dowCommas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        var dowTime = data.timestamp
            var dowDate = new Date(dowTime)
            console.log("Date: "+dowDate.getDate()+
                "/"+(dowDate.getMonth()+1)+
                "/"+dowDate.getFullYear()+
                " "+dowDate.getHours()+
                ":"+dowDate.getMinutes()+
                ":"+dowDate.getSeconds());

        symbol.innerHTML = dowSymbol
        price.innerHTML = dowCommas
        time.innerHTML = dowDate
    })
}

getAPI()
