

const icons = document.querySelectorAll('#nav-icons a')
const sections = document.querySelectorAll('.s')
const links = document.querySelectorAll('.navbar-nav li a')

let lastScrollTop = 0;
$(window).scroll(function(e){
    if($(this).scrollTop() > 50){
        $('#navbar').addClass('bg-dark')
    }else{
        $('#navbar').removeClass('bg-dark')
    }
    let st = window.pageYOffset || document.documentElement.scrollTop;
    //console.log(this.pageYOffset)
    if(st > lastScrollTop){
        $('#navbar').addClass('shadow-lg').addClass('hideNav')
        //$('#navbar').animate({'top': -navHeight}, 500)
    }else{
        $('#navbar').removeClass('shadow-lg').removeClass('hideNav')
        //$('#navbar').animate({'top': 0}, 500)
    }
    lastScrollTop = st <= 0 ? 0 : st;
    sections.forEach((section) => {
            let count = section.getBoundingClientRect();
            if(count.top >= -50 && count.top <= 300){
                links.forEach((link) => {
                    if(link.innerHTML.toLowerCase() ==  section.id.toLowerCase()){
                        link.classList.add('active')
                    }else{
                        link.classList.remove('active')
                    }
                })
            }
    })

    if($(this).scrollTop() > 1000){
        $('#btn-up').fadeIn(500)
    }else{
        $('#btn-up').fadeOut(500)
    }
})
//Loading
$(document).ready(function(){
    $('#loading').fadeOut(2000, function(){
        $('#loading').addClass('d-none').removeClass('d-flex')
    })
})
//Btn Up
$('#btn-up').click(function(){
    $('html,body').animate({scrollTop: 0}, 1000);
})
//COlor oprions click
const boxWidth = $('.color-options').outerWidth();
$('.color-box').css('left', `-${boxWidth}px`)

$('#color-box-switch')
.click(function(){
    $(this).children().toggleClass('fa-spin')
    if($('.color-box').css('left') == '0px'){
        $('.color-box').animate({'left':-boxWidth}, 1500)
    }else{
        $('.color-box').animate({'left': 0}, 1500)
    }
})
$('.color-options ul li div').click(function(e){
    changeColor($(this).css('background-color'))
})
let root = document.documentElement
 const changeColor = (val) => {
    root.style.setProperty('--main-color', val);
 }

//NAVBAR ACtive linke
$('.navbar-nav li a').click(function(){
$(this).addClass('active');
   $(this).parent().siblings().children().removeClass('active')

    let currentRev = $(this).attr('href');
    let secTop = $(currentRev).offset().top;
    $('body,html').animate({scrollTop: secTop}, 1000)
})

// Typed Object
let typed = new Typed("#typing", 
    {
    strings: ["Web Developer", "Graphic Design", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    }
)

//Navgation between projects in the Gallry Section
// get all imgs and lis I need to

var projects = document.querySelectorAll('#projectsContaitner > div');
var imgs = document.querySelectorAll('#projectsContaitner .box > img');
var portfolioNav = document.querySelector('#portfolio-nav');
var lis = document.querySelectorAll('#portfolio-nav li');
var imgCovers = document.querySelectorAll('#projectsContaitner .img-cover');
var fixedBox = document.querySelector('#fixed-box');
var fixedContent = document.querySelector('#fixedContent');

var fixedBoxImg = document.querySelector('#fixedBoxImg');

var btnClose = document.querySelector('#btn-close');
var btnLeft = document.querySelector('#btn-left');
var btnRight = document.querySelector('#btn-right');


//the default I just have all img in th the section
portfolioNav.addEventListener('click', function(e){
    setActiveClass(e.target)
    if(e.target.id != '' && e.target.id != 'portfolio-nav'){
        for(var i=0; i<projects.length; i++){
            if(e.target.id === 'all'){
                projects[i].classList.add('d-block');
                projects[i].classList.remove('d-none');
            }
            else if(e.target.id === projects[i].dataset.category){
                projects[i].classList.add('d-block');
                projects[i].classList.remove('d-none');
            }else{
                projects[i].classList.add('d-none');
                projects[i].classList.remove('d-block')
            }
        }
    }
});
function setActiveClass(target){
    for(var i=0; i<lis.length; i++){
        if(lis[i] === target){
            lis[i].classList.add('color-main');
        }else{
            lis[i].classList.remove('color-main');
        }
    }
}
// when I click on the img open this project in the module with project's data
for(var i=0; i<imgCovers.length; i++){
    imgCovers[i].addEventListener('click' ,function(e){
        fixedBox.classList.replace('d-none', 'd-flex');
        for(var j=0; j<imgs.length; j++){
            if(e.target.id === imgs[j].id){
                fixedBoxImg.src = imgs[j].src
                nextProject(imgs[j].id)
            }
        }
    })
}
btnClose.addEventListener('click', function(e){
    fixedBox.classList.replace('d-flex', 'd-none');
});
fixedBox.addEventListener('click', function(e){
    fixedBox.classList.replace('d-flex', 'd-none');
});
fixedContent.addEventListener('click', function(e){
    e.stopPropagation();
});

var index = 0;

function nextProject(crunttlyIndex){
    index = crunttlyIndex;
}
btnRight.addEventListener('click', function(e){
    index++;
    if(index > imgs.length - 1){
        index = 0;
    }
    for(var j=0; j<imgs.length; j++){
       if(index === Number(imgs[j].id)){
        fixedBoxImg.src = imgs[j].src
       }
    }
});
btnLeft.addEventListener('click', function(e){
    index--;
    if(index < 0){
        index = imgs.length - 1;
    }
    for(var j=0; j<imgs.length; j++){
       if(index === Number(imgs[j].id)){
        fixedBoxImg.src = imgs[j].src
       }
    }
});

// when I click on the close btn or out the module the module close 

// when I click the left arrow get the previes img 
// when I click on the right arrrow get the next img
//Stikker Blugn


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop: true,
    });
  });

  new WOW().init();

(function() {  
    $("body").niceScroll();
});