import { useContext } from "react";
import Search from "../assets/svg/Search.svg";
import { ContactsContext } from "../context/ContactsContext";

const SearchBox = () => {
  const { text, setText } = useContext(ContactsContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="search-box">
      <img className="search-icon" src={Search} alt="Search Icon" />
      <input
        type="text"
        name="search"
        className="search"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
