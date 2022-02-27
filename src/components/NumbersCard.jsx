import Phone from "../assets/svg/Phone.svg";
import Cross from "../assets/svg/Cross.svg";

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
      <label htmlFor="number">
        <img src={Phone} alt="" />
        <span className="label-text">numbers</span>
      </label>
      {contact?.numbers?.map((number, index) => {
        return (
          <div className="number-pair-flex" key={index}>
            <input
              className="number"
              type="text"
              name="number"
              id="number"
              value={number?.number}
              onChange={(e) => handleChangeNumber(e, index)}
              placeholder="Number"
              required
            />
            <div className="label-remove">
              <input
                className="label"
                type="text"
                name="label"
                value={number?.label}
                onChange={(e) => handleChangeNumber(e, index)}
                placeholder="Label"
                required
              />
              <button
                className="remove-btn"
                onClick={(e) => handleRemove(e, index)}
              >
                <img
                  className="cross-icon"
                  src={Cross}
                  fill="#bbc4c3"
                  alt="Cross Icon"
                />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NumbersCard;
