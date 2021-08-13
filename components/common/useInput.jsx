import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { getValueTolerantly, getValueStrictly, getParsedValueStrictly } from "./utils";
/* 
todo height&line-height
if height set, line-height doesnt work unless it is larger than height
if height not set, line-height decides the height
*/
const DefaultTheme = {
  width: "100%",
  height: "34px",
  padding: "5px 20px 5px 10px",
  border: "1px solid #e8e8e8",
  hoverBorder: "1px solid rgba(47, 160, 255, 0.4)",
  focusBorder: "1px solid rgba(47, 160, 255, 0.4)",
  borderRadius: "3px",
  lineHeight: "20px",
  fontWeight: 400,
  fontSize: "13px",
};

const InputComponent = styled.input`
  width: ${(props) => getValueTolerantly(props, "width", DefaultTheme)};
  height: ${(props) => getValueTolerantly(props, "height", DefaultTheme)};
  padding: ${(props) => getValueTolerantly(props, "padding", DefaultTheme)};
  border: ${(props) => getValueTolerantly(props, "border", DefaultTheme)};
  border-radius: ${(props) => getValueTolerantly(props, "borderRadius", DefaultTheme)};
  line-height: ${(props) => getValueTolerantly(props, "lineHeight", DefaultTheme)};
  font-weight: ${(props) => getValueTolerantly(props, "fontWeight", DefaultTheme)};
  font-size: ${(props) => getValueTolerantly(props, "fontSize", DefaultTheme)};
  box-sizing: border-box;
  cursor: text;
  user-select: none;
  &:hover {
    border: ${(props) => getValueTolerantly(props, "hoverBorder", DefaultTheme)};
  }
  &:focus {
    outline: none;
    border: ${(props) => getValueTolerantly(props, "focusBorder", DefaultTheme)};
  }
  &::placeholder {
    font-size: 13px;
    line-height: 17px;
    color: #6f6f6f;
  }
`;
const parseNumberWithPx = (v) => `${v}px`;
const parseColorWithBorder = (v) => `1px solid ${v}`;
function BasicInput(props) {
  return (
    <InputComponent
      width={getParsedValueStrictly(props, "width", parseNumberWithPx)}
      height={getParsedValueStrictly(props, "height", parseNumberWithPx)}
      padding={getValueStrictly(props, "padding")}
      border={getParsedValueStrictly(props, "borderColor", parseColorWithBorder)}
      hoverBorder={getParsedValueStrictly(props, "hoverBorderColor", parseColorWithBorder)}
      focusBorder={getParsedValueStrictly(props, "borderColor", parseColorWithBorder)}
      borderRadius={getParsedValueStrictly(props, "borderRadius", parseNumberWithPx)}
      lineHeight={getParsedValueStrictly(props, "lineHeight", parseNumberWithPx)}
      fontWeight={getValueStrictly(props, "fontWeight")}
      fontSize={getParsedValueStrictly(props, "fontSize", parseNumberWithPx)}
      placeholder={props.placeholder}
    ></InputComponent>
  );
}
BasicInput.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  focusBorderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  lineHeight: PropTypes.number,
  fontWeight: PropTypes.number,
  fontSize: PropTypes.number,
  placeholder: PropTypes.string,
};
const useInput = ({
  width,
  height,
  border,
  borderColor,
  hoverBorderColor,
  focusBorderColor,
  borderRadius,
  lineHeight,
  fontWeight,
  fontSize,
}) => {
  const RenderInput = (props) => {
    return (
      <BasicInput
        width={width}
        height={height}
        border={border}
        hoverBorderColor={hoverBorderColor}
        focusBorderColor={focusBorderColor}
        borderColor={borderColor}
        borderRadius={borderRadius}
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        fontSize={fontSize}
        placeholder={props.placeholder}
      >
        {props.children}
      </BasicInput>
    );
  };
  return [RenderInput];
};
export { useInput, BasicInput };
