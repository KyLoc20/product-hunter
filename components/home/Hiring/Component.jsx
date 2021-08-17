import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Item from "./Item";
import { withBoxCSS } from "@/components/generic/Box";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import { withPaperCSS } from "@/components/generic/Paper";
import { ViewAllButton } from "./ViewAllButton";
const Component = styled.section`
  ${[withBoxCSS({ column: true })]};
  width: 330px;
  margin-bottom: 20px;
`;
export default function Hiring(props) {
  return (
    <Component>
      <Header>Hiring now</Header>
      <PaperContainer>
        {props.items.map((value, index) => (
          <Item
            key={index}
            name={value.name}
            description={value.description}
            location={value.location}
          ></Item>
        ))}
        <ViewAllButton></ViewAllButton>
        <PostJob>
          Hiring?<span className="post-text">Post a job</span>
        </PostJob>
      </PaperContainer>
    </Component>
  );
}
Hiring.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
    })
  ),
};
Hiring.defaultProps = {
  items: [],
};
const Header = styled.div`
  ${[withBoxCSS({ AI: "center" }), customTextCSS("headerTitle16")]};
  margin-bottom: 10px;
`;
const PaperContainer = styled.div`
  ${[withBoxCSS({ column: true }), withPaperCSS()]};
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
`;

const PostJob = styled.div`
  ${[customTextCSS("reminder")]};
  margin-top: 20px;
  color: rgb(111, 111, 111);
  .post-text {
    cursor: pointer;
    margin-left: 2px;
    color: #cc4d29;
    &:hover {
      text-decoration: underline;
    }
  }
`;
