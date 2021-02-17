import { RATES_AMOUNT_CHANGED, RATES_CURRENCY_CHANGED, RATES_RECEIVED } from "../constants/redux";

const initialState = {
  amount: '10',
  currencyCode: 'USD',
  currencyData: { USD: 1.0 },
};

export function ratesReducer(state = initialState, action) {
  switch(action.type) {
    case RATES_AMOUNT_CHANGED:
      return {...state, amount: action.payload};
    case RATES_CURRENCY_CHANGED:
      return {...state, currencyCode: action.payload};
    case RATES_RECEIVED:
      return {...state, currencyData: action.payload};
    default:
      return state;
  }
}

// selector functions (access redux state easily)
export const getAmount = state => state.rates.amount;
export const getCurrencyCode = state => state.rates.currencyCode;
export const getCurrencyData = state => state.rates.currencyData;
