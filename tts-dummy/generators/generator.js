const generatePassword = document.getElementById("generatePassword");
const copyBtn = document.getElementById("copyBtn");

const toastBox = document.getElementById('toastBox');
const check = '<i class="ri-checkbox-circle-fill"></i>'

const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%&*()-_+={}[]" ;

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

generatePassword.addEventListener("click", () => {
    createPassword();
})

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value);

    if(passwordBox.value.length > 0) {
        showToast();
    } 
};

copyBtn.addEventListener("click", copyPassword);

function showToast() {
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = check + "Password Copied";
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove()
    }, 2000);
}