import Restaurant from '../img/restaurant.jpg';

function createRestrDescription(summary) {
    const description = document.createElement('div');
    description.classList = "restaurant_description";
    description.innerHTML = summary;

    return description;
}

function createHome() {
    const home = document.createElement('div');
    home.classList = 'home';

    const restaurantPic = new Image();
    restaurantPic.src = Restaurant;
    restaurantPic.id = "restaurantPic";
    home.appendChild(restaurantPic);

    const description = createRestrDescription('Serving since 1802')
    home.appendChild(description);

    return home;
}

function renderHome() {
    const main = document.querySelector("main");
    main.innerHTML = '';
    //refreshes page
    main.appendChild(createHome());
}

export default renderHome;