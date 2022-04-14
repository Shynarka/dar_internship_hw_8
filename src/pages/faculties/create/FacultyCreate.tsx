import { useNavigate } from "react-router-dom";
import FacultyForm from "../../../components/faculty-form/FacultyForm";
import { createFaculty } from "../../../services/faculties";
import { Faculty } from "../../../types";

const onFormSubmit = () => {};

const FacultyCreate = () => {
  const navigate = useNavigate();

  const onFormSubmit = (data: Partial<Faculty>) => {
    createFaculty(data).then((res) => {
      if (res.id) {
        navigate("/faculties");
      }
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
