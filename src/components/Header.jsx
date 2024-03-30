import React, { useState } from "react";
import "/src/styles/header.css";
import img_bg_mobile_dark from "/public/images/bg-mobile-dark.jpg";
import img_bg_mobile_light from "/public/images/bg-mobile-light.jpg";
import img_bg_dk_dark from "/public/images/bg-desktop-dark.jpg";
import img_bg_dk_light from "/public/images/bg-desktop-light.jpg/";
import sun from "/public/images/icon-sun.svg";
import moon from "/public/images/icon-moon.svg";

function Header() {
  const [imgMode, setImgMode] = useState(sun);
  const [bg_mobile_img, setBg_mobile_img] = useState(img_bg_mobile_dark);
  const [bg_dk_img, setBg_dk_img] = useState(img_bg_dk_dark);

  function changeMode() {
    if (imgMode === sun) {
      setImgMode(moon);
      document.querySelector("body").classList.add("lightmode");
      setBg_dk_img(img_bg_dk_light);
      setBg_mobile_img(img_bg_mobile_light);
    } else {
      setImgMode(sun);
      document.querySelector("body").classList.remove("lightmode");
      setBg_dk_img(img_bg_dk_dark);
      setBg_mobile_img(img_bg_mobile_dark);
    }
  }

  return (
    <>
      <header className="img_header">
        <div className="tittle_container">
          <div className="button_sun_tittle">
            <p>TODO</p>
            <button className="button_mode" onClick={() => changeMode() }>
              <img className="main_img" src={imgMode} alt="sun-img" />
            </button>
          </div>
        </div>
        <img src={window.innerWidth >= 768 ? bg_dk_img : bg_mobile_img} alt="performance_img" className="img_top" />
      </header>
    </>
  );
}

export default Header;
