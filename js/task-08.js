
let form = document.querySelector("form");


function checkSubmit(e) {
    e.preventDefault();
    
  const {
    elements: { email, password }
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Uzupełnij wszystkie pola!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}

form.addEventListener("submit", checkSubmit);
