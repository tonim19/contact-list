import { useContext } from "react";
import AddNewCard from "../../components/AddNewCard/AddNewCard";
import ContactCard from "../../components/ContactCard/ContactCard";
import Navbar from "../../components/Navbar/Navbar";
import SearchBox from "../../components/SearchBox/SearchBox";
import { StyledHomepage } from "./Homepage.styled";
import { ContactsContext } from "../../context/ContactsContext";

const Homepage = () => {
  const { filteredContacts } = useContext(ContactsContext);

  return (
    <>
      <Navbar isHomePage={true} />
      <SearchBox />
      <StyledHomepage>
        <AddNewCard />
        {filteredContacts?.map((contact) => {
          return <ContactCard key={contact.id} {...contact} />;
        })}
      </StyledHomepage>
    </>
  );
};

export default Homepage;
