import Link from "next/link";
import { useState } from "react";

export default function MainHeader() {
  const [showSmallMenu, setshowSmallMenu] = useState(false);

  const closeSmallMenu = () => {
    console.log("lollll");
    setshowSmallMenu(false);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link href="/">
          <div onClick={closeSmallMenu} className="header__logo-container">
            {/* <img src="/svg/logo.svg" className="header__logo" /> */}
            <h1>PortFolio</h1>
          </div>
        </Link>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link href="/">
                <a className="header__link">Home </a>
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link href="/#about">
                <a className="header__link">About </a>
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link href="/#projects">
                <a className="header__link">Projects</a>
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link href="/blog">
                <a className="header__link">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            if (showSmallMenu) {
              setshowSmallMenu(false);
            } else {
              setshowSmallMenu(true);
            }
          }}
          className="header__sm-menu-icon-cont"
        >
          <img src="/png/small-menu.png" />
        </div>
      </div>
      {showSmallMenu ? (
        <div className="header__sm-menu">
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <Link href="/">
                <li onClick={closeSmallMenu} className="header__sm-menu-link">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={closeSmallMenu} className="header__sm-menu-link">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={closeSmallMenu} className="header__sm-menu-link">
                  Projects
                </li>
              </Link>
              <Link href="/blog">
                <li
                  onClick={closeSmallMenu}
                  className="header__sm-menu-link header__sm-menu-link-last"
                >
                  Blog
                </li>
              </Link>
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}
