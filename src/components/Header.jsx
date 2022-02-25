import Logo from "../assets/svg/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={Logo} width={150} alt="Logo" />
        </div>
        <div className="rectangle"></div>
      </div>
    </header>
  );
};

export default Header;
