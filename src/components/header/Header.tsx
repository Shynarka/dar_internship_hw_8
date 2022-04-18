import React, { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

type Props = {};

const Header = (props: Props) => {
  const { state } = useContext(StudentContext);

  return <div></div>;
};

export default Header;
