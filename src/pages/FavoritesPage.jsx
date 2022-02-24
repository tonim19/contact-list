import { useContext } from "react";
import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { ContactsContext } from "../context/ContactsContext";

const FavoritesPage = () => {
  const { contacts } = useContext(ContactsContext);

  return (
    <>
      <Navbar isHomePage={false} />
      <SearchBox />
      <section>
        {contacts?.map((contact) => {
          return <ContactCard key={contact.id} {...contact} />;
        })}
      </section>
    </>
  );
};

export default FavoritesPage;
