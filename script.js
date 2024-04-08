const btn = document.querySelector(".btn");
let data = document.querySelector(".inputString");
let element = document.querySelector(".printString");

btn.addEventListener('click', () => {
    element.textContent = data.value;
})