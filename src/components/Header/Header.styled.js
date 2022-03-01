import styled from "styled-components";

export const Heading = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
  width: 100%;
  background: linear-gradient(
    182.65deg,
    #78c9ce 0%,
    #2496a2 99.98%,
    #2496a2 100%
  );
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1440px) {
    height: 60px;
  }
`;

export const StyledLogo = styled.div`
  width: 150px;

  &::after {
    content: "";
    position: absolute;
    top: 43px;
    left: 0;
    height: 7px;
    width: 100%;
    opacity: 0.3;
    transform: scaleY(-1);
    background-color: #ffffff;
  }

  @media screen and (min-width: 1440px) {
    width: 180px;

    &::after {
      top: 53px;
    }
  }
`;

export const Logo = styled.img`
  height: 16.67px;

  @media screen and (min-width: 1440px) {
    height: 20px;
  }
`;
