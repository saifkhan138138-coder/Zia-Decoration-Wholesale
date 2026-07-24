const prices = {
"001":280,"002":280,"003":560,"004":280,"005":280,
"006":280,"007":280,"008":280,"009":280,"010":280,
"011":280,"012":280,"013":280,"014":280,"015":280,
"016":280,"017":280,"018":280,"019":280,"020":280,
"021":280,"022":280,"023":280,"024":280,"025":280,
"026":280,"027":280,"028":280,"029":280,"030":280,
"031":280,"032":280,"033":280,"034":280,"035":280,
"036":280,"037":280,"038":280,"039":280,"040":280,
"041":280,"042":280,"043":280,"044":280,"045":280,
"046":280,"047":280,"048":280,"049":280,"050":280
};


const cards = document.querySelectorAll(".card");

const selectedItems = document.getElementById("selectedItems");
const totalQty = document.getElementById("totalQty");

let orders = {};

let currentCard = null;


// PRODUCT CLICK OPEN POPUP

cards.forEach(card => {

card.onclick = () => {

currentCard = card;

let number = card.dataset.number;

document.getElementById("popupImage").src =
card.querySelector("img").src;

document.getElementById("popupNumber").innerText =
"#" + number;

document.getElementById("popupPrice").innerText =
"Rs. " + prices[number];

document.getElementById("popupQty").innerText =
orders[number] || 0;


document.getElementById("productModal")
.classList.add("active");

};

});


// CLOSE POPUP

document.getElementById("closeModal").onclick = () => {

document.getElementById("productModal")
.classList.remove("active");

};


// PLUS BUTTON

document.getElementById("plusBtn").onclick = () => {

let number = currentCard.dataset.number;

if(!orders[number]){
orders[number]=0;
}

orders[number]++;

update();

document.getElementById("popupQty").innerText =
orders[number];

};


// MINUS BUTTON

document.getElementById("minusBtn").onclick = () => {

let number = currentCard.dataset.number;

if(orders[number] > 0){

orders[number]--;

}

update();

document.getElementById("popupQty").innerText =
orders[number] || 0;

};



// UPDATE COUNTERS + TICK

function update(){

let selected = 0;
let qty = 0;


cards.forEach(card=>{

let number = card.dataset.number;

if(orders[number] > 0){

selected++;

card.classList.add("selected");

}
else{

card.classList.remove("selected");

}


qty += orders[number] || 0;


});


selectedItems.innerText = selected;

totalQty.innerText = qty;

}



// SEARCH

const searchBox =
document.getElementById("searchBox");

const searchBtn =
document.getElementById("searchBtn");


function showAllProducts(){

cards.forEach(card=>{

card.style.display="";

});

}



function searchProduct(){

let value =
searchBox.value.trim();


if(value===""){

showAllProducts();
return;

}


let searchNo =
value.padStart(3,"0");


cards.forEach(card=>{


if(card.dataset.number === searchNo){

card.style.display="";

card.scrollIntoView({
behavior:"smooth",
block:"center"
});

}

else{

card.style.display="none";

}


});


}


searchBtn.onclick = searchProduct;


searchBox.addEventListener("keypress",e=>{

if(e.key==="Enter"){

searchProduct();

}

});


searchBox.addEventListener("input",()=>{

if(searchBox.value===""){

showAllProducts();

}

});



// CLEAR SEARCH

document.getElementById("clearSearchBtn").onclick = ()=>{

searchBox.value="";

showAllProducts();

searchBox.focus();

};




// WHATSAPP ORDER


document.getElementById("orderBtn").onclick = ()=>{


let name =
document.getElementById("customerName").value.trim();

let phone =
document.getElementById("customerPhone").value.trim();

let city =
document.getElementById("customerCity").value.trim();

let address =
document.getElementById("customerAddress").value.trim();



if(name==="" || phone==="" || city===""){

alert("Please fill Name, Mobile Number and City");

return;

}



let message =
"Assalam-o-Alaikum\n\n";


message += "*Customer Details*\n";

message += "Name: "+name+"\n";

message += "Phone: "+phone+"\n";

message += "City: "+city+"\n";


if(address!==""){

message += "Address: "+address+"\n";

}



message += "\n*Order Details*\n";



let grandTotal=0;


cards.forEach(card=>{


let number =
card.dataset.number;


let qty =
orders[number] || 0;


if(qty>0){


let price =
prices[number];


let total =
price * qty;


grandTotal += total;


message += "\n📦 Product: #"+number;

message += "\n🔢 Quantity: "+qty;

message += "\n💰 Total: Rs."+total+"\n";


}


});



message += "\nSelected Items: "
+ selectedItems.innerText;


message += "\nTotal Quantity: "
+ totalQty.innerText;


message += "\nGrand Total: Rs. "
+ grandTotal;



let url =
"https://wa.me/923402000374?text="
+encodeURIComponent(message);



window.open(url,"_blank");


};
