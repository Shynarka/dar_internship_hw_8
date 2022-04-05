import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Main from "./pages/Main";
// import { MovieProvider } from "./contexts/MovieContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Nav />
      </UserProvider>
      {/* <MovieProvider> */}
      <Main />
      {/* </MovieProvider> */}
    </div>
  );
}

export default App;
