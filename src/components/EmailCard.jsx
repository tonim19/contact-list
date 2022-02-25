import Mail from "../assets/svg/Mail.svg";

const EmailCard = ({ email, setEmail }) => {
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
    </>
  );
};

export default EmailCard;
