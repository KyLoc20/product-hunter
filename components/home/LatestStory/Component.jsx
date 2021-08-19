import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import Item from "./Item";
import AsideCard from "@/components/cards/AsideCard";
export default function LatestStory(props) {
  const RenderItems = props.items.map((value, index) => (
    <Item key={index} name={value.name} coverUrl={value.cover}></Item>
  ));
  return <AsideCard header="Latest Story">{RenderItems}</AsideCard>;
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
