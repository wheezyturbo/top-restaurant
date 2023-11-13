import Navbar from "./navbar.js";
import homePage from "./homePage.js";
import aboutPage from "./aboutPage.js";
import menuPage from "./menu.js";
const content = document.getElementById("content");

export default function Init() {
  console.log(content);
  // initialPage
  const initialPage = document.createElement("div");
  initialPage.classList.add("initialPage");

  // current

  content.appendChild(Navbar("home"));
  content.appendChild(homePage());
  // image

  content.appendChild(initialPage);
}

export function render(page) {
  console.log(page);

  content.innerHTML = "";
  content.appendChild(Navbar(page));
  switch (page) {
    case "home":
      content.appendChild(homePage());
      break;
    case "menu":
      content.appendChild(menuPage());
      break;
    case "contact":
      content.appendChild(aboutPage());
    default:
      break;
  }
}
