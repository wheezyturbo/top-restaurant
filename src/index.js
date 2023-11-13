import "./reset.css";
import "./style.css";


import Init from './components/init.js';

// console.log("working bruv");





window.addEventListener("load", Init);

function navigation(){
  const links = navbar.querySelectorAll('.link');
  console.log(links);

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      // e.stopPropagation();
      // e.preventDefault();
      render(e.target.textContent);
    });
  });
}

function Header(currentPage) {}


