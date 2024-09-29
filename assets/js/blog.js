// ---------- Change Mode -----------
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

let mode = 'dark';


themeSwitcher.addEventListener('click', function () {
  
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
 
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});
// ---------- Change Mode -----------

const keys = Object.keys(localStorage);

const divContainer = document.getElementById('blog-container'); // Replace with your actual container ID

keys.forEach((key) => {
    const divElement = document.createElement('div');
    divElement.textContent = `${localStorage.getItem(key)}`; // Get the value associated with the key
    divContainer.appendChild(divElement);
});