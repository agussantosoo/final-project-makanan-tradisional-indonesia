import React, { useState } from "react";
import Layout from "../layout";
import Tabs from "../components/Tabs";
import Makanan from "../features/makanan/Makanan";
import Minuman from "../features/minuman/Minuman";

export default function Menu({ jns, isChecked, handleCheckboxChange }) {
  const [tab, setTab] = useState(0);

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
                <h2 className="fw-bold">Menu</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <Tabs tab={tab} setTab={setTab} />
            {tab === 0 && <Makanan />}
            {tab === 1 && <Minuman />}
          </div>
        </div>
      </section>
    </Layout>
  );
}
