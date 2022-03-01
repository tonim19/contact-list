import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactsContext } from "../../context/ContactsContext";
import Back from "../../assets/svg/Back.svg";
import Favorite from "../../assets/svg/Favorite.svg";
import NotFavorite from "../../assets/svg/NotFavorite.svg";
import Pencil from "../../assets/svg/Pencil.svg";
import Avatar from "../../assets/img/avatar.png";
import {
  BackIcon,
  BackSection,
  HeartIcon,
  PencilIcon,
  StyledDetailsPage,
  PhotoNameDiv,
  ContactImage,
  ContactName,
} from "./DetailsPage.styled";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

const DetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { contacts, setContacts } = useContext(ContactsContext);

  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    const getCurrentContact = contacts.filter(
      (contact) => contact.id.toString() === params.contactId
    );
    setCurrentContact(getCurrentContact[0]);
  }, [contacts, params.contactId]);

  const toggleFavorite = () => {
    const newContacts = contacts.map((contact) => {
      if (contact.id === currentContact.id) {
        return {
          ...contact,
          isFavorite: !currentContact.isFavorite,
        };
      } else {
        return contact;
      }
    });

    setContacts(newContacts);
  };

  return (
    <StyledDetailsPage>
      <BackSection>
        <BackIcon
          src={Back}
          width={16}
          alt="Back Button"
          onClick={() => navigate("/")}
        />
        <div className="favorite-edit">
          <HeartIcon
            src={currentContact?.isFavorite ? Favorite : NotFavorite}
            alt="Heart Icon"
            width={15}
            onClick={toggleFavorite}
          />
          <PencilIcon
            src={Pencil}
            width={16}
            alt="Edit Icon"
            onClick={() => navigate(`/edit/${currentContact.id}`)}
          />
        </div>
      </BackSection>
      <PhotoNameDiv>
        <ContactImage
          src={currentContact?.imageUrl ? currentContact.imageUrl : Avatar}
          alt="Contact Img"
        />
        <ContactName>{currentContact?.fullName}</ContactName>
      </PhotoNameDiv>
      <DetailsCard currentContact={currentContact} />
    </StyledDetailsPage>
  );
};

export default DetailsPage;
