import React from "react";

type Props = {
  actorsPerPage: number;
  totalActors: number;
  paginate: (pageNumber: any) => void;
};

const Pagination: React.FC<Props> = ({
  actorsPerPage,
  totalActors,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalActors / actorsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              onClick={() => {
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
