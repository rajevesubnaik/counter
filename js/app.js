const counter = document.getElementById('counter');
const lower = document.getElementsByClassName('prevBtn')[0];
const add  = document.getElementsByClassName('nextBtn')[0];

let count = 0;

function countColor(count) {
  counter.textContent = count;
  if (count < 0) {
    counter.style.color = 'red';
  } else if (count > 0) {
    counter.style.color = 'green'
  } else {
    counter.style.color = '#333';
  }
}

lower.addEventListener('click', () => {
  count -= 1;
  countColor(count);
  
})

add.addEventListener('click', () => {
  count += 1;
  countColor(count);
})