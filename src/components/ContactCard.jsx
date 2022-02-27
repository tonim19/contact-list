import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Favorite from "../assets/svg/Favorite.svg";
import NotFavorite from "../assets/svg/NotFavorite.svg";
import Pencil from "../assets/svg/Pencil.svg";
import Trash from "../assets/svg/Trash.svg";
import { ContactsContext } from "../context/ContactsContext";
import Avatar from "../assets/img/avatar.png";

const ContactCard = ({ fullName, imageUrl, isFavorite, id }) => {
  const navigate = useNavigate();

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

  const removeContact = () => {
    const newContacts = contacts
      .filter((contact) => contact.id !== id)
      .map((contact) => contact);
    setContacts(newContacts);
  };

  return (
    <div className="contact-card">
      <div className="contact-image-name">
        <img
          className="contact-image"
          src={imageUrl ? imageUrl : Avatar}
          alt="Contact Img"
          onClick={() => navigate(`/details/${id}`)}
        />
        <span
          className="contact-name"
          onClick={() => navigate(`/details/${id}`)}
        >
          {fullName}
        </span>
      </div>
      <div className="contact-logos">
        <img
          className="heart-icon"
          src={isFavorite ? Favorite : NotFavorite}
          alt="Heart Icon"
          onClick={toggleFavorite}
        />
        <img
          className="pencil-icon"
          src={Pencil}
          alt="Edit Icon"
          onClick={() => navigate(`/edit/${id}`)}
        />
        <img
          className="trash-icon"
          onClick={removeContact}
          src={Trash}
          alt="Delete Icon"
        />
      </div>
    </div>
  );
};

export default ContactCard;
