import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../../../contexts/StudentContext";
import { ToastContext } from "../../../contexts/ToastContext";
import { deleteStudent, getStudents } from "../../../services/students";

const StudentsList = () => {
  const { state, dispatch } = useContext(StudentContext);
  const { dispatch: toastDispatch } = useContext(ToastContext);

  useEffect(() => {
    getStudents()
      .then((res) => {
        dispatch({ type: "GET_STUDENTS", payload: res });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Students request failed!" },
        });
      });
  }, [state]);

  const onDeleteClick = (id: any) => {
    deleteStudent(id)
      .then((res) => {
        dispatch({ type: "DELETE_STUDENT" });
        toastDispatch({
          type: "SUCCESS",
          payload: { message: "Student was deleted!" },
        });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Student deletion failed!" },
        });
      });
  };

  return (
    <div>
      <h2>Students</h2>
      <Link to={"/students/create"}>Create</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
            <th>Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.score}</td>
              <td>
                {student.courses?.map((course) => course.name).join(", ")}
              </td>
              <td>
                <button>
                  <Link to={`/students/${student.id}`}>View</Link>
                </button>
                <button>
                  <Link to={`/students/edit/${student.id}`}>Edit</Link>
                </button>
                <button onClick={() => onDeleteClick(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
