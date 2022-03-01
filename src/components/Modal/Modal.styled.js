import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export const StyledModal = styled.div`
  position: fixed;
  width: 315px;
  height: 330px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 14px 0 rgba(99, 109, 255, 0.27);
  margin-top: 150px;

  @media screen and (min-width: 1440px) {
    height: 240px;
    width: 480px;
    margin-top: 330px;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  height: 60px;
`;

export const Title = styled.h1`
  color: #adb8b6;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  padding: 20px 0 0 30px;
`;

export const ConfirmSection = styled.section`
  width: 100%;
  height: 270px;
  border-top: 2px solid rgba(220, 220, 220, 0.4);

  @media screen and (min-width: 1440px) {
    height: 180px;
  }
`;

export const ModalParagraph = styled.p`
  height: 56px;
  width: 255px;
  color: #adb8b6;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  margin: 30px auto 50px auto;

  @media screen and (min-width: 1440px) {
    height: 28px;
    width: 419px;
    color: #bbc4c3;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CancelBtn = styled.button`
  width: 160px;
  height: 42px;
  border-radius: 28.5px;
  background-color: #bbc4c3;
  border: none;
  color: #ffffff;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-left: 31px;
    order: 1;
  }
`;

export const DeleteBtn = styled.button`
  margin-left: 5px;
  width: 160px;
  height: 42px;
  border-radius: 28.5px;
  background-color: #2da1ad;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 18px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 50px;
    order: 2;
  }
`;
