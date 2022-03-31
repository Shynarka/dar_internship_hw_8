import styled from "styled-components";

export const StyledAccount = styled.div<{ authorized: Boolean }>`
  display: ${(props) => (props.authorized ? `flex` : `none`)};
  align-items: center;
`;

export const StyledAuthorization = styled.div<{ authorized: Boolean }>`
  display: ${(props) => (props.authorized ? `none` : `block`)};
`;
