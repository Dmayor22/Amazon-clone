const signUpForm = document.getElementById("signUpForm");
const loginAccount = document.getElementById("loginAccount");
const emailInput = document.getElementById("email");
const errMsg = document.getElementById("errorMessage");

loginAccount.addEventListener("click", () => {
  if (loginAccount) {
    window.location.href = "../pages/login.html";
  }
});

if (signUpForm) {
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userValue = emailInput.value.trim().toLowerCase();

    if (userValue) {
      window.location.href = "../index.html";
    }
  });
}
