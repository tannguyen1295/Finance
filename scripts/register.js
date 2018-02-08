function registerChecker(){
  if ($('#password').val() != $('#passwordagain').val()){
    $('#unmatchedPassword').html("Passwords don't match!");
    return false;
  }
  return true;
}
