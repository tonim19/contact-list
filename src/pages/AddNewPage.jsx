import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
import { v4 as uuidv4 } from "uuid";
import Back from "../assets/svg/Back.svg";
import NumbersCard from "../components/NumbersCard";
import PhotoCard from "../components/PhotoCard";
import FullnameCard from "../components/FullnameCard";
import EmailCard from "../components/EmailCard";
import AddNumberFieldsCard from "../components/AddNumberFieldsCard";

const AddNewPage = () => {
  const navigate = useNavigate();

  const { contacts, setContacts } = useContext(ContactsContext);

  const [error, setError] = useState("");

  const [newContact, setNewContact] = useState({
    id: "",
    imageUrl: "",
    fullName: "",
    email: "",
    numbers: [{ number: "", label: "" }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newContact.fullName ||
      !newContact.email ||
      !newContact.email.includes("@") ||
      !newContact.numbers
    ) {
      setTimeout(() => setError(""), 3000);
      return setError("You must fill in all of the fields.");
    }

    const uuid = uuidv4();

    if (contacts) {
      setContacts([
        ...contacts,
        {
          id: uuid,
          fullName: newContact.fullName,
          email: newContact.email,
          numbers: newContact.numbers,
          imageUrl: newContact.imageUrl,
          isFavorite: false,
        },
      ]);
      navigate("/");
    } else {
      setContacts([
        {
          id: uuid,
          fullName: newContact.fullName,
          email: newContact.email,
          numbers: newContact.numbers,
          imageUrl: newContact.imageUrl,
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
            alt="Back Button"
            onClick={() => navigate("/")}
          />
        </div>
        <form>
          <PhotoCard contact={newContact} setImageUrl={setNewContact} />
          <div className="details-section">
            <FullnameCard contact={newContact} setFullname={setNewContact} />
            <EmailCard contact={newContact} setEmail={setNewContact} />
            <NumbersCard contact={newContact} setNumbers={setNewContact} />
            <AddNumberFieldsCard
              contact={newContact}
              addNumberFields={setNewContact}
            />
            {error ? <div className="error-message">{error}</div> : ""}
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
