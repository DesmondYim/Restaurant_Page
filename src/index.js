import MainPic from './restaurant.jpg';

const content = document.querySelector('#content');

function createHeader() {
    const restaurantHeader = document.createElement('h1');
    restaurantHeader.id = "restaurantName";

    restaurantHeader.innerHTML = "Yim Fam Cookout";

    return restaurantHeader;
}

function addRestaurantPic() {
    const restaurantPic = new Image();
    restaurantPic.src = MainPic;

    return restaurantPic;
}


content.appendChild(createHeader());
content.appendChild(addRestaurantPic());