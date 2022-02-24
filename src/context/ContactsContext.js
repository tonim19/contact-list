import { createContext, useEffect, useState } from "react";
import data from "../data/data";

export const ContactsContext = createContext(null);

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState(data);

  const [text, setText] = useState("");

  const filteredContacts = contacts?.filter((contact) =>
    contact.fullName.toLowerCase().includes(text.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("contacts");
    setContacts(JSON.parse(localStorageData));
  }, []);

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, filteredContacts, text, setText }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};
