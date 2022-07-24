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
    let popup =$('#popup-1 ,#popup-2'),
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
