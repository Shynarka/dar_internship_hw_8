import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FacultyForm from "../../../components/faculty-form/FacultyForm";
import { FacultyContext } from "../../../contexts/FacultyContext";
import { ToastContext } from "../../../contexts/ToastContext";
import { createFaculty } from "../../../services/faculties";
import { Faculty } from "../../../types";

const onFormSubmit = () => {};

const FacultyCreate = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(FacultyContext);
  const { dispatch: toastDispatch } = useContext(ToastContext);

  const onFormSubmit = (data: Partial<Faculty>) => {
    createFaculty(data)
      .then((res) => {
        if (res.id) {
          navigate("/faculties");
        }
        toastDispatch({
          type: "SUCCESS",
          payload: { message: "Faculty was created!" },
        });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Faculty creation failed!" },
        });
      });
  };

  return (
    <div>
      <h2>Create faculty</h2>
      <FacultyForm onSubmit={onFormSubmit} />
    </div>
  );
};

export default FacultyCreate;
