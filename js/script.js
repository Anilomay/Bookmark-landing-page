const header = document.querySelector('.header');
const btnHamburger =  document.querySelector('#btnHamburger');
const Fade = document.querySelectorAll('.has-fade')
const Q1 = document.querySelector('#Q1');
const Q2 = document.querySelector('#Q2');
const Q3 = document.querySelector('#Q3');
const Q4 = document.querySelector('#Q4');

const questi = document.querySelector('.questions');

btnHamburger.addEventListener('click' , function() {
    console.log('open hamburger')

    if (header.classList.contains('open')){
        header.classList.remove('open')
        Fade.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })
    }
    else{
        header.classList.add('open')
        Fade.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }

})

Q1.addEventListener('click' , function(){
    console.log('open one');

    if(questi.classList.contains('open')){
        questi.classList.remove('open');
    }
    else{
        questi.classList.add('open')
    }
})
Q2.addEventListener('click' , function(){
    console.log('open one');

    if(questi.classList.contains('open2')){
        questi.classList.remove('open2');
    }
    else{
        questi.classList.add('open2')
    }
})
Q3.addEventListener('click' , function(){
    console.log('open one');

    if(questi.classList.contains('open3')){
        questi.classList.remove('open3');
    }
    else{
        questi.classList.add('open3')
    }
})
Q4.addEventListener('click' , function(){
    console.log('open one');

    if(questi.classList.contains('open4')){
        questi.classList.remove('open4');
    }
    else{
        questi.classList.add('open4')
    }
})