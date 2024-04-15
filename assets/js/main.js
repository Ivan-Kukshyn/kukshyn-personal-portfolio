//mobile menu start
let menuToggle = document.querySelector('.toggle_menu');
let mobileMenu = document.querySelector('.mobile-menu')

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})
//mobile menu end

let darkToggle = document.querySelector('.dark-btn-icon');
let darkBtn = document.querySelector('.dark-btn');

// Function to toggle the dark theme
function toggleDarkTheme() {
  // Toggle the class on the body element
  document.body.classList.toggle("dark-theme");

  // Store the preference in local storage
  const isDarkTheme = document.body.classList.contains("dark-theme");
  localStorage.setItem("darkTheme", isDarkTheme);

  if (isDarkTheme) {
    darkToggle.src = "/icon/sun-regular.png";
    document.body.style.backgroundColor = '#2B2A33';
  } else {
    darkToggle.src = "/icon/moon-regular.png";
    document.body.style.backgroundColor = '#CADCFC';
  }
}

// Check if the user preference is already stored in local storage
document.addEventListener('DOMContentLoaded', function () {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";

  // Apply the dark theme if the preference is set to true
  if (isDarkTheme) {
    document.body.classList.add("dark-theme");
    darkToggle.src = "/icon/sun-regular.png";
    document.body.style.backgroundColor = '#2B2A33';
  }

  // Attach click event to the specified div
  darkBtn.addEventListener("click", toggleDarkTheme);
});