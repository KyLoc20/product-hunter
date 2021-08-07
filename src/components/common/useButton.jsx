import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Button from "../../../ui/Button/Button";
const useButton = ({
  variant,
  width,
  height,
  padding,
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
  hoverBorderColor,
  contentColor,
  hoverContentColor,
  borderRadius,
  depressed,
  rippleDisabled,
  disabled,
  tile,
}) => {
  const RenderButton = (props) => {
    return (
      <Button
        variant={variant}
        width={width}
        height={height}
        padding={padding}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        borderColor={borderColor}
        hoverBorderColor={hoverBorderColor}
        contentColor={contentColor}
        hoverContentColor={hoverContentColor}
        borderRadius={borderRadius}
        depressed={depressed || true}
        rippleDisabled={rippleDisabled}
        disabled={disabled}
        tile={tile}
      >
        {props.children}
      </Button>
    );
  };
  return [RenderButton];
};
const BasicInnerContent = styled.span((props) => ({
  display: "flex",
  //by default controlled by [Button]
  color: props.color || "inherit",
  letterSpacing: props.letterSpacing || "normal",
  lineHeight: `${props.lineHeight}px`,
  fontSize: `${props.fontSize}px`,
  fontWeight: props.fontWeight,
}));
const useButtonInnerContent = ({
  color,
  letterSpacing,
  lineHeight,
  fontSize,
  fontWeight,
  LS,
  LH,
  FS,
  FW,
}) => {
  const RenderButtonInnerContent = (props) => {
    return (
      <BasicInnerContent
        color={color}
        letterSpacing={letterSpacing || LS}
        lineHeight={lineHeight || LH}
        fontSize={fontSize || FS}
        fontWeight={fontWeight || FW}
      >
        {props.children}
      </BasicInnerContent>
    );
  };
  return [RenderButtonInnerContent];
};
export { useButton, useButtonInnerContent };
