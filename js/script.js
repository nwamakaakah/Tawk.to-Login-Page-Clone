
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const btn = document.getElementById("btn");

function formVerify(password){
  if (password == nwamaka){
    return "Login Successful";
  }
  else{
    return document.getElementById("wrongpwd").innerHTML = "This field is required";
  }
  console.log(password);
}

formVerify();