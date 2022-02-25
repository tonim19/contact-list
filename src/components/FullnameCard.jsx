import Person from "../assets/svg/Person.svg";

const FullnameCard = ({ fullName, setFullName }) => {
  return (
    <>
      <label htmlFor="name">
        <img src={Person} alt="" />
        <span className="label-text">full name</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
    </>
  );
};

export default FullnameCard;
