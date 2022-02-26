import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ContactsContext } from "../context/ContactsContext";
import Back from "../assets/svg/Back.svg";
import NumbersCard from "../components/NumbersCard";
import PhotoCard from "../components/PhotoCard";
import FullnameCard from "../components/FullnameCard";
import EmailCard from "../components/EmailCard";
import AddNumberFieldsCard from "../components/AddNumberFieldsCard";

const EditPage = () => {
  const navigate = useNavigate();

  const params = useParams();

  const { contacts, setContacts } = useContext(ContactsContext);

  const [error, setError] = useState("");

  const [editContact, setEditContact] = useState({
    id: "",
    imageUrl: "",
    fullName: "",
    email: "",
    numbers: [{ number: "", label: "" }],
  });

  useEffect(() => {
    const editContact = contacts?.filter(
      (contact) => contact.id.toString() === params.contactId
    );
    if (editContact.length > 0) {
      setEditContact({ ...editContact[0] });
    }
  }, [contacts, params.contactId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !editContact.fullName ||
      !editContact.email ||
      !editContact.email.includes("@") ||
      !editContact.numbers ||
      !editContact.imageUrl
    ) {
      setTimeout(() => setError(""), 3000);
      return setError("You must fill in all of the fields.");
    }

    const newObject = contacts.map((contact) => {
      if (contact.id === editContact.id) {
        return {
          id: editContact.id,
          fullName: editContact.fullName,
          email: editContact.email,
          numbers: editContact.numbers,
          imageUrl: editContact.imageUrl,
          isFavorite: false,
        };
      } else {
        return contact;
      }
    });

    setContacts(newObject);

    navigate("/");
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
          <PhotoCard contact={editContact} setImageUrl={setEditContact} />
          <div className="details-section">
            <FullnameCard contact={editContact} setFullname={setEditContact} />
            <EmailCard contact={editContact} setEmail={setEditContact} />
            <NumbersCard contact={editContact} setNumbers={setEditContact} />
            <AddNumberFieldsCard
              contact={editContact}
              addNumberFields={setEditContact}
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

export default EditPage;
