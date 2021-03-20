import React, { useState } from 'react';
import './lesson_3';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { API } from './API';
import { JSPAPI } from './lesson_3';

export interface IMovieInfo {
  Title: string | null
  Year: string | null
  Rated: string | null
  Released: string | null
  Runtime: string | null
  Genre: string | null
  Director: string | null
  Writer: string | null
  Actors: string | null
  Plot: string | null
  Language: string | null
  Country: string | null
  Ratings: Array<{ Source: string, Value: string }>
  Awards: string | null
  Poster: string | null
  Metascore: string | null
  imdbRating: string | null
  imdbVotes: string | null
  imdbID: string | null
  Type: string | null
  DVD: string | null
  BoxOffice: string | null
  Production: string | null
  Website: string | null
  Response: string | null
}

const Lesson3 = () => {
  const [ searchName, setSearchName ] = useState( '' );
  const [ searchResult, setSearchResult ] = useState<IMovieInfo | null>( null );
  const [ searchNameByType, setSearchNameByType ] = useState( '' );
  const [ searchResultByType, setSearchResultByType ] = useState( '' );
  const [ poster, setPoster ] = useState<string | null>( null );

  const searchFilm = async () => {
    try {
      const response = await API.searchFilmsByTitle( searchName );
      setSearchResult( response.data );
    } catch ( error ) {
      debugger
      console.log( 'Ошибка API', error );
      setSearchResult( error.value );
    }
  };

  const getPostById = ( postId: number ) => {
    // const res = await JSPAPI.getPostById( 5 );
    return JSPAPI.getPostById( 3 );
  };

  console.log(getPostById( 3 ));
  const searchByType = async ( e: React.MouseEvent<HTMLButtonElement> ) => {
    const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
    const response = await API.searchFilmsByType( searchNameByType, type );
  };

  return (
      <div>
        Hello API!
        {/*<h1>Promises</h1>
         <div>
         <h3><p>Search by name:</p></h3>
         <input
         type="text"
         value={ searchName }
         onChange={ ( e ) => setSearchName( e.currentTarget.value ) }/>
         <button onClick={ searchFilm }>Search</button>
         <div>
         { searchResult && JSON.stringify( searchResult ) }
         </div>
         </div>

         <div>
         <h3><p>Search by type:</p></h3>
         <input
         type="text"
         value={ searchNameByType }
         onChange={ ( e ) => setSearchNameByType( e.currentTarget.value ) }/>
         <button
         onClick={ searchByType }
         data-t='movie'>Movie
         </button>
         <button
         onClick={ searchByType }
         data-t='series'>Series
         </button>
         <div>
         { searchResultByType }
         </div>
         </div>
         { poster
         && <img
         src={ poster ? poster : '' }
         alt="poster"/>
         }*/ }

      </div>
  );
};
export default Lesson3;