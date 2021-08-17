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
const withAutoWrapText = () => css`
  word-wrap: break-word;
`;
const withNoWrapText = () => css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

//custom for PH
const CustomTextFactory = {
  headerTitle16: { fontSize: 16, lineHeight: 21, fontWeight: 500 },
  headerTitle20: { fontSize: 20, lineHeight: 32, fontWeight: 500 },
  button: { fontSize: 11, lineHeight: 16, fontWeight: 600, letterSpacing: "normal" },
  buttonLite: { fontSize: 11, lineHeight: 16, letterSpacing: "normal" },
  reminder: { fontSize: 13, lineHeight: 17, fontWeight: 600 },
  title: { fontSize: 13, lineHeight: 20, fontWeight: 600 },
  description:{ fontSize: 13, lineHeight: 20, color:"rgb(111, 111, 111)" },
};
function customTextCSS(which) {
  return withTextCSS(CustomTextFactory[which] || {});
}
export { withTextCSS, customTextCSS, withAutoWrapText, withNoWrapText };
