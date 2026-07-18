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

let message = "Assalam-o-Alaikum%0A%0A";

message += "*Customer Details*%0A";
message += "Name: " + name + "%0A";
message += "Phone: " + phone + "%0A";
message += "City: " + city + "%0A";

if(address!=""){
message += "Address: " + address + "%0A";
}

message += "%0A";

message += "Selected Items: " + selected + "%0A";
message += "Total Quantity: " + quantity + "%0A%0A";

window.open(
"https://wa.me/923402000374?text=" + message,
"_blank"
);

};
