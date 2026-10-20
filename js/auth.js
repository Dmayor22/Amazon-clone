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

// verfication of user after form submit

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // get user email input
    const userEmail = emailInput.value.trim().toLowerCase();

    // search and find if user details exist in mock data
    const existingUser = mockUserData.find((user) => {
      return user.email.toLowerCase() === userEmail;
    });

    // redirect user to homepage if user exist

    if (existingUser) {
      window.location.href = "../index.html";
    } else {
      errMsg.textContent = "User details not found";

      errMsg.style.display = "block";
    }
  });
}

createAccount.addEventListener("click", () => {
  if (createAccount) {
    window.location.href = "../pages/signup.html";
  }
});
