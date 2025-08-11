import { removeHighlight, removeWrappers } from "./helpers";

let content = document.getElementById("content");
function addWrapper () {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.id = "menu"
    content.appendChild(wrapper);
}

addWrapper("menu");

function createMenuItem(array) {
    let list = document.createElement("ul");
    array.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name;
        let description = document.createElement("p");
        description.textContent = item.description;
        li.appendChild(description);
        list.appendChild(li);
    })
    return list;
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
    let list = createMenuItem(drinkList);
    beverages.appendChild(heading);
    beverages.appendChild(list);
    wrapper.appendChild(beverages);
}

function addAppetizers() {
    let appetizerList = [
        {
            name: "Dragon's Teeth",
            description: "Crispy, seasoned potato wedges with a fiery, zesty dipping sauce."
        },
        {
            name: "Forest Mushroom Tartlets",
            description: "Savory, individual tarts filled with wild mushrooms, herbs, and cheese."
        },
        {
            name: "Traveler's Cheese & Cracker Board",
            description: "Assorted local cheeses, cured meats, and freshly baked crackers."
        }
    ]
    let wrapper = document.getElementById("menu");
    let appetizers = document.createElement("div");
    appetizers.id = "appetizers";
    appetizers.classList.add("section");
    let heading = document.createElement("h2");
    heading.textContent = "Appetizers";
    let list = createMenuItem(appetizerList);
    appetizers.appendChild(heading);
    appetizers.appendChild(list);
    wrapper.appendChild(appetizers);
}

function addMains() {
    let mainsList = [
        {
            name: "Dragon's Breath Stew",
            description: "Hearty, rich beef stew simmered with root vegetables and a hint of fiery spices."
        },
        {
            name: "Guardian's Roast",
            description: "Slow-roasted pork or venison, served with seasonal roasted vegetables."
        },
        {
            name: "Fisherman's Feast",
            description: "Freshly caught lake or river fish, pan-fried and served with lemon and wild herbs."
        },
        {
            name: "Elven Forest Salad",
            description: "A vibrant mix of foraged greens, berries, nuts, and grilled chicken or tofu."
        },
        {
            name: "Dwarven Miner's Pie",
            description: "A savory pie filled with minced meat, hearty vegetables, and a flaky pastry crust."
        }
    ]
    let wrapper = document.getElementById("menu");
    let mains = document.createElement("div");
    mains.id = "mains";
    mains.classList.add("section");
    let heading = document.createElement("h2");
    heading.textContent = "Mains";
    let list = createMenuItem(mainsList);
    mains.appendChild(heading);
    mains.appendChild(list);
    wrapper.appendChild(mains);
}

export default function addMenu() {
    removeWrappers();
    addWrapper();
    addBeverages();
    addAppetizers();
    addMains();
    removeHighlight();
}
