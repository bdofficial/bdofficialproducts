let form = document.getElementById("333sb");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector("#save").value = "SUBMITTING";
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbx-WfVTKp9gc4QE803KVeOs0lIaWclaDdq9ZgnrwNOte4hAkIi5dms9gitjOh6qdtu25Q/exec', {
          method: "POST",
          body: data
        })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#msg").innerHTML = data;
          document.querySelector("#save").value = "Submit"
        });
    })
