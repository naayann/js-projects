const ten = document.getElementById('ten')
const thirty = document.getElementById('thirty')
const sixty = document.getElementById('sixty')
const ninty = document.getElementById('ninty')

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 65) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
    
}, 30)