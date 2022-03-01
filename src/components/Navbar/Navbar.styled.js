import styled from "styled-components";

export const Nav = styled.nav`
  width: 320px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #2da1ad;

  @media screen and (min-width: 1440px) {
    width: 1260px;
    height: 120px;
  }
`;

export const AllContactsDiv = styled.div`
  color: #27919d;
  font-weight: bold;
  padding: 16px 40px;
  text-align: center;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    padding: 50px 30px;
  }
`;

export const MyFavoritesDiv = styled.div`
  position: relative;
  color: #adb8b6;
  font-weight: bold;
  padding: 16px 40px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 16px;
    width: 1px;
    height: 15px;
    background-color: #bbc4c3;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 30px;

    &::before {
      top: 54px;
    }
  }
`;
