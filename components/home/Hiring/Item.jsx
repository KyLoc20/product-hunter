import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { withBoxCSS } from "@/components/generic/Box";
import { withAutoWrapText, customTextCSS } from "@/components/generic/Text";
const Component = styled.div`
  ${[withBoxCSS({ column: true })]};
  width: 290px;
  margin-bottom: 20px;
`;
const CompanyName = styled.div`
  ${[withAutoWrapText(), customTextCSS("title13")]};
  cursor: pointer;
  .arrow {
    visibility: hidden;
    margin-left: 3px;
    font-size: 11px;
    color: rgb(204, 77, 41);
  }
`;
const BasicDescription = styled.div`
  ${[withAutoWrapText(), customTextCSS("description13")]};
  margin-top: 5px;
  text-transform: full-width;
`;
const Position = BasicDescription;
const Location = BasicDescription;
export default function Item(props) {
  return (
    <Component>
      <CompanyName>
        {props.name}
        <span className="arrow">→</span>
      </CompanyName>
      <Position>{props.description}</Position>
      <Location>{props.location}</Location>
    </Component>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
};
Item.defaultProps = {};
