import Favorite from "../assets/svg/Favorite.svg";
import NotFavorite from "../assets/svg/NotFavorite.svg";
import Pencil from "../assets/svg/Pencil.svg";
import Trash from "../assets/svg/Trash.svg";

const ContactCard = ({ fullName, image, isFavorite }) => {
  return (
    <div className="contact-card">
      <img className="contact-image" src={image} alt="Contact Img" />
      <span className="contact-name">{fullName}</span>
      <img
        className="heart-icon"
        src={isFavorite ? Favorite : NotFavorite}
        alt="Heart Icon"
      />
      <img className="pencil-icon" src={Pencil} alt="Edit Icon" />
      <img className="trash-icon" src={Trash} alt="Delete Icon" />
    </div>
  );
};

export default ContactCard;
