import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { withBoxCSS } from "@/components/generic/Box";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import { withPaperCSS } from "@/components/generic/Paper";
const Component = styled.section`
  ${[withBoxCSS({ column: true })]};
  width: 330px;
  margin-bottom: 20px;
`;
const Header = styled.div`
  ${[withBoxCSS({ JC: "space-between", AI: "center" }), customTextCSS("headerTitle16")]};
  height: 21px;
  margin-bottom: 10px;
`;
const PaperContainer = styled.div`
  ${[
    withBoxCSS({ column: true }),
    withPaperCSS({ radius: 5, border: "1px solid #d9e1ec", shadow: "none" }),
  ]};
  width: 100%;
  padding: ${(props) => props.padding};
  margin-bottom: 20px;
`;
export default function AsideCard(props) {
  const RenderHeader = props.renderHeader || (() => <span>{props.header}</span>);
  return (
    <Component>
      <Header>
        <RenderHeader></RenderHeader>
      </Header>
      <PaperContainer padding={props.padding}>{props.children}</PaperContainer>
    </Component>
  );
}
AsideCard.propTypes = {
  header: PropTypes.string,
  renderHeader: PropTypes.func,
  padding: PropTypes.string,
};
AsideCard.defaultProps = {
  header: "Header",
};
