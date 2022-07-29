 var debtElm =document.querySelector('#CurrentDebt')

 function getapi() {

 var requestUrl = "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?filter=record_date:gte:2022-07-26"
 
  fetch (requestUrl)
 
  .then(function (response) {
     return response.json();
  })
  .then(function (data) {
     console.log(data)

     var nationalDebt = data.data[0].debt_held_public_amt;
    
     var commas = nationalDebt.toLocaleString("en-US");
     var commas = nationalDebt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     
     var amt = commas;
         amt = "$" + amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

     debtElm.innerHTML = amt

  })

}

getapi()