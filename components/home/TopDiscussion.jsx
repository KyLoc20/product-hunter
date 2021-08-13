import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "../Paper";
import Item from "./TopDiscussionItem";
import Button from "../../../ui/Button/Button";
const Component = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 330px;
  margin-bottom: 20px;
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
  padding: 20px;
  width: 100%;
`;
const ViewMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 11px;
  line-height: 16px;
  font-weight: 600;
  color: #cc4d29;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function TopDiscussion(props) {
  return (
    <Component>
      <Header>Top discussions</Header>
      <Paper borderRadius={5}>
        <ContentContainer>
          {props.items.map((value) => (
            <Item
              key={value.name}
              name={value.name}
              avatarUrl={value.avatar}
              votes={value.votes}
              comments={value.comments}
            ></Item>
          ))}
          <ViewMoreButtonWrapper>VIEW MORE DISCUSSIONS</ViewMoreButtonWrapper>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
TopDiscussion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      votes: PropTypes.number,
      comments: PropTypes.number,
    })
  ),
};
TopDiscussion.defaultProps = {
  items: [],
};
