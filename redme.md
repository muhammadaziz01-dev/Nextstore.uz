## DOM - Document Object Model

### DOM - Selectors 
1. getElementById('')
2. getElementByTegName('')
3. getElementByClassName('')
4. getElementByName('')
5. qutSelector('')
6. qutSelectorAll('')

- getElementById('')-> bunda biz elamentimizni  " id " nomiorqali tanlab olamiz . 
<p>M :</p>

```
let catd = .document.getElementById('card')
```

- getElementByClassName('')-> bunda biz elamentimizni " class " nomi orqali tanlab olamiz . 
<p>M :</p>

```
let catd = .document.getElementByClassName('card');
```
- getElementByTagName('')-> bunda biz elamentimizni " teg " nomi orqali tanlab olamiz . 
<p>M :</p>

```
let h1 = .document.getElementByTagName('h1');
```

- getElementByName('')-> bunda biz elamentimizni " name " nomi orqali tanlab olamiz . 
<p>M :</p>

```
let catd = .document.getElementName('card');
```
- qutSelector('')-> bunda biz elamentimizni ham " .class , #id , tegName , name " orqali tanlab olishligimiz mumkun  . 
<p>M :</p>

```
let card = document.querySelector(".card");
//----------------------
let card = document.querySelector("#card");
//-----------------------
let card = document.querySelector("h1");
//-------------------------
let card = document.querySelector("card");
```

- qutSelectorAll('')-> bunda biz elamentimizni ham " .class ,  tegName , name " orqali qancha bo'lsa hammasini tanlab  olishligimiz mumkun  . 
<p>M :</p>

```
let card = document.querySelectorALL(".card");
//----------------------
let card = document.querySelectorAll("h1");
//-------------------------
let card = document.querySelectorAll("card");
```

<hr>

### **Tanlab olgan elamentlarimiz ustida bajarishimiz mukun bo'lgan ammallar**

- **element.parentElement** -> bu bizga tanlab olgan elamentimizni parent 'ota' elamentini ko'rsatadi.

- **element.parentElemen.parentElement.parentElement** -> bu bizga tanlab olgan elamentimizni eng katta parent elamentigacha chiqishlik imkonini beradi bu ketma ketlikda yozsak.

- **element.parentNode** -> bu ham bizga *.parentElement* kabi vazifa bajaradi

- **element.nextElementSibling** -> bu bizga tanlab olgan elamentimizdan kegingi elamentni ko'rsatadi.

- **element.previosElementSibling** -> bu bizga tanlab olgan elamentimizdan oldingi elamentni ko'rsatadi.

- **element.chidren** -> bu bizga tanlab olgan elamentimizni icidagin 'bola' elamentini ko'rsatadi.

- **element.firstElementChild** -> bu bizga tanlab olgan elamentimizni ichidagi birinchi  elamentni ko'rsatadi.

- **element.lastElementChild** -> bu bizga tanlab olgan elamentimizni ichidagi ohirgi  elamentni ko'rsatadi.

- **element.style** -> bu bizga tanlab olgan elamentimiz olishi mumkun bo'lga barcha srillarni ( *Object { }*) ro'yhat korinishida ko'rishligimiz mumkun va shu orqali elamentimizni manipulatsiya yani stillarni o'zgartiishimiz yoki qo'shimcha yana stillar qo'shishligimiz mumkun.
<p>M : </p>

```
let element = document.querySelector("h1");
element.style.color = "red";
```
<hr>

### 30.01.2024

- **element.style.cssText** -> foydalangan holda js orqali elamentimizga istakgancha stillarni yozishligimiz mumkun , bunda agr (" " , ' ') qo'shtirnoq va birtirnoqni ichida yozadigan bo'lsak 1 qatorda yozishligimiz kerak agar (` `) bektik ichida yozadigan bo'lsak ancha tartipli ko'rinishda yozishlik imkoni mavjut. 

### JavaScript orqali tanlab olgan elamentlarimizni vizini aniqlash 

