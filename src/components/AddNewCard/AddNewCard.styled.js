import styled from "styled-components";

export const StyledAddNewCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  width: 360px;
  border: 1px dashed #2da1ad;
  opacity: 0.5;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    justify-content: center;
    height: 150px;
    width: 270px;
  }
`;

export const AddBox = styled.div`
  width: 92px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 23px;

  @media screen and (min-width: 1440px) {
    width: 62px;
    height: 48px;
    flex-direction: column;
    margin-left: 0;
  }
`;

export const AddIcon = styled.img`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 11px;
  }
`;

export const AddText = styled.span`
  height: 17px;
  width: 54px;
  color: #27919d;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    height: 19px;
    width: 62px;
    line-height: 19px;
    color: #2da1ad;
  }
`;
