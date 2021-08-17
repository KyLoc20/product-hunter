import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Button from "@/ui/Button/Button";
import Icon from "@/ui/Icon/Icon";
import Divider from "@/components/generic/Divider";
import CommentButton from "./CommentButton";
import UpvoteButton from "./UpvoteButton";
import { useModal } from "@/hooks/modal";
import ProductModal from "@/components/post/ModalContainer";

import { withBoxCSS } from "@/components/generic/Box";
import { withNoWrapText, customTextCSS } from "@/components/generic/Text";

const Component = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #d9e1ec;
  &:hover {
    background: #f9f9f9;
  }
`;
const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 5px;
  margin-right: 10px;
`;
const Content = styled.div`
  width: 506px;
  height: 85px;
`;
export default function Item(props) {
  const { show, hide, RenderModal } = useModal("modal-container");

  const handleOpenPostDetail = (e) => {
    show();
  };
  const handleClosePostDetail = (e) => {
    hide();
  };
  const RenderPriceType = <InfoContent>{props.pricingType}</InfoContent>;
  const RenderDivider = props.pricingType && <Divider></Divider>;
  const RenderTopic = <InfoContent underline>{props.topic}</InfoContent>;
  const RenderPromoted = props.promoted && (
    <PromotedTag>
      Promoted
      <Icon name="query" size={10}></Icon>
    </PromotedTag>
  );
  return (
    <Component onClick={handleOpenPostDetail}>
      <Image src={props.coverUrl} alt={props.name} />
      <Content>
        <ProductName>{props.name}</ProductName>
        <ProductDescription>{props.description}</ProductDescription>
        <OtherInfo>
          <CommentButton comments={props.comments}></CommentButton>
          {RenderPriceType}
          {RenderDivider}
          {RenderTopic}
          {RenderPromoted}
        </OtherInfo>
      </Content>
      <UpvoteButton upvotes={props.votes}></UpvoteButton>
      <RenderModal>
        <ProductModal onClose={handleClosePostDetail}></ProductModal>
      </RenderModal>
    </Component>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  coverUrl: PropTypes.string,
  votes: PropTypes.number,
  comments: PropTypes.number,
  pricingType: PropTypes.string,
  topic: PropTypes.string,
  promoted: PropTypes.bool,
};
Item.defaultProps = {
  promoted: false,
};

const ProductName = styled.div`
  ${[withNoWrapText(), customTextCSS("title16")]};
`;
const ProductDescription = styled.div`
  ${[withNoWrapText(), customTextCSS("description13")]};
  margin-bottom: 12px;
`;
const OtherInfo = styled.div`
  ${[withBoxCSS({ AI: "center" })]};
  height: 24px;
  button {
    margin-right: 10px;
  }
`;
const InfoContent = styled.span`
  ${[customTextCSS("description11")]};
  cursor: pointer;
  &:hover {
    text-decoration: ${(props) => props.underline && "underline"};
  }
`;
const PromotedTag = styled.span`
  ${[withBoxCSS({ AI: "center" })]};
  height: 24px;
  font-size: 11px;
  color: #006bff;
  .icon {
    margin-left: 4px;
  }
`;
