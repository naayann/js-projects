let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

let eyeIcon = document.getElementById("eyeIcon");
let eyeopen = '<i class="ri-eye-line"></i>';
let eyeclosed = '<i class="ri-eye-off-line">'

let popUp = document.getElementById("pop-up");
let submit = document.getElementById("submit");
let done = document.getElementById("done");
let alertMsg = document.querySelector(".alert-msg");

pass.addEventListener("input", () => {
    if(pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none"
    }

    if(pass.value.length < 4) {
        str.innerHTML = "weak"
        pass.style.borderColor = "red"
        msg.style.color = "red"
    } else if(pass.value.length < 8) {
        str.innerHTML = "moderate"
        pass.style.borderColor = "#e8cd00ff"
        msg.style.color = "#e8cd00ff"
    } else if(pass.value.length >= 10) {
        str.innerHTML = "strong"
        pass.style.borderColor = "#26d730"
        msg.style.color = "#26d730"
    }
})

eyeIcon.addEventListener("click", () => {
    if(pass.type == "password") {
        pass.type = "text";
        eyeIcon.innerHTML = eyeopen;
    } else {
        pass.type = "password";
        eyeIcon.innerHTML = eyeclosed;
    }
})


function openPopup() {
    popUp.style.display = "block";
    alertMsg.style.display = "block";
}

function closePopup() {
    popUp.style.display = "none";
    alertMsg.style.display = "none";
}


submit.addEventListener("click", () => {
    openPopup();
})

done.addEventListener("click", () => {
    closePopup();
})