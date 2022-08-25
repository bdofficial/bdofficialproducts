today = new Date(); 
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear().toString().substr(-2);
today = dd + '/' + mm + '/' + yyyy;

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



let form = document.getElementById("333sb");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector("#save").value = "SUBMITTED";
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbx8bm7LzJeDIbAwNaN0fLQygEPNUDvCn9-MGxMr83f8YAuok-7NCszWa4OvZctnobn3WQ/exec', {
          method: "POST",
          body: data
        })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#save").value = "SUBMITTED"
        });
    document.getElementById("display_message").value='';
    document.getElementById("message").value='';
    })
   
