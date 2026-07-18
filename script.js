const cards = document.querySelectorAll(".card");

const selectedItems = document.getElementById("selectedItems");
const totalQty = document.getElementById("totalQty");

let selected = 0;
let quantity = 0;

cards.forEach(card => {

const minus = card.querySelectorAll("button")[0];
const plus = card.querySelectorAll("button")[1];

const number = card.querySelector("span");
const tick = card.querySelector(".tick");

let qty = 0;

plus.onclick = () => {

qty++;

number.innerText = qty;

quantity++;

if(qty==1){

selected++;

tick.style.display="block";

card.style.border="2px solid gold";

}

selectedItems.innerText=selected;

totalQty.innerText=quantity;

};

minus.onclick = () => {

if(qty>0){

qty--;

number.innerText=qty;

quantity--;

if(qty==0){

selected--;

tick.style.display="none";

card.style.border="2px solid #333";

}

selectedItems.innerText=selected;

totalQty.innerText=quantity;

}

};

});
