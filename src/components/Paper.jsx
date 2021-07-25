import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
const Container = styled.div((props) => ({
  display: "flex",
  background: "#fff",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
  borderRadius: `${props.borderRadius}px` || "5px",
}));

export default function Paper(props) {
  return (
    <Container className="paper-container" borderRadius={props.borderRadius}>
      {props.children}
    </Container>
  );
}
Paper.propTypes = {
  borderRadius: PropTypes.number,
};
Paper.defaultProps = {
  borderRadius: 5,
};
