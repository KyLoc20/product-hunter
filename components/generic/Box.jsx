import styled from "@emotion/styled";
import { css } from "@emotion/react";
const BoxComponent = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  position: relative;
`;
/* 
to provide a way of binding some forward props to styled
*/
const withBoxCSS = ({ column } = {}) => {
  return css`
    display: flex;
    flex-direction: ${column && "column"};
    position: relative;
  `;
};
export default function Box(props) {
  return <BoxComponent>{props.children}</BoxComponent>;
}
export { Box, withBoxCSS };