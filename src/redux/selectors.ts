import { IGlobalState } from './state';

export interface IRootState extends IGlobalState {
}

export const selectCurrencies = ( state: IRootState ) => state.currency.currencies;
export const selectCurrentCurrencies = ( state: IRootState ) => state.currency.currentCurrency;
export const selectIsBuying = ( state: IRootState ) => state.currency.isBuying;
export const selectAmountOfBYN = ( state: IRootState ) => state.currency.amountOfBYN;
export const selectAmountOfCurrency = ( state: IRootState ) => state.currency.amountOfCurrency;
export const selectCurrencyState = ( state: IRootState ) => state.currency;