import { removeHighlight } from "./helpers";
let content = document.getElementById("content");
function removeWrappers (){
    const wrappers = document.querySelectorAll(".wrapper");
    wrappers.forEach((item, index) => {
        item.remove();
    })
}
function addWrapper () {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.id = "home"
    content.appendChild(wrapper);
}

function addAbout () {
    let wrapper = document.getElementById("home");
    let about = document.createElement("div");
    about.id = "about";
    about.classList.add("section");
    let heading = document.createElement("h2");
    heading.textContent = "About";
    let paragraph = document.createElement("p");
    paragraph.textContent = "For those whose boots are worn thin from forgotten trails and whose bellies rumble from a day's journey, The Wander Inn offers refuge and respite. Nestled at the crossroads of ancient paths and whispering woodlands, our sturdy oaken doors swing open to welcome every weary soul, adventurer and traveler alike."
    about.appendChild(heading);
    about.appendChild(paragraph);
    wrapper.appendChild(about);
}

function addHours() {
    let wrapper = document.getElementById("home");
    let hours = document.createElement("div");
    hours.id = "hours";
    hours.classList.add("section")
    let heading = document.createElement("h2");
    heading.textContent = "Hours";
    hours.appendChild(heading);
    let list = document.createElement("ul");
    const storeHours = ["Monday: 12pm - 11pm", "Tuesday: Closed", "Wednesday: 12pm - 11pm", "Friday: 12pm - 11pm", "Saturday: 1pm - 2am", "Sunday: 12pm - 7pm"]
    storeHours.forEach(day => {
        const liElement = document.createElement("li");
        liElement.textContent = day
        list.appendChild(liElement);
    });
    hours.appendChild(list);
    wrapper.appendChild(hours);
}

export default function addHome() {
    removeWrappers();
    addWrapper();
    addAbout();
    addHours();
    removeHighlight();
}