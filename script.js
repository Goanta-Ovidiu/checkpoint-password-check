const inputPasswordOne = document.querySelector("#input-password-one");
const inputPasswordTwo = document.querySelector("#input-password-two");
const showHideBtn = document.querySelector("#show-hide-btn");
const passwordAreEqual = document.querySelectorAll(".check-section-inputs");

showHideBtn.addEventListener("click", () => {
  if (inputPasswordOne.type === "text" && inputPasswordTwo.type === "text") {
    inputPasswordOne.type = "password";
    inputPasswordTwo.type = "password";
    showHideBtn.innerHTML = "Show Password";

    passwordAreEqual.forEach((element) => element.classList.add("checked"));
    passwordAreEqual.forEach((element) =>
      element.classList.remove("unchecked")
    );
  } else if (
    inputPasswordOne.type === "password" &&
    inputPasswordTwo.type === "password"
  ) {
    inputPasswordOne.type = "text";
    inputPasswordTwo.type = "text";
    showHideBtn.innerHTML = "Hide Password";
    passwordAreEqual.forEach((element) => element.classList.remove("checked"));
    passwordAreEqual.forEach((element) => element.classList.add("unchecked"));
  }
});
