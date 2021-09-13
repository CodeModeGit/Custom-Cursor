let cursorInner = document.querySelector('.cursor-inner');
let cursorOuter = document.querySelector('.cursor-outer');

window.addEventListener("mousemove", cursorMove)

function cursorMove(e) {
    cursorInner.style.top = e.clientY + "px"
    cursorInner.style.left = e.clientX + "px"

    cursorOuter.style.top = e.clientY + "px"
    cursorOuter.style.left = e.clientX + "px"
}