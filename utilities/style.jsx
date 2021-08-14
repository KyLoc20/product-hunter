import styled from "@emotion/styled";
import { css } from "@emotion/react";

const composeCSS = (tag, ...cssStyles) => {
  return styled(tag)`
    ${cssStyles.map((style) => style)};
  `;
};

//example
/* const BaseCSS = css`
  display: flex;
  position: relative;
  align-items: center;
  height: 21px;
  width: 100%;
  margin-bottom: 10px;
`;
const colorCSS = css`
  color: red;
`;
const FontCSS = css`
  font-weight: 500;
  font-size: 16px;
`;
const Header = composeCSS("div", BaseCSS, colorCSS, FontCSS); */

export { composeCSS };
