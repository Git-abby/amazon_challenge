import React from "react";
import "../footer/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <a href="/">Conditions of Use</a>
        <a href="/">Privacy Notice</a>
        <a href="/">Help</a>
      </div>
      <div className="footer__copy">
        <p>&copy; 2023, Amazone-clone, inc. or its affiliates </p>
        <p>Developer ~@Mohmmadabrar</p>
      </div>
    </div>
  );
}

export default Footer;
