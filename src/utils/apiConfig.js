const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

/* 
  By using these requests we can append this api path along with axios instance
*/

export const REQUESTS = {
    fetch_trending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    search_movie: `/search/movie?api_key=${API_KEY}&language=en-US`
}
