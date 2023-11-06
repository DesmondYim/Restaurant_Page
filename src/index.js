const content = document.querySelector('#content');

function createHeader() {
    const restaurantHeader = document.createElement('h1');
    restaurantHeader.id = "restaurantName";

    restaurantHeader.innerHTML = "Yim Fam Cookout";

    return restaurantHeader;
}
content.appendChild(createHeader());