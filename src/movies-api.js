import axios from "axios";

axios.defaults.baseURL = "('https://api.themoviedb.org/";

export const fetchMovies = async movie => {
    const ACCESS_KEY = "a3d5fa06dee835d43aa7817ac99462bf";
    const options = {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2Q1ZmEwNmRlZTgzNWQ0M2FhNzgxN2FjOTk0NjJiZiIsIm5iZiI6MTc0NTAwNDE2Ni4xMDYsInN1YiI6IjY4MDJhNjg2NTU3MGNiYTllMWFjZjYwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._U-8r6cta4Lwc9E1XjwZCASDWVJ1x08yxD8RWKNKp3Q'
        }
      };
    const response = await axios.get (url, options , 
        .then(response => console.log(response))
        .catch(err => console.error(err));
    )
    return response.data.results;
};