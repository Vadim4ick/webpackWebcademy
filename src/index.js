import { sayHi } from "./Hello";

import image from "./images/image.png";
import image2 from "./images/2.png";
import image3 from "./images/1.png";
import phoneIcon from "./images/phone.svg";

import "./style.scss";

sayHi();

const markup = `
    <h1>Hello world</h1>

    <div class="body">
        <img class='image' src="${image}" />
        <img class='image2' src="${image2}" />
        <img class='image3' src="${image3}" />
    </div>

    <div class="phoneIcon">
        ${phoneIcon}
    </div>
`;

const root = document.querySelector("#root");

root.insertAdjacentHTML("afterbegin", markup);
