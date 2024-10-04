import { useThemeContext } from "../contexts/themeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
