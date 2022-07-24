const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: ' ',
    isNotClicked: ' '
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
$(window).ready(function(){
    const popup =$('#popup-1'),
        innerPopup =$('#inner-popup-1'),
        btnInnerPopup =$('#btn-1');
  });
