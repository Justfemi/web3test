let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT 1',
        image: 'item1.png',
        price: 1200
    },
    {
        id: 2,
        name: 'PRODUCT 2',
        image: 'item2.png',
        price: 1450
    },
    {
        id: 3,
        name: 'PRODUCT 3',
        image: 'item3.png',
        price: 2200
    },
    {
        id: 4,
        name: 'PRODUCT 4',
        image: 'item4.png',
        price: 3235
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'item5.png',
        price: 4500
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'item6.png',
        price: 850
    },
    {
        id: 7,
        name: 'PRODUCT 3',
        image: 'item3.png',
        price: 2200
    },
    {
        id: 8,
        name: 'PRODUCT 4',
        image: 'item4.png',
        price: 3235
    },
    {
        id: 9,
        name: 'PRODUCT NAME 5',
        image: 'item5.png',
        price: 4500
    },
    {
        id: 10,
        name: 'PRODUCT NAME 6',
        image: 'item6.png',
        price: 850
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="img-box"><img src="image/${value.image}"></div>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}