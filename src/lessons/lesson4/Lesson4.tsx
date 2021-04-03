import React from 'react';
import './lesson_4';

const Lesson4 = () => {

  const runTask1 = () => {
    const promise = new Promise( () => console.log( 'Promise is created' ) );
    console.log( promise );
  };

  const runTask2 = () => {
    const resolvedPromise = Promise.resolve( 'Promise Data' );
    console.log( 'promise:', resolvedPromise );
    resolvedPromise.then( result => console.log( result ) );
  };

  const runTask3 = () => {
    const rejectedPromise = Promise.reject( 'Promise Error' );
    console.log( 'promise:', rejectedPromise );
    rejectedPromise.then( result => console.error( result ) );
  };

  const runTask4 = () => {
    const promise = new Promise<string>( ( resolve, reject ) => {
      setTimeout( () => resolve( 'Promise Data' ), 3000 );
    } );
    promise.then( result => console.log( result ) );
  };

  /*Begin task 05*/
  type HandlePromiseType = {
    promise: Promise<string> | null
    resolve: ( ( paramName: string ) => void ) | null
    reject: ( ( paramName: string ) => void ) | null
    onSuccess: ( paramName: string ) => void
    onError: ( paramName: string ) => void
  }

  const handlePromise: HandlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName) {console.log( `Promise is resolved with data: ${ paramName }` );},
    onError(paramName) {console.log( `Promise is rejected with error: ${ paramName }` );}
  };
  //@ts-ignore
  window.handlePromise = handlePromise;
  const createPromise = () => {
    handlePromise.promise = new Promise<string>( ( resolve, reject ) => {
      handlePromise.resolve = resolve;
      handlePromise.reject = reject;
    } );
    handlePromise.promise.then(handlePromise.onSuccess);
    handlePromise.promise.catch(handlePromise.onError)
    console.log( handlePromise );
  };

  const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve( 'Resolve parameter' );

  };
  const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject( 'Reject parameter' );
  };

  /*End task 05*/


  /*Start task 06*/

  const promiseTask06 = new Promise<string>( ( resolve, reject ) => {
    setTimeout( () => resolve( 'My name is ' ), 1000 );
  } );

  const onSuccess = ( param: string ) => param + 'Ewgeni';
  const print = ( param: string ) => console.log( param );
  promiseTask06.then( res => onSuccess( res ) ).then( res => print( res ) );

  /*End task 06*/

  /*Start task 07*/

  const promise01 = new Promise<{ name: string }>( ( resolve, reject ) => {
    setTimeout( () => resolve( { name: 'Anna' } ), 2000 );
  } );

  const promise02 = new Promise<{ age: number }>( ( resolve, reject ) => {
    setTimeout( () => resolve( { age: 16 } ), 3000 );
  } );

  const promise03 = new Promise<{ city: string }>( ( resolve, reject ) => {
    setTimeout( () => resolve( { city: '' } ), 4000 );
  } );

  Promise
      .all( [ promise01, promise02, promise03 ] )
      .then( result => Object.assign( {}, ...result ) )
      .then( result => console.log( result ) );

  /*End task 07*/

  return (
      <div>
        <button
            id='btn-create-promise'
            onClick={ createPromise }>Create Promise
        </button>
        <button
            id='btn-resolve-promise'
            onClick={ resolvePromise }>Resolve Promise
        </button>
        <button
            id='btn-reject-promise'
            onClick={ rejectPromise }>Reject Promise
        </button>
        <hr/>
        <hr/>

        <button
            onClick={ runTask1 }>
          Run task 01
        </button>

        <button
            onClick={ runTask2 }>
          Run task 02
        </button>

        <button
            onClick={ runTask3 }>
          Run task 03
        </button>

        <button
            onClick={ runTask4 }>
          Run task 04
        </button>


      </div>
  );
};
export default Lesson4;