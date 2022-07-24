// Your CSS as text
var styles = `
 body{
	background-color: #000000;
}
#gallery-popup .modal-img{
	width: 100%;
}
.btn-close{ 
	transform: translateX(2350%);
	background-color: rgb(255, 0, 0);
	width: 1rem;
	height: 1rem;
	font-size: 2rem;
  }




 
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
