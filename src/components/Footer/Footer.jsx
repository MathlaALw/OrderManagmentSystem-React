import "./Footer.css";
import appStore from "../../Img/LOGO/appStore.png";
import googlePlay from "../../Img/LOGO/googlePlay.png";

function Footer() {
  return (
    <footer className="app-footer mt-5 py-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="me-auto">
            <h3 className="footer-title">Get the FreshCart app</h3>
            <p className="footer-text">
              We will send you a link, open it on your phone to download the app.
            </p>
          </div>

          <div className="me-auto py-5">
            <div className="row">
              <div className="col-md-8 col-12 mb-2 mb-md-0">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email..."
                />
              </div>
              <div className="col-md-4 col-12">
                <button
                  type="button"
                  className="footer-share-btn w-100"
                >
                  Share
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div className="row align-items-center pt-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="d-flex flex-wrap align-items-center gap-3">
                <span className="fw-semibold">Payment partners</span>
                <span className="payment-icon">
                  <i className="fa-brands fa-cc-visa"></i>
                </span>
                <span className="payment-icon">
                  <i className="fa-brands fa-cc-mastercard"></i>
                </span>
                <span className="payment-icon">
                  <i className="fa-brands fa-cc-paypal"></i>
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-end gap-2">
                <span className="fw-semibold">
                  Get deliveries with FreshCart
                </span>
                <img
                  src={appStore}
                  alt="App Store"
                  className="store-badge"
                />
                <img
                  src={googlePlay}
                  alt="Google Play"
                  className="store-badge"
                />
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
