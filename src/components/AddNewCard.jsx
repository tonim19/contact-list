import { useNavigate } from "react-router-dom";
import Add from "../assets/svg/Add.svg";

const AddNewCard = () => {
  const navigate = useNavigate();

  return (
    <div className="card-box" onClick={() => navigate("/add-new")}>
      <div className="add-box">
        <img className="add-icon" src={Add} alt="Add Icon" />
        <span className="add-text">Add new</span>
      </div>
    </div>
  );
};

export default AddNewCard;
