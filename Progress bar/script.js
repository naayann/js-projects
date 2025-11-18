const ten = document.getElementById('ten')
const thirty = document.getElementById('thirty')
const sixty = document.getElementById('sixty')
const ninty = document.getElementById('ninty')
const circle = document.getElementById('circle')

// document.querySelectorAll('.btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     value = Number(btn.dataset.value);
//     document.documentElement.style.setProperty("--dash", "300");
//   });
// });

ten.addEventListener('click', () => {
  value = 10;
  document.documentElement.style.setProperty("--dash", "400");
})

thirty.addEventListener('click', () => {
  value = 30;
  document.documentElement.style.setProperty("--dash", "300");
})

sixty.addEventListener('click', () => {
  value = 60;
  document.documentElement.style.setProperty("--dash", "200");
})

ninty.addEventListener('click', () => {
  value = 90;
  document.documentElement.style.setProperty("--dash", "100");
})



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