// Your CSS as text
var styles = `
 /* CHATBOX
=============== */
.chatbox {
    position: absolute;
    bottom: 30px;
    right: 30px;
}

/* CONTENT IS CLOSE */
.chatbox__support {
    display: flex;
    flex-direction: column;
    background: rgb(255, 0, 0);
    width: 300px;
    height: 350px;
    z-index: -123456;
    opacity: 0;
    transition: all .5s ease-in-out;
}

/* CONTENT ISOPEN */
.chatbox--active {
    transform: translateY(-40px);
    z-index: 123456;
    opacity: 1;
    
}

/* BUTTON */
.chatbox__button {
    text-align: right;
}


/* HEADER */
.chatbox__header {
    position: sticky;
    top: 0;
    background: orange;
}

/* MESSAGES */
.chatbox__messages {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    flex-direction: column-reverse;
}

.messages__item {
    background: orange;
    max-width: 60.6%;
    width: fit-content;
}

.messages__item--operator {
    margin-left: auto;
}

.messages__item--visitor {
    margin-right: auto;
}

/* FOOTER */
.chatbox__footer {
    position: sticky;
    bottom: 0;
}
/* TYPING-CSS
=============== */


.messages__item--typing {
    will-change: transform;
    width: auto;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 15px 20px;
    display: table;
    margin-right: auto;
    position: relative;
    animation: 2s bulge infinite ease-out;
}

.messages__item--typing::before,
.messages__item--typing::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 12px;
      height: 10px;
      width: 10px;
      border-radius: 50%;
}
.messages__item--typing::after {
      height: 10px;
      width: 10px;
      left: -10px;
      bottom: -10px;
}
span.messages__dot {
    height: 8px;
    width: 8px;
    float: left;
    margin: 0 1px;
    background-color: #0000ff;
    display: block;
    border-radius: 50%;
    opacity: 0.4;
    animation: 1s blink infinite;
}
  
@keyframes blink {
    50% {
        opacity: 1;
    }
}
  
@keyframes bulge {
    50% {
        transform: scale(1.05);
    }
}
  



 
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
