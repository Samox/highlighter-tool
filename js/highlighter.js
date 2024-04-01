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

function removeHighlight() {
  const highlighted = document.querySelectorAll(".highlighted");
  highlighted.forEach((el) => {
    el.classList.remove("highlighted");
  });
}

const steps = [
  {
    selector: "h2",
  },
  {
    selector: "input[type='submit']",
    parent: true,
  },
];

function* stepGenerator(steps) {
  for (let i = 0; i < steps.length; i++) {
    yield steps[i];
  }
}

const gen = stepGenerator(steps);

function nextStep() {
  removeHighlight();
  const step = gen.next();
  if (!step.done) {
    const elements = document.querySelectorAll(step.value.selector);
    elements.forEach((el) => {
      el.addEventListener("click", function handler() {
        el.removeEventListener("click", handler);
        nextStep();
      });
      if (step.value.parent) {
        el = el.parentNode;
      }
      el.classList.add("highlighted");
    });
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  nextStep();
});
