import axios, { AxiosPromise } from 'axios';

console.log( 'lesson 3' );

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com'
};

interface IPost {
  body: string
  id: number
  title: string
  userId: number
}

const axiosInstance = axios.create( config );

export const JSPAPI = {
  getAllPost: (): AxiosPromise<Array<IPost>> => axiosInstance.get( `posts` ).then( res => res.data ),
  getPostById: ( postId: number ): AxiosPromise<IPost> => axiosInstance.get( `posts/${ postId }` ).then( res => res.data )
};


// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
export default () => {};