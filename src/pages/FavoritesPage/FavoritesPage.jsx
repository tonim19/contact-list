import { useContext } from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import Navbar from "../../components/Navbar/Navbar";
import SearchBox from "../../components/SearchBox/SearchBox";
import { StyledFavoritepage } from "./Favoritepage.styled";
import { ContactsContext } from "../../context/ContactsContext";

const FavoritesPage = () => {
  const { filteredContacts } = useContext(ContactsContext);

  return (
    <>
      <Navbar isHomePage={false} />
      <SearchBox />
      <StyledFavoritepage>
        {filteredContacts
          ?.filter((contact) => contact.isFavorite)
          ?.map((contact) => {
            return <ContactCard key={contact.id} {...contact} />;
          })}
      </StyledFavoritepage>
    </>
  );
};

export default FavoritesPage;
