let nav = document.querySelector('#navbar')    
let logo = document.querySelector('#logo')
let icons = document.querySelectorAll('#nav-icons a')
window.onscroll = function () {
    if(this.scrollY > 20){
        nav.classList.add('bg-white')
        nav.classList.add('shadow-lg')
        nav.classList.add('navbar-light')
        nav.classList.remove('navbar-dark')
        logo.src = 'images/bakery-color.png'
    }else{
        nav.classList.remove('bg-white')
        nav.classList.remove('shadow-lg')
        nav.classList.add('navbar-dark')
        nav.classList.remove('navbar-light')
        logo.src = 'images/bakery-light-1.png'
    }
}