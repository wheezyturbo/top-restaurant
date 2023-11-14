import "./menu.css";

export default function menubar() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Our Menu!";
  menu.appendChild(menuTitle);
  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");
  menu.appendChild(menuItems);
  const items = [
    {
      name: "something",
      description: "something",
      image: "https://placehold.co/200",
    },
    {
      name: "something",
      description: "something",
      image: "https://placehold.co/200",
    },
    {
      name: "something",
      description: "something",
      image: "https://placehold.co/200",
    },
    {
      name: "something",
      description: "something",
      image: "https://placehold.co/400",
    },
  ];

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const h1 = document.createElement("h3");
    h1.textContent = item.name;
    const description = document.createElement("p");
    description.textContent = item.description;
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = item.image;
    card.appendChild(h1);
    card.appendChild(description);
    card.appendChild(img);
    menuItems.appendChild(card);
  });
  return menu;
}
