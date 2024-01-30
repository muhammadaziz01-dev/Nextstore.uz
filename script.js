
let carusel = document.querySelector('.carusel');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let img = document.querySelectorAll('.carusel img');

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
