import { useContext } from "react";
import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { ContactsContext } from "../context/ContactsContext";

const FavoritesPage = () => {
  const { filteredContacts } = useContext(ContactsContext);

  return (
    <>
      <Navbar isHomePage={false} />
      <SearchBox />
      <section>
        {filteredContacts?.map((contact) => {
          return <ContactCard key={contact.id} {...contact} />;
        })}
      </section>
    </>
  );
};

export default FavoritesPage;
