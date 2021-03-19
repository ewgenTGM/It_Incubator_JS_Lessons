import axios, { AxiosResponse } from 'axios';
import { IMovieInfo } from './Lesson3';

const configOMB = {
  baseURL: 'http://www.omdbapi.com'
};
const key = '3b945e44';
const axiosInstance = axios.create( configOMB );

const API = {
  searchFilmsByTitle: ( title: string ): Promise<AxiosResponse<IMovieInfo>> => axiosInstance.get( `?t=${ title }&apikey=${ key }` ),
  searchFilmsByType: ( title: string, type: string ) => {
  }
};


export default API;
