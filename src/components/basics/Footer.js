import React from "react";

import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="text-center d-flex justify-content-center">
        <p className="me-2" id="first-para">
          All Rights Reserved &copy; {year}{" "}
        </p>
        <span className="me-2">|</span>

        <p className="terms">Terms & Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
