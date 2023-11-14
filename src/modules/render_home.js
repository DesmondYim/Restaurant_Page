import Restaurant from './img/restaurant.jpg';

function createRestrDescription(summary) {
    const description = document.createElement('div');
    description.classList = "restaurant_description";
    description.innerHTML = summary;

    return description;
}

function renderHome() {
    const restaurantPic = new Image();
    restaurantPic.src = Restaurant;
    appendContent(restaurantPic);


}

export default renderHome();
