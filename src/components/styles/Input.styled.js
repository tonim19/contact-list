import styled from "styled-components";

export const Input = styled.input`
  padding-left: 25px;
  height: 50px;
  width: 325px;
  border: 1px solid #bbc4c3;
  opacity: 0.4;
  border-radius: 4px;

  &.number {
    margin: 10px 0;
  }

  @media screen and (min-width: 1440px) {
    height: 60px;
    width: 300px;

    &.number {
      margin-right: 30px;
    }
  }
`;
