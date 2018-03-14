$(document).ready(function () {
  
  var to;
  const key = "ecddf8da21dcc3707540dbaf8491c999";

  $.ajax({
    url: 'http://data.fixer.io/api/latest?access_key=' + key,
    dataType: 'jsonp',
    success: function (json) {
      to = json.rates;
      console.log(to);
    },
   
  });

  $("#Submit-Button").click(function () {
    let currencyTo = $("#currTo").val();
    let currencyFrom = $("#currFrom").val();
    let amount = $("#amount").val();
    let rateTo = to[currencyTo];
    let rateFrom = to[currencyFrom];
    let converted;
    if(currencyFrom == currencyTo){
      
      alert("You cannot convert a currency to the same currency");
    }
    else if(currencyFrom == "EUR"){
      converted = rateTo * amount;
      $("#Converted").text(converted);
    }
    else if(currencyTo == "EUR"){
      converted = amount / rateFrom;
      $("#Converted").text(converted);
    }
    else if(currencyFrom != "EUR" && currencyTo != "EUR"){
      alert("Unfortunately, my access is not big enough to grant you access to this conversion");
    }

  });

});