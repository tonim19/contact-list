import { createContext, useEffect, useState } from "react";

export const ContactsContext = createContext(null);

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState(null);

  const [text, setText] = useState("");

  const filteredContacts = contacts?.filter((contact) =>
    contact.fullName.toLowerCase().includes(text.toLowerCase())
  );

  useEffect(() => {
    const localStorageData = localStorage.getItem("contacts");
    setContacts(JSON.parse(localStorageData));
  }, []);

  return (
    <ContactsContext.Provider
      value={{ contacts, filteredContacts, text, setText }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};
