import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import uuid from "react-uuid";
import Item from "./Item";
import MainCard from "@/components/cards/MainCard";
import ShowMoreButton from "./ShowMoreButton";
import Divider from "@/components/generic/Divider";
export default function PostList(props) {
  const [isAllDisplayed, setIsAllDisplayed] = React.useState(
    props.firstDisplayNum - props.items.length >= 0
  );
  const computedDisplayedItems = React.useMemo(() => {
    const allItems = props.items.map((value) => (
      <Item
        key={uuid()}
        name={value.name}
        description={value.description}
        coverUrl={value.cover}
        votes={value.votes}
        comments={value.comments}
        pricingType={value.pricingType}
        topic={value.topic}
        promoted={value.promoted}
      ></Item>
    ));
    if (isAllDisplayed) return allItems;
    else return allItems.slice(0, props.firstDisplayNum);
  }, [props.items, isAllDisplayed, props.firstDisplayNum]);
  const handleShowMore = (e) => {
    setIsAllDisplayed(true);
  };
  const RenderShowMoreButton = !isAllDisplayed && (
    <ShowMoreButton
      onClick={handleShowMore}
      moreNum={props.items.length - props.firstDisplayNum}
    ></ShowMoreButton>
  );
  return (
    <MainCard renderHeader={HeaderContent}>
      {computedDisplayedItems}
      {RenderShowMoreButton}
    </MainCard>
  );
}
PostList.propTypes = {
  title: PropTypes.string,
  firstDisplayNum: PropTypes.number, //the number of items displayed when first loaded
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      cover: PropTypes.string,
      votes: PropTypes.number,
      comments: PropTypes.number,
      pricingType: PropTypes.string,
      topic: PropTypes.string,
      promoted: PropTypes.bool,
    })
  ),
};
PostList.defaultProps = {
  items: [],
  firstDisplayNum: 15,
};
const FilterWrapper = styled.span`
  display: flex;
  align-items: center;
  .filter {
    cursor: pointer;
    line-height: 15px;
    font-size: 11px;
    font-weight: 400;
    &.selected {
      font-weight: 600;
    }
  }
`;
const HeaderContent = () => (
  <React.Fragment>
    <span>Today</span>
    <FilterWrapper>
      <span className="filter selected">POPULAR</span> <Divider height={15} spacing={5}></Divider>
      <span className="filter">NEWEST</span>
    </FilterWrapper>
  </React.Fragment>
);
