import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "../Paper";
import Divider from "../Divider";
import Item from "./PostItem";
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
