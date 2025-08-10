export function removeHighlight() {
    let buttons = document.getElementsByClassName("tab");
    Array.from(buttons).forEach(button => {
        button.classList.remove("underline");
    })
}