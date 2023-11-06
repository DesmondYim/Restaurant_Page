import MainPic from './restaurant.jpg';
import './style.css';

const content = document.querySelector('#content');

function createHeader() {
    const restaurantHeader = document.createElement('h1');
    restaurantHeader.id = "restaurantName";

    restaurantHeader.innerHTML = "Yim Fam";

    return restaurantHeader;
}

function addRestaurantPic() {
    const restaurantPic = new Image();
    restaurantPic.classList = "main_pic";
    restaurantPic.src = MainPic;

    return restaurantPic;
}

function createDescript() {
    const restrDescript = document.createElement('div');
    restrDescript.classList = "description";

    restrDescript.innerHTML = "Welcome to Yim Fam where we serve the best of Mama Yim's homemade cooking!"

    return restrDescript;
}

content.appendChild(createHeader());
content.appendChild(addRestaurantPic());
content.appendChild(createDescript());