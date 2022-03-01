import styled from "styled-components";

export const StyledDetailsPage = styled.section`
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
  justify-content: space-between;
  border-bottom: 1px solid rgba(187, 196, 195, 0.5);

  @media screen and (min-width: 1440px) {
    height: 94px;
    width: 630px;
    position: absolute;
    border-bottom: none;
    margin-left: 214px;
  }
`;

export const BackIcon = styled.img`
  margin-left: 29px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-left: 7.54px;
    width: 21px;
    height: 16px;
  }
`;

export const HeartIcon = styled.img`
  margin-right: 34px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-right: 44px;
  }
`;

export const PencilIcon = styled.img`
  margin-right: 30px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-right: 3px;
  }
`;

export const PhotoNameDiv = styled.div`
  width: 325px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #2da1ad;

  @media screen and (min-width: 1440px) {
    width: 630px;
    height: 94px;
    margin: 0 0 0 auto;
  }
`;

export const ContactImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid rgba(187, 196, 195, 0.3);

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 186px;
    height: 186px;
  }
`;

export const ContactName = styled.span`
  margin-left: 23px;
  color: #adb8b6;
  font-size: 21px;
  font-weight: bold;
  line-height: 28px;

  @media screen and (min-width: 1440px) {
    margin-left: 50px;
    color: #bbc4c3;
    font-size: 28px;
    line-height: 34px;
  }
`;
