import MovieList from "../components/movieList/MovieList";
import ActorList from "../components/actorList/ActorList";
import { movies, actors } from "../mock";
import MovieDescription from "../components/movieDescription/MovieDescription";
import "./Main.scss";

const Main = () => {
  return (
    <div className="MainPage">
      <h4>Movies ({movies.length})</h4>
      <MovieList movies={movies} />
      <div className="movie_text">
        <MovieDescription />
      </div>
      <h4>Actors ({actors.length})</h4>
      <ActorList actors={actors} />
    </div>
  );
};

export default Main;
