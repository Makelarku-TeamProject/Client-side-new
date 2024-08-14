import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../../context/DataContext'; 

const SectionCampaign = () => {
  const { sliders, sliderLoading, sliderError, fetchSliders } = useContext(DataContext);
  console.log('ab')
  useEffect(() => {
    fetchSliders();
  }, [fetchSliders]);

  if (sliderLoading) {
    return <div>Loading...</div>;
  }

  if (sliderError) {
    return <div>Error: {sliderError}</div>;
  }

  return (
    <div>
      <section id="campaign-banner" className="campaign-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4 mt-5">
              <h2>Promo Rumah!!!</h2>
              <p>
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
                atau permintaan khusus.
              </p>
            </div>
            <div id="promoCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                {sliders.map((_, index) => (
                  <li
                    key={index}
                    data-target="#promoCarousel"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  ></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {sliders.map((slider, index) => (
                  <div
                    key={slider.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div
                      className="campaign-banner-content d-flex flex-column flex-md-row align-items-center"
                      style={{
                        backgroundColor: "rgba(252, 138, 49, 255)",
                        padding: "20px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                    >
                      <img
                        src={slider.image_url}
                        className="img-fluid"
                        alt={`Promo ${index + 1}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          marginRight: "20px"
                        }}
                      />
                      <div className="text-left">
                        <h4>Promo Properti !!!</h4>
                        <p>
                          Promo details for {slider.name} go here.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#promoCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#promoCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCampaign;
