// Show a welcome message when the page loads
//alert("👋 Welcome to Guillaume's page!");

// When the form is submitted, show a thank-you message
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stops page reload
  alert("✅ Thank you for your message, I'll get back to you soon!");
});
// Load dark mode if saved
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// Dark mode toggle with text switch + save
const themeToggle = document.getElementById("themeToggle");

// Load saved preference
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️ Light Mode";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
    localStorage.setItem("darkMode", "enabled");
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
    localStorage.setItem("darkMode", "disabled");
  }
}

// Read more toggle
function toggleReadMore() {
  const moreText = document.getElementById("moreText");
  const button = event.target;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    button.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    button.textContent = "Read More";
  }
}
// Simple gallery
let currentImage = 1;

function showImage() {
  document.getElementById("galleryImage").src =
    "https://picsum.photos/400/200?random=" + currentImage;
}

function nextImage() {
  currentImage++;
  showImage();
}

function prevImage() {
  if (currentImage > 1) {
    currentImage--;
    showImage();
  }
}
// FAQ toggle
function toggleFAQ(element) {
  const answer = element.nextElementSibling;

  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Quote of the Day
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Experience is the name everyone gives to their mistakes.",
  "First, solve the problem. Then, write the code.",
  "Talk is cheap. Show me the code.",
  "The best error message is the one that never shows up."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

// Auto-slideshow
setInterval(() => {
  nextImage();
}, 3000); // every 3 seconds

// Highlight active link in navbar
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
