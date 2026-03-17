const products = [

{
name:"FAJR ENERGY",
price:"30 SAR",
image:"images/fajr-energy.png"
}

];

const container = document.getElementById("products");

products.forEach(product => {

const card = document.createElement("div");

card.className = "product";

card.innerHTML = `
<img src="${product.image}" width="200">
<h3>${product.name}</h3>
<p>${product.price}</p>
<button>شراء</button>
`;

container.appendChild(card);

});
