function showLogin() {
  document.getElementById("signupPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

function showSignup() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("signupPage").classList.remove("hidden");
}

function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;

  if (!username || !password || !confirm) {
    alert("Please fill all fields!");
    return;
  }
  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Signup successful! Please login.");
  showLogin();
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    // Hide login and signup
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("signupPage").classList.add("hidden");

    // Show platform wrapper
    const platform = document.getElementById("platform");
    platform.classList.remove("hidden");

    // Show home page by default
    showPage("homePage"); // This will make homePage active and visible
  } else {
    alert("Invalid username or password!");
  }
}


function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
    page.classList.remove('active');
  });
  const page = document.getElementById(pageId);
  page.classList.remove('hidden');
  page.classList.add('active');
}




// Falling birthday icons 🎂 🎈 🎉
function createFallingIcon() {
  const icons = ["🎂", "🎉", "🎈", "🎁", "🍰"];
  const icon = document.createElement("div");
  icon.classList.add("falling-icon");
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 100 + "vw";
  icon.style.animationDuration = (3 + Math.random() * 5) + "s";
  document.body.appendChild(icon);

  setTimeout(() => {
    icon.remove();
  }, 8000);
}

// Generate icons continuously
setInterval(createFallingIcon, 1200);

// Confirm Payment Popup
function confirmPayment() {
  const popup = document.getElementById("prayerPopup");
  popup.classList.remove("hidden");

  // Auto hide after 2 minutes
  setTimeout(() => {
    popup.style.animation = "fadeOut 1s ease forwards";
    setTimeout(() => popup.classList.add("hidden"), 1000);
  }, 120000); // 120,000ms = 2 mins
}

// Send wish button
const sendWishBtn = document.getElementById('sendWishBtn');

sendWishBtn.addEventListener('click', function() {
  const wishText = document.getElementById('wishText').value.trim();
  if (!wishText) {
    alert("Please type your wish before sending!");
    return;
  }

  // Replace this with the celebrant's WhatsApp number
  const phoneNumber = "2348145321722";

  // Encode the wish for WhatsApp
  const encodedWish = encodeURIComponent(wishText);

  // Open WhatsApp URL in a new tab
  window.open(`https://wa.me/${phoneNumber}?text=${encodedWish}`, '_blank');
});

function logout() {
  const visiblePage = document.querySelector('.page:not(.hidden)');
  
  if (visiblePage) {
    visiblePage.classList.add('fade-out');

    visiblePage.addEventListener('animationend', () => {
      visiblePage.classList.remove('fade-out');
      visiblePage.classList.add('hidden');

      // Hide the whole platform including navbar
      document.getElementById('platform').classList.add('hidden');

      // Show signup page
      document.getElementById('signupPage').classList.remove('hidden');
    }, { once: true });
  } else {
    document.getElementById('signupPage').classList.remove('hidden');
    document.getElementById('platform').classList.add('hidden');
  }
}


