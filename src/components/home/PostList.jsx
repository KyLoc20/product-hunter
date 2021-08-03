import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import uuid from "react-uuid";
import Paper from "../Paper";
import Divider from "../Divider";
import Item from "./PostItem";
import Icon from "../../../ui/Icon/Icon";
const Component = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 720px;
  flex-shrink: 0;
  margin-bottom: 40px;
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
const ShowMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 46px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .icon {
    margin-top: 1px;
    margin-right: 4px;
  }
`;
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
    console.log("computedDisplayedItems", allItems);
    if (isAllDisplayed) return allItems;
    else return allItems.slice(0, props.firstDisplayNum);
  }, [props.items, isAllDisplayed, props.firstDisplayNum]);
  const handleShowMore = () => {
    setIsAllDisplayed(true);
  };
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
          {computedDisplayedItems}
          {!isAllDisplayed && (
            <ShowMoreButtonWrapper onClick={handleShowMore}>
              <Icon name="down2" size={12} color="rgb(204, 200, 199)"></Icon>
              {`SHOW ${props.items.length - props.firstDisplayNum} MORE`}
            </ShowMoreButtonWrapper>
          )}
        </ContentContainer>
      </Paper>
    </Component>
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
