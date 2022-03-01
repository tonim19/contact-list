import styled from "styled-components";

export const StyledDetailsCard = styled.div`
  width: 325px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    width: 630px;
    margin: 0 0 0 auto;
  }
`;

export const DetailsEmail = styled.div`
  height: 120px;
  padding: 30px 25px;
  width: 100%;

  .email {
    margin-left: 9px;
    color: #27919d;
    font-weight: bold;
    line-height: 19px;
  }

  .logo-mail-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 70px 65px;

    .email {
      font-size: 16px;
      margin-left: 15px;
      color: #2da1ad;
    }

    .logo-mail-wrapper {
      margin-bottom: 0;
    }
  }
`;

export const DetailsNumbers = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0 65px;
  }
`;

export const EmailSpan = styled.span`
  margin-left: 24px;
  color: #adb8b6;

  @media screen and (min-width: 1440px) {
    margin-left: 55px;
    font-size: 16px;
    line-height: 19px;
    color: #bbc4c3;
  }
`;

export const NumbersLogoDiv = styled.div`
  padding: 0 25px;
  display: flex;
  align-items: space-between;

  @media screen and (min-width: 1440px) {
    padding: 0;
    display: flex;
    align-items: center;
  }
`;

export const NumbersSpan = styled.span`
  margin-left: 9px;
  color: #27919d;
  font-weight: bold;
  line-height: 19px;

  @media screen and (min-width: 1440px) {
    margin-left: 15px;
    color: #2da1ad;
    font-size: 16px;
  }
`;

export const NumbersWrapper = styled.span`
  width: 325px;
`;

export const NumberLabelPairs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  text-align: left;
  margin: 0 50px;

  .label {
    font-weight: bold;
    color: #adb8b6;
  }

  .number {
    font-size: 16px;
    font-weight: normal;
    color: #adb8b6;
    text-decoration: underline;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    text-align: left;
    margin: 0 33px;
    margin-bottom: 33px;
    line-height: 17px;

    .label {
      font-size: 14px;
      color: #bbc4c3;
    }

    .number {
      font-size: 16px;
      line-height: 20px;
      color: #bbc4c3;
    }
  }
`;