1.  .clientWidth
2.  .clientHeeight
3.  .offsetHeeight
4.  .offseWidht
6.  .scrolHeeight
7.  .offsetTop
8.  .offsetLeft
 <hr>

 - **element.clientWidth** - tanlab olgan elamentimiz Width aniqlab beradi bunda borderlar hisomlanmaydi misol tariqasida cardni olsak uni borderi , margin lar hisonlanmastan  Width o'lchab beradi va bizga number qaytaradi. 

 - **element.clientHeeight** - elamentimiz balandligini o'lchab beradi huddi element.clientWidth singari

 - **element.offseWidht** - elamentimizni obshi Width olchab beradi bunda peding , border , scrol bo'lsa ularniham hisoblab beradi va bu ham number qaytaradi.

  - **element.offsetHeeight** - elamentimiz  obshi balandligini o'lchab beradi huddi element.offseWidht singari.

  - **element.scrolHeeight** - elamentimiz  skroli bo'lsa shunin o'lchab beradi .

- **element.offsetTop** - elamentimizni tepadan qancha joy bo'lsa shuni o'lchab beradi.

- **element.offsetLeft** - elamentimizni chaptan (leftan) qancha joy bo'lsa shuni o'lchab beradi.

<hr>

### JavaScripta elament atributlari bilan ishlashlik.

1. getAttribute("");
2. setAttribute("" , "");
1. hasAttribute("");

- **elament.getAttribute("");** - bunda kiritgan elament atribut velyusini olib beradi .

- **elament.setAttribute("","");** - bunda metod oz'ziga ikkita qiymat oladi birinchisi o'zgartirmoqchi bo'lgan atributimiz , ikkinchiqiymat sifatida nimga o'zgartirmoqchi bo'lsak shuni yozamiz.

- **elament.hasAttribute("");** - bunda kiritgan elament atribut tekshiradi bo'lsa true aks holda false qiymat qaytaradi .
<hr>

### JavaScrip da classlar bilan islashlik 

1. className
2. classList

- **elament.className** - bu elamentimiz class nomini olib beradi .

- **elament.classList** - bu bizga lamentimizdagi class larni ro'yhatini array "[ ]" ko'rinishida olib beradi va ozini metodlariga ega ular .  

   - .add()
   - .remove()
   - .contains()
   - .toggle()

     - **elament.classList.add("")** - bu elament classiga kiritga classimizni ko'shadi .

      - **elament.classList.remove("")** - bu elament classlari ichidan kiritgan classimizni o'chiradi  .

       - **elament.classList.contans("")** - bu elament ichida biz kiritgan class bo'lsa true aks holda false qiymat qaytaradi.

        - **elament.classList.toggle("")** - bu biz kiritgan classimiz elamentlar classi ichida bo'lsa o'chiradi , agar yoq bo'lsa qo'shadi.

<hr>        

###  31. 01. 2024

###  Dynamicolly DOM monupulating

 - createElement(tegName);
 - appennd();
 - prepend();
 - after();
 - before();


 1. **createElement(tegName)** -> bizga yangi html elament qurib beradi .

 ```
 let div = document.createElement(div);

 // natija -> <div></div>
 ``` 

 2. **appennd()** -> yaratgan elamentimizni tanlab olgan elamentimiz ichiga joylashtirib beradi , joylashtirishda elamentimizni ohiridan joylashtiradi.

 ```
let wrapper =document.querySelector('.wrapper');
let card = document.createElement('div');

wrapper.append(card);
 ```

 3. **prepend()** -> yaratgan elamentimizni tanlab olgan elamentimiz ichiga joylashtirib beradi , huddi 'appennd()' singari farqi bunda joylashtirishda elamentimiz boshidan  joylashtiradi, ikkisini bir vaqitda ishlatilmaydi .

  ```
 let wrapper =document.querySelector('.wrapper');
  let card = document.createElement('div');

  wrapper.prepend(card);
 ```
 
 4. **after()** -> yaratgan elamentimizni tanlab olgan elamentimizni pasidan qo'shib beradi.

 
  ```
   let wrapper=document.querySelector('.wrapper');
   let card = document.createElement('div');

   wrapper.after(card);
  ```

5 . **before()** -> yaratgan elamentimizni tanlab olgan elamentimizni yuqorisidan qo'shib beradi.

    ```
    let wrapper =document.querySelector('.wrapper');
    let card = document.createElement('div');

    wrapper.before(card);
    ```