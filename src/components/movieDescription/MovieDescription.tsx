import React from "react";

type Props = {
  desc: String;
  onClose?: () => void;
};

const MovieDescription: React.FC<Props> = ({ desc, onClose }) => {
  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <div>
      <h4>Description of the Movie:</h4>
      <p>{desc}</p>
      <button onClick={closeHandler}>Cкрыть</button>
    </div>
  );
};

export default MovieDescription;
