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
  text.textContent = "hello we are the best restaurant in the void!";

  const paragraph = document.createElement('p');
  paragraph.textContent="hello blah blah blah";

  div.appendChild(text);
  
  div.appendChild(image);
  homePage.appendChild(div);
  homePage.appendChild(paragraph);
  return homePage;
}
