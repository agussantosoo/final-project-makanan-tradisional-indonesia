import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({
  children,
  jns,
  isChecked,
  handleCheckboxChange,
}) {
  return (
    <>
      <Header />
      <Navbar
        jns={jns}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      {children}
      <Footer />
    </>
  );
}
