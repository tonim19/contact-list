import { useNavigate } from "react-router-dom";

const Navbar = ({ isHomePage }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <div
        style={isHomePage ? { color: "#27919D" } : { color: "#ADB8B6" }}
        className="contacts"
        onClick={() => navigate("/")}
      >
        All Contacts
      </div>
      <span className="line"></span>
      <div
        style={isHomePage ? { color: "#ADB8B6" } : { color: "#27919D" }}
        className="favorites"
        onClick={() => navigate("/favorites")}
      >
        My Favorites
      </div>
    </nav>
  );
};

export default Navbar;
