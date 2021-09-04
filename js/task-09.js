function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function colorChanger() {
  const colorName = document.querySelector(".color");
  colorName.textContent = (getRandomHexColor(""));
  document.body.style.backgroundColor=(getRandomHexColor(""));
}
const btn = document.querySelector(".change-color").addEventListener("click", colorChanger);
