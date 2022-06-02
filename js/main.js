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
