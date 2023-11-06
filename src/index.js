const body = document.querySelector('body');

function createHeader() {
    const restaurantHeader = document.createElement('h1');
    restaurantHeader.id = "restaurantName";

    restaurantHeader.innerHTML = "Yim Fam Cookout";

    return restaurantHeader;
}

document.body.appendChild(createHeader());