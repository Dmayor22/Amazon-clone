const signUpForm = document.getElementById("signUpForm");
const loginAccount = document.getElementById("loginAccount");
const emailInput = document.getElementById("email");
const errMsg = document.getElementById("errorMessage");


loginAccount.addEventListener("click", () => {
  if (loginAccount) {
    window.location.href = "../pages/login.html";
  }
});
