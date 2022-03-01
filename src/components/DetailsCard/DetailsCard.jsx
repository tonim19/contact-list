import Mail from "../../assets/svg/Mail.svg";
import Phone from "../../assets/svg/Phone.svg";
import {
  StyledDetailsCard,
  DetailsEmail,
  EmailSpan,
  NumbersLogoDiv,
  NumbersSpan,
  NumbersWrapper,
  NumberLabelPairs,
  DetailsNumbers,
} from "./DetailsCard.styled";

const DetailsCard = ({ currentContact }) => {
  return (
    <>
      <StyledDetailsCard>
        <DetailsEmail className="detail-email">
          <div className="logo-mail-wrapper">
            <img src={Mail} alt="Mail" />
            <span className="email">email</span>
          </div>
          <EmailSpan>{currentContact?.email}</EmailSpan>
        </DetailsEmail>
        <DetailsNumbers>
          <NumbersLogoDiv>
            <img src={Phone} alt="Mail" />
            <NumbersSpan>numbers</NumbersSpan>
          </NumbersLogoDiv>
          <NumbersWrapper>
            {currentContact?.numbers?.map((number, index) => {
              return (
                <NumberLabelPairs key={index}>
                  <span className="label">{number.label.toUpperCase()}</span>
                  <span className="number">{number.number}</span>
                </NumberLabelPairs>
              );
            })}
          </NumbersWrapper>
        </DetailsNumbers>
      </StyledDetailsCard>
    </>
  );
};

export default DetailsCard;
