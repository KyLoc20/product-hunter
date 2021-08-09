import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const Component = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;
export default function Avatar(props) {
  return <Component src={props.srcUrl} size={props.size}></Component>;
}
Avatar.propTypes = {
  srcUrl: PropTypes.string,
  size: PropTypes.number,
};
