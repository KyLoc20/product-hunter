import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "../Paper";
const Component = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 720px;
  flex-shrink: 0;
  margin-bottom: 30px;
`;
const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 32px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
`;
const ItemComponent = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  box-sizing: border-box;
  &.left {
    margin-right: 10px;
  }
  &.right {
    margin-left: 10px;
  }
  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .content {
    width: 267px;
    height: 56px;
    margin-left: 10px;
    p {
      margin: 0;
    }
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      cursor: pointer;
      color: rgb(0, 0, 0);
      line-height: 24px;
    }
    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      font-size: 13px;
      color: rgb(111, 111, 111);
      line-height: 16px;
      cursor: pointer;
      text-transform: full-width;
    }
  }
`;
function Item(props) {
  return (
    <ItemComponent className={props.right ? "right" : "left"}>
      <img src={props.coverUrl} alt={props.name} />
      <div className="content">
        <p className="name">{props.name}</p>
        <p className="description">{props.description}</p>
      </div>
    </ItemComponent>
  );
}
Item.propTypes = {
  right: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  coverUrl: PropTypes.string,
  likes: PropTypes.number,
};
Item.defaultProps = {
  right: false,
};
export default function Recommend(props) {
  return (
    <Component>
      <Header>In case you missed it</Header>
      <Paper borderRadius={3}>
        <ContentContainer>
          {props.items.map((value, index) => (
            <Item
              key={value.name}
              right={index % 2 === 1}
              name={value.name}
              description={value.description}
              coverUrl={value.cover}
              likes={value.likes}
            ></Item>
          ))}
        </ContentContainer>
      </Paper>
    </Component>
  );
}

Recommend.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      cover: PropTypes.string,
      likes: PropTypes.number,
    })
  ),
};
Recommend.defaultProps = {
  items: [],
};
