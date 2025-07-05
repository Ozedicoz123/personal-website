let count = 0;


function increase() {
  count = count +1;
  document.getElementById('counter').innerText = count;

  if (count === 10) {
  alert('you reached 10')
}
}

function decrease() {
  count = count - 1
  document.getElementById('counter').innerText = count;

}

function multiply() {
  count = count * 2
  document.getElementById('counter').innerText = count;
  
}

function reset() {
  count = 0
  document.getElementById('counter').innerText = count
}

