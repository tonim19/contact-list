import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import Trash from "../../assets/svg/Trash.svg";
import Back from "../../assets/svg/Back.svg";
import NumbersCard from "../../components/NumbersCard/NumbersCard";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import FullnameCard from "../../components/FullnameCard/FullnameCard";
import EmailCard from "../../components/EmailCard";
import AddNumberFieldsCard from "../../components/AddNumberFieldsCard/AddNumberFieldsCard";
import {
  BackIcon,
  BackSection,
  ButtonsDiv,
  CancelBtn,
  DetailsSection,
  Error,
  SaveBtn,
  StyledEditPage,
  TrashIcon,
} from "./EditPage.styled";
import Modal from "../../components/Modal/Modal";

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
    isFavorite: "",
  });

  const [openModal, setOpenModal] = useState(false);

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
      !editContact.numbers
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
          isFavorite: editContact.isFavorite,
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
      {openModal && <Modal id={editContact.id} setOpenModal={setOpenModal} />}
      <StyledEditPage>
        <BackSection>
          <BackIcon
            src={Back}
            width={21}
            alt="Back Button"
            onClick={() => navigate("/")}
          />
          <div className="delete-block" onClick={() => setOpenModal(true)}>
            <span className="delete-span">Delete</span>
            <TrashIcon src={Trash} alt="Delete Icon" />
          </div>
        </BackSection>
        <form>
          <PhotoCard contact={editContact} setImageUrl={setEditContact} />
          <DetailsSection>
            <FullnameCard contact={editContact} setFullname={setEditContact} />
            <EmailCard contact={editContact} setEmail={setEditContact} />
            <NumbersCard contact={editContact} setNumbers={setEditContact} />
            <AddNumberFieldsCard
              contact={editContact}
              addNumberFields={setEditContact}
            />
            {error ? <Error className="error-message">{error}</Error> : ""}
            <ButtonsDiv>
              <CancelBtn onClick={() => navigate("/")}>Cancel</CancelBtn>
              <SaveBtn type="submit" onClick={handleSubmit}>
                Save
              </SaveBtn>
            </ButtonsDiv>
          </DetailsSection>
        </form>
      </StyledEditPage>
    </>
  );
};

export default EditPage;
