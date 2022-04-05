import React, { useEffect } from "react";
import { Actor } from "../../types";

type Props = {
  actor: Actor;
};

const ActorItem: React.FC<Props> = ({ actor }) => {
  // const [likeState, setLikeState] = useState({
  //   liked: false,
  // });

  // const likeClick = () => {
  //   setLikeState((s) => ({
  //     ...s,
  //     liked: true,
  //   }));
  // };
  useEffect(() => {
    console.log(actor);
  }, []);

  return (
    <div className="item" style={{ margin: "1rem" }}>
      <img
        src={"https://cdn.mos.cms.futurecdn.net" + actor.image_path}
        alt={actor.name}
        style={{ height: "200px" }}
      />
      <div>{actor.name}</div>
      <div>Rating: {actor.rating}</div>
      {/* <div>
        {likeState.liked ? "Liked! " : "Like it: "}{" "}
        <img
          src={
            likeState.liked
              ? "https://cdn-icons-png.flaticon.com/512/2107/2107774.png"
              : "https://cdn-icons-png.flaticon.com/512/2107/2107952.png"
          }
          alt=""
          onClick={likeClick}
          style={{ width: "16px" }}
        />
      </div> */}
    </div>
  );
};

export default ActorItem;
