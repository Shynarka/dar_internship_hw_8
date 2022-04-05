import MovieList from "../components/movieList/MovieList";
import ActorList from "../components/actorList/ActorList";
import { movies, actors } from "../mock";
import MovieDescription from "../components/movieDescription/MovieDescription";
import "./Main.scss";
import { useEffect, useState } from "react";
import { getMovies } from "../services/movies";
import { Movie, Actor } from "../types";
import { getActors } from "../services/actors";

const Main = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [actors, setActors] = useState<Actor[] | null>(null);
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [loadingActor, setLoadingActor] = useState(false);

  useEffect(() => {
    setLoadingMovie(true);
    setLoadingActor(true);
    getMovies()
      .then((res) => {
        setMovies(res);
      })
      .finally(() => {
        setLoadingMovie(false);
      });
    getActors()
      .then((res) => {
        setActors(res);
      })
      .finally(() => {
        setLoadingActor(false);
      });
  });

  return (
    <div className="MainPage">
      {!!movies && (
        <div>
          <h4>Movies ({movies.length})</h4>
          {/* <h3>Loading movies...</h3> */}
          <MovieList movies={movies} />
          <div className="movie_text">
            <MovieDescription />
          </div>
        </div>
      )}
      {/* {!!actors && (
        <div>
          <h4>Actors ({actors.length})</h4>
          <ActorList actors={actors} />
        </div>
      )} */}
    </div>
  );
};

export default Main;
