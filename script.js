const cards = document.querySelectorAll(".card");

const selectedItems = document.getElementById("selectedItems");
const totalQty = document.getElementById("totalQty");

let selected = 0;
let quantity = 0;


cards.forEach(card => {

const minus = card.querySelectorAll("button")[0];
const plus = card.querySelectorAll("button")[1];

const number = card.querySelector(".qty span");
const tick = card.querySelector(".tick");

let qty = 0;

const productNo = card.querySelector("h3").innerText;


plus.onclick = () => {

qty++;

number.innerText = qty;

quantity++;


if(qty == 1){

selected++;

tick.style.display = "block";

card.style.border = "2px solid gold";

}


selectedItems.innerText = selected;

totalQty.innerText = quantity;

};



minus.onclick = () => {

if(qty > 0){

qty--;

number.innerText = qty;

quantity--;


if(qty == 0){

selected--;

tick.style.display = "none";

card.style.border = "2px solid #333";

}


selectedItems.innerText = selected;

totalQty.innerText = quantity;

}

};


});



const orderBtn = document.getElementById("orderBtn");


orderBtn.onclick = () => {


const name = document.getElementById("customerName").value.trim();

const phone = document.getElementById("customerPhone").value.trim();

const city = document.getElementById("customerCity").value.trim();

const address = document.getElementById("customerAddress").value.trim();



if(name=="" || phone=="" || city==""){

alert("Please fill Name, Mobile Number and City.");

return;

}



let message = 
"Assalam-o-Alaikum\n\n";


message += "*Customer Details*\n";

message += "Name: " + name + "\n";

message += "Phone: " + phone + "\n";

message += "City: " + city + "\n";


if(address!=""){

message += "Address: " + address + "\n";

}


message += "\n*Order Details*\n";



cards.forEach(card => {


let product = card.querySelector("h3").innerText;


let qty = parseInt(
card.querySelector(".qty span").innerText
);



if(qty > 0){

message += product + " × " + qty + "\n";

}


});



message += "\nSelected Items: " + selectedItems.innerText;

message += "\nTotal Quantity: " + totalQty.innerText;



let whatsappURL = 
"https://wa.me/923456611435?text=" 
+ encodeURIComponent(message);



window.open(whatsappURL, "_blank");


};
