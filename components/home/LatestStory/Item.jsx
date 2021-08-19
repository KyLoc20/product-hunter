import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { withBoxCSS } from "@/components/generic/Box";
import { withAutoWrapText, customTextCSS } from "@/components/generic/Text";
const Component = styled.div`
  ${[withBoxCSS({ AI: "center" })]};
`;
const Image = styled.img`
  width: 80px;
  height: 60px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const StoryTitle = styled.div`
  ${[withAutoWrapText(), customTextCSS("title13")]};
  padding: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Item(props) {
  return (
    <Component>
      <StoryTitle>{props.name}</StoryTitle>
      <Image src={props.coverUrl} alt={props.name} />
    </Component>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  coverUrl: PropTypes.string,
};
Item.defaultProps = {};
