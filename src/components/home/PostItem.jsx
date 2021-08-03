import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Button from "../../../ui/Button/Button";
import Icon from "../../../ui/Icon/Icon";
import Divider from "../Divider";
import { useModal } from "../../common/responsive/modal";
import ModalContainer from "../ModalContainer";
const Component = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #e8e8e8;
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
const BasicText = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ItemContent = styled.div`
  width: 506px;
  height: 85px;
`;
const ItemName = styled(BasicText)`
  font-weight: 600;
  line-height: 24px;
`;
const ItemDescription = styled(BasicText)`
  font-size: 13px;
  color: rgb(111, 111, 111);
  line-height: 20px;
  margin-bottom: 12px;
  text-transform: full-width;
`;
const Meta = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  align-items: center;
  button {
    margin-right: 10px;
  }
`;
const CommentButtonInnerContent = styled.span`
  display: flex;
  align-items: center;
  height: 16px;
  .text {
    font-size: 11px;
    color: rgb(111, 111, 111);
    letter-spacing: 0.035em;
    padding-left: 2px;
  }
`;
const LikeButtonWrapper = styled.div`
  margin-left: 20px;
  height: 74px;
`;
const LikeButtonInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46px;
  .text {
    margin-top: -8px;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
  }
`;
const MetaContentWrapper = styled.span`
  height: 16px;
  line-height: 16px;
  font-size: 11px;
  color: rgb(111, 111, 111);
  cursor: pointer;
`;
const PromotedTag = styled.span`
  display: flex;
  align-items: center;
  height: 24px;
  font-size: 11px;
  color: #006bff;
  .icon {
    margin-left: 4px;
  }
`;
export default function Item(props) {
  const { show, hide, RenderModal } = useModal("modal-container");
  const handleOpenPostDetail = (e) => {
    console.log("handleOpenPostDetail", e.target);
    show();
  };
  const handleClosePostDetail = () => {
    console.log("handleClosePostDetail");
    hide();
  };
  return (
    <Component onClick={handleOpenPostDetail}>
      <Image
        src={props.coverUrl}
        alt={props.name}
      />
      <ItemContent>
        <ItemName>{props.name}</ItemName>
        <ItemDescription>{props.description}</ItemDescription>
        <Meta>
          <Button
            height={24}
            padding={"0 8px"}
            variant="outlined"
            backgroundColor="#fff"
            hoverBackgroundColor="#e8e8e8"
            borderColor="#e8e8e8"
          >
            <CommentButtonInnerContent>
              <Icon name="message1" color="rgb(111, 111, 111)" size={12}></Icon>
              <span className="text">{props.comments}</span>
            </CommentButtonInnerContent>
          </Button>
          <MetaContentWrapper>{props.pricingType}</MetaContentWrapper>
          {props.pricingType && <Divider></Divider>}
          <MetaContentWrapper>{props.topic}</MetaContentWrapper>
          {props.promoted && (
            <PromotedTag>
              Promoted
              <Icon name="query" size={10}></Icon>
            </PromotedTag>
          )}
        </Meta>
      </ItemContent>
      <LikeButtonWrapper>
        <Button
          height={74}
          padding={"0 8px"}
          variant="outlined"
          backgroundColor="#fff"
          hoverBackgroundColor="#f9f9f9"
          borderColor="#e8e8e8"
        >
          <LikeButtonInnerContent>
            <Icon name="upTriangle" size={25}></Icon>
            <span className="text">{props.comments}</span>
          </LikeButtonInnerContent>
        </Button>
      </LikeButtonWrapper>
      <RenderModal>
        <ModalContainer onClose={handleClosePostDetail}></ModalContainer>
      </RenderModal>
    </Component>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  coverUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
  pricingType: PropTypes.string,
  topic: PropTypes.string,
  promoted: PropTypes.bool,
};
Item.defaultProps = {
  promoted: false,
};
