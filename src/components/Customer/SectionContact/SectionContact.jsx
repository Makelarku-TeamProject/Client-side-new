const SectionContact = () => {
  console.log('a')
  return (
    <div>
      <section id="campaign-banner" className="campaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4 mt-5 ml-5">
              <h2>Contact From US !!!</h2>
              <p>
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
                atau permintaan khusus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-7 text-center mb-4 mt-5">
              <div className="card border-0 shadow-sm rounded">
                <div className="card-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.4878845067!2d106.6894283352192!3d-6.229728025238589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1594508000901!5m2!1sid!2sid"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <div className="card border-0 shadow-sm rounded">
                <div className="card-body">
                  <h3>Kontak kami</h3>
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Jl.
                    Jendral Sudirman No.83, Daerah Khusus Ibukota Jakarta,
                    Indonesia
                    <i className="fas fa-phone"></i> +6282332224930
                    <i className="fas fa-envelope"></i> makelarku@MakelarkuTeam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionContact;
