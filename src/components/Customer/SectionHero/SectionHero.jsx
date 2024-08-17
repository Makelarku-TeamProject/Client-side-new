import HeroImage from '../../../assets/Hero.png'
const SectionHero = () => {
  console.log('a')
  return (
    <section id="hero">
      <div
        className="hero"
        style={{ backgroundColor: "rgba(252, 234, 214, 255)" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center h-100">
            <div className="col-12 col-md-6 text-center order-2 order-md-1">
              <div className="p-3">
                <h2>
                  <strong>Rumah Idaman, Harga Menawan</strong>
                  <br />
                  in Your Gadget
                </h2>
                <p>Properti yang Anda Butuhkan, Solusi yang Anda Percayai</p>
                <button
                  className="btn btn-lg"
                  style={{ backgroundColor: "rgba(252, 138, 49, 255)" }}
                >
                  <i className="fa fa-search"></i> Cari
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center order-1 order-md-2">
              <img
                src={HeroImage}
                className="img-fluid"
                alt="Real Estate Slogans"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
