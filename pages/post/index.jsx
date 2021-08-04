import Head from "next/head";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
const Container = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: rgb(243, 243, 243);
  min-height: 100vh;
`;
export default function Header(props) {
  return <Container></Container>;
}
