const humb = document.querySelector('.header .nav__bar .nav__list .hamburger');
const menu = document.querySelector('.header .nav__bar .nav__list ul');
const menu_item = document.querySelector('.header .nav__bar .nav__list ul li a');
const header = document.querySelector('.header.container');

humb.addEventListener('click',()=>{
    humb.classList.toggle('active');
    menu.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c"
    }
    else{
        header.style.backgroundColor = 'transparent'
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click',() => {
        humb.classList.toggle('active');
        menu.classList.toggle('active');

    });
    
});