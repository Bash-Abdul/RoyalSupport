// alert('Welcome to Royal Support Home Care Services :)');
// alert('This site is still in development');

let care = document.querySelector('#care');
let job = document.querySelector('#job');

care.addEventListener('click', ()=>{
    window.location.href ='service.html';
})
job.addEventListener('click', ()=>{
    window.location.href = 'career.html'
})

let menu = document.querySelector('#menu');
let navlink = document.querySelector('.navlink');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('bx-x');
    navlink.classList.toggle('active');
})

let right = document.querySelector('#right');

