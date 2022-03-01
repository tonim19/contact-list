import axios from "axios";
import {
  StyledPhotoCard,
  PhotoCardLabel,
  PhotoCardImage,
  PhotoCardFileInput,
} from "./PhotoCard.styled.js";
import Upload from "../../assets/svg/Upload.svg";

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
        <PhotoCardLabel htmlFor="image">
          {contact?.imageUrl ? (
            <>
              <PhotoCardImage src={contact.imageUrl} alt="Contact" />
              <PhotoCardFileInput
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <PhotoCardImage src={Upload} alt="Upload Button" />
              <PhotoCardFileInput
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
              />
            </>
          )}
        </PhotoCardLabel>
      </StyledPhotoCard>
    </>
  );
};

export default PhotoCard;
