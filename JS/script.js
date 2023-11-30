window.addEventListener('load',()=>{
    const load = document.querySelector('.loader');

    load.classList.add('loader-hidden');

    load.addEventListener('transitionend', ()=>{
        document.body.removeChild('loader');
    })
})


let menu = document.querySelector('#menu');
let navlink = document.querySelector('.navlink');


menu.addEventListener('click', ()=>{
    menu.classList.toggle('bx-x');
    navlink.classList.toggle('active');
})



const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();

if (pageName === "index.html"){
    document.querySelector(".home_link").classList.add("active");
}
if (pageName === "about.html"){
    document.querySelector(".about_link").classList.add("active");
}

if (pageName === "service.html"){
    document.querySelector(".service_link").classList.add("active");
}

if (pageName === "join.html"){
    document.querySelector(".join_link").classList.add("active");
}

if (pageName === "contact.html"){
    document.querySelector(".contact_link").classList.add("active");
}

window.addEventListener('load',()=>{
    const load = document.querySelector('.loader');

    load.classList.add('loader-hidden');

    load.addEventListener('transitionend', ()=>{
        document.body.removeChild('loader');
    })
})




let care = document.querySelector('#care');
let job = document.querySelector('#job');
let box_1 = document.querySelector('#service_box_1');

care.addEventListener('click', ()=>{
    window.location.href ='service.html';
})
job.addEventListener('click', ()=>{
    window.location.href = 'join.html'
})
box_1.addEventListener('click', ()=>{
    window.location.href = 'companion.html'
})



let right = document.querySelector('#right');




