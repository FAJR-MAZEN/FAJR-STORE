let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {

    const item = cart.find(p => p.name === name);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("تمت إضافة المنتج إلى السلة");
}

function getCartCount(){

    const count = cart.reduce((total,item)=> total + item.quantity ,0);

    const badge = document.getElementById("cart-count");

    if(badge){
        badge.innerText = count;
    }

}

getCartCount();
