
function calculateScaleValue(num) {
  return num * 1.2;
}

function logMessage(message) {
  // Example of local vs global scope
  let localMsg = "Local: " + message;
  console.log(localMsg);
}

let globalCounter = 0; 

function incrementCounter() {
  globalCounter++;
  return globalCounter;
}

// Part 3: Trigger CSS Animations with JS
const box = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

animateBtn.addEventListener("click", () => {
  box.classList.add("animate");
  logMessage("Box animated! Scale: " + calculateScaleValue(2));
  console.log("Counter:", incrementCounter());
});

resetBtn.addEventListener("click", () => {
  box.classList.remove("animate");
  box.style.transform = "scale(1)";
  box.style.background = "tomato";
  logMessage("Box reset!");
});

// Modal Logic
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("show"), 50);
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 500);
});
