// mock user data
const mockUserData = [
  {
    id: 1,
    email: "oluwamuyiwasogbetun@gmail.com",
  },
  {
    id: 2,
    email: "john@example.com",
  },
  {
    id: 3,
    email: "jane@example.com",
  },
  {
    id: 4,
    email: "david@example.com",
  },
];

// varaiables
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const errMsg = document.getElementById("errorMessage");
const createAccount = document.getElementById("createAccount");

// Verify the email when the form is submitted
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //   get user email input
    const userEmailInput = emailInput.value.trim().toLowerCase();

    // find if email exist

    const existMailUser = mockUserData.find((user) => {
      return user.email.toLowerCase() === userEmailInput;
    });

    if (existMailUser) {
      window.location.href = "../index.html";
    } else {
      // Display an error message
      errorMessage.textContent =
        "We cannot find an account with that email address.";

      errorMessage.style.display = "block";
    }
  });
}

if (createAccount) {
  createAccount.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
}
