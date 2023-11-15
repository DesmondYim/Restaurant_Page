import renderContacts from './render_contact';
import renderHome from './render_home';
import renderMenu from './render_menu';

function createHeader(restaurantName) {
    const header = document.createElement('h1');
    header.id = "restaurant_name"
    header.innerHTML = restaurantName;
    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.id = id;
    btn.classList = "button";
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

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    return main;
}

function loadMain() {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

    handleLoadMain(homeBtn, renderHome);
    handleLoadMain(menuBtn, renderMenu);
    handleLoadMain(contactBtn, renderContacts);
}

function handleLoadMain(button, callback) {
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(button);
        callback();
      })
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

export {createNavBar};
export {createHeader};
export {createMain};
export {loadMain};
export {createFooter};
export {appendContent};