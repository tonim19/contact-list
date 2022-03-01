import Mail from "../assets/svg/Mail.svg";
import { Input } from "./styles/Input.styled";
import { Label } from "./styles/Label.styled";

const EmailCard = ({ contact, setEmail }) => {
  const handleChange = (e) => {
    setEmail({ ...contact, email: e.target.value });
  };

  return (
    <>
      <Label htmlFor="email">
        <img src={Mail} alt="" />
        <span className="label-text">email</span>
      </Label>
      <Input
        type="email"
        name="email"
        id="email"
        value={contact?.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
    </>
  );
};

export default EmailCard;
