//date
today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear().toString().substr(-2);
today = dd + '/' + mm + '/' + yyyy;
//advance
var mydropdown = document.getElementById('user');
function bdfp() {
  var mydropdownValue = mydropdown.options[mydropdown.selectedIndex].value;
qtybd = mydropdownValue+"--"+today;
   let arrQty = "";
   if (qtybd != "") {
     array.push({
       sabbir: 0,
       quantity:qtybd
     }); 
     for (i = 0; i < array.length; i++) {
       arrQty += array[i].quantity;
       display_message.innerHTML = arrQty ;
     }
   }
}
