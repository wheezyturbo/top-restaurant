import { render } from "./init";


function createLink(text,pageClass){
  const link = document.createElement('a');
  link.textContent = text;
  link.classList.add('link');
  if(pageClass===text){
    link.classList.add('active');
  }
  return link;
}

export default function Navbar(pageClass){
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  const links = ["home","menu","contact"];
  links.forEach(link=>{
    const link_ = createLink(link,pageClass);
    link_.addEventListener('click',()=>{
      render(link);
    })
    navbar.appendChild(link_);
    
  })
  return navbar;
  // const link1 = createLink("home",pageClass);
  // const link2 = createLink("menu",pageClass);
  // const link3 = createLink("contact",pageClass);
}