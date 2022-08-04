// Dynamically
if (navigator.userAgent.indexOf('gonative') > -1) {
  gonative.statusbar.set({
    'style':'black',
    'color':'AARRBBGG',
    'overlay':true
  });
}

// Or on page load
function gonative_library_ready(){
  gonative.statusbar.set({
    'style':'black',
    'color':'AARRBBGG',
    'overlay':true
  });
}