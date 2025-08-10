let content = document.getElementById("content");
export function addTagline () {
    let tagline = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.textContent = "A Haven for the hungry heart and a harbor for the weary traveler"
    paragraph.style.fontStyle = "italic";
    tagline.classList.add("tagline");
    tagline.appendChild(paragraph);
    content.appendChild(tagline);
}