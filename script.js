const inputField = document.querySelector(".input-section");
const passwordFieldOne = document.querySelector("#input-password-one");
const passwordFieldTwo = document.querySelector("#input-password-two");
const btnShowHide = document.querySelector("#show-hide-btn");

inputField.addEventListener("input", checkForEqual);
btnShowHide.addEventListener("click", showHidePassword);

function checkForEqual() {
  const isEqual = document.querySelector("#equal-check");
  if (
    passwordFieldOne.value === passwordFieldTwo.value &&
    passwordFieldOne.value !== ""
  ) {
    isEqual.innerHTML = "✅";
  } else {
    isEqual.innerHTML = "❌";
  }
  checkForLowerCase();
  checkForUpperCase();
  checkForNumber();
  checkForAtLeast10Char();
}

const hasLowerCase = (str) => /[a-z]/.test(str);

function checkForLowerCase() {
  const lowerCase = document.querySelector("#lowercase-check");
  if (hasLowerCase(passwordFieldOne.value)) {
    lowerCase.innerHTML = "✅";
  } else {
    lowerCase.innerHTML = "❌";
  }
}

const isUpperCase = (string) => /[A-Z]/.test(string);

function checkForUpperCase() {
  const toUpperCase = document.querySelector("#uppercase-check");
  if (isUpperCase(passwordFieldOne.value)) {
    toUpperCase.innerHTML = "✅";
  } else {
    toUpperCase.innerHTML = "❌";
  }
}

const hasNumber = (string) => /[0-9]/.test(string);

function checkForNumber() {
  const includesNumber = document.querySelector("#number-check");
  if (hasNumber(passwordFieldOne.value)) {
    includesNumber.innerHTML = "✅";
  } else {
    includesNumber.innerHTML = "❌";
  }
}

function checkForAtLeast10Char() {
  const atLeast10Char = document.querySelector("#at-least-check");
  if (passwordFieldOne.value.length >= 10) {
    atLeast10Char.innerHTML = "✅";
  } else {
    atLeast10Char.innerHTML = "❌";
  }
}

function showHidePassword() {
  if (passwordFieldOne.type === "text" && passwordFieldTwo.type === "text") {
    passwordFieldOne.type = "password";
    passwordFieldTwo.type = "password";
    btnShowHide.innerHTML = "Show password";
  } else if (
    passwordFieldOne.type !== "text" &&
    passwordFieldTwo.type !== "text"
  ) {
    passwordFieldOne.type = "text";
    passwordFieldTwo.type = "text";

    btnShowHide.innerHTML = "Hide password";
  }
}
