import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as React from "react";
import { parseNumberWithPx } from "@/utilities/style";
//todo percentage parser
const BoxComponent = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  position: relative;
  width: ${(props) => parseNumberWithPx(props.width)};
  height: ${(props) => parseNumberWithPx(props.height)};
`;
/* 
to provide a way of binding some forward props to styled
*/
const withBoxCSS = ({ column } = {}) => {
  return css`
    display: flex;
    flex-direction: ${column && "column"};
    position: relative;
    box-sizing: border-box;
  `;
};
export default function Box({ width, height, column, ...props }) {
  return (
    <BoxComponent width={width} height={height} direction={column && "column"}>
      {props.children}
    </BoxComponent>
  );
}
export { Box, withBoxCSS };
