export function removeHighlight() {
    let buttons = document.getElementsByClassName("tab");
    Array.from(buttons).forEach(button => {
        button.classList.remove("underline");
    })
}

export function removeWrappers (){
    const wrappers = document.querySelectorAll(".wrapper");
    wrappers.forEach((item, index) => {
        item.remove();
    })
}