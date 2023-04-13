let basket = [];
let pricebasket = [];
let amount = [];
let food = ['Pizza Margherita', 'Pizza Funghi', 'Pizza Salami', 'Pizza Tonno', 'Pizza Sucuk', 'Döner Pizza', 'Hähnchendöner Pizza', 'Pizza Vegetarisch', 'Mafia Pizza', 'König Pizza'];
let pricelist = [9.99, 10.99, 10.99, 11.59, 10.99, 10.99, 11.59, 11.59, 12.99, 12.99];
let description = ['mit Käse und Tomatensauce', 'mit Champignons', 'mit Salami', 'mit Thunfisch und Roten Zwiebeln', 'mit Knoblauchwurst', 'Drehspieß Kalbfleisch', 'Drehspieß Hähnchenfleisch, Champignons', 'mit Champignons, Broccoli, Paprika, Mais', 'Drehspieß Kalbfleisch, Peperoni, Frischer Knoblauch, Extrem Scharf', 'Drehspieß Kalbfleisch, Mais, Jalapenos, Soße Hollandaise'];

function render() {
    navbar();
    store();
    menuList();
    basketbackground();
}

function navbar() {
    let contenthead = document.getElementById('navbar');
    contenthead.innerHTML = '';
    contenthead.innerHTML = /*html*/`<header>
    <a href="#"><span>LIEFERFLO</span><img src="./img/logo2.png" alt="" srcset=""></a>
        <h2>Speisen</h2> 
    <nav class="navbar"><a href="#"><img src="./img/menu.png" alt="" srcset=""></a></nav>
    </header>
    `;
}

function store() {
    let contenthead = document.getElementById('foodstore');
    contenthead.innerHTML = '';
    contenthead.innerHTML =/*html*/`
    <section class="foodstore">
        <div>
            <img class="mainimg" src="./img/pizza.jpg" alt="">
        </div>
        <section class="foodstoreDescription margin-left-16">
            <h1>FURKAAN Imbiss</h1>
            <div class="evaluation">
                <img class="stars" src="./img/starFull.png">
                <img class="stars" src="./img/starFull.png">
                <img class="stars" src="./img/starFull.png">
                <img class="stars" src="./img/starFull.png">
                <img class="margin-right stars" src="./img/starEmpty.png">
                2564 Bewertungen
            </div>
            <div class="additional"> 
                <div>
                    <img src="./img/clock.png"> 40-60min • 
                </div>
                <div>
                    <img class="margin-left" src="./img/bicycle.png"> Kostenlos •
                </div>
                <div> 
                    <img class="margin-left" src="./img/shoppingbag.png"> Kein Mindestbestellwert
                </div>
            </div>
        </section>   
    </section>
    `;
}

function menuList() {

    let content = document.getElementById('menulist');
    content.innerHTML = '';
    for (let i = 0; i < food.length; i++) {
        let cardFood = food[i];
        let cardPrice = pricelist[i];
        let cardDescription = description[i];
        content.innerHTML += card(cardFood, cardPrice, cardDescription, i);
    }
}

function card(cardFood, cardPrice, cardDescription, i) {
    return /*html*/`
  <section class="mealbody">
          <div class="mealcard" >
              <div class="foodcard">
                  <div id="meal${i}"><b>${cardFood}</b></div><br>
                  <div id="text${i}">${cardDescription}</div>
                  <div class="pricebox" id="price${i}">${cardPrice} €</div>
              </div>
              <div>
              <button class="btn" onclick="addBasket(${i})">Bestellen</button>    
              </div>
          </div>
  </section>`;
}

function addBasket(i) {

    let foods = document.getElementById(`meal${i}`).innerHTML;
    let prices = document.getElementById(`price${i}`).innerHTML;
    let index = basket.indexOf(foods);

    if (index !== -1) {
        amount[index]++;
        document.getElementById(`amount${index}`).innerHTML = amount[index];
    } else {
        basket.push(foods);
        pricebasket.push(prices);
        amount.push(1);
    }
    basketList();
    payed();
}

function addBasketTwo(i) {
    let food = basket[i];
    let price = pricebasket[i];
    let index = basket.indexOf(food);

    if (index !== -1) {
        amount[index]++;
        document.getElementById(`amount${index}`).innerHTML = amount[index];
    } else {
        basket.push(food);
        price.push(price);
        amount.push(1);
        basketList();
    }
    payed();
}

function deleteBasket(i) {

    if (amount[i] > 1) {
        amount[i]--;
    } else {
        basket.splice(i, 1);
        pricebasket.splice(i, 1);
        amount.splice(i, 1);
    }
    basketList();
    payed();
}

function basketList() {
    let contentbasket = document.getElementById('basket');
    contentbasket.innerHTML = '';

    for (let i = 0; i < basket.length; i++) {
        let food = basket[i];
        let price = pricebasket[i];
        let quantity = amount[i];
        contentbasket.innerHTML += htmlbasket(food, price, quantity, i);


    }
    payed();
}

function payed() {
    let sum = 0;

    for (let i = 0; i < basket.length; i++) {
        sum += parseFloat(pricebasket[i]) * amount[i];
    }

    let paid = sum.toFixed(2);

    document.getElementById('payed').innerHTML = paid;
}

function htmlbasket(foods, prices, quantity, i) {
    return /*html*/ `
    <section class="basketCard">
      <div class="inlinecard margin-bottom-16">
        <span id="amount${i}" class="infont">${quantity}</span>
        <div class="mealprice margin-left">
          <div id="mealbasket${i}">${foods}</div>
          <div class="margin-left" id="price${i}">${prices}</div>     
        </div>
        <div class="inlinebtn margin-left">
          <button class="amountbtn" onclick="addBasketTwo(${i})">+</button>
          <button class="amountbtn" onclick="deleteBasket(${i})">-</button>
        </div>
      </div>
    </section>`
}

function basketbackground() {
    let contentbasket = document.getElementById('contentbasket');
    contentbasket.innerHTML =/*html*/`
    <section id="basketBackground" class="basketBackground">
        <section>
        <h3 class="baskethead">Warenkorb</h3>
            <div id="basket"></div>
        </section>
        <div class="payment">
            <div class="margin-bottom-16"><b>Gesamtsumme <span id="payed">0</span> €</b></div>
            <button class="btn">Bestellen</button>
        </div>
    </section>
        `
}

function deleteBasketTwo(i) {
    if (i <= 0) {
        alert('nicht drin');

    } else {
        basket.splice(i, 1);
        price.splice(i, 1);
        document.getElementById('infont').innerHTML = parseInt(document.getElementById('infont').innerHTML) - 1;

    }
    payed();

}

