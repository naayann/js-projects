let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
const qrText = document.getElementById("qrText")
const generateBtn = document.getElementById("generateBtn")
const downloadBtn = document.getElementById("downloadBtn")

function generateQR() {
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        imgBox.classList.add("show-img");

        generateBtn.style.display = "none"
        downloadBtn.style.display = "block"
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        },1000);
    }
}

downloadBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "theQRcode";
    link.click();
});
