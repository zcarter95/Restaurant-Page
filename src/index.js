import "./styles.css";
import { addTagline } from "./modules/load-content";
import addHome from "./modules/home";
import addContact from "./modules/contact";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
    addTagline();
    addHome();
    const homeButton = document.getElementById("home-tab");
    homeButton.addEventListener("click", () => {
        addHome();
        homeButton.classList.add("underline");
    })
    const contactButton = document.getElementById("contact-tab");
    contactButton.addEventListener("click", () => {
        addContact();
        contactButton.classList.add("underline");
    })

    highlightSelectedTab();
}

function highlightSelectedTab() {
    let buttons = document.getElementsByClassName("tab");
    buttons[0].classList.add("underline");
}