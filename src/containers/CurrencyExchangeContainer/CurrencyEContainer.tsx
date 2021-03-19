import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { CurrencyStateType, CurrencyType } from '../../redux/currencyReducer';
import {
  ChangeAction,
  ChangeCurrencyField,
  ChangeCurrentCurrency,
  TypedDispatch
} from '../../redux/actions';
import { useSelector } from 'react-redux';
import { IRootState, selectCurrencyState } from '../../redux/selectors';

const CurrencyEContainer: React.FC = () => {

  const dispatch = TypedDispatch();

  // const {
  //   currencies,
  //   currentCurrency,
  //   isBuying,
  //   amountOfBYN,
  //   amountOfCurrency
  // } = useSelector( selectCurrencyState );

  const {
    currencies,
    currentCurrency,
    isBuying,
    amountOfBYN,
    amountOfCurrency
  } = useSelector<IRootState, CurrencyStateType>( state => state.currency );

  // Текущий курс
  let currencyRate: number = 0;

  //Создаем массив названий валют ( нужен для создания кнопок ) и заодно устанавливаем текущий курс в currencyRate
  const currenciesName = currencies.map( ( currency: CurrencyType ) => {
    if ( currency.currencyName === currentCurrency ) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  } );

  const changeCurrencyField = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    let value = e.currentTarget.value;

    //Проверяем значение на число, если не число - прерываем функцию
    if ( !isFinite( +value ) ) return;

    if ( e.currentTarget.dataset.currency ) {
      const trigger: string = e.currentTarget.dataset.currency;
      if ( trigger === 'byn' ) {
        if ( value === '' ) {
          dispatch( ChangeCurrencyField( value, value ) );
        } else {
          dispatch( ChangeCurrencyField( value, ( +Number( value ).toFixed( 2 ) / currencyRate ).toFixed( 2 ) ) );
        }
      } else {
        if ( value === '' ) {
          dispatch( ChangeCurrencyField( value, value ) );
        } else {
          dispatch( ChangeCurrencyField( ( +Number( value ).toFixed( 2 ) * currencyRate ).toFixed( 2 ), value ) );
        }
      }
    }
  };
  const changeAction = ( e: React.MouseEvent<HTMLSpanElement> ) => {
    // setAction( true ) => покупка
    // setAction( false ) => покупка
    // isBuying: true <-> false в редьесере
    dispatch( ChangeAction( e.currentTarget.dataset.action === 'buy' ) );
  };

  // Устанавливает currentCurrency в редьюсере на основании дата-атрибута data-currency на кнопке
  const changeCurrentCurrency = ( e: React.MouseEvent<HTMLLIElement> ) => {
    e.currentTarget.dataset.currency && dispatch( ChangeCurrentCurrency( e.currentTarget.dataset.currency ) );
  };

  return (
      <>
        <CurrencyExchange
            currenciesName={ currenciesName }
            currentCurrency={ currentCurrency }
            currencyRate={ currencyRate }
            isBuying={ isBuying }
            amountOfBYN={ amountOfBYN }
            amountOfCurrency={ amountOfCurrency }
            changeCurrencyField={ changeCurrencyField }
            changeAction={ changeAction }
            changeCurrentCurrency={ changeCurrentCurrency }
        />
      </>
  );
};
export default CurrencyEContainer;