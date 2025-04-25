// Dark mode initialization
const theme = (() => {
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("theme")
    ) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();
  if (theme === "dark") document.documentElement.classList.add("dark");

// Theme handling
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('colorSwitch');
    if (themeToggle) {
        const img = themeToggle.querySelector('img');
        const sunIcon = '/icons/sun.svg';
        const moonIcon = '/icons/moon.svg';

        // Get initial theme from localStorage or system preference
        const initialTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Set initial icon without animation
        img.style.transition = 'none';
        img.src = initialTheme === 'dark' ? moonIcon : sunIcon;
        
        // Re-enable transitions after initial setup
        setTimeout(() => {
            img.style.transition = 'transform 0.3s ease-in-out';
        }, 100);

        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDarkMode = document.documentElement.classList.contains('dark');
            img.src = isDarkMode ? moonIcon : sunIcon;
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }
});


