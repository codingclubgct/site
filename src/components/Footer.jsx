import logo from "../assets/img/logo.png";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="footer  scroll-header"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="footer__container container grid">
        <div className="footer__content ">
          <Link
            to="/#"
            className="footer__logo"
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              className="nav__logo-img"
              style={{ width: "80px", height: "80px" }}
            ></img>
          </Link>
          <h3 className="footer__title">CODING CLUB OF GCT</h3>
          <p className="footer__description">
            Learn • Code • Develop • Share • Repeat<br></br>
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Sections</h3>

          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/team" className="footer__link">
                Team
              </Link>
            </li>
            <li>
              <Link to="/activities" className="footer__link">
                Activities
              </Link>
            </li>
            <li>
              <Link to="/resources" className="footer__link">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="footer__link">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/register" className="footer__link">
                Join Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contact</h3>
          <div className="contact">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12}>
                <div className="info-box">
                  <h3>Email Us</h3>
                  <p><a style={{color: 'inherit'}} href='mailto:codingclub@gct.ac.in'>codingclub@gct.ac.in</a></p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="info-box">
                  <h3>Call Us</h3>
                  <p>+91 9655775678</p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="info-box">
                  <div className="footer__social">
                    <Link
to                  href="https://www.linkedin.com/company/coding-club-gct"
                      target="_blank"
                      rel="noreferrer"
                      className="footer__social-link"
                    >
                      <LinkedInIcon fontSize="small" />
                    </Link>
                    <Link
to                  href="https://instagram.com/codingclub.gct?utm_medium=copy_link"
                      target="_blank"
                      rel="noreferrer"
                      className="footer__social-link"
                    >
                      <InstagramIcon fontSize="small" />
                    </Link>
                    <Link
to                  href="https://www.youtube.com/channel/UCeq-w-ypo1_hoyT9OuIjB6g/"
                      target="_blank"
                      rel="noreferrer"
                      className="footer__social-link"
                    >
                      <YouTubeIcon fontSize="small" />
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <span className="footer__copy">
        &#169; Coding Club of GCT - All rigths reserved
      </span>
    </footer>
  );
}

export default Footer;
