function loginchecker(){
  if ($("#username").val() == "a") {
    var text = "Username or password is incorrect";
    $("#loginerror").html(text);
	return false;
  }
  return true;
}
