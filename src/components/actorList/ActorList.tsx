import React from "react";
import ActorItem from "./ActorItem";
import { Actor } from "../../types";

type Props = {
  actors: Actor[];
};

const ActorList: React.FC<Props> = ({ actors }) => {
  return (
    <div className="list" style={{ display: "flex", justifyContent: "center" }}>
      {actors.map((actor) => (
        <ActorItem key={actor.id} actor={actor} />
      ))}
    </div>
  );
};

export default ActorList;
