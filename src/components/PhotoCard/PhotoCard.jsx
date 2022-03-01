import axios from "axios";
import {
  StyledPhotoCard,
  PhotoCardDiv,
  PhotoCardLabel,
  PhotoCardImage,
  PhotoCardLogo,
  PhotoCardFileInput,
  PhotoOverlay,
} from "./PhotoCard.styled.js";
import Upload from "../../assets/svg/Upload.svg";
import Cross from "../../assets/svg/Cross.svg";

const PhotoCard = ({ setImageUrl, contact }) => {
  const handleChange = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "rbitpokw");
    axios
      .post("http://api.cloudinary.com/v1_1/dt1mvgryx/image/upload/", formData)
      .then((res) => {
        setImageUrl({ ...contact, imageUrl: res.data.url });
      });
  };

  return (
    <>
      <StyledPhotoCard>
        {contact?.imageUrl ? (
          <>
            <PhotoCardDiv>
              <PhotoCardImage src={contact.imageUrl} alt="Contact" />
              <PhotoOverlay
                onClick={() => setImageUrl({ ...contact, imageUrl: "" })}
              >
                <img src={Cross} alt="Cross" className="cross-logo" />
              </PhotoOverlay>
            </PhotoCardDiv>
          </>
        ) : (
          <>
            <PhotoCardLabel htmlFor="image">
              <PhotoCardLogo src={Upload} alt="Upload Button" />
              <PhotoCardFileInput
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
              />
            </PhotoCardLabel>
          </>
        )}
      </StyledPhotoCard>
    </>
  );
};

export default PhotoCard;
