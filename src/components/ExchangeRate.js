// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
// import { getExchangeRates } from "../api";
import { getAmount, getCurrencyData, getCurrencyCode } from "../reducers/rates";
// import { changeCurrencyCode, supportedCurrencies } from "../actions/rates";
import { supportedCurrencies } from "../actions/rates";

export function ExchangeRate() {
  // const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);
  // const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  // fetch the exchange rates each time currency code changes
  // useEffect(() => {
  //   dispatch(changeCurrencyCode(currencyCode));
  // }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}

// selector is like a public api for accessing data in the redux store
