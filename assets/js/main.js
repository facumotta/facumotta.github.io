// Theme toggle: follows the system setting until the reader picks a theme.
// The choice is stored in localStorage and applied as html[data-theme].
(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Current theme: explicit choice if any, otherwise the system one
  function currentTheme() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
  }

  // Keep the button label and icon in sync with the current theme
  function updateButton() {
    var isDark = currentTheme() === "dark";
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    toggle.dataset.mode = isDark ? "dark" : "light";
  }

  function storeChoice(theme) {
    try {
      if (theme === null) {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, theme);
      }
    } catch (error) {
      // Storage can be blocked (private mode); the toggle still works for this visit
    }
  }

  toggle.addEventListener("click", function () {
    var nextTheme = currentTheme() === "dark" ? "light" : "dark";
    var systemTheme = systemDark.matches ? "dark" : "light";

    if (nextTheme === systemTheme) {
      // Back to the system default: drop the explicit choice
      delete root.dataset.theme;
      storeChoice(null);
    } else {
      root.dataset.theme = nextTheme;
      storeChoice(nextTheme);
    }
    updateButton();
  });

  systemDark.addEventListener("change", updateButton);
  updateButton();
})();
