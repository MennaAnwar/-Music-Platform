import JoinUs from "../JoinUs/JoinUs";
import Title from "../Title/Title";
import logo from "../../../images/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="follow-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Title title="Join Us" />
            </div>
          </div>
          <div className="follow-us-row">
            <JoinUs />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 text-left ">
              <div className="footer-logo site-branding">
                <img src={logo} alt="Logo New" />
              </div>
            </div>
            <div className="col-lg-6 text-right ">
              <span className="copyright-text text-white">
                © 2021 All Rights Reserved By
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
