import styled from "styled-components";

export const StyledPhotoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 200px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 186px;
    height: 186px;
    border: 3px solid rgba(187, 196, 195, 0.3);
    border-radius: 50%;
  }
`;

export const PhotoCardDiv = styled.div`
  position: relative;
  height: 156px;
  width: 156px;
  border: 3px solid rgba(187, 196, 195, 0.3);
  background-color: rgba(45, 161, 173, 0.4);
  border-radius: 50%;
  cursor: pointer;

  .cross-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 1440px) {
    height: 186px;
    width: 186px;
  }
`;

export const PhotoCardLabel = styled.label`
  position: relative;
  height: 156px;
  width: 156px;
  border: 3px solid rgba(187, 196, 195, 0.3);
  background-color: rgba(45, 161, 173, 0.4);
  border-radius: 50%;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    height: 186px;
    width: 186px;
  }
`;

export const PhotoOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
`;

export const PhotoCardImage = styled.img`
  width: 156px;
  height: 156px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  @media screen and (min-width: 1440px) {
    height: 186px;
    width: 186px;
  }
`;

export const PhotoCardLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const PhotoCardFileInput = styled.input`
  display: none;
`;
