////------1------
let array = new Array();
function b1() {
  qty =document.getElementById("a1").value;
    qtz = qty * 270;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×270="+qtx+"(SMART-BLACK-GOLD25gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty+=array[i].quantity;
       display_message.innerHTML=arrQty;
         arrTotal+=parseFloat(array[i].sabbir);
        display_message.innerHTML+= "Total="+arrTotal;
        }
    }
}
////------2------
function b2() {
  qty =document.getElementById("a2").value;
  qtz=qty*430;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×430="+qtx+"(SMART-CONE30ml)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------3------
function b3() {
  qty =document.getElementById("a3").value;
    qtz = qty * 220;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×220="+qtx+"(kashmeri-cone-20gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------4------
function b4() {
  qty =document.getElementById("a4").value;
    qtz = qty * 100;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×100="+qtx+"(SMART-POWER-BAR10gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------5------
function b5() {
  qty =document.getElementById("a5").value;
    qtz = qty * 300;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×300="+qtx+"(SMART-POWER-BAR30gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------6------
function b6() {
  qty =document.getElementById("a6").value;
    qtz = qty * 240;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×240="+qtx+"(ROBI-DETERGRNT-POWDER200gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------7------
function b7() {
  qty =document.getElementById("a7").value;
    qtz = qty * 540;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×540="+qtx+"(ROBI-DETERGRNT-POWDER500gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------8------
function b8() {
  qty = document.getElementById("a8").value;
  qtz = qty * 840;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×840=" + qtx + "(SMART-LIQUID500ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------9------
function b9() {
  qty = document.getElementById("a9").value;
  qtz = qty * 150;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×150=" + qtx + "(SMART-BLUE50ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------10------
function b10() {
  qty = document.getElementById("a10").value;
  qtz = qty * 300;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×300=" + qtx + "(SMART-BLUE100ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------11------
function b11() {
  qty =document.getElementById("a11").value;
    qtz = qty * 480;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×480="+qtx+"(SMART-COOL-POWDER100gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------12------
function b12() {
  qty =document.getElementById("a12").value;
    qtz = qty * 480;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×480="+qtx+"(SMART-PRICKLY-POWDER100gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------13------
function b13() {
  qty = document.getElementById("a13").value;
  qtz = qty * 450;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir:qtx,
      quantity: qty + "×450=" + qtx + "(SMART-BEAUTY-POWDER100gm)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------14------
function b14() {
  qty = document.getElementById("a14").value;
  qtz = qty * 120;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×120=" + qtx + "(SMART-HAIR-COLOR-BROWN50gm)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------15------
function b15() {
  qty = document.getElementById("a15").value;
  qtz = qty * 420;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×420=" + qtx + "(SMART-HAIR-COLOR-BLACK45gm)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------16------
function b16() {
  qty = document.getElementById("a16").value;
  qtz = qty * 450;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×450=" + qtx + "(LOTA-HARBAL20gm)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------17------
function b17() {
  qty = document.getElementById("a17").value;
  qtz = qty * 600;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×600=" + qtx + "(SKIN-SHINE30gm)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}






