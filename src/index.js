import { createNavBar } from "./modules/load-page";
import { createHeader } from "./modules/load-page";
import { createMain } from "./modules/load-page";
import { createFooter } from "./modules/load-page";
import { appendContent } from "./modules/load-page";
import {loadMain} from "./modules/load-page";
import renderHome from './modules/render_home';
import TreeDivider from './img/tree_trunk.png';
import "./style.css";

function initializeWebsite() {
    const content = document.querySelector("#content");

    const nav = createNavBar();
    content.appendChild(nav);

    const header = createHeader(`Dining at Pooh's Corner`);
    content.appendChild(header);

    const headDivider = new Image();
    headDivider.src = TreeDivider;
    headDivider.id = "divider";
    content.appendChild(headDivider);

    const main = createMain();
    content.appendChild(main);
    console.log(main);

    loadMain();

    const footer = createFooter('footer', 'Open 10a.m. to 6p.m.!');
    content.appendChild(footer);

    renderHome();
}

initializeWebsite();