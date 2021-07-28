import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "../Paper";
import Item from "./StoryItem"
const Component = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 330px;
`;
const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 21px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`;
export default function LatestStory(props) {
  return (
    <Component>
      <Header>Latest Story</Header>
      <Paper borderRadius={5}>
      <ContentContainer>
        {props.items.map((value) => (
          <Item
            key={value.name}
            name={value.name}
            coverUrl={value.cover}
          ></Item>
        ))}
      </ContentContainer>
      </Paper>
    </Component>
  );
}
LatestStory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      cover: PropTypes.string,
    })
  ),
};
LatestStory.defaultProps = {
  items: [],
};
