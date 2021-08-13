import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Icon from "@/ui/Icon/Icon";
import clsx from "clsx";
const Component = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover .arrow {
    visibility: visible;
  }
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 290px;
`;
const AutoWrapText = styled.p`
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
`;
const ItemName = styled(AutoWrapText)`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  .arrow {
    visibility: hidden;
    margin-left: 3px;
    font-size: 11px;
    color: rgb(204, 77, 41);
  }
`;
const ItemDescription = styled(AutoWrapText)`
  font-size: 13px;
  line-height: 20px;
  margin-top: 5px;
  text-transform: full-width;
  color: rgb(111, 111, 111);
`;
const ItemLocation = styled(AutoWrapText)`
  font-size: 13px;
  line-height: 20px;
  margin-top: 5px;
  text-transform: full-width;
  color: rgb(111, 111, 111);
`;
export default function Item(props) {
  return (
    <Component>
      <ItemContent>
        <ItemName>
          {props.name}
          <span className="arrow">→</span>
        </ItemName>
        <ItemDescription>{props.description}</ItemDescription>
        <ItemLocation>{props.location}</ItemLocation>
      </ItemContent>
    </Component>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
};
Item.defaultProps = {};
