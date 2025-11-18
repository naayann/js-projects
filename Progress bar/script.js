const ten = document.getElementById('ten')
const thirty = document.getElementById('thirty')
const sixty = document.getElementById('sixty')
const ninty = document.getElementById('ninty')
const circle = document.getElementById('circle')

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    value = Number(btn.dataset.value);
  });
});


let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == value) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
    
}, 30)