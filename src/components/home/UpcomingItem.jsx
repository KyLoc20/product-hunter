import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Icon from "../../../ui/Icon/Icon";
import clsx from "clsx";
const Component = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  &:not(.first) {
    padding-top: 20px;
    border-top: 1px solid #e8e8e8;
  }
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 240px;
`;
const AutoWrapText = styled.p`
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
`;
const ItemName = styled(AutoWrapText)`
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
`;
const ItemDescription = styled(AutoWrapText)`
  font-size: 13px;
  line-height: 20px;
  margin-top: 5px;
  text-transform: full-width;
  color: rgb(111, 111, 111);
`;
const FollowButtonWrapper = styled.div`
  display: flex;
  align-items: start;
  font-size: 11px;
  line-height: 16px;
  margin-top: 10px;
  font-weight: 600;
  color: rgb(111, 111, 111);
  .icon {
    margin-right: 5px;
  }
  &:hover{
    color: rgb(204, 77, 41);
  }
`;
export default function Item(props) {
  return (
    <Component className={clsx(props.first && "first")}>
      <ItemContent>
        <ItemName>{props.name}</ItemName>
        <ItemDescription>{props.description}</ItemDescription>
        <FollowButtonWrapper>
          <Icon name="plus" size={8}></Icon> FOLLOW({props.follows})
        </FollowButtonWrapper>
      </ItemContent>
      <Image src={props.coverUrl} alt={props.name} />
    </Component>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  coverUrl: PropTypes.string,
  follows: PropTypes.number,
  first: PropTypes.bool,
};
Item.defaultProps = {
  first: false,
};
