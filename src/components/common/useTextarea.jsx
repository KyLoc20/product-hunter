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
  padding: "5px 20px 5px 10px",
  border: "1px solid #e8e8e8",
  hoverBorder: "1px solid rgba(47, 160, 255, 0.4)",
  focusBorder: "1px solid rgba(47, 160, 255, 0.4)",
  borderRadius: "3px",
  lineHeight: "20px",
  fontWeight: 400,
  fontSize: "13px",
};
//todo ::placeholder its weird to require font-family
const TextareaComponent = styled.textarea`
  padding: 0;
  width: ${(props) => getValueTolerantly(props, "width", DefaultTheme)};
  height: ${(props) => getValueTolerantly(props, "height", DefaultTheme)};
  padding: ${(props) => getValueTolerantly(props, "padding", DefaultTheme)};
  border: ${(props) => getValueTolerantly(props, "border", DefaultTheme)};
  border-radius: ${(props) => getValueTolerantly(props, "borderRadius", DefaultTheme)};
  line-height: ${(props) => getValueTolerantly(props, "lineHeight", DefaultTheme)};
  font-weight: ${(props) => getValueTolerantly(props, "fontWeight", DefaultTheme)};
  font-size: ${(props) => getValueTolerantly(props, "fontSize", DefaultTheme)};
  resize: none;
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
    line-height: 20px;
    color: #6f6f6f;
    font-family: "Roboto";
  }
`;
const parseNumberWithPx = (v) => `${v}px`;
const parseColorWithBorder = (v) => `1px solid ${v}`;
/* 
todo the ways to autosize the textarea
1.to monitor the ref's scrollHeight -> No cann't decrease
// const currentHeight = ref.current.scrollHeight;
// setIdealHeight(currentHeight + 2);
2.to use absolute textarea and render content to a div -> not tried
3.to monitor and calc rows of the content, short comming -> requiring an auto-wrap algorithm
*/

function BasicTextarea(props) {
  const ref = React.useRef(null);
  const [idealHeight, setIdealHeight] = React.useState(32);
  const [inputValue, setInputValue] = React.useState("");

  React.useLayoutEffect(() => {
    // useLayoutEffect TO AVOID FLICKERING
    let numRowsOfContent = inputValue.split("\n").length;
    setIdealHeight((numRowsOfContent > 10 ? 10 : numRowsOfContent) * 20 + 12);
    // console.log("Watching Height: ", numRowsOfContent, numRowsOfContent * 20 + 12);
    props.onChange?.({ value: inputValue });
  }, [inputValue]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const computedHeight = React.useMemo(() => {
    return `${idealHeight}px`;
  }, [idealHeight]);
  return (
    <TextareaComponent
      value={inputValue}
      onChange={handleChange}
      ref={ref}
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
      style={{ height: computedHeight }}
    ></TextareaComponent>
  );
}
BasicTextarea.propTypes = {
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
  autoHeight: PropTypes.bool,
  onChange: PropTypes.func,
};
const useTextarea = ({
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
  const [inputValue, setInputValue] = React.useState("");
  const [autoHeight, setAutoHeight] = React.useState(32);
  React.useEffect(() => {
    let numRowsOfContent = inputValue.split("\n").length;
    setAutoHeight((numRowsOfContent > 10 ? 10 : numRowsOfContent) * 20 + 12);
  }, [inputValue]);
  //todo figure out how to bind props to TextareaComponent
  const RenderTextarea = TextareaComponent;
  /*   //this doesn't work
  const RenderTextarea = (props) => {
    return (
      <TextareaComponent
        height={props.height}
        onChange={props.onChange}
        border={parseColorWithBorder(borderColor)}
      />
    );
  }; */
  return [setInputValue, autoHeight, RenderTextarea];
};
export { useTextarea, TextareaComponent };
