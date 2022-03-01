import styled from "styled-components";

export const StyledContactCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 60px;
  border: 1px solid rgba(187, 196, 195, 0.4);
  border-radius: 4px;
  margin-top: 10px;

  .image-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 270px;
    height: 150px;
    margin-top: 0;

    .image-name {
      flex-direction: column;
    }

    &:hover {
      border: 1px solid #2da1ad;
    }
  }
`;

export const ContactImage = styled.img`
  height: 46px;
  width: 46px;
  border: 3px solid rgba(187, 196, 195, 0.3);
  border-radius: 50%;
  margin-left: 13px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    height: 66px;
    width: 66px;
    border-radius: 50%;
    margin-left: 0;
  }
`;

export const ContactName = styled.span`
  margin-left: 25px;
  color: #adb8b6;
  font-weight: bold;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 13px;
    height: 22px;
    color: #bbc4c3;
  }
`;

export const HeartIcon = styled.img`
  margin-right: 33px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-right: 0;
    position: absolute;
    top: 15px;
    left: 17px;
  }
`;

export const PencilIcon = styled.img`
  margin-right: 32px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-right: 0;
    position: absolute;
    top: 15px;
    right: 56px;
  }
`;

export const TrashIcon = styled.img`
  margin-right: 16px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-right: 0;
    position: absolute;
    top: 15px;
    right: 17px;
  }
`;
