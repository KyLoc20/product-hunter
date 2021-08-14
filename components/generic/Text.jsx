import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { parseNumberWithPx } from "@/utilities/style";
const withTextCSS = ({
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color,
  hoverColor,
  FS,
  FW,
  LH,
  LS,
  C,
  HC,
} = {}) => {
  return css`
    font-size: ${parseNumberWithPx(fontSize || FS)};
    font-weight: ${fontWeight || FW};
    line-height: ${parseNumberWithPx(lineHeight || LH)};
    letter-spacing: ${letterSpacing || LS};
    color: ${color || C};
    &:hover {
      color: ${hoverColor || HC};
    }
  `;
};
export { withTextCSS };
