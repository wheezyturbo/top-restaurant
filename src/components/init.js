import Navbar from './navbar.js';
import Icon from "../image.png";


export default function Init() {
    console.log(content);
    // initialPage
    const initialPage = document.createElement("div");
    initialPage.classList.add("initialPage");
  
    // current
    const homePage = document.createElement("div");
    homePage.classList.add("homePage");
    content.appendChild(Navbar);
    content.appendChild(homePage);
    // image
    const image = document.createElement("img");
    image.src = Icon;
    image.classList.add("banner");
    homePage.appendChild(image);
    content.appendChild(initialPage);
  }