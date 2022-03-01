import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactsContext } from "../../context/ContactsContext";
import {
  ConfirmSection,
  Overlay,
  StyledModal,
  Title,
  TitleSection,
  ModalParagraph,
  ButtonsDiv,
  DeleteBtn,
  CancelBtn,
} from "./Modal.styled";

const Modal = ({ id, setOpenModal }) => {
  const navigate = useNavigate();

  const { contacts, setContacts } = useContext(ContactsContext);

  const removeContact = () => {
    const newContacts = contacts
      .filter((contact) => contact.id !== id)
      .map((contact) => contact);
    setContacts(newContacts);
    navigate("/");
  };

  return (
    <>
      <Overlay>
        <StyledModal>
          <TitleSection>
            <Title>Delete</Title>
          </TitleSection>
          <ConfirmSection>
            <ModalParagraph>
              Are You sure you want to delete this contact?
            </ModalParagraph>
            <ButtonsDiv>
              <DeleteBtn onClick={removeContact}>Delete</DeleteBtn>
              <CancelBtn onClick={() => setOpenModal(false)}>Cancel</CancelBtn>
            </ButtonsDiv>
          </ConfirmSection>
        </StyledModal>
      </Overlay>
    </>
  );
};

export default Modal;
