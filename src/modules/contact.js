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
    wrapper.id = "contact"
    content.appendChild(wrapper);
}
function addLocation () {
    let wrapper = document.getElementById("contact");
    let location = document.createElement("div");
    location.id = "location";
    location.classList.add("section");
    let heading = document.createElement("h2");
    heading.textContent = "Location";
    let paragraph = document.createElement("p");
    paragraph.textContent = "14 Whispering Gorge Road, Havenwood, The Wildlands";
    location.appendChild(heading);
    location.appendChild(paragraph);
    wrapper.appendChild(location);
}
function addContactInfo() {
    let wrapper = document.getElementById("contact");
    let contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    contactInfo.classList.add("section");
    let heading = document.createElement("h2");
    heading.textContent = "Contact Us";
    let paragraph = document.createElement("p");
    paragraph.textContent = "Raven Messenger: For a traditional method of communication, especially within Havenwood and nearby territories, send messages via a trained raven to The Wander Inn, Havenwood. The staff will ensure the message reaches its recipient."
    contactInfo.appendChild(heading);
    contactInfo.appendChild(paragraph);
    wrapper.appendChild(contactInfo);
}
export default function addContact () {
    removeWrappers();
    addWrapper();
    addLocation();
    addContactInfo();
    removeHighlight();
}