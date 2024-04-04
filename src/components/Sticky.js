import React, { useEffect } from "react";
// import "./Sticky.css";

export const createSticky = () => {
  const stickyDiv = document.createElement("div");
  stickyDiv.className = "sticky";
  stickyDiv.innerHTML = `
    <span>
        🌟 Promo Detail: 🌟 <br><br>
        🔸 Diskon 20% untuk semua menu makanan tradisional! <br>
        🔸 Berlaku untuk dine-in, take away, dan delivery. <br>
        🔸 Periode promo terbatas, jadi segera kunjungi kami! <br>
        <br>
        <center>Syarat dan ketentuan berlaku</center>
    </span>
    <button class="btn btn-dark btn-sm close-btn">x</button>
  `;

  const closeButton = stickyDiv.querySelector(".close-btn");

  closeButton.addEventListener("click", () => {
    stickyDiv.classList.add("closed");
    localStorage.setItem("isStickyClosed", "true");
  });

  if (localStorage.getItem("isStickyClosed") === "true") {
    stickyDiv.classList.add("closed");
  }

  document.body.appendChild(stickyDiv);
};

const Sticky = () => {
  useEffect(() => {
    if (localStorage.getItem("isStickyClosed") !== "true") {
      createSticky();
    }
  }, []);

  return null;
};

export default Sticky;
