import {useEffect} from "react";
import logo from "../assets/img/logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

function show() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.add("show-menu");
}

function close() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

function NavBar({ id }) {
  useEffect(() => {
    if (id) document.getElementById(id).classList.add("active-link");
  }, [id])
  return (
    <header className="header" id="header">
      <Container fixed>
        <nav className="nav">
          <Link to="/" className="nav__logo">
            <img
              src={logo}
              alt=""
              className="nav__logo-img"
              style={{ width: "80px", height: "80px" }}
            ></img>
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  to="/"
                  className="nav__link"
                  id="home"
                  onClick={linkAction}
                >
                  Home
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/team"
                  className="nav__link"
                  id="team"
                  onClick={linkAction}
                >
                  Team
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/activities"
                  className="nav__link"
                  id="activities"
                  onClick={linkAction}
                >
                  Activities
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/resources"
                  className="nav__link"
                  id="resources"
                  onClick={linkAction}
                >
                  Resources
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/blogs"
                  className="nav__link"
                  id="blogs"
                  onClick={linkAction}
                >
                  Blogs
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="/contact"
                  className="nav__link"
                  id="contact"
                  onClick={linkAction}
                >
                  Contact
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/register"
                  className="nav__link"
                  id="register"
                  onClick={linkAction}
                >
                  Join Us
                </Link>
              </li>
            </ul>

            <div className="nav__close" id="nav-close" onClick={close}>
              <CloseSharpIcon />
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={show}>
            <MenuRoundedIcon fontSize="large" />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
