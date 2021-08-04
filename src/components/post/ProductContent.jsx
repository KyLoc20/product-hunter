import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Paper from "../Paper";
import Button from "../../../ui/Button/Button";
import Icon from "../../../ui/Icon/Icon";
const Component = styled.section`
  width: 710px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const MediaWrapper = styled.div`
  width: 670px;
  height: 435px;
  background: rgba(204, 77, 41, 0.04);
`;
const IntroductionWrapper = styled.div`
  width: 670px;
  margin-top: 20px;
  border-top: 1px solid #e8e8e8;
  padding-top: 20px;
`;
const IntroductionText = styled.p`
  margin: 0;
  line-height: 20px;
  font-size: 13px;
  word-wrap: break-word;
`;
const CommentReminderWrapper = styled.div`
  margin-top: 20px;
  line-height: 20px;
  font-size: 13px;
  .ask-link {
    color: rgb(204, 77, 41);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
function CommentReminder() {
  return (
    <CommentReminderWrapper>
      Have a question about this product?
      <span className="ask-link">Ask the Makers</span>
    </CommentReminderWrapper>
  );
}
const PromoWrapper = styled.div`
  margin-top: 20px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
`;
const GetPromoCodeButtonWrapper = styled.span`
  margin-left: 10px;
`;
const BasicButtonInnerContent = styled.span`
  display: flex;
  letter-spacing: normal;
  line-height: 16px;
  font-size: 11px;
  font-weight: 600;
`;
const PromoButtonInnerContent = styled(BasicButtonInnerContent)`
  color: rgb(204, 77, 41);
`;
function Promo(props) {
  return (
    <PromoWrapper>
      <span>🎁 {props.promo}</span>
      <GetPromoCodeButtonWrapper>
        <Button
          variant="outlined"
          height={24}
          padding="0 8px"
          backgroundColor="#fff"
          borderColor="#e8e8e8"
          hoverBorderColor="#cc4d29"
        >
          <PromoButtonInnerContent>GET PROMO CODE</PromoButtonInnerContent>
        </Button>
      </GetPromoCodeButtonWrapper>
    </PromoWrapper>
  );
}
Promo.propTypes = {
  promo: PropTypes.string,
};
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const ActionContainer = styled.div`
  display: flex;
`;
const SocialButtonWrapper = styled.span`
  margin-left: 10px;
`;
const TwitterButtonWrapper = styled(SocialButtonWrapper)`
  margin-left: 0;
`;
const FacebookButtonWrapper = styled(SocialButtonWrapper)``;
const EmbedButtonWrapper = styled(SocialButtonWrapper)``;
const CollectButtonWrapper = styled(SocialButtonWrapper)``;
const SocialButtonInnerContent = styled(BasicButtonInnerContent)`
  color: inherit;
  .text {
    margin-left: 10px;
  }
`;
const TwitterButtonInnerContent = styled(SocialButtonInnerContent)`
  .text {
    margin-left: 10px;
  }
`;
const FacebookButtonInnerContent = styled(SocialButtonInnerContent)`
  .text {
    margin-left: 5px;
  }
`;
const EmbedButtonInnerContent = styled(SocialButtonInnerContent)`
  .text {
    margin-top: 1px;
    margin-left: 10px;
  }
`;
const CollectButtonInnerContent = styled(SocialButtonInnerContent)`
  .text {
    margin-top: 1px;
    margin-left: 10px;
  }
`;
const TimeStampWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  padding: 3px 10px;
  line-height: 16px;
  font-size: 11px;
  color: rgb(111, 111, 111);
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background: #fff;
  text-transform: uppercase;
`;
function Social() {
  return (
    <SocialWrapper>
      <ActionContainer>
        <TwitterButtonWrapper>
          <Button
            variant="outlined"
            height={34}
            padding="0 13px"
            backgroundColor="#fff"
            hoverBackgroundColor="#00aced"
            borderColor="#00aced"
            contentColor="#00aced"
            hoverContentColor="#fff"
          >
            <TwitterButtonInnerContent>
              <Icon size={16} name="twitter"></Icon>
              <span className="text">TWEET</span>
            </TwitterButtonInnerContent>
          </Button>
        </TwitterButtonWrapper>
        <FacebookButtonWrapper>
          <Button
            variant="outlined"
            height={34}
            padding="0 13px"
            backgroundColor="#fff"
            hoverBackgroundColor="#3b5998"
            borderColor="#3b5998"
            contentColor="#3b5998"
            hoverContentColor="#fff"
          >
            <FacebookButtonInnerContent>
              <Icon size={14} name="facebook"></Icon>
              <span className="text">SHARE</span>
            </FacebookButtonInnerContent>
          </Button>
        </FacebookButtonWrapper>
        <EmbedButtonWrapper>
          <Button
            variant="outlined"
            height={34}
            padding="0 13px"
            backgroundColor="#fff"
            hoverBackgroundColor="#e8e8e8"
            borderColor="#e8e8e8"
            contentColor="#000"
          >
            <EmbedButtonInnerContent>
              <Icon size={16} name="embed"></Icon>
              <span className="text">EMBED</span>
            </EmbedButtonInnerContent>
          </Button>
        </EmbedButtonWrapper>
        <CollectButtonWrapper>
          <Button
            variant="outlined"
            height={34}
            padding="0 13px"
            backgroundColor="#fff"
            hoverBackgroundColor="#e8e8e8"
            borderColor="#e8e8e8"
            contentColor="#000"
          >
            <CollectButtonInnerContent>
              <Icon size={16} name="collect"></Icon>
              <span className="text">COLLECT</span>
            </CollectButtonInnerContent>
          </Button>
        </CollectButtonWrapper>
      </ActionContainer>
      <TimeStampWrapper>featured 2d ago</TimeStampWrapper>
    </SocialWrapper>
  );
}
export default function ProductContent(props) {
  return (
    <Component>
      <Paper>
        <ContentContainer>
          <MediaWrapper></MediaWrapper>
          <IntroductionWrapper>
            {props.introductionItems.map((item, index) => (
              <IntroductionText key={index}>{item}</IntroductionText>
            ))}
            <CommentReminder></CommentReminder>
            <Promo promo={props.promo}></Promo>
            <Social></Social>
          </IntroductionWrapper>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
ProductContent.propTypes = {
  introductionItems: PropTypes.arrayOf(PropTypes.string),
  videoUrl: PropTypes.string,
  promo: PropTypes.string,
};
ProductContent.defaultProps = {
  introductionItems: [],
};
