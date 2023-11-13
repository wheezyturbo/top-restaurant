import Icon from "../image.jpg";

export default function homePage() {
  const homePage = document.createElement("div");
  homePage.classList.add("container");

  const div = document.createElement('div');
  div.classList.add('home-container');

  const image = document.createElement("img");
  image.src = Icon;
  image.classList.add("banner");
  
  const text = document.createElement('h1');
  text.textContent = "Welcome to Delightful Byte Bites!  ";

  const paragraph = document.createElement('p');
  paragraph.textContent="Welcome to Delightful Byte Bites! Indulge in a whimsical journey through our menu, where every bite is a magical experience. At Delightful Byte Bites, we believe in turning ordinary meals into extraordinary adventures. Our chefs, armed with culinary wands, conjure up dishes that will transport you to a realm of flavor you've never imagined.";
    paragraph.classList.add('paragraph');
  div.appendChild(text);
  
  div.appendChild(image);
  homePage.appendChild(div);
  div.appendChild(paragraph);
  return homePage;
}
