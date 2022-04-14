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

export interface Faculty {
  id: string;
  name: string;
}

export interface Course {
  // id: string;
  name: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  score: number;
  courses: Course[];
}
