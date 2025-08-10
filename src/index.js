import "./styles.css";
import { addTagline } from "./load-content";
import addHome from "./home";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
    addTagline();
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach((item, index) => {
        item.addEventListener("click", () => {
            switch (index) {
                case 0:
                    addHome();
            }
        })
    })
    highlightSelectedTab();
}

function highlightSelectedTab() {
    let buttons = document.getElementsByClassName("tab");
    buttons[0].classList.add("underline");
}