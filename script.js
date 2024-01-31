
let carusel = document.querySelector('.carusel');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let img = document.querySelectorAll('.carusel img');
//----------------------------------------1 carusel
let carusel1 = document.querySelector('.carusel1');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let img1 = document.querySelectorAll('.carusel1 img');
//----------------------------------------------------
let carusel2 = document.querySelector('.carusel2');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
let img2 = document.querySelectorAll('.carusel2 img');

let sum = 0 ;

// console.log(img);

function cekBtn1() {
    sum++;
    if(sum > img.length-1){
        sum = 0;
    }else if(sum < 0){
        sum = img.length-1;
    }
    carusel.style.transform = `translateX(${-sum * 1230}px)`
}

function cekBtn2() {
    sum--;
    if(sum > img.length-1){
        sum = 0;
    }else if(sum < 0){
        sum = img.length-1;
    }
    carusel.style.transform = `translateX(${-sum * 1230}px)`
}

//----------------------------------------------------------------------------

function cekBtn3() {
    sum++;
    if(sum > img1.length-1){
        sum = 0;
    }else if(sum < 0){
        sum = img1.length-1;
    }
    carusel1.style.transform = `translateX(${-sum * 1230}px)`
}

function cekBtn4() {
    sum--;
    if(sum > img1.length-1){
        sum = 0;
    }else if(sum < 0){
        sum = img1.length-1;
    }
    carusel1.style.transform = `translateX(${-sum * 1230}px)`
}

//----------------------------------------------------------------------

function cekBtn5() {
    sum++;
    if(sum > img2.length-1){
        sum = 0;
    }else if(sum < 0){
        sum = img2.length-1;
    }
    carusel2.style.transform = `translateX(${-sum * 1230}px)`
}

function cekBtn6() {
    sum--;
    if(sum > img2.length-1){
        sum = 0;
    }else if(sum < 0){
        sum = img2.length-1;
    }
    carusel2.style.transform = `translateX(${-sum * 1230}px)`
}