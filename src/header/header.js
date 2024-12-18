import React from "react";
import "../header/header.css";
import logo from "../img/amazon-dark.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../Languages";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const { i18n, t } = useTranslation();
  const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

  //for sign out within the home page
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <div className="header">
      {/* Header */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="amazone-logo" />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder={t("searchPlaceHolder")}
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          {" "}
          {/*WIll redirect if there is no user and and sign IN*/}
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionOne">
              {t("hello")}, {user ? user.email : t("guest")}
            </span>
            <span className="header__optionTwo">
              {user ? t("signOut") : t("signIn")}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionOne">{t("returns")}</span>
          <span className="header__optionTwo">{t("orders")}</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">{t("your")}</span>
          <span className="header__optionTwo">{t("prime")}</span>
        </div>
        <div className="select">
          <select defaultValue={i18n.language} onChange={onChangeLang}>
            {LANGUAGES.map(({ label, code }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;


export const AWS = ()=>{
  return(
    <h1>HI</h1>
  )
}