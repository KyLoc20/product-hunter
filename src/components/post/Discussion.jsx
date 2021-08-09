import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Icon from "../../../ui/Icon/Icon";
import Paper from "../Paper";
import { useButton, useButtonInnerContent } from "../common/useButton";
import { useInput } from "../common/useInput";
import { useTextarea } from "../common/useTextarea";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import Avatar from "../common/Avatar";
const Component = styled.section`
  width: 710px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  height: 34px;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
  .title {
    color: rgb(111, 111, 111);
  }
  .follow-discussion {
    padding: 0 13px;
    color: #006bff;
    .icon {
      margin-left: 4px;
      margin-top: -4px;
    }
  }
`;
const WannaReviewComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 670px;
  min-height: 100px;
`;
const WannaReviewHeader = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Reminder = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  button {
    margin-left: 10px;
  }
`;

const Stats = styled.div``;
const ReviewNum = styled.span`
  font-size: 13px;
  line-height: 20px;
  color: #6f6f6f;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const RatingsWrapper = styled.span`
  margin-left: 10px;
`;
const SendButtonProps = {
  height: 34,
  padding: "0 13px",
  backgroundColor: "#cc4d29",
  hoverBackgroundColor: "#e4461b",
};
const SendButtonContentProps = {
  color: "#fff",
  FW: 600,
  FS: 11,
  LH: 16,
};
const ReviewButtonProps = {
  variant: "outlined",
  height: 24,
  padding: "0 8px",
  borderColor: "#fff",
  borderRadius: 3,
};
const ReviewButtonContentProps = {
  FW: 600,
  FS: 11,
  LH: 16,
};
const RatingButtonProps = {
  height: 33,
  padding: "8px 10px",
  backgroundColor: "#f1f8e5",
  contentColor: "#36930d",
  borderRadius: 3,
};
const RatingButtonContentProps = {
  FW: 600,
  FS: 13,
};
const ReviewForm = styled.form`
  display: flex;
  margin-top: 20px;
  width: 670px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 10px;
`;
const InputOtherContent = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const ShortcutReminder = styled.span`
  color: #6f6f6f;
  font-size: 13px;
  line-height: 20px;
  .icon {
    margin-left: 4px;
    margin-top: -12px;
    color: rgb(221, 218, 217);
  }
`;
const ShareOnTwitter = styled.div`
  position: relative;
  left: 70px;
`;
function WannaReview(props) {
  const [shouldShowInputReminder, setShouldShowInputReminder] = React.useState(true);
  const [SendButton] = useButton({
    ...SendButtonProps,
  });
  const [SendButtonContent] = useButtonInnerContent({
    ...SendButtonContentProps,
  });
  const [YesButton] = useButton({
    ...ReviewButtonProps,
    hoverBorderColor: "#36930d",
    contentColor: "#36930d",
    backgroundColor: "#f1f8e5",
  });
  const [YesButtonContent] = useButtonInnerContent({
    ...ReviewButtonContentProps,
  });
  const [NoButton] = useButton({
    ...ReviewButtonProps,
    hoverBorderColor: "#d74343",
    contentColor: "#d74343",
    backgroundColor: "#feeded",
  });
  const [NoButtonContent] = useButtonInnerContent({
    ...ReviewButtonContentProps,
  });
  const [RatingButton] = useButton({ ...RatingButtonProps });
  const [RatingButtonContent] = useButtonInnerContent({
    ...RatingButtonContentProps,
  });

  const [ReviewInput] = useTextarea({});
  const handleInputChangeInDiscussion = (e) => {
    if (e.value !== "") {
      console.log("handleChangeInDiscussion", e);
      //todo prevent re-render caused by shouldShowInputReminder
      // setShouldShowInputReminder(true);
    }
  };
  return (
    <WannaReviewComponent>
      <WannaReviewHeader>
        <Reminder>
          Would you recommend this product?
          <YesButton>
            <YesButtonContent>YES</YesButtonContent>
          </YesButton>
          <NoButton>
            <NoButtonContent>NO</NoButtonContent>
          </NoButton>
        </Reminder>
        <Stats>
          <ReviewNum>{props.reviews} Reviews</ReviewNum>
          <RatingsWrapper>
            <RatingButton>
              <RatingButtonContent>{`${parseFloat(props.ratings).toFixed(
                1
              )}/5`}</RatingButtonContent>
            </RatingButton>
          </RatingsWrapper>
        </Stats>
      </WannaReviewHeader>
      <ReviewForm>
        <Avatar srcUrl={props.userAvatar} size={30}></Avatar>
        <InputWrapper>
          <ReviewInput
            placeholder="What do you think of this product?"
            onChange={handleInputChangeInDiscussion}
          ></ReviewInput>
          {shouldShowInputReminder && (
            <InputOtherContent>
              <ShortcutReminder>
                @user, !product, ?makers <Icon name="query" size={10}></Icon>
              </ShortcutReminder>
              <ShareOnTwitter>
                <Checkbox
                  label="Share on Twitter"
                  size={18}
                  iconSize={15}
                  labelFontSize={13}
                  iconColor="rgb(0,117,255)"
                  rippleColor="rgba(0,0,0,0)"
                  iconHoverColor="rgba(0,0,0,0)"
                ></Checkbox>
              </ShareOnTwitter>
            </InputOtherContent>
          )}
        </InputWrapper>
        <SendButton>
          <SendButtonContent>SEND</SendButtonContent>
        </SendButton>
      </ReviewForm>
    </WannaReviewComponent>
  );
}
WannaReview.propTypes = {
  reviews: PropTypes.number,
  ratings: PropTypes.number,
  userAvatar: PropTypes.string,
};

export default function Discussion(props) {
  return (
    <Component>
      <Header>
        <span className="title">DISCUSSION</span>
        <span className="follow-discussion">
          FOLLOW DISCUSSION <Icon name="query" size={12}></Icon>
        </span>
      </Header>
      <Paper>
        <ContentContainer>
          <WannaReview
            reviews={props.reviews}
            ratings={props.ratings}
            userAvatar={props.userAvatar}
          ></WannaReview>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
Discussion.propTypes = {
  reviews: PropTypes.number,
  ratings: PropTypes.number,
  userAvatar: PropTypes.string,
};
