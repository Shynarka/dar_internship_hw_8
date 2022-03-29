import styled from "styled-components";

export const StyledMovieItem = styled.div<{ selected: Boolean }>`
  margin: 1rem;
  padding: 0 0 5px;
  background: ${(props) =>
    props.selected == true ? `rgb(80, 80, 80)` : `none`};
`;

export const StyledItemImg = styled.img`
  width: 120px;
`;
