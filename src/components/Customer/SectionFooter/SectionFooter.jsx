const SectionFooter = () => {
  console.log('a')
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "rgba(252, 234, 214, 255)" }}
    >
      <div className="container">
        <div className="row  mt-5">
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <a
                data-mdb-ripple-init
                className="btn btn-outline btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
              <a
                data-mdb-ripple-init
                className="btn btn-outline btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                data-mdb-ripple-init
                className="btn btn-outline btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fa fa-google"></i>
              </a>
              <adata-mdb-ripple-init
                className="btn btn-outline btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fa fa-instagram"></i>
              </adata-mdb-ripple-init>
              <a
                data-mdb-ripple-init
                className="btn btn-outline btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Footer text</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
              </div>
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Footer text</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-light">
        ©<script>document.write( new Date().getFullYear() )</script> Copyright:
        <a className="text-reset fw-bold" href="#">
          Makelarku
        </a>
      </div>
    </footer>
  );
};

export default SectionFooter
