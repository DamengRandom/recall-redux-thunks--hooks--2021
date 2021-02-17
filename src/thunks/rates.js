import { changeCurrencyCode } from "../actions/rates";
import { getCurrencyCode } from "../reducers/rates";

export function getInitialRates(dispatch, getState) {
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(changeCurrencyCode(currencyCode)); // fetch currency data before component get loaded ..
};
