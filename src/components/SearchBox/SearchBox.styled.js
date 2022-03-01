import styled from "styled-components";

export const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 325px;
  margin: 25px auto;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  box-shadow: 0 2px 34px 0 #e3e3e3;

  @media screen and (min-width: 1440px) {
    height: 60px;
    width: 540px;
    margin: 58px auto;
  }
`;

export const SearchIcon = styled.img`
  margin-left: 23px;
  height: 18px;
  width: 17px;
`;

export const SearchInput = styled.input`
  padding-left: 10px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
