import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Main from "./pages/main/Main";
// import { MovieProvider } from "./contexts/MovieContext";
import { UserProvider } from "./contexts/UserContext";
import StudentsList from "./pages/students/list/StudentsList";
import StudentDetails from "./pages/students/details/StudentDetails";
import HomePage from "./pages/homepage/HomePage";
import StudentCreate from "./pages/students/create/StudentCreate";
import StudentEdit from "./pages/students/edit/StudentEdit";
import FacultiesList from "./pages/faculties/list/FacultiesList";
import FacultyDetails from "./pages/faculties/details/FacultyDetails";
import FacultyCreate from "./pages/faculties/create/FacultyCreate";
import FacultyEdit from "./pages/faculties/edit/FacultyEdit";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/students"} element={<StudentsList />} />
          <Route path={"/students/:id"} element={<StudentDetails />} />
          <Route path={"/students/create"} element={<StudentCreate />} />
          <Route path={"/students/edit/:id"} element={<StudentEdit />} />
          <Route path={"/faculties/"} element={<FacultiesList />} />
          <Route path={"/faculties/:id"} element={<FacultyDetails />} />
          <Route path={"/faculties/create"} element={<FacultyCreate />} />
          <Route path={"/faculties/edit/:id"} element={<FacultyEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
