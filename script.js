const prices = {
  "001": 280,
  "002": 280,
  "003": 560,
  "004": 280,
  "005": 280,
  "006": 280,
  "007": 280,
  "008": 280,
  "009": 280,
  "010": 280,

  "011": 280,
  "012": 280,
  "013": 280,
  "014": 280,
  "015": 280,
  "016": 280,
  "017": 280,
  "018": 280,
  "019": 280,
  "020": 280,

  "021": 280,
  "022": 280,
  "023": 280,
  "024": 280,
  "025": 280,
  "026": 280,
  "027": 280,
  "028": 280,
  "029": 280,
  "030": 280,

  "031": 280,
  "032": 280,
  "033": 280,
  "034": 280,
  "035": 280,
  "036": 280,
  "037": 280,
  "038": 280,
  "039": 280,
  "040": 280,

  "041": 280,
  "042": 280,
  "043": 280,
  "044": 280,
  "045": 280,
  "046": 280,
  "047": 280,
  "048": 280,
  "049": 280,
  "050": 280
};
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
const price = prices[card.dataset.number];

const qtyBox = card.querySelector(".qty");

let priceTag = card.querySelector(".price");

if (!priceTag) {
  priceTag = document.createElement("p");
  priceTag.className = "price";
  qtyBox.before(priceTag);
}

priceTag.textContent = "Rs. " + price;

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

  if (name === "" || phone === "" || city === "") {
    alert("Please fill Name, Mobile Number and City.");
    return;
  }

  let message = "Assalam-o-Alaikum\n\n";
  message += "*Customer Details*\n";
  message += "Name: " + name + "\n";
  message += "Phone: " + phone + "\n";
  message += "City: " + city + "\n";

  if (address !== "") {
    message += "Address: " + address + "\n";
  }

  message += "\n*Order Details*\n";

  let grandTotal = 0;

  cards.forEach(card => {

    let qty = parseInt(card.querySelector(".qty span").innerText);

    if (qty > 0) {

      let product = card.querySelector("h3").innerText;
      let number = card.dataset.number;
      let price = prices[number];
      let total = price * qty;

      grandTotal += total;

      message += "━━━━━━━━━━━━\n";
message += "📦 PRODUCT: " + product + "\n";
message += "🔢 Quantity: " + qty + "\n";
message += "💰 Price: Rs." + price + "\n";
message += "🧾 Total: Rs." + total + "\n";
    }

  });

  message += "\nSelected Items: " + selectedItems.innerText;
  message += "\nTotal Quantity: " + totalQty.innerText;
  message += "\nGrand Total: Rs. " + grandTotal;

  const whatsappURL =
    "https://wa.me/923402000374?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

};
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

function showAllProducts() {
  cards.forEach(card => {
    card.style.display = "";
  });
}

function searchProduct() {
  const value = searchBox.value.trim();

  if (value === "") {
    showAllProducts();
    return;
  }

  const searchNo = value.padStart(3, "0");

  cards.forEach(card => {
    const productNo = card.dataset.number;

    if (productNo === searchNo) {
      card.style.display = "";
      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      card.style.display = "none";
    }
  });
}

searchBtn.onclick = searchProduct;

searchBox.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchProduct();
  }
});

searchBox.addEventListener("input", function() {
  if (this.value.trim() === "") {
    showAllProducts();
  }
});


const imageModal = document.getElementById("imageModal");
const zoomedImage = document.getElementById("zoomedImage");
const closeImage = document.querySelector(".close-image");

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    zoomedImage.src = img.src;
    imageModal.style.display = "flex";
  });
});

closeImage.addEventListener("click", () => {
  imageModal.style.display = "none";
});

imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = "none";
  }
});
