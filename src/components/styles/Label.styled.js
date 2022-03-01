import styled from "styled-components";

export const Label = styled.label`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 2px solid #2da1ad;
  margin-top: 26px;

  &:first-child {
    margin-top: 0;
  }

  .label-text {
    color: #27919d;
    font-weight: bold;
    margin-left: 15px;
    cursor: pointer;
  }

  @media screen and (min-width: 1440px) {
    height: 58px;
    margin-top: 30px;

    .label-text {
      color: #2da1ad;
    }
  }
`;
