import axios, { AxiosResponse } from 'axios';
import { IMovieInfo } from './Lesson3';

const configOMB = {
  baseURL: 'http://www.omdbapi.com'
};
const key = '3b945e44';
const axiosInstance = axios.create( configOMB );

export const API = {
  searchFilmsByTitle: ( title: string ): Promise<AxiosResponse<IMovieInfo>> => axiosInstance.get( `?t=${ title }&apikey=${ key }` ),
  searchFilmsByType: ( title: string, type: string ) => axiosInstance.get( `?t=${ title }&type=${ type }&apikey=${ key }` )

};
