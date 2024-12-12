const exploreBtn = document.querySelector(".btn");
const divPopup = document.querySelector(".popup");
const grayBackground = document.querySelector(".gray-background");
exploreBtn.addEventListener("click", function () {
  divPopup.classList.add("popup-active");
  grayBackground.classList.add("gray-background-active");
});
grayBackground.addEventListener("click", function () {
  divPopup.classList.remove("popup-active");
  grayBackground.classList.remove("gray-background-active");
});
const nameValue = document.querySelector("#name");
const emailValue = document.querySelector("#email");
const selectValue = document.querySelector(".session-options");
const submitBtn = document.querySelector("#enter_btn");
submitBtn.addEventListener("click", function () {
  const name = document.createElement("p");
  const email = document.createElement("p");
  const option = document.createElement("p");
  name.innerText = nameValue.value;
  email.innerText = emailValue.value;
  option.innerText = selectValue.value;
  divPopup.appendChild(name);
  divPopup.appendChild(email);
  divPopup.appendChild(option);
});