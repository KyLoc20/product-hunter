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
    font-size: ${parseNumberWithPx(FS || fontSize)};
    font-weight: ${FW || fontWeight};
    line-height: ${parseNumberWithPx(LH || lineHeight)};
    letter-spacing: ${LS || letterSpacing};
    color: ${C || color};
    &:hover {
      color: ${HC || hoverColor};
    }
  `;
};
const CustomTextFactory = {
  title: { fontSize: 16, lineHeight: 21, fontWeight: 500 },
};
function customTextCSS(which) {
  return withTextCSS(CustomTextFactory[which] || {});
}
export { withTextCSS, customTextCSS };
