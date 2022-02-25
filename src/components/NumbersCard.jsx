import Phone from "../assets/svg/Phone.svg";
import Cross from "../assets/svg/Cross.svg";

const NumbersCard = ({ handleChangeNumber, numbers }) => {
  return (
    <>
      <label htmlFor="number">
        <img src={Phone} alt="" />
        <span className="label-text">numbers</span>
      </label>
      {numbers.map((number, index) => {
        return (
          <div key={index}>
            <input
              className="number"
              type="text"
              name="number"
              id="number"
              value={number.number}
              onChange={(event) => handleChangeNumber(event, index)}
              placeholder="Number"
              required
            />
            <div className="label-remove">
              <input
                className="label"
                type="text"
                name="label"
                value={number.label}
                onChange={(event) => handleChangeNumber(event, index)}
                placeholder="Label"
                required
              />
              <button className="remove-btn">
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
