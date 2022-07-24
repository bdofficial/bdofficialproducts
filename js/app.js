const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: ' ',
    isNotClicked: ' '
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display(true, chatButton);
chatbox.toggleIcon(false, chatButton);