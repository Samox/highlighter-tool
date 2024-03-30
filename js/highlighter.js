// Function to highlight all elements matching a specific selector
function highlightElements(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.classList.add("highlighted");
  });
}

// Example usage: Highlight all paragraphs and elements with the .important-info class
document.addEventListener("DOMContentLoaded", (event) => {
  highlightElements("p, .important-info");
});
