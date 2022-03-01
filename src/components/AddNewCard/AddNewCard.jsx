import { useNavigate } from "react-router-dom";
import Add from "../../assets/svg/Add.svg";
import {
  AddBox,
  AddIcon,
  AddText,
  StyledAddNewCard,
} from "./AddNewCard.styled";

const AddNewCard = () => {
  const navigate = useNavigate();

  return (
    <StyledAddNewCard onClick={() => navigate("/create")}>
      <AddBox>
        <AddIcon src={Add} alt="Add Icon" />
        <AddText>Add new</AddText>
      </AddBox>
    </StyledAddNewCard>
  );
};

export default AddNewCard;
