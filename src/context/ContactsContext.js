import { createContext, useEffect, useState } from "react";

export const ContactsContext = createContext(null);

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem("contacts");
    setContacts(JSON.parse(localStorageData));
  }, [localStorage.getItem("contacts")]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {props.children}
    </ContactsContext.Provider>
  );
};
