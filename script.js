
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
//------------------------------------------------------
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

//----------------------------------------------------------

let wrapper = document.querySelector('#wrapper');
for(let i = 0 ; i < 10 ; i++){
    let card = document.createElement('div');
    card.innerHTML=`
     <div class="w-[230px]  p-[10px] pl-[20px] bg-white rounded-[10px] relative">
       <img src="./assets/imgs/image11.png" alt="img">
       <p class="text-[#0D63F3] text-[18px] font-[591] mb-[6px]">
           299 000 so’m
       </p>
       <p class="text-[#1E1E1E] text-[14px] font-[539] mb-[33px]">
           Apple Airpods Pro <br>
           simsiz quloqchin , Oq rangda
       </p>
       <p class="text-[14px] font-[539] text-[#6C757D] mb-[25px]">
           1230 ta buyurtma
        </p>
        <span class="flex items-center gap-[36px]">
        <button class="rounded-lg bg-[#0D63F3] py-[10px] px-[24px] hover:bg-blue-800">
            <a href="#" class="text-white">Sotib olish</a>
        </button>
        <img src="./assets/imgs/shopping.svg" alt="shopping">
        </span>
        <img src="./assets/imgs/favorite.svg" alt="favorite" class="absolute top-3 right-3">
      </div>
    `;
    wrapper.appendChild(card);

}
