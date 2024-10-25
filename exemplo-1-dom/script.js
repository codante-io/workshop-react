const newH1 = document.createElement("h1");
newH1.textContent = "Boas vindas ao workshop de React, ";

const newSpan = document.createElement("span");
newSpan.textContent = "@fulano";

newSpan.addEventListener("click", () => {
  newSpan.style.color = "red";
});

newH1.appendChild(newSpan);
document.body.appendChild(newH1);
