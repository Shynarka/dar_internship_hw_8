import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../../types";
import { someUser } from "../../mock";
import "./Nav.scss";
import { StyledAccount, StyledAuthorization } from "./Nav.styles";

const Nav = () => {
  const { user, login, logout } = useContext(UserContext);
  const [dropDownMenu, setdropDownMenu] = useState(false);

  const onLoginClick = () => {
    login(someUser);
  };
  const onLogoutClick = () => {
    logout();
  };
  const onProfileClick = () => {
    if (dropDownMenu) setdropDownMenu(false);
    else setdropDownMenu(true);
  };

  return (
    <nav>
      <StyledAuthorization authorized={!!user}>
        <button onClick={onLoginClick}>Log in</button>
      </StyledAuthorization>
      <StyledAccount authorized={!!user}>
        <h3>{someUser?.username}</h3>
        <img src={someUser?.avatar} onClick={onProfileClick} />
        {dropDownMenu ? (
          <div className="dropdown-content">
            <ul>
              <li>Profile</li>
              <li onClick={onLogoutClick}>Log out</li>
            </ul>
          </div>
        ) : null}
      </StyledAccount>
    </nav>
  );
};

export default Nav;
