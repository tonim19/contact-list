import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Favorite from "../../assets/svg/Favorite.svg";
import NotFavorite from "../../assets/svg/NotFavorite.svg";
import Pencil from "../../assets/svg/Pencil.svg";
import Trash from "../../assets/svg/Trash.svg";
import { ContactsContext } from "../../context/ContactsContext";
import Avatar from "../../assets/img/avatar.png";
import {
  ContactImage,
  ContactName,
  HeartIcon,
  PencilIcon,
  StyledContactCard,
  TrashIcon,
} from "./ContactCard.styled";
import Modal from "../Modal/Modal";

const ContactCard = ({ fullName, imageUrl, isFavorite, id }) => {
  const navigate = useNavigate();

  const { contacts, setContacts } = useContext(ContactsContext);

  const [openModal, setOpenModal] = useState(false);

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
    <>
      {openModal && <Modal id={id} setOpenModal={setOpenModal} />}
      <StyledContactCard>
        <div className="image-name">
          <ContactImage
            src={imageUrl ? imageUrl : Avatar}
            alt="Contact Img"
            onClick={() => navigate(`/details/${id}`)}
          />
          <ContactName onClick={() => navigate(`/details/${id}`)}>
            {fullName}
          </ContactName>
        </div>
        <div className="contact-logos">
          <HeartIcon
            src={isFavorite ? Favorite : NotFavorite}
            alt="Heart Icon"
            onClick={toggleFavorite}
          />
          <PencilIcon
            src={Pencil}
            alt="Edit Icon"
            onClick={() => navigate(`/edit/${id}`)}
          />
          <TrashIcon
            onClick={() => setOpenModal(true)}
            src={Trash}
            alt="Delete Icon"
          />
        </div>
      </StyledContactCard>
    </>
  );
};

export default ContactCard;
