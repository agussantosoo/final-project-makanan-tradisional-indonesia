import React from "react";
import Layout from "../layout";

//import image
import main from "../images/main.jpeg";
import menu1 from "../images/1.jpg";
import menu2 from "../images/2.png";
import menu3 from "../images/3.png";
import artikel1 from "../images/artikel-1.jpg";
import artikel2 from "../images/artikel-2.jpeg";

export default function home({ jns, isChecked, handleCheckboxChange }) {
  return (
    <Layout
      jns={jns}
      isChecked={isChecked}
      handleCheckboxChange={handleCheckboxChange}
    >
      <section id="top-main">
        <div className="main-left">
          <div className="text-left-centered">
            <p className="text-muted mb-0">Makanan Indonesia</p>
            <h1 className="fw-bold mb-0">Gado-Gado</h1>
            <p className="text-muted mb-3">
              Terbuat berbagai campuran sayuran, tempe, tahu, kentang, dan telur
              rebus lalu disajikan dengan siraman bumbu kacang nan gurih.
            </p>
            <button className="btn btn-dark">Pesan Sekarang</button>
          </div>
        </div>
        <div className="main-right">
          <img src={main} width="100%" />
        </div>
      </section>

      <section className="container">
        <div id="menu-makanan" className="text-center">
          <div className="row justify-content-center mt-5 mb-3">
            <div className="w-auto">
              <div className="border-bottom border-2 border-dark text-center">
                <h2 className="fw-bold">Menu Terpopuler</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="card col-md-3 card-menu-makanan mt-2">
              <img src={menu1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Sate Ayam</h5>
                <p className="card-text text-left text-muted">
                  Sate ayam dimasak dengan cara dipanggang dengan menggunakan
                  arang dan disajikan dengan pilihan bumbu kacang atau bumbu
                  kecap
                </p>
              </div>
            </div>
            <div className="card col-md-3 card-menu-makanan mt-2">
              <img src={menu2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Rendang</h5>
                <p className="card-text text-left text-muted">
                  Rendang berbahan dasar daging yang dihasilkan dari proses
                  memasak suhu rendah dalam waktu lama dengan menggunakan aneka
                  rempah-rempah dan santan
                </p>
              </div>
            </div>
            <div className="card col-md-3 card-menu-makanan mt-2">
              <img src={menu3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Soto Ayam</h5>
                <p className="card-text text-left text-muted">
                  Soto ayam adalah makanan khas Indonesia yang berupa sejenis
                  sup ayam dengan kuah yang berwarna kekuningan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="artikel">
          <div className="row justify-content-center mt-5 mb-3">
            <div className="w-auto">
              <div className="border-bottom border-2 border-dark text-center">
                <h2 className="fw-bold">Artikel Makanan</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-1">
            <div className="col-md-12 mt-2">
              <div className="card">
                <div className="card-body m-3">
                  <div className="row">
                    <div className="col-md-8">
                      <p className="fw-bold lead mb-2">
                        <strong>Gudeg</strong>
                      </p>
                      <p className="text-muted mb-4">
                        Gudeg kering adalah salah satu kuliner khas dari
                        Yogyakarta. Gudeg sendiri merupakan makanan yang terbuat
                        dari nangka muda yang dimasak dengan santan dan berbagai
                        rempah-rempah. Gudeg kering adalah varian gudeg yang
                        dikeringkan hingga teksturnya lebih padat dan rasanya
                        lebih kuat.
                      </p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                      <img src={artikel1} className="img-fluid shadow-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-2">
              <div className="card">
                <div className="card-body m-3">
                  <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                      <img src={artikel2} className="img-fluid shadow-1" />
                    </div>
                    <div className="col-md-8">
                      <p className="fw-bold lead mb-2">
                        <strong>Mie Aceh</strong>
                      </p>
                      <p className="text-muted mb-4">
                        Makanan indonesia yang satu ini tidak hanya populer di
                        kalangan lokal, tetapi juga telah menarik perhatian para
                        pecinta kuliner dari berbagai penjuru negeri. Dengan
                        cita rasa yang khas dan unik, Mie Aceh merupakan
                        perpaduan gurih dari dapur Aceh yang menggugah selera.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="promo" className="mt-5 mb-3">
        <div className="detail-promo d-flex justify-content-center align-items-center">
          <div className="row div-subs rounded-4 py-3 px-sm-5 align-items-center flex-column flex-sm-row">
            <div className="col-sm-6 text-white align-items-center mb-1">
              <h5>Berlangganan untuk promo</h5>
            </div>
            <div className="col-sm-6 align-items-center">
              <div className="input-group align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan email"
                  aria-label="recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-dark"
                  type="button"
                  id="button-addon2"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
