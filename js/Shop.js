////-------------------
let array = new Array();
////-------------------
////------1------1
function b11() {
  qty = document.getElementById("a11").value;
  qtz = qty * 960;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×960=" + qtx + "(JOHNSON'S-BABY-SOAP65gm)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------1------2
function b12() {
  qty = document.getElementById("a12").value;
  qtz = qty * 540;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×540=" + qtx + "(DETOL-SOAP75gm)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------2------1 
function b21() {
  qty = document.getElementById("a21").value;
  qtz = qty * 986.4;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×986.4=" + qtx + "(CLEAN-&-CLEAR50ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------2------2
function b22() {
  qty = document.getElementById("a22").value;
  qtz = qty * 1716;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×1716=" + qtx + "CLEAN-&-CLEAR(100ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------3------1
function b31() {
  qty = document.getElementById("a31").value;
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
////------3------2
function b32() {
  qty = document.getElementById("a32").value;
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
////------4------1
function b41() {
  qty = document.getElementById("a41").value;
  qtz = qty * 9;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×9=" + qtx + "(KATALIA-SHAMPOO)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------5------1
function b51() {
  qty = document.getElementById("a51").value;
  qtz = qty * 420;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×420=" + qtx + "(SMART-KESH-KALA45ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------5------2
function b52() {
  qty = document.getElementById("a52").value;
  qtz = qty * 780;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×780=" + qtx + "(KUMARIKA-HAIR-OIL100ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------5------3
function b53() {
  qty = document.getElementById("a53").value;
  qtz = qty * 1500;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×1500=" + qtx + "(KUMARIKA-HAIR-OIL200ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------6------1
function b61() {
  qty = document.getElementById("a61").value;
  qtz = qty * 1680;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×1680=" + qtx + "(TOUCH-ME40ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------6------2
function b62() {
  qty = document.getElementById("a62").value;
  qtz = qty * 2880;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×2880=" + qtx + "(FOGG-PERFUME120ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------6------3
function b63() {
  qty = document.getElementById("a63").value;
  qtz = qty * 600;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×1680=" + qtx + "(KS-PERFUME40ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------6------4
function b64() {
  qty = document.getElementById("a64").value;
  qtz = qty * 1920;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×1920=" + qtx + "(KS-PERFUME60ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------6------5
function b65() {
  qty = document.getElementById("a65").value;
  qtz = qty * 1920;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×1920=" + qtx + "(COLOUR-ME*60ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------7------1
function b71() {
  qty =document.getElementById("a71").value;
    qtz = qty * 270;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×270="+qtx+"(SMART-TUBE25gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty+=array[i].quantity;
       display_message.innerHTML=arrQty;
         arrTotal+=parseFloat(array[i].sabbir);
       display_message.innerHTML+= "Total="+arrTotal;
        }
    }
}
////------7------2
function b72() {
  qty =document.getElementById("a72").value;
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
////------7------3
function b73() {
  qty =document.getElementById("a73").value;
    qtz = qty * 220;
    qtx = Math.round(qtz * 100) / 100;
    let arrQty = "";
    let arrTotal = 0;
    if (qty !=""){
           array.push({
             sabbir:qtx,
            quantity:qty+"×220="+qtx+"(KASHMERI-CONE-20gm)\n"});
        for (i = 0; i < array.length; i++) {
         arrQty += array[i].quantity;
         display_message.innerHTML = arrQty;
         arrTotal += parseFloat(array[i].sabbir);
         display_message.innerHTML += "Total=" + arrTotal;
        }
    }
}
////------7------4
function b74() {
  qty =document.getElementById("a74").value;
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
////------7------5
function b75() {
  qty =document.getElementById("a75").value;
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
////------7------6
function b76() {
  qty = document.getElementById("a76").value;
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
////------8------1
function b81() {
  qty =document.getElementById("a81").value;
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
////------8------2
function b82() {
  qty =document.getElementById("a82").value;
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
////------8------3
function b83() {
  qty =document.getElementById("a83").value;
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
////------8------4
function b84() {
  qty =document.getElementById("a84").value;
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
////------8------5
function b85() {
  qty = document.getElementById("a85").value;
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
////------8------6
function b86() {
  qty = document.getElementById("a86").value;
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
////------8------7
function b87() {
  qty = document.getElementById("a87").value;
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
////------8------8
function b88() {
  qty = document.getElementById("a88").value;
  qtz = qty * 960;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×960=" + qtx + "(VIXOL*ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------8------9
function b89() {
  qty = document.getElementById("a89").value;
  qtz = qty * 1080;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×1080=" + qtx + "(HERPIC*ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
////------9------1
function b91() {
  qty = document.getElementById("a91").value;
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
////------9------2
function b92() {
  qty = document.getElementById("a92").value;
  qtz = qty * 140;
  qtx = Math.round(qtz * 100) / 100;
  let arrQty = "";
  let arrTotal = 0;
  if (qty != "") {
    array.push({
      sabbir: qtx,
      quantity: qty + "×140=" + qtx + "(REXONA50ml)\n"
    });
    for (i = 0; i < array.length; i++) {
      arrQty += array[i].quantity;
      display_message.innerHTML = arrQty;
      arrTotal += parseFloat(array[i].sabbir);
      display_message.innerHTML += "Total=" + arrTotal;
    }
  }
}
