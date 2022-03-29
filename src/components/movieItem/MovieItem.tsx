import React, { useState } from "react";
import { Movie } from "../../types";
import { StyledItemImg, StyledMovieItem } from "./MovieItem.styles";

type Props = {
  movie: Movie;
  isSelected: boolean;
  onItemClick: (v: Movie) => void;
};

const MovieItem: React.FC<Props> = ({ movie, isSelected, onItemClick }) => {
  return (
    <StyledMovieItem selected={isSelected}>
      <div onClick={() => onItemClick(movie)}>
        <StyledItemImg src={movie.image} alt={movie.title} />
        <div>{movie.title}</div>
        {/* <div>{movie.description}</div> */}
        <div>({movie.duration / 60} hours)</div>
      </div>
    </StyledMovieItem>
  );
};

export default MovieItem;
