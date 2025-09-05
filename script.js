// Show login page
function showLogin() {
  document.getElementById("signupPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

// Show signup page
function showSignup() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("signupPage").classList.remove("hidden");
}

// Sign up function
function signup() {
  let username = document.getElementById("signupUsername").value;
  let password = document.getElementById("signupPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !password || !confirmPassword) {
    alert("Please fill all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Save to localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Account created successfully!");
  showLogin();
}


function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("welcomePage").classList.remove("hidden");

    // 👇 Show Home page by default after login
    showHome();
  } else {
    alert("Invalid username or password!");
  }
}


// Logout function
function logout() {
  document.getElementById("welcomePage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  // Show only the one requested
  document.getElementById(pageId).classList.remove("hidden");
}

// Show Home
function showHome() {
  showPage("homePage");
}

// Show Product
function showProduct() {
  showPage("productPage");
}

// Show Customer
function showCustomer() {
  showPage("customerPage");
}

// Back button → goes to Home
function goBack() {
  showHome();
}
