import { useNavigate } from "react-router-dom";
import { AllContactsDiv, MyFavoritesDiv, Nav } from "./Navbar.styled";

const Navbar = ({ isHomePage }) => {
  const navigate = useNavigate();

  return (
    <Nav>
      <AllContactsDiv
        style={isHomePage ? { color: "#27919D" } : { color: "#ADB8B6" }}
        className="contacts"
        onClick={() => navigate("/")}
      >
        All Contacts
      </AllContactsDiv>
      <MyFavoritesDiv
        style={isHomePage ? { color: "#ADB8B6" } : { color: "#27919D" }}
        className="favorites"
        onClick={() => navigate("/favorites")}
      >
        My Favorites
      </MyFavoritesDiv>
    </Nav>
  );
};

export default Navbar;
