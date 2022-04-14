import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFaculties } from "../../../services/faculties";
import { Faculty } from "../../../types";

const FacultiesList = () => {
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    getFaculties().then((res) => {
      setFaculties(res);
    });
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <Link to={"/faculties/create"}>Create</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((f) => (
            <tr key={f.name}>
              <td>{f.name}</td>
              <td>
                <Link to={`/faculties/edit/${f.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultiesList;
