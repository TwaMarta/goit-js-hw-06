  
const input = document.getElementById('font-size-control');

input.addEventListener('input', function() {
    const size = input.value;
    document.getElementById(`text`).style.fontSize = size + "px";
});