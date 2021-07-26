import styled from "@emotion/styled";
import * as React from "react";
import PropTypes from "prop-types";
const Component = styled.div((props) => ({
  height: `${props.height}px`,
  margin: `0 ${props.spacing}px`,
  borderRight: `solid ${props.width}px ${props.color}`,
}));

export default function Divider(props) {
  return (
    <Component
      className="divider"
      height={props.height}
      width={props.width}
      spacing={props.spacing}
      color={props.color}
    ></Component>
  );
}
Divider.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  spacing: PropTypes.number,
  color: PropTypes.string, //borderColor
};
Divider.defaultProps = {
  height: 16,
  width: 1,
  spacing: 10,
  color: "rgb(232, 232, 232)", //borderColor
};
