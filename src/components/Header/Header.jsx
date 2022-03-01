import LogoImage from "../../assets/svg/Logo.svg";
import { Heading, StyledLogo, Logo } from "./Header.styled";

const Header = () => {
  return (
    <Heading>
      <StyledLogo>
        <Logo src={LogoImage} alt="Logo" />
      </StyledLogo>
    </Heading>
  );
};

export default Header;
