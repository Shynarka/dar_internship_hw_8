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
  surname: string;
  age: number;
  image: string;
}

export interface User {
  username: string;
  name: string;
  surname: string;
  password: string;
  avatar: string;
}
