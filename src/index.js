import "./styles.css";
import { addTagline } from "./load-content"

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
    addTagline();
}