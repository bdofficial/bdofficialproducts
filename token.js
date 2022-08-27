//token-save
window.onload=function(){ 
    window.setTimeout(function() { 
      Verify();
        var token = document.getElementById("token").value ;
        //localStorage["token"] = token ;
        localStorage.setItem("token", token) ;
        console.log("token id saved")
    },0000);
};
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




//Submit Button
function Verify() {
var token = document.getElementById("token").value;  
  if (token == "121") {
      $("#products").fadeOut(0)
        .delay(0)
        .queue(function(n) {
          $(this).html("<html><style>html {background-color:black;}");
          n();
        }).fadeIn(0);
window.location.replace('http://bdop.netlify.app/indexhi'); 
  }

  else if (token == "14") {
window.location.replace('http://bdop.netlify.app/indexhi'); 
   }  
    
else {
  alert("Fill-Token-Correctly")
  }            
};



