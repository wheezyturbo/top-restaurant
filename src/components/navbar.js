const navbar = document.createElement("div");
    navbar.classList.add("navbar");
  //   nav items
  const link1 = document.createElement('a');
  link1.textContent="home";
  const link2 = document.createElement('a');
  link2.textContent = 'menu';
  const link3 = document.createElement('a');
  link3.textContent = 'about';
  navbar.appendChild(link1);
  navbar.appendChild(link2);
  navbar.appendChild(link3);
  export default navbar;