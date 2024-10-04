import { useThemeContext } from "../contexts/themeContext";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useThemeContext();
  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      {children}
    </div>
  );
}
