import React, { useContext } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Sticky from "./components/Sticky";
import { ThemeContext, ThemeProvider } from "./components/ThemeContext";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isChecked = theme === "dark";

  const handleCheckboxChange = () => {
    toggleTheme();
  };

  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <Home
              jns="/"
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
            />
          }
          path="/"
        />
        <Route
          element={
            <Menu
              jns="/menu"
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
            />
          }
          path="/menu"
        />
        <Route
          element={
            <Contact
              jns="/contact"
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
            />
          }
          path="/contact"
        />
      </Routes>
      <Sticky />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
