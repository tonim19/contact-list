import { useContext } from "react";
import Search from "../../assets/svg/Search.svg";
import { ContactsContext } from "../../context/ContactsContext";
import { SearchIcon, SearchInput, StyledSearchBox } from "./SearchBox.styled";

const SearchBox = () => {
  const { text, setText } = useContext(ContactsContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <StyledSearchBox>
      <SearchIcon className="search-icon" src={Search} alt="Search Icon" />
      <SearchInput
        type="text"
        name="search"
        value={text}
        onChange={handleChange}
      />
    </StyledSearchBox>
  );
};

export default SearchBox;
