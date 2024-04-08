const btn = document.querySelector(".btn");
let data = document.querySelector(".inputString");
let element = document.querySelector(".printString");
let dragging = false;
let startX = 0;
let startY = 0;

btn.addEventListener('click', () => {
    element.textContent = data.value;
})

element.onmousedown = function(event) {

  document.body.append(element);


  function moveAt(pageX, pageY) {
    element.style.left = pageX - element.offsetWidth / 2 + 'px';
    element.style.top = pageY - element.offsetHeight / 2 + 'px';
  }

  
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

 
  document.addEventListener('mousemove', onMouseMove);


  element.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    element.onmouseup = null;
  };

};

