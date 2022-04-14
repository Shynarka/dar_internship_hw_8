import MovieList from "../../components/movieList/MovieList";
import ActorList from "../../components/actorList/ActorList";
import MovieDescription from "../../components/movieDescription/MovieDescription";
import "./Main.scss";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/movies";
import { Movie, Actor } from "../../types";
import { getActors } from "../../services/actors";
import Pagination from "./Pagination";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [actors, setActors] = useState<Actor[]>([]);
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [loadingActor, setLoadingActor] = useState(false);
  const [currentPageActors, setCurrentPageActors] = useState(1);
  const [actorsPerPage, setActorsPerPage] = useState(16);

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
    // const fetchActors = async () => {
    //   setLoadingActor(true);
    //   const res = await getActors().then((res) => {
    //     setActors(res);
    //   });
    //   setLoadingActor(false);
    // };
    // fetchActors();
    getActors()
      .then((res) => {
        setActors(res);
      })
      .finally(() => {
        setLoadingActor(false);
      });
  }, []);

  //Params for Pagination
  const indexOfLastActors = currentPageActors * actorsPerPage;
  const indexOfFirstActors = indexOfLastActors - actorsPerPage;
  const currentActors = actors.slice(indexOfFirstActors, indexOfLastActors);
  //Pagination
  const paginate = (pageNumber: any) => setCurrentPageActors(pageNumber);

  return (
    <div className="MainPage">
      {loadingMovie ? (
        <h3>Loading movies...</h3>
      ) : (
        <div>
          <h4>Movies ({movies.length})</h4>
          <MovieList movies={movies} />
          <div className="movie_text">
            <MovieDescription />
          </div>
        </div>
      )}
      {loadingActor ? (
        <h3>Loading actors...</h3>
      ) : (
        <div>
          <h4>Actors ({actors.length})</h4>
          <ActorList actors={currentActors} />
          <Pagination
            actorsPerPage={actorsPerPage}
            totalActors={actors.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
