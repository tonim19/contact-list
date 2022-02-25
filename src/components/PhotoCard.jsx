import Upload from "../assets/svg/Upload.svg";

const PhotoCard = ({ uploadImage, imageUrl }) => {
  return (
    <>
      <div className="photo-section">
        <label htmlFor="image" className="photo-box">
          {imageUrl ? (
            <>
              <img className="contact-image" src={imageUrl} alt="Contact" />
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) => uploadImage(e.target.files)}
              />
            </>
          ) : (
            <>
              <img className="img" src={Upload} alt="Upload Button" />
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) => uploadImage(e.target.files)}
              />
            </>
          )}
        </label>
      </div>
    </>
  );
};

export default PhotoCard;
