import { useContext } from "react";
import AddNewCard from "../components/AddNewCard";
import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { ContactsContext } from "../context/ContactsContext";

const Homepage = () => {
  const { filteredContacts } = useContext(ContactsContext);

  return (
    <>
      <Navbar isHomePage={true} />
      <SearchBox />
      <section id="homepage">
        <AddNewCard />
        {filteredContacts?.map((contact) => {
          return <ContactCard key={contact.id} {...contact} />;
        })}
      </section>
    </>
  );
};

export default Homepage;
