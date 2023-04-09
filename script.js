let basket = [];
let price = [];
let amount = [];
let food = ['Margherita', 'Funghi', 'Salami', 'Tonno', 'Sucuk', 'Döner', 'Hähnchendöner', 'Vegetarisch', 'Mafia', 'König Pizza'];
let pricelist = [9.99, 10.99, 10.99, 11.59, 10.99, 10.99, 11.59, 11.59, 12.99, 12.99];
let description = ['mit Käse und Tomatensauce', 'mit Champignons', 'mit Salami', 'mit Thunfisch und Roten Zwiebeln', 'mit Knoblauchwurst', 'Drehspieß Kalbfleisch', 'Drehspieß Hähnchenfleisch, Champignons', 'mit Champignons, Broccoli, Paprika, Mais', 'Drehspieß Kalbfleisch, Peperoni, Frischer Knoblauch, Extrem Scharf', 'Drehspieß Kalbfleisch, Mais, Jalapenos, Soße Hollandaise'];

function render() {
    navbar();
    store();
    menuList();
}

function navbar() {
    let contenthead = document.getElementById('navbar');
    contenthead.innerHTML = '';
    contenthead.innerHTML = /*html*/`<header class="headline">
    <a href="#" class="logo"><span>LIEFERFLO</span><img src="./img/logo.png" alt="" srcset=""></a>
        <h3>Speisen</h3> 
    <nav class="navbarHead"><a href="#"><img src="./img/menu.png" alt="" srcset=""></a></nav>
    </header>
    `;
}

function store() {
    let contenthead = document.getElementById('foodstore');
    contenthead.innerHTML = '';
    contenthead.innerHTML =/*html*/`
    <section class="foodSection">
        <div class="foodstoreImg"><img src="./img/pizza.jpg" alt=""></div>
        <section class="foodstoreDescription">
        <h1>FURKAAN Imbiss</h1>
        <div class="evaluation">
            <img src="./img/starFull.png">
            <img src="./img/starFull.png">
            <img src="./img/starFull.png">
            <img src="./img/starFull.png">
            <img src="./img/starEmpty.png">
            2564 Bewertungen
        </div>
    <div class="additional"> 
        <img src="./img/clock.png"> 40-60min • <img class="bike" src="./img/bicycle.png"> Kostenlos • <img src="./img/shoppingbag.png" alt="" srcset=""> Kein Mindestbestellwert</div>
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
    return/*html*/`
    <section class="mealbody">
            <div class="mealcard" >
                <div class="foodcard">
                    <div id="meal${i}">${cardFood}</div> 
                    <div id="text${i}">${cardDescription}</div>
                    <div class="pricebox" id="price${i}">${cardPrice}€</div>
                </div>
                <div class="foodbtn">
                <button onclick="addBasket(${i})">Bestellen</button>    
                </div>
            </div>
    </section>`;
}