import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import Back from "../assets/svg/Back.svg";
import Upload from "../assets/svg/Upload.svg";
import Person from "../assets/svg/Person.svg";
import Mail from "../assets/svg/Mail.svg";
import Phone from "../assets/svg/Phone.svg";
import AddNumber from "../assets/svg/AddNumber.svg";
import Cross from "../assets/svg/Cross.svg";

const AddNewPage = () => {
  const navigate = useNavigate();

  const { contacts, setContacts } = useContext(ContactsContext);

  const [imageUrl, setImageUrl] = useState("");

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [numbers, setNumbers] = useState([{ number: "", label: "" }]);

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "rbitpokw");
    Axios.post(
      "http://api.cloudinary.com/v1_1/dt1mvgryx/image/upload/",
      formData
    ).then((res) => {
      setImageUrl(res.data.url);
    });
  };

  const handleChangeNumber = (event, index) => {
    const values = [...numbers];
    values[index][event.target.name] = event.target.value;
    setNumbers(values);
  };

  const handleAddFields = () => {
    setNumbers([...numbers, { number: "", label: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !numbers || !imageUrl) return;

    const uuid = uuidv4();

    if (contacts) {
      setContacts([
        ...contacts,
        {
          id: uuid,
          fullName,
          email,
          numbers,
          image: imageUrl,
          isFavorite: false,
        },
      ]);
      navigate("/");
    } else {
      setContacts([
        {
          id: uuid,
          fullName,
          email,
          numbers,
          image: imageUrl,
          isFavorite: false,
        },
      ]);
      navigate("/");
    }
  };

  return (
    <>
      <section id="addpage">
        <div className="back-section">
          <img
            className="back-btn"
            src={Back}
            alt="Back Button"
            onClick={() => navigate("/")}
          />
        </div>
        <form>
          <div className="photo-section">
            <label htmlFor="image" className="photo-box">
              {imageUrl ? (
                <img className="contact-image" src={imageUrl} alt="Contact" />
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
          <div className="details-section">
            <label htmlFor="name">
              <img src={Person} alt="" />
              <span className="label-text">full name</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <label htmlFor="email">
              <img src={Mail} alt="" />
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="number">
              <img src={Phone} alt="" />
              <span className="label-text">numbers</span>
            </label>
            {numbers.map((number, index) => {
              return (
                <div key={index}>
                  <input
                    className="number"
                    type="text"
                    name="number"
                    id="number"
                    value={number.number}
                    onChange={(event) => handleChangeNumber(event, index)}
                    placeholder="Number"
                    required
                  />
                  <div className="label-remove">
                    <input
                      className="label"
                      type="text"
                      name="label"
                      value={number.label}
                      onChange={(event) => handleChangeNumber(event, index)}
                      placeholder="Label"
                      required
                    />
                    <button className="remove-btn">
                      <img
                        className="cross-icon"
                        src={Cross}
                        fill="#bbc4c3"
                        alt="Cross Icon"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="add-number">
              <div className="circle" onClick={handleAddFields}>
                <img
                  className="add-number-icon"
                  src={AddNumber}
                  alt="Add Icon"
                />
              </div>
              <span className="label-text">Add Number</span>
            </div>
            <div className="btns">
              <button id="btn-cancel">Cancel</button>
              <button id="btn-save" type="submit" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddNewPage;
