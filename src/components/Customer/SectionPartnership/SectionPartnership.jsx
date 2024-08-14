import React from 'react';
import '../SectionPartnership/partnership.css'

const SectionPartnership = () => {
  // Array of partner logos and names
  const partners = [
    {
      name: 'Google',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png',
    },
    {
      name: 'AWS',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
    },
    {
      name: 'Microsoft',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png',
    },
    // Add more partners as needed
  ];
  console.log('a')

  return (
    <div>
      <section id="partnership-banner" className="partnership-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4 mt-5">
              <h2>Our Trusted Partners</h2>
              <p>
              Kami berkolaborasi dengan para pemimpin industri untuk memberikan solusi terbaik.
              </p>
            </div>
            <div className="col-md-12">
              <div className="marquee">
                <div className="marquee-content d-flex">
                  {partners.map((partner, index) => (
                    <div key={index} className="partner-logo mx-3">
                      <img
                        src={partner.imageUrl}
                        alt={partner.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                          borderRadius: "10px",
                        }}
                      />
                      <p className="text-center mt-2">{partner.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
       
      `}</style>
    </div>
  );
};

export default SectionPartnership;
