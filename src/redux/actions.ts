import { useDispatch } from 'react-redux';

export enum ACTIONS_TYPE {
  CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
  CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
  CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
  type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
  payload: {
    amountOfBYN: string
    amountOfCurrency: string
  }
};

export const ChangeCurrencyField = ( amountOfBYN: string, amountOfCurrency: string ): ChangeCurrencyFieldType => ( {
  type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
  payload: {
    amountOfBYN,
    amountOfCurrency
  }
} );

export type ChangeActionType = {
  type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION
  payload: {
    isBuying: boolean
  }
};

export const ChangeAction = ( isBuying: boolean ): ChangeActionType => ( {
  type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
  payload: {
    isBuying
  }
} );

export type ChangeCurrentCurrencyType = {
  type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
  payload: {
    currentCurrency: string
  }
};

export const ChangeCurrentCurrency = ( currentCurrency: string ): ChangeCurrentCurrencyType => ( {
  type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
  payload: {
    currentCurrency
  }
} );

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeActionType | ChangeCurrentCurrencyType;

export const TypedDispatch = () => {
  const dispatch = useDispatch();
  return ( ac: CurrencyReducersTypes ) => dispatch( ac );
};