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
      name: "Deluxe Burger",
      description: "Juicy beef patty topped with melted cheese, crispy bacon, fresh lettuce, and our special sauce.",
      image: "https://picsum.photos/200/300?category=food",
    },
    {
      name: "Margherita Pizza",
      description: "Classic pizza with a thin crust, tomato sauce, fresh mozzarella, and basil leaves.",
      image: "https://picsum.photos/200/300?category=food",
    },
    {
      name: "Chicken Alfredo Pasta",
      description: "Creamy Alfredo sauce mixed with perfectly cooked fettuccine pasta and tender grilled chicken.",
      image: "https://picsum.photos/200/300?category=food",
    },
    {
      name: "Chocolate Lava Cake",
      description: "Decadent chocolate cake with a gooey, molten center. Served with a scoop of vanilla ice cream.",
      image: "https://picsum.photos/400/600?category=food",
    },
  ];
  

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const h1 = document.createElement("h3");
    h1.textContent = item.name;
    const description = document.createElement("p");
    description.textContent = item.description;
    description.classList.add('card-description');
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = item.image;
    card.appendChild(h1);
    card.appendChild(img);
    card.appendChild(description);
    menuItems.appendChild(card);
  });
  return menu;
}
