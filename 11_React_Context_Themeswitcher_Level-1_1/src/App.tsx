import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <MainContent />
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
