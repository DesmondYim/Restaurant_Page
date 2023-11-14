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
    loadMain(homeBtn, renderHome());
    const menuBtn = createBtn('menu', 'Menu');
    loadMain(menuBtn, renderMenu());
    const contactBtn = createBtn('contact', 'Contact Us');
    loadMain(contactBtn, renderContacts());

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
    const main = document.createElement('div');
    main.classList = 'main';
    return main;
}

function loadMain(button, renderMain) {
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(button);
        renderMain;
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
export {createFooter};
export {appendContent};