import { getExchangeRates } from "../api";
import { RATES_AMOUNT_CHANGED, RATES_CURRENCY_CHANGED, RATES_RECEIVED } from "../constants/redux";

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

// action creators

export const changeAmount = (amount) => ({
  type: RATES_AMOUNT_CHANGED,
  payload: amount
});

export function changeCurrencyCode(currencyCode) {
  return function changeCurrencyCodeThunk(dispatch) {
    dispatch({
      type: RATES_CURRENCY_CHANGED,
      payload: currencyCode
    }); // thunk action creator

    getExchangeRates(currencyCode, supportedCurrencies) // api call
      .then(rates => {
        dispatch({ // then action creator get payload
          type: RATES_RECEIVED,
          payload: rates
        });
      });
  }
};
