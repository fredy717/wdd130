const click = document.querySelector("#toggle");
const slide = document.querySelector("#slide");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const items = document.querySelectorAll(".item");
const container = document.querySelector('#container')

click.addEventListener('click', () => {
    slide.classList.toggle('container-menu-open');
    items.forEach(item => item.classList.toggle('item-open'))
    container.classList.toggle('container-open');
})