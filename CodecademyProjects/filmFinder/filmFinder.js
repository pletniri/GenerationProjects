const tmdbKey = 'd6d5a680e77139b043c5e2ecb01e2401';
//the movie database key (aka password)
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
//the movie database url
const playBtn = document.getElementById('playBtn');
//we stored button on the page to the varible

const getGenres = async () => {
    // created asyncronous function to get genres from the database
  const genreRequestEndpoint = '/genre/movie/list';
  //link to the genres list
  const requestParams = `?api_key=${tmdbKey}`;
  //I stored api_key into a variable, api key grants access to the project using 'password'
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  //creating url to go to genres
  try {
    const response = await fetch (urlToFetch);
    // to bring the list of genres I created the asyncronous function to fetch it
    if(response.ok){
        //after confirming we recieved a response
      const jsonResponse = await response.json();
      //I transformed the response into json and stored into a variable

     // console.log(jsonResponse);
      const genres = jsonResponse.genres;
      //the genres property of the transformed respnse is stored into a variable
      console.log(genres);
     return genres;
    }
  } catch (error) {
    console.log(error);
  };
};


const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndPoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenres}`;
  const urlToFetch = `${tmbdBaseUrl}${discoverMoveiEndPoint}${requestParams}`; 
  try {
    const response = await fetch (urlToFetch);
    if (response.ok){
      const jsonResponse = await response.json();
      const movies = jsonResponse;
      console.log(movies);
      return movies;
          }
  } catch (error) {
    console.log(error);
  };

};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = '/movie/${movieId}';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try {
    const response = await fetch (urlToFetch);
     if (response.ok){
      const jsonResponse = await response.json();
      const movieInfo = jsonResponse.results;
      return movieInfo;
          }

  } catch (error) {
    console.log(error);
  }

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
    //create asyncrounous function
  const movieInfo = document.getElementById('movieInfo');
  //movieinfo is stored into a vairable
  if (movieInfo.childNodes.length > 0) {
    
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;