import React, { useState } from "react";
import { Actor } from "../types";

type Props = {
  actor: Actor;
};

const ActorItem: React.FC<Props> = ({ actor }) => {
  const [like, setLike] = useState({
    loading: false,
    like: false,
  });

  const likeClick = () => {
    setLike((s) => ({
      ...s,
      like: true,
    }));
  };

  return (
    <div className="item" style={{ margin: "1rem" }}>
      <img src={actor.image} alt={actor.name} style={{ height: "200px" }} />
      <div>
        {actor.name + " "}
        {actor.surname}
      </div>
      <div>Age: {actor.age}</div>
      <div>
        {like.like ? "Liked! " : "Like it: "}{" "}
        <img
          src={
            like.like
              ? "https://cdn-icons-png.flaticon.com/512/2107/2107774.png"
              : "https://cdn-icons-png.flaticon.com/512/2107/2107952.png"
          }
          alt=""
          onClick={likeClick}
          style={{ width: "16px" }}
        />
      </div>
    </div>
  );
};

export default ActorItem;
