import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "../Paper";
import Button from "../../../ui/Button/Button";
import Divider from "./Divider";
import Icon from "../../../ui/Icon/Icon";
const Component = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 720px;
  flex-shrink: 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;
const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  right: 0;
  top: 0;
`;
const Action = styled.span`
  cursor: pointer;
  height: 15px;
  font-size: 11px;
  font-weight: 400;
  &.selected {
    font-weight: 600;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`;
const ItemComponent = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #e8e8e8;
  &:hover {
    background: #f9f9f9;
  }
  img {
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-right: 5px;
  }
  .content {
    width: 506px;
    height: 85px;
    margin-left: 10px;
    p {
      margin: 0;
    }
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      color: rgb(0, 0, 0);
      line-height: 24px;
    }
    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      font-size: 13px;
      color: rgb(111, 111, 111);
      line-height: 20px;
      margin-bottom: 12px;
      text-transform: full-width;
    }
  }
`;
const Meta = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  align-items: center;
  button {
    margin-right: 10px;
  }
`;
const CommentButtonInnerContent = styled.span`
  display: flex;
  align-items: center;
  height: 16px;
  .text {
    font-size: 11px;
    color: rgb(111, 111, 111);
    letter-spacing: 0.035em;
    padding-left: 2px;
  }
`;

const LikeButtonWrapper = styled.div`
  width: 76px;
  height: 74px;
`;
const LikeButtonInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46px;
  .text {
    margin-top: -8px;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
  }
`;
const MetaContentWrapper = styled.span`
  height: 16px;
  line-height: 16px;
  font-size: 11px;
  color: rgb(111, 111, 111);
  cursor: pointer;
`;
const PromotedTag = styled.span`
  display: flex;
  align-items: center;
  height: 24px;
  font-size: 11px;
  color: #006bff;
  .icon {
    margin-left: 4px;
  }
`;
function Item(props) {
  return (
    <ItemComponent>
      <img src={props.coverUrl} alt={props.name} />
      <div className="content">
        <p className="name">{props.name}</p>
        <p className="description">{props.description}</p>
        <Meta>
          <Button
            height={24}
            padding={"0 8px"}
            variant="outlined"
            backgroundColor="#fff"
            hoverBackgroundColor="#e8e8e8"
            borderColor="#e8e8e8"
          >
            <CommentButtonInnerContent>
              <Icon name="message1" color="rgb(111, 111, 111)" size={12}></Icon>
              <span className="text">{props.comments}</span>
            </CommentButtonInnerContent>
          </Button>
          <MetaContentWrapper>{props.pricingType}</MetaContentWrapper>
          {props.pricingType && <Divider></Divider>}
          <MetaContentWrapper>{props.topic}</MetaContentWrapper>
          {props.promoted && (
            <PromotedTag>
              Promoted
              <Icon name="query" size={10}></Icon>
            </PromotedTag>
          )}
        </Meta>
      </div>
      <LikeButtonWrapper>
        <Button
          height={74}
          padding={"0 8px"}
          variant="outlined"
          backgroundColor="#fff"
          hoverBackgroundColor="#f9f9f9"
          borderColor="#e8e8e8"
        >
          <LikeButtonInnerContent>
            <Icon name="upTriangle" size={25}></Icon>
            <span className="text">{props.comments}</span>
          </LikeButtonInnerContent>
        </Button>
      </LikeButtonWrapper>
    </ItemComponent>
  );
}
Item.propTypes = {
  right: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  coverUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
  pricingType: PropTypes.string,
  topic: PropTypes.string,
  promoted: PropTypes.bool,
};
Item.defaultProps = {
  promoted: false,
};
export default function PostList(props) {
  return (
    <Component>
      <Header>
        <span className="title">{props.title}</span>
        <HeaderActions>
          <Action className="selected">POPULAR</Action>
          <Divider height={15} spacing={5}></Divider>
          <Action>NEWEST</Action>
        </HeaderActions>
      </Header>
      <Paper borderRadius={5}>
        <ContentContainer>
          {props.items.map((value) => (
            <Item
              key={value.name}
              name={value.name}
              description={value.description}
              coverUrl={value.cover}
              likes={value.likes}
              comments={value.comments}
              pricingType={value.pricingType}
              topic={value.topic}
              promoted={value.promoted}
            ></Item>
          ))}
        </ContentContainer>
      </Paper>
    </Component>
  );
}

PostList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      cover: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.number,
      pricingType: PropTypes.string,
      topic: PropTypes.string,
      promoted: PropTypes.bool,
    })
  ),
};
PostList.defaultProps = {
  items: [],
};
