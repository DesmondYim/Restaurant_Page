import Restaurant from './img/restaurant.jpg';

function createHeader(restaurantName) {
    const header = document.createElement('h1');
    header.id = "restaurant_name"
    header.innerHTML = restaurantName;

    return header;
}

function createRestrDescription(summary) {
    const description = document.createElement('div');
    description.classList = "restaurant_description";
    description.innerHTML = summary;

    return description;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.id = id;
    btn.classList = "navTab";
    btn.innerHTML = text;
    return btn;
}

function createNavBar() {
    const navBar = document.createElement('nav');
    navBar.id = "nav";

    const homeBtn = createBtn('home', 'Home');
    const menuBtn = createBtn('menu', 'Menu');
    const contactBtn = createBtn('contact', 'Contact Us');

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    return navBar;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.id = id;
    const h3 = document.createElement('h3');
    h3.innerHTML = text;

    footer.appendChild(h3);
    return footer;
}

function appendContent(item) {
    const content = document.querySelector('#content');
    return content.append(item);
}

function loadPage() {
    const nav = createNavBar();
    appendContent(nav);

    const restaurantPic = new Image();
    restaurantPic.src = Restaurant;
    appendContent(restaurantPic);

    const header = createHeader('Yim Fam Dining');
    appendContent(header);

    const description = createRestrDescription('Fresh and delicious food made by yours truly, Mama Yim');
    appendContent(description);

    const footer = createFooter('footer', 'Contact us now!');
    appendContent(footer);
}

export default loadPage;