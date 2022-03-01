import styled from "styled-components";

export const StyledFavoritepage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 270px);
    gap: 30px;
  }
`;
