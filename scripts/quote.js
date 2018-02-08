function quote(){
  var name = $('#quote').val();
  var text = <tr><td>;

  if (name = str.includes(","))
    return false;

  if (name = str.starsWith("^"))
    return false;

  url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + name + "&apikey=VD0YZ2AU20ZC6XHF";

  $.getJSON(url, function(data){
    if (data.length == 1){
      text = "aaa";
      $('#result').html(text);
      return false;
    }

    for (var i in data["Time Series (Daily)"]){
      var value = i["4. close"];
      break;
    }
    text += name + "</td><td>" + value + "</td></tr>";
    $('#result').html(text);
  })
  return true;
}
