//Home Page 
function scrollFunction() {
    var scroll = window.scrollY;
    
    var newimg = document.getElementById("newimg");
    var newimg1 = document.getElementById("newimg1");
    var newimg2 = document.getElementById("newimg2");
    
    if (scroll > 500) {
        newimg.style.opacity = "1";
        newimg1.style.opacity = "1";
        newimg2.style.opacity = "1";    
    }
}




//Product Page 
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()

})

//Contact Page



function checkName() {
    var nameBox = document.getElementById("name");
    var name = nameBox.value;
    
    if (name.length < 4)  {
        nameBox.style.borderColor = "red"; 
    } else {
        nameBox.style.borderColor = "green";
    }
    
    for (var i = 0; i < name.length; i++) {
                    var ascii = name.charCodeAt(i);
                    if (isNumber(ascii)) {
                         nameBox.style.borderColor = "red";
                    }
                }
}

function checkEmail() {
    
    var emailBox = document.getElementById("email");
    var email = emailBox.value;
    
    var pattern = /^.+@.+\..+$/
        
    if (pattern.test(email)) {
        emailBox.style.borderColor = "green";
    } else {
        emailBox.style.borderColor = "red";
    }
    
}

function updateReason () {
    var reasonBox = document.getElementById("reasonBox");
    
    var opts = reasonBox.options;
    var sIndex = reasonBox.selectedIndex;
    var sel = opts[sIndex];
    
    hideProduct();
    
    if (sel.index == 3) {
        showProduct();
        
    }
}

function hideProduct () {
    var productLabel = document.getElementById("productLabel");
    var product = document.getElementById ("product");
     
   productLabel.classList.add("hidden");
    product.classList.add ("hidden");
    productLabel.classList.remove("boxsize");
    product.classList.remove ("boxsize");
}

function showProduct() {
    var productLabel = document.getElementById("productLabel")
    var product = document.getElementById ("product")
    productLabel.classList.remove("hidden");
    product.classList.remove("hidden");
    productLabel.classList.add("boxsize");
    product.classList.add ("boxsize");
}

function checkProductID() {
             
    var pIDBox = document.getElementById("product");
    var product = pIDBox.value;

    var pattern = /^[A-Za-z]{4}\d$/

    if (pattern.test(product)) {

        pIDBox.style.borderColor = "green";

    } else {
        pIDBox.style.borderColor = "red";

    }

}

function checkMsg() {
    var msgBox = document.getElementById ("msg");
    var msg = msgBox.value;
    
    if ((msg.length > 10) && (msg.length < 30)) {
        msgBox.style.borderColor = "green";
    } else {
        msgBox.style.borderColor = "red";
    }
    }


 function isLetter (ch) {

                if (ch >= 65 && ch <= 90) { 
                    return true;
                } else if (ch >= 97 && ch <= 122) { 
                    return true;
                } else { 
                    return false;
                }
            }
            
function isNumber (ch) {

                if (ch >= 48 && ch <= 57) { 
                    return true;
                } else { 
                    return false;
                }
            }
function parallax() {
    var scroll = window.scrollY;
    
    var outer = document.getElementById ("background");
    
    var m = -0.5;
    var b= 3;
    
    var newTop = m*scroll + b;
    
    outer.style.backgroundPositionY = newTop + "px";
}