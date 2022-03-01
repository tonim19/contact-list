import styled from "styled-components";

export const StyledCreatePage = styled.section`
  margin-bottom: 33px;

  @media screen and (min-width: 1440px) {
    position: relative;
    width: 840px;
    margin: 0 auto;
    margin-top: 57px;
    margin-bottom: 78px;
  }
`;

export const BackSection = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(187, 196, 195, 0.5);

  @media screen and (min-width: 1440px) {
    height: 94px;
    width: 630px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: none;
    margin-left: 214px;
  }
`;

export const BackIcon = styled.img`
  margin-left: 29px;
  cursor: pointer;
`;

export const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  width: 325px;

  @media screen and (min-width: 1440px) {
    margin-left: 214px;
    width: 630px;
  }
`;

export const Error = styled.div`
  text-align: center;
  width: 100%;
  color: red;
  margin-bottom: 40px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CancelBtn = styled.button`
  width: 160px;
  height: 42px;
  border-radius: 28.5px;
  background-color: #bbc4c3;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  margin-left: 5px;
  width: 160px;
  height: 42px;
  border-radius: 28.5px;
  background-color: #2da1ad;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
