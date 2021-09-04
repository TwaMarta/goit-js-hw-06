const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const name = () => {
  output.textContent = input.value;
};

input.addEventListener("input", name);