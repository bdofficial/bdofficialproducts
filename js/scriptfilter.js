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


$(window).ready(function(){
    var popup =$('#popup-1 ,#popup-2'),
        innerPopup =$('#inner-popup-1 , #inner-popup-2'),
        btnInnerPopup =$('#btn-1');
  
   
    $('.btn-dark ,.btn-warning').on('click', function(){
      $($(this).data('popup')).css('visibility','visible');
    });
    $('.btn-danger , .first , .second').click(function(){
        popup.css('visibility','hidden');
    });
    innerPopup.click(function(e){
      e.stopPropagation();
    });
    $(document).keydown(function(event){
      if(event.keyCode==27){
          popup.css('visibility','hidden');
      }
    })
  });


  $(window).ready(function(){
    var popup =$('#popup-1 ,#popup-2'),
        innerPopup =$('#inner-popup-1 , #inner-popup-2'),
        btnInnerPopup =$('#btn-1');
  
   
    $('.btn-dark ,.btn-warning').on('click', function(){
      $($(this).data('popup')).css('visibility','visible');
    });
    $('.btn-danger , .first , .second').click(function(){
        popup.css('visibility','hidden');
    });
    innerPopup.click(function(e){
      e.stopPropagation();
    });
    $(document).keydown(function(event){
      if(event.keyCode==27){
          popup.css('visibility','hidden');
      }
    })
  });
