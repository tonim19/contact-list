import Person from "../../assets/svg/Person.svg";
import { Input } from "../styles/Input.styled";
import { Label } from "../styles/Label.styled";

const FullnameCard = ({ contact, setFullname }) => {
  const handleChange = (e) => {
    setFullname({ ...contact, fullName: e.target.value });
  };

  return (
    <>
      <Label htmlFor="name">
        <img src={Person} alt="" />
        <span className="label-text">full name</span>
      </Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        value={contact?.fullName}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default FullnameCard;
