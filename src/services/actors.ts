import { Actor } from "../types";
import axios from "axios";

export const getActors = (): Promise<Actor[]> => {
  return axios
    .get<Actor[]>(
      "https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/actors.json"
    )
    .then((res) => res.data);
};
