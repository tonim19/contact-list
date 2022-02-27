import axios from "axios";
import Upload from "../assets/svg/Upload.svg";

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
      <div className="photo-section">
        <label htmlFor="image" className="photo-box">
          {contact?.imageUrl ? (
            <>
              <img
                className="contact-image"
                src={contact.imageUrl}
                alt="Contact"
              />
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <img className="img" src={Upload} alt="Upload Button" />
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
              />
            </>
          )}
        </label>
      </div>
    </>
  );
};

export default PhotoCard;
