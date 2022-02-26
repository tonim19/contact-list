import Mail from "../assets/svg/Mail.svg";

const EmailCard = ({ contact, setEmail }) => {
  const handleChange = (e) => {
    setEmail({ ...contact, email: e.target.value });
  };

  return (
    <>
      <label htmlFor="email">
        <img src={Mail} alt="" />
        <span className="label-text">email</span>
      </label>
      <input
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
