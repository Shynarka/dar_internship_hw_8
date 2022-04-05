export interface Movie {
  id: number;
  title: string;
  description: string;
  duration: number;
  image: string;
}

export interface Actor {
  id: number;
  name: string;
  rating: number;
  alternative_name?: string;
  image_path: string;
}

export interface User {
  username: string;
  name: string;
  surname: string;
  password: string;
  avatar: string;
}
