import React from "react";
import Layout from "../layout";

export default function Contact({ jns, isChecked, handleCheckboxChange }) {
  return (
    <Layout
      jns={jns}
      isChecked={isChecked}
      handleCheckboxChange={handleCheckboxChange}
    >
      <section className="container">
        <div id="section1" className="text-center">
          <div className="row justify-content-center mt-5 mb-3">
            <div className="w-auto">
              <div className="border-bottom border-2 border-dark text-center">
                <h2 className="fw-bold">Contact</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d419.3264809353217!2d119.85530529274885!3d-0.89801319627203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1712259629367!5m2!1sid!2sid"
              width="90%"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
