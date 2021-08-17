import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { withBoxCSS } from "@/components/generic/Box";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import { withPaperCSS } from "@/components/generic/Paper";
const Component = styled.section`
  ${[withBoxCSS({ column: true })]};
  width: 720px;
  margin-bottom: 30px;
`;
const Header = styled.div`
  ${[withBoxCSS({ JC: "space-between", AI: "center" }), customTextCSS("headerTitle20")]};
  height: 32px;
  margin-bottom: 10px;
`;
const PaperContainer = styled.div`
  ${[withBoxCSS({ column: true }), withPaperCSS({ radius: 5 })]};
  width: 100%;
  margin-bottom: 20px;
`;
export default function MainCard(props) {
  return (
    <Component>
      <Header>Today</Header>
      <PaperContainer>{props.children}</PaperContainer>
    </Component>
  );
}
