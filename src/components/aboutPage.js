import "./about.css";
export default function about() {
  const aboutSection = document.createElement("div");
  aboutSection.classList.add("about-main");
  const heading = document.createElement("h1");
  heading.textContent = "About";
  const div = document.createElement("div");
  div.classList.add("about-container");

  const aboutRight = document.createElement("div");
//   aboutRight.src = "https://placehold.co/400";
const p1 = document.createElement('p');
p1.textContent = "Some street h1 21 \nanother country";
  aboutRight.classList.add("about-right");
  aboutRight.appendChild(p1);
const p2 = document.createElement('p');
p2.textContent="We are open from 10 am to 6pm";
aboutRight.appendChild(p2);
const p3 = document.createElement('p');
p3.textContent = "Call us on \n1234567890";

aboutRight.appendChild(p3);

  const details = document.createElement("div");
  details.classList.add("details");

  const h3 = document.createElement("h3");
  h3.textContent = "Reach out to us!";
  h3.classList.add("details-heading");

  const iframe = document.createElement("div");
  iframe.classList.add('iframe-outer');
  iframe.innerHTML = `<iframe class="iframe-inner" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`;

  details.appendChild(h3);

  div.appendChild(details);
  div.appendChild(aboutRight);
  div.appendChild(iframe);

  aboutSection.appendChild(heading);
  aboutSection.appendChild(div);
  return aboutSection;
}
