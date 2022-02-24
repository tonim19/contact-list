import Add from "../assets/svg/Add.svg";

const AddNewCard = () => {
  return (
    <div className="card-box">
      <div className="add-box">
        <img className="add-icon" src={Add} alt="Add Icon" />
        <span className="add-text">Add new</span>
      </div>
    </div>
  );
};

export default AddNewCard;
