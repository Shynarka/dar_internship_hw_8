import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FacultyContext } from "../../../contexts/FacultyContext";
import { ToastContext } from "../../../contexts/ToastContext";
import { deleteFaculty, getFaculties } from "../../../services/faculties";

const FacultiesList = () => {
  const { state, dispatch } = useContext(FacultyContext);
  const { dispatch: toastDispatch } = useContext(ToastContext);

  useEffect(() => {
    getFaculties()
      .then((res) => {
        dispatch({ type: "GET_FACULTIES", payload: res });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Faculty request failed!" },
        });
      });
  }, [state]);

  const onDeleteClick = (id: any) => {
    deleteFaculty(id)
      .then((res) => {
        dispatch({ type: "DELETE_FACULTY" });
        toastDispatch({
          type: "SUCCESS",
          payload: { message: "Faculty was deleted!" },
        });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Faculty deletion failed!" },
        });
      });
  };

  return (
    <div>
      <h2>Faculties</h2>
      <Link to={"/faculties/create"}>Create</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.faculties.map((f) => (
            <tr key={f.name}>
              <td>{f.name}</td>
              <td>
                <button>
                  <Link to={`/faculties/${f.id}`}>View</Link>
                </button>
                <button>
                  <Link to={`/faculties/edit/${f.id}`}>Edit</Link>
                </button>
                <button onClick={() => onDeleteClick(f.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultiesList;
