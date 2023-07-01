const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
      return 'light';
  })();

  const useTheme = (theme) => {
    if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    window.localStorage.setItem('theme', theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }
  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    useTheme(element.classList.contains("dark") ? "dark" : "light")
  }

  useTheme(theme)
  document.getElementById("themeToggle").addEventListener("click", handleToggleClick);