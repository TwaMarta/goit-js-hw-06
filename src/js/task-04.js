let counterValue =0;
const addButton = document.querySelector(`[data-action="increment"]`);
const remButton = document.querySelector(`[data-action="decrement"]`);
const value = document.querySelector("#value");
const counterChange = (operation) => {
    operation();
    value.innerText = counterValue;
};
const add = () => counterValue++;
const rem = () => counterValue--;
addButton.addEventListener("click", ()=> counterChange(add));
remButton.addEventListener("click", ()=> counterChange(rem));
 