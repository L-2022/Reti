import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  ADD_LOGO_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
  USER_PROFILE,
} from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory, NavLink } from "react-router-dom";
import { fetcLogOut } from "../http/logoAPI";
const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setIsAuth(false);
    user.logOut();
    fetcLogOut();
    
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          <span> Reti </span>
        </NavLink>

        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(USER_PROFILE)}
            >
              Your Profile:
            </Button>
            {user.userRole === "Admin" || "Seller" ? (
              <Button
                variant={"outline-light"}
                onClick={() => history.push(ADD_LOGO_ROUTE)}
              >
                Add Logo
              </Button>
            ) : (
              <></>
            )}

            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
