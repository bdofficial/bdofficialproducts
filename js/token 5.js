//token-save
window.onload = () => {
  window.setTimeout(function() { 
      Verify();
        var token = document.getElementById("token").value ;
        //localStorage["token"] = token ;
        localStorage.setItem("token", token) ;
        console.log("token id saved")
    },0000);
    //pwa
  'use strict';
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./webpsave.js');
  }
}
//save entered token
document.getElementById("sub").addEventListener("click", function ()
    {
        var token = document.getElementById("token").value ;
        //localStorage["token"] = token ;
        localStorage.setItem("token", token) ;
        console.log("token id saved")
    } , false);
//check if "token" is in localStorage
if (localStorage["token"])
{
    var token = localStorage["token"] ;
    document.getElementById("token").value = token ;
}
else
{
    document.getElementById("token").placeholder = " " ;
    console.log("token no found in localStorage")
}
//hide display
//Submit Button
function Verify() {
let token = document.getElementById("token").value;  
  if (token == "121") {
 var s = document.getElementById('products').style;
s.opacity = 0;
(function fade(){(s.opacity-=0)<0?s.display="none":setTimeout(fade,0)})();
window.location.replace('http://bdop.netlify.app');
  }
 
  else if (token == "143") {
window.location.replace('http://bdop.netlify.app'); 
   }
    
else {
  alert("Fill-Token-Correctly")
  }
};
