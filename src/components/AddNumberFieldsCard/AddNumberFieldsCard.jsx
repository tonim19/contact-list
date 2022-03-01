import AddNumber from "../../assets/svg/AddNumber.svg";
import { AddNumberDiv } from "./AddNumberFieldsCard.styled";

const AddNumberFieldsCard = ({ contact, addNumberFields }) => {
  const handleAddFields = () => {
    addNumberFields({
      ...contact,
      numbers: [...contact.numbers, { number: "", label: "" }],
    });
  };

  return (
    <>
      <AddNumberDiv>
        <div className="circle" onClick={handleAddFields}>
          <img className="add-number-icon" src={AddNumber} alt="Add Icon" />
        </div>
        <span className="label-text" onClick={handleAddFields}>
          Add Number
        </span>
      </AddNumberDiv>
    </>
  );
};

export default AddNumberFieldsCard;
