import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { withBoxCSS } from "@/components/generic/Box";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import { withPaperCSS } from "@/components/generic/Paper";
import Item from "./Item";
import AsideCard from "@/components/cards/AsideCard";
import ViewAllButton from "./ViewAllButton";
export default function Hiring(props) {
  return (
    <AsideCard header="Hiring now">
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
    </AsideCard>
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
