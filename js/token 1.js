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




//Submit Button
function Verify() {
var token = document.getElementById("token").value;  
  if (token == "1213") {
    //load
      eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$("#4").6(0).7(0).8(9(n){$(a).1("<1><b>1 {c-d:5;e: g;h: i%;j: 2.3%;k: l(-m%,-2.3%);}");n()}).f(0);',24,24,'|html|42||products|black|fadeOut|delay|queue|function|this|style|background|color|position|fadeIn|absolute|left|48|top|transform|translate|43|'.split('|'),0,{}))
        //page
window.location.replace('index.html'); 
  } 
 
  else if (token == "143") {
window.location.replace('http://bdop.netlify.app'); 
   }  
    
else {
  alert("Fill-Token-Correctly")
  }      
};


