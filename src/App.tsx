import { Routes, Route, useLocation } from "react-router-dom";
import { Layout, ConfigProvider, theme } from "antd";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footer";
import Home from "./pages/Home";
import CV from "./pages/Cv";
import Projects from "./pages/Projects";
import PageTransition from "./components/PageTransition";

const { Content } = Layout;

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition duration={0.8}>
            <Home />
          </PageTransition>} />
        <Route path="/cv" element={<PageTransition duration={0.8}>
            <CV />
          </PageTransition>} />
        <Route path="/projects" element={<PageTransition duration={0.8}>
            <Projects />
          </PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Content style={{ padding: 0 }}>
          <AnimatedRoutes />
        </Content>
        <FooterBar />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
