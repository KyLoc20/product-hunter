import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "@/components/generic/Paper";
import Button from "@/ui/Button/Button";
import { withBoxCSS } from "@/components/generic/Box";
import { composeCSS } from "@/utilities/style";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import { withPaperCSS } from "@/components/generic/Paper";
const Component = styled.section`
  ${[withBoxCSS({ column: true })]};
  width: 330px;
  height: 200px;
  margin-bottom: 20px;
`;
const Header = styled.div`
  ${[withBoxCSS(), customTextCSS("title")]};
  align-items: center;
  margin-bottom: 10px;
`;
const PaperContainer = styled.div`
  ${[withBoxCSS({ column: true }), withPaperCSS()]};
  width: 330px;
  margin-bottom: 20px;
  .content {
    height: 200px;
  }
`;

export default function Hiring(props) {
  return (
    <Component>
      <Header>Hiring now</Header>
      <PaperContainer></PaperContainer>
    </Component>
  );
}
