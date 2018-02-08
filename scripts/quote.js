function quote(){
  var name = $('#symbol').val();
  var text = "<tr><td>";

  url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + name + "&apikey=VD0YZ2AU20ZC6XHF";

  $.getJSON(url, function(data){
    if (data.length == 1){
      $('#quote').html("Error ocurred!");
    }

    var daydata = data["Time Series (Daily)"];
    for (var key in daydata){
      var value = parseInt(daydata[key]["4. close"]);
      break;
    }

    text += name.toUpperCase() + "</td><td>$" + value.toFixed(2) + "</td></tr>";

    $('#quote').html(text);
  })

}
