import React from 'react'
import '../subtotal/subtotal.css'
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider';
// import { getBasketTotal } from '../reducer';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    const [t] = useTranslation();

    const subTotal = () => {
        var total = 0;
        for(var i=0; i<basket.length; i++){
            total+= basket[i].price;
        }
        return total.toFixed(2);
    }
    // console.log(getBasketTotal({basket}));
    // console.log(subTotal());
  return (
    <div className="subtotal">
            <>
            <p>
                {t("subtotal")} ({basket?.length} Items): <strong>{subTotal()}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' />
                {t("gift")}
            </small>
            </>
        <button onClick={() => navigate('/payment')}>{t("proceedCheckout")}</button>
    </div>
  )
}

export default Subtotal