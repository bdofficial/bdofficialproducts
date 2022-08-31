window.addEventListener('load', function (){
    cache_clear()
});
function cache_clear() {
//double-click
(function(window, location) {
  history.replaceState(null, document.title, location.pathname + "#!/stealingyourhistory");
  history.pushState(null, document.title, location.pathname);
  window.addEventListener("popstate", function() {
    if (location.hash === "#!/stealingyourhistory") {
      history.replaceState(null, document.title, location.pathname);
      setTimeout(function() {
        alert("Press again for exit.");
        $(".alert").delay(1000).slideUp(200, function() {
  $(this).alert('close');
});
//scriptfilter
const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {

        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {			
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h3");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}
