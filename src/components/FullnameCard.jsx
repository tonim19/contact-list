import Person from "../assets/svg/Person.svg";

const FullnameCard = ({ contact, setFullname }) => {
  const handleChange = (e) => {
    setFullname({ ...contact, fullName: e.target.value });
  };

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
        value={contact?.fullName}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default FullnameCard;
