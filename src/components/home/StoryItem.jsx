import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
const Component = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 80px;
  height: 60px;
  border-radius:5px;
  margin-left: 10px;
  cursor: pointer;
`;
const ItemContent = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 240px;
  padding: 10px;
`;
const AutoWrapText = styled.p`
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
`;
const NoWrapText = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ItemName = styled(AutoWrapText)`
  font-size: 13px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  line-height: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export default function Item(props) {
  return (
    <Component>
      <ItemContent>
        <ItemName>{props.name}</ItemName>
      </ItemContent>
      <Image src={props.coverUrl} alt={props.name} />
    </Component>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  coverUrl: PropTypes.string,
};
Item.defaultProps = {};
