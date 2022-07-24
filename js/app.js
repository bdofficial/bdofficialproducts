let chatButton = document.querySelector('.chatbox__button');
let chatContent = document.querySelector('.chatbox__support');
let icons = {
    isClicked: ' ',
    isNotClicked: ' '
}
let chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);


$(window).ready(function(){
    const popup =$('#popup-1 ,#popup-2'),
        innerPopup =$('#inner-popup-1 , #inner-popup-2'),
        btnInnerPopup =$('#btn-1');
  
   
    
  });
