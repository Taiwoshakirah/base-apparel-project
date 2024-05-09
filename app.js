const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const errorimageElement = document.querySelector(".wrapper img");
const errorElement = document.querySelector("form div small");

let userInputGlobal = null;

inputElement.addEventListener("change", (e) => {
  userInputGlobal = event.target.value;
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userInputGlobal === null) {
    errorElement.classList.add("show");
    inputElement.classList.add("show");
    errorimageElement.classList.add("show");
  } else {
    validateEmail(userInputGlobal);
  }
});

inputElement.addEventListener('focusin',()=>{
errorElement.classList.remove('show')
errorimageElement.classList.remove('show')
inputElement.classList.remove('show')
})


function validateEmail(userInputGlobal) {
  if (
    userInputGlobal.includes("@") &&
    userInputGlobal.includes(".") &&
    userInputGlobal.includes("com")
  ) {
    errorElement.classList.remove("show");
    inputElement.classList.remove("show");
    errorimageElement.classList.remove("show");
  } else {
    errorElement.classList.add("show");
    inputElement.classList.add("show");
    errorimageElement.classList.add("show");
  }
}
