import Restaurant from './img/restaurant.jpg';

function createRestrDescription(summary) {
    const description = document.createElement('div');
    description.classList = "restaurant_description";
    description.innerHTML = summary;

    return description;
}

function createHome() {
    const main = document.createElement('div');
    main.classList = 'main';

    const restaurantPic = new Image();
    restaurantPic.src = Restaurant;
    main.appendChild(restaurantPic);

    const description = createRestrDescription('Serving since 1802')
    main.appendChild(description);

    return main;
}

function renderHome() {
    const main = document.getElementById("main")
    main.textContent = '';
    main.appendChild(createHome());
}

export default renderHome();