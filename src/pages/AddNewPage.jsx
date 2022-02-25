import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import Back from "../assets/svg/Back.svg";
import AddNumber from "../assets/svg/AddNumber.svg";
import NumbersCard from "../components/NumbersCard";
import PhotoCard from "../components/PhotoCard";
import FullnameCard from "../components/FullnameCard";
import EmailCard from "../components/EmailCard";

const AddNewPage = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

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

    if (!fullName || !email || !email.includes("@") || !numbers || !imageUrl) {
      setTimeout(() => setError(""), 3000);
      return setError("You must fill in all of the fields.");
    }

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
            width={21}
            height={16}
            alt="Back Button"
            onClick={() => navigate("/")}
          />
        </div>
        <form>
          <PhotoCard imageUrl={imageUrl} uploadImage={uploadImage} />
          <div className="details-section">
            <FullnameCard fullName={fullName} setFullName={setFullName} />
            <EmailCard email={email} setEmail={setEmail} />
            <NumbersCard
              numbers={numbers}
              handleChangeNumber={handleChangeNumber}
            />
            <div className="add-number">
              <div className="circle" onClick={handleAddFields}>
                <img
                  className="add-number-icon"
                  src={AddNumber}
                  alt="Add Icon"
                />
                {error ? <div className="error-message">{error}</div> : ""}
              </div>
              <span className="label-text">Add Number</span>
            </div>

            <div className="btns">
              <button id="btn-cancel" onClick={() => navigate("/")}>
                Cancel
              </button>
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
