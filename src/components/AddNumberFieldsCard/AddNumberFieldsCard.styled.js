import styled from "styled-components";

export const AddNumberDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 69px;

  .circle {
    position: relative;
    width: 32px;
    height: 32px;
    border: 1px solid #2da1ad;
    border-radius: 50%;
    cursor: pointer;
  }

  .add-number-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .label-text {
    color: #27919d;
    margin-left: 15px;
    cursor: pointer;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 44px;
    margin-bottom: 104px;

    .label-text {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
