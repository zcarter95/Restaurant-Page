import { removeHighlight } from "./helpers";
import { removeWrappers} from "./helpers";

let content = document.getElementById("content");
function addWrapper () {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.id = "menu"
    content.appendChild(wrapper);
}

function addBeverages() {
    let drinkList = [
        {
            name: "The Wanderer's Respite",
            description: "Warm, spiced apple cider with honey. Perfect for weary travelers."
        },
        {
            name: "The Adventurer's Ale",
            description: "Hearty, amber ale with a balanced taste. Brewed locally."
        },
        {
            name: "Forest Nectar",
            description: "Refreshing, naturally sweet berry and fruit juice. A taste of the wilderness."
        },
        {
            name: "Mountain Peak Mead",
            description: "Traditional, golden mead with honey and mountain herbs. A touch of sweetness and history."
        }
    ]
    let wrapper = document.getElementById("menu");
    let beverages = document.createElement("div");
    beverages.id = "beverages";
    beverages.classList.add('section');
    let heading = document.createElement("h2");
    heading.textContent = "Beverages";
    let list = document.createElement("ul");
    drinkList.forEach(drink => {
        let beverage = document.createElement("li");
        beverage.textContent = drink.name;
        let description = document.createElement("p");
        description.textContent = drink.description;
        beverage.appendChild(description);
        list.appendChild(beverage);
    })
    beverages.appendChild(heading);
    beverages.appendChild(list);
    wrapper.appendChild(beverages);
}

export default function addMenu() {
    removeWrappers();
    addWrapper();
    addBeverages();
    removeHighlight();
}
