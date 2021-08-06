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
        depressed={depressed||true}
        rippleDisabled={rippleDisabled}
        disabled={disabled}
      >
        {props.children}
      </Button>
    );
  };
  return [RenderButton];
};
export default useButton;
