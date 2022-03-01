import styled from "styled-components";

export const NumberPairs = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const CellRemoveBtn = styled.div`
  display: flex;
  align-items: center;

  .label {
    width: 275px;
  }

  @media screen and (min-width: 1440px) {
    .label {
      width: 240px;
    }
  }
`;

export const RemoveBtn = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 18px;
  border: 1px solid #bbc4c3;
  opacity: 0.5;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-left: 29px;
  }
`;
