import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 250px;
  background-color: teal;
  position: absolute;
  right: -100%;
  transition: right linear 0.5s;

  &.active {
    right: 0;
  }
`;
