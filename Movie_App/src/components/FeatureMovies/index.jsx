import Paginatelndicator from "./Paginatelndicator";
import Movie from "./Movies";
import { useEffect, useState } from "react";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  console.log("Rendering");

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjhjNWE4ODU0MzhkMDk0YmYxZGM4MzIyNDBlYzYzMCIsIm5iZiI6MTcyNDQwMTQ4NC4yMDgyODQsInN1YiI6IjY2Yzg0NWEzNzlmZTE0MWUwZWVhOTZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T-EJR6-rw4r25n7luzPlf9B3xqkpA3CoXDAptCMJ5Ts",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log({ data });
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[1].id);
    });
  }, []);

  console.log(movies);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        //map dữ liệu movie từ API về component Movie
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}

      <Paginatelndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovies;