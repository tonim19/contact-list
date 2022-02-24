import { useContext } from "react";
import Favorite from "../assets/svg/Favorite.svg";
import NotFavorite from "../assets/svg/NotFavorite.svg";
import Pencil from "../assets/svg/Pencil.svg";
import Trash from "../assets/svg/Trash.svg";
import { ContactsContext } from "../context/ContactsContext";

const ContactCard = ({ fullName, image, isFavorite, id }) => {
  const { contacts, setContacts } = useContext(ContactsContext);

  const toggleFavorite = () => {
    const newContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          isFavorite: !isFavorite,
        };
      } else {
        return contact;
      }
    });

    setContacts(newContacts);
  };

  return (
    <div className="contact-card">
      <img className="contact-image" src={image} alt="Contact Img" />
      <span className="contact-name">{fullName}</span>
      <img
        className="heart-icon"
        src={isFavorite ? Favorite : NotFavorite}
        alt="Heart Icon"
        onClick={toggleFavorite}
      />
      <img className="pencil-icon" src={Pencil} alt="Edit Icon" />
      <img className="trash-icon" src={Trash} alt="Delete Icon" />
    </div>
  );
};

export default ContactCard;
