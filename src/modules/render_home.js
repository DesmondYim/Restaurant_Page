import Restaurant from './img/restaurant.jpg';

function createRestrDescription(summary) {
    const description = document.createElement('div');
    description.classList = "restaurant_description";
    description.innerHTML = summary;

    return description;
}

function renderHome() {
    const mainBody = document.createElement('div');
    mainBody.classList = 'mainBody';

    const restaurantPic = new Image();
    restaurantPic.src = Restaurant;
    mainBody.appendChild(restaurantPic);

    const description = createRestrDescription('Serving since 1802')
    mainBody.appendChild(description);

    return mainBody;
}

export default renderHome();