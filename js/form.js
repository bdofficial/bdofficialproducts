let form = document.getElementById("333sb");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector("#save").value = "SUBMITTED";
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbxo6c78N9tATpLbbe3AxX_Rrq13SvrSizm3NVKlPqpEzHrUv23CpHhaAVWFGifQ2VE6pA/exec', {
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
   
