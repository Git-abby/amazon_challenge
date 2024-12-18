import React from "react";
import "../home/home.css";
import Product from "../product/Product";
import { useTranslation } from "react-i18next";
// import { LANGUAGES } from "../Languages";

function Home() {
  const [t] = useTranslation();
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazone-banner"
        />

        <div className="home__row">
          <Product
            id= "1"
            title={t("TheLeanStartup")} 
            price={29.99}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="2"
            title={t("Kenwood")} 
            price={239.99}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title={t("KPSPET_SmartWatch")} 
            price={98.99}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
          <Product
            id="4"
            title={t("AmazoneEcho")} 
            price={598.99}
            rating={4}
            img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          <Product
            id="5"
            title={t("AppleiPad")} 
            price={1094.98}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title={t("SamsungMonitor")} 
            price={1094.98}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
