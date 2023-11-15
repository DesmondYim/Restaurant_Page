import { createNavBar } from "./modules/load-page";
import { createHeader } from "./modules/load-page";
import { createMain } from "./modules/load-page";
import { createFooter } from "./modules/load-page";
import { appendContent } from "./modules/load-page";
import {loadMain} from "./modules/load-page";
import renderHome from './modules/render_home';
import "./style.css";

console.log('hi');
function initializeWebsite() {
    const content = document.querySelector("#content");

    const nav = createNavBar();
    content.appendChild(nav);

    const header = createHeader(`Dining at Pooh's Corner`);
    content.appendChild(header);

    const main = createMain();
    content.appendChild(main);
    console.log(main);

    loadMain();

    const footer = createFooter('footer', 'Open 10a.m. to 6p.m.!');
    content.appendChild(footer);

    renderHome();
}

initializeWebsite();