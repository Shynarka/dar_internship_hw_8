import { Movie, Actor, User } from "./types";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Batman",
    description:
      "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    duration: 120,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo",
  },
  {
    id: 2,
    title: "Spiderman",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    duration: 90,
    image:
      "https://lanthorn.com/wp-content/uploads/2022/01/spider-mannowayhome_lob_crd_02_0.jpg",
  },
  {
    id: 3,
    title: "Robin",
    description:
      "Robin has been the famous sidekick of Batman in the comics for years, but it’s always been difficult to make him work in film.",
    duration: 120,
    image:
      "https://www.movieguide.org/wp-content/uploads/2019/03/batman_and_robin_ver3.jpg",
  },
];

// export const actors: Actor[] = [
//   {
//     id: 1,
//     name: "Emma",
//     surname: "Stone",
//     age: 33,
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg",
//   },
//   {
//     id: 2,
//     name: "Viola",
//     surname: "Davis",
//     age: 56,
//     image:
//       "https://media.allure.com/photos/606ca6b3d3702e6cc41a0f10/master/w_1600%2Cc_limit/viola-davis-loreal-paris.jpg",
//   },
//   {
//     id: 3,
//     name: "Penélope",
//     surname: "Cruz",
//     age: 47,
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/a/a7/Premios_Goya_2018_-_Pen%C3%A9lope_Cruz.jpg",
//   },
//   {
//     id: 4,
//     name: "Zendaya",
//     surname: "",
//     age: 25,
//     image:
//       "https://movieplayer.net-cdn.it/t/images/2020/01/27/zendaya_jpg_400x0_crop_q85.jpg",
//   },
// ];

export const someUser: User = {
  username: "Chinbr",
  name: "Shynar",
  surname: "Bolatova",
  password: "password",
  avatar:
    "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png",
};
