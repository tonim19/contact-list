import AddNumber from "../assets/svg/AddNumber.svg";

const AddNumberFieldsCard = ({ contact, addNumberFields }) => {
  const handleAddFields = () => {
    addNumberFields({
      ...contact,
      numbers: [...contact.numbers, { number: "", label: "" }],
    });
  };

  return (
    <>
      <div className="add-number-fields">
        <div className="circle" onClick={handleAddFields}>
          <img className="add-number-icon" src={AddNumber} alt="Add Icon" />
        </div>
        <span className="label-text" onClick={handleAddFields}>
          Add Number
        </span>
      </div>
    </>
  );
};

export default AddNumberFieldsCard;
