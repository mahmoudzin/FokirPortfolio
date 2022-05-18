let nav = document.querySelector('#navbar')    
let logo = document.querySelector('#logo')
let icons = document.querySelectorAll('#nav-icons a')
window.onscroll = function () {
    if(this.scrollY > 20){
        nav.classList.add('shadow-lg')
        nav.classList.add('bg-dark')
    }else{
        nav.classList.remove('shadow-lg')
        nav.classList.remove('bg-dark')
    }
}
    
// Typed Object
let typed = new Typed("#typing", 
    {
    strings: ["Web Developer", "Graphic Design", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    }
)