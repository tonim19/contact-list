import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactsContext } from "../context/ContactsContext";
import Back from "../assets/svg/Back.svg";
import Favorite from "../assets/svg/Favorite.svg";
import NotFavorite from "../assets/svg/NotFavorite.svg";
import Pencil from "../assets/svg/Pencil.svg";
import Mail from "../assets/svg/Mail.svg";
import Phone from "../assets/svg/Phone.svg";

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
    <section id="details-page">
      <div className="back-section">
        <img
          className="back-btn"
          src={Back}
          width={16}
          alt="Back Button"
          onClick={() => navigate("/")}
        />
        <div className="favorite-edit">
          <img
            className="heart-icon"
            src={currentContact?.isFavorite ? Favorite : NotFavorite}
            alt="Heart Icon"
            width={15}
            onClick={toggleFavorite}
          />
          <img
            className="pencil-icon"
            src={Pencil}
            width={16}
            alt="Edit Icon"
          />
        </div>
      </div>
      <div className="photo-name">
        <img
          className="contact-image"
          src={currentContact?.image}
          alt="Contact Img"
        />
        <span className="contact-name">{currentContact?.fullName}</span>
      </div>
      <div className="container">
        <div className="detail-email">
          <div>
            <img src={Mail} alt="Mail" />
            <span className="email">email</span>
          </div>
          <span className="email-span">{currentContact?.email}</span>
        </div>
        <div className="detail-numbers">
          <div className="numbers-logo">
            <img src={Phone} alt="Mail" />
            <span className="numbers-span">numbers</span>
          </div>
          <div className="numbers-wrapper">
            {currentContact?.numbers?.map((number, index) => {
              return (
                <div key={index} className="number-pairs">
                  <span className="label">{number.label.toUpperCase()}</span>
                  <span className="number">{number.number}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
