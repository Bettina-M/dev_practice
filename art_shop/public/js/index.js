
const nav = document.querySelector('nav');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});