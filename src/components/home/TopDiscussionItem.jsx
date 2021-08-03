import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Button from "../../../ui/Button/Button";
import Icon from "../../../ui/Icon/Icon";
import clsx from "clsx";
const Component = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
  &:hover .arrow {
    visibility: visible;
  }
`;
const Avatar = styled.div`
  margin-left: 20px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
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
  display: flex;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;
const Actions = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
`;
const BasicButtonWrapper = styled.div`
  display: flex;
  button {
    transition: all 0.3s ease;
  }
`;
const BasicButtonContent = styled.span`
  display: flex;
  align-items: center;
  height: 16px;
  color: rgb(111, 111, 111);
  .text {
    font-size: 11px;
    letter-spacing: normal;
  }
`;

const VoteButtonWrapper = styled(BasicButtonWrapper)``;
const VoteButtonContent = styled(BasicButtonContent)`
  .icon {
    margin-left: -5px;
  }
  .text {
    margin-left: -2px;
  }
`;
const CommentsButtonWrapper = styled(BasicButtonWrapper)`
  margin-left: 12px;
`;
const CommentsButtonContent = styled(BasicButtonContent)`
  .icon {
    margin-top: -2px;
  }
  .text {
    margin-left: 5px;
  }
`;
const JoinButtonWrapper = styled(BasicButtonWrapper)`
  margin-left: 12px;
  padding-top: 2px;
  align-items: center;
  line-height: 16px;
  font-size: 11px;
  color: rgb(111, 111, 111);
`;
export default function Item(props) {
  return (
    <Component>
      <ItemContent>
        <ItemName>{props.name}</ItemName>
        <Actions>
          <VoteButtonWrapper>
            <Button
              variant="text"
              height={24}
              padding="0 8px"
              hoverBackgroundColor="#e8e8e8"
              borderRadius={3}
            >
              <VoteButtonContent>
                <Icon name="upTriangle" size={24}></Icon>
                <span className="text">{props.votes}</span>
              </VoteButtonContent>
            </Button>
          </VoteButtonWrapper>
          <CommentsButtonWrapper>
            <Button
              variant="text"
              height={24}
              padding="0 8px"
              hoverBackgroundColor="#e8e8e8"
              borderRadius={3}
            >
              <CommentsButtonContent>
                <Icon name="message1" size={12}></Icon>
                <span className="text">{props.comments}</span>
              </CommentsButtonContent>
            </Button>
          </CommentsButtonWrapper>
          <JoinButtonWrapper>Join discussion</JoinButtonWrapper>
        </Actions>
      </ItemContent>
      <Avatar>
        <img src={props.avatarUrl} alt="avatar" />
      </Avatar>
    </Component>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  votes: PropTypes.number,
  comments: PropTypes.number,
};
Item.defaultProps = {};
