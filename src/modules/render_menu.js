import TiggerTails from '../img/food1.jpg';
import PoohTarts from '../img/food2.jpg';
import AcreSandwiches from '../img/food3.jpg';
import PoohPuffs from '../img/food4.png';

function createItemImage(imageFile) {
    const image = new Image();
    image.src = imageFile;
    return image;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.classList = 'itemParagraph';
    paragraph.innerHTML = text;
    return paragraph;
}

function createItemDetail(itemName, cost, detail) {
    const summary = document.createElement('div');

    const item = createParagraph(itemName);
    item.classList = "menuItemName";
    const itemCost = createParagraph(`$`+cost);
    const itemDetail = createParagraph(detail);

    summary.appendChild(item);
    summary.appendChild(itemCost);
    summary.appendChild(itemDetail);
    return summary;
}

function createItem(imageFile, itemName, cost, detail) { 
    const menuItem = document.createElement('div');
    menuItem.classList = 'menuItem';

    const image = createItemImage(imageFile);
    image.classList = 'menuImg';
    const details = createItemDetail(itemName, cost, detail);
    details.classList = 'menuItemDetail';

    menuItem.appendChild(image);
    menuItem.appendChild(details);
    return menuItem;
}

function createMenu() {
    const menu = document.createElement('div');
    menu.classList = 'menu';

    const food1 = createItem(TiggerTails, `Tigger Tails`, 5, `Chocolate \
        and honey covered pretzels`);
    const food2 = createItem(PoohTarts, `Pooh Tarts`, 4, `Adorable 100 \
        Acre egg tarts with an assortment of fruit flavors`);
    const food3 = createItem(AcreSandwiches, `Acre Sandwiches`, 7, `Sandwiches \
        with an smackerel of honeyed ham and cheese slices`);
    const food4 = createItem(PoohPuffs, `Pooh Puffs`, 2, `Sweet and refreshing \
        cream puffs in the shape of your favourite Winnie the Pooh`);

    menu.appendChild(food1);
    menu.appendChild(food2);
    menu.appendChild(food3);
    menu.appendChild(food4);

    return menu;
}

function renderMenu() {
    const main = document.querySelector("main");
    main.textContent = ''; 
    //refreshes page
    main.appendChild(createMenu());
}

export default renderMenu;