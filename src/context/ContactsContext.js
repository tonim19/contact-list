import { createContext, useEffect, useState } from "react";

export const ContactsContext = createContext(null);

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState([]);

  const [text, setText] = useState("");

  const filteredContacts = contacts?.filter((contact) =>
    contact.fullName.toLowerCase().includes(text.toLowerCase())
  );

  useEffect(() => {
    const localStorageData = localStorage.getItem("contacts");
    setContacts(JSON.parse(localStorageData));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, filteredContacts, text, setText }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};
