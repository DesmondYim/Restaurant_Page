import {createNavBar} from "./modules/load-page";
import {createHeader} from "./modules/load-page";
import {createFooter} from "./modules/load-page";
import {appendContent} from "./modules/load-page";
import { createRestrDescription } from "./modules/render_home";
import "./style.css";
import Restaurant from './img/restaurant.jpg';

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

// loadPage();
