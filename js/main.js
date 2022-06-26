
let mixer  = mixitup('.proto-container');
let scrollStyle = new  ScrollStyle();
let sidebar = new Sidebar();
let slider = new Slider();
//Loading
$(document).ready(function(){
    $('#loading').fadeOut(2000)
})

let lastScrollTop = 0;
$(window).scroll(function(e){
    scrollStyle.chNavBg()
    scrollStyle.hideNavbarTop()
    scrollStyle.changeActiveWhenDown()
    scrollStyle.btnUpToggle()
})
switchNavActiveLink()
scrollStyle.btnUpClicked()
sidebar.toggleSidebar()
sidebar.pickColor()
slider.switchActiveLinke()
slider.openModule()
counter();
// Typed Object
let typed = new Typed("#typing", 
    {
    strings: ["Web Developer", "Graphic Design", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    }
)

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop: true,
    });
  });

  new WOW().init();