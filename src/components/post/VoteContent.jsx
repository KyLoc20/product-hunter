import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Button from "../../../ui/Button/Button";
import Icon from "../../../ui/Icon/Icon";
const Component = styled.section`
  width: 330px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GetItButtonWrapper = styled.span``;
const VoteButtonWrapper = styled.span``;
const BasicButtonInnerContent = styled.span`
  display: flex;

  letter-spacing: normal;
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
`;

const GetItButtonInnerContent = styled(BasicButtonInnerContent)`
  width: 68px;
  justify-content: space-around;
  .icon {
    margin-top: 2px;
    color: rgb(111, 111, 111);
  }
`;
const VoteButtonInnerContent = styled(BasicButtonInnerContent)`
  width: 168px;
  justify-content: center;
  color: #fff;
  .icon {
    margin-top: -10px;
    margin-left: -10px;
    padding-top: 5px;
  }
  .number {
    margin-left: 10px;
  }
`;
const VoterContainer = styled.div`
  display: flex;
  height: 70px;
  align-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
const VoterComponent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11%;
  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #004d40;
    color: #fff;
    cursor: pointer;
  }
`;
function Vote(props) {
  return (
    <VoterComponent>
      <span className="avatar">P</span>
    </VoterComponent>
  );
}
const SocialWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  height: 21px;
`;
const SocialButtonWrapper = styled.span`
  margin-right: 10px;
  cursor: pointer;
  color: rgb(111, 111, 111);
  opacity: 0.8;
  &:hover {
    color: #30303f;
  }
`;
const TwitterButtonWrapper = styled(SocialButtonWrapper)``;
const FacebookButtonWrapper = styled(SocialButtonWrapper)``;
const InstagramButtonWrapper = styled(SocialButtonWrapper)``;
export default function VoteContent(props) {
  return (
    <Component>
      <ContentContainer>
        <ActionWrapper>
          <GetItButtonWrapper>
            <Button
              variant="outlined"
              height={42}
              padding="0 20px"
              backgroundColor="#fff"
              hoverBackgroundColor="#fafafa"
              borderColor="#fff"
              hoverBorderColor="#fafafa"
            >
              <GetItButtonInnerContent>
                <span className="text">GET IT</span>
                <Icon size={12} name="downArrow"></Icon>
              </GetItButtonInnerContent>
            </Button>
          </GetItButtonWrapper>
          <VoteButtonWrapper>
            <Button
              height={50}
              padding="0 20px"
              backgroundColor="#cc4d29"
              hoverBackgroundColor="#e4461b"
            >
              <VoteButtonInnerContent>
                <Icon size={30} name="upTriangle"></Icon>
                <span className="text">UPVOTE</span>
                <span className="number">{props.votes}</span>
              </VoteButtonInnerContent>
            </Button>
          </VoteButtonWrapper>
        </ActionWrapper>
        <VoterContainer>
          {Array(18)
            .fill(0)
            .map((_, index) => (
              <Vote key={index}></Vote>
            ))}
        </VoterContainer>
        <SocialWrapper>
          <TwitterButtonWrapper>
            <Icon size={16} name="twitter"></Icon>
          </TwitterButtonWrapper>
          <FacebookButtonWrapper>
            <Icon size={16} name="facebook2"></Icon>
          </FacebookButtonWrapper>
          <InstagramButtonWrapper>
            <Icon size={16} name="instagram"></Icon>
          </InstagramButtonWrapper>
        </SocialWrapper>
      </ContentContainer>
    </Component>
  );
}
VoteContent.propTypes = {
  votes: PropTypes.number,
};
