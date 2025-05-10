// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
  // Add loading class to body
  document.body.classList.add('loading');
  
  // Set a timeout to simulate loading
  setTimeout(function() {
    // Hide loading screen
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    
    // Show main content
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    
    // Remove loading class from body
    document.body.classList.remove('loading');
    
    // Remove loading screen after transition
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 600);
  }, 1200); // 1.5 seconds loading time
});

// Hamburger menu functionality
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Theme switching functionality
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIcon = document.querySelector('.theme-icon');
const themeIconMobile = document.querySelector('#theme-toggle-mobile .theme-icon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = theme === 'light' ? '🌙' : '☀️';
  themeIcon.textContent = icon;
  themeIconMobile.textContent = icon;
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);
