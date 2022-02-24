import { useContext, useState } from "react";
import Search from "../assets/svg/Search.svg";
import { ContactsContext } from "../context/ContactsContext";

const SearchBox = () => {
  const { contacts } = useContext(ContactsContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);

    const filterContacts = (text) => {
      const filtered = contacts.filter((contact) => {
        return contact.fullName.toLowerCase().includes(text.toLowerCase());
      });
    };

    filterContacts(text);
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
