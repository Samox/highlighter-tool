// Function to highlight all elements matching a specific selector
function highlightElements(selector, getParent = false) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    if (getParent) {
      el.parentNode.classList.add("highlighted");
    } else {
      el.classList.add("highlighted");
    }
  });
}

// Example usage: Highlight all paragraphs and elements with the .important-info class
document.addEventListener("DOMContentLoaded", (event) => {
  highlightElements('input[type="submit"]', true);
  highlightElements("h2");
});
