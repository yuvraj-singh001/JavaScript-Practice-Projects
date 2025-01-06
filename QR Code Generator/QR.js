const userinput = document.querySelector(".user-input");
const generateQRbtn = document.querySelector(".generate-QR");
const imgbox = document.querySelector(".img-box");
const QRimg = document.querySelector(".QR-image");


function generateQR(){
    if(userinput.value.length>0){
        QRimg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+userinput.value;
        imgbox.classList.add("show-img");
    }
    else{
        userinput.classList.add("error");
        setTimeout(()=>{
            userinput.classList.remove("error");
        },500);
    }
}


userinput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      generateQRbtn.click(); 
    }
  });


generateQRbtn.addEventListener("click",generateQR);