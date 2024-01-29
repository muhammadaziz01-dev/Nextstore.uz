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