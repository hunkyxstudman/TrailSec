const MY_KEY = "d24839db76c8dbcd16fadc12e2691d05";
const REQUESTS = {

    fetchMovies: `discover/movie?api_key=${MY_KEY}&language=en-US`,
    fetchGenre: `https://api.themoviedb.org/3/action/movie/list?api_key=${MY_KEY}&language=en-US`,
    fetchPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    fetchKidMovies: `discover/movie?api_key=${MY_KEY}&certification_country=US&certification.lte=G&sort_by=popularity`
    //fetchTvSeries: 'https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US'
}
console.log(REQUESTS.fetchMovies);
export default REQUESTS;
