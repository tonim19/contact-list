import Phone from "../../assets/svg/Phone.svg";
import Cross from "../../assets/svg/Cross.svg";
import { Input } from "../styles/Input.styled";
import { Label } from "../styles/Label.styled";
import { CellRemoveBtn, NumberPairs, RemoveBtn } from "./NumbersCard.styled";

const NumbersCard = ({ contact, setNumbers }) => {
  const handleChangeNumber = (e, index) => {
    const values = [...contact.numbers];
    values[index][e.target.name] = e.target.value;
    setNumbers({ ...contact, numbers: values });
  };

  const handleRemove = (e, index) => {
    e.preventDefault();
    const values = [...contact.numbers];
    values.splice(index, 1);
    setNumbers({ ...contact, numbers: values });
  };

  return (
    <>
      <Label htmlFor="number">
        <img src={Phone} alt="" />
        <span className="label-text">numbers</span>
      </Label>
      {contact?.numbers?.map((number, index) => {
        return (
          <NumberPairs key={index}>
            <Input
              className="number"
              type="text"
              name="number"
              id="number"
              value={number?.number}
              onChange={(e) => handleChangeNumber(e, index)}
              placeholder="Number"
              required
            />
            <CellRemoveBtn>
              <Input
                className="label"
                type="text"
                name="label"
                value={number?.label}
                onChange={(e) => handleChangeNumber(e, index)}
                placeholder="Label"
                required
              />
              <RemoveBtn
                className="remove-btn"
                onClick={(e) => handleRemove(e, index)}
              >
                <img
                  className="cross-icon"
                  src={Cross}
                  width={8}
                  fill="#bbc4c3"
                  alt="Cross Icon"
                />
              </RemoveBtn>
            </CellRemoveBtn>
          </NumberPairs>
        );
      })}
    </>
  );
};

export default NumbersCard;
