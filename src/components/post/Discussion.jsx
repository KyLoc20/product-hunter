import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Icon from "../../../ui/Icon/Icon";
import Paper from "../Paper";
import { useButton, useButtonInnerContent } from "../common/useButton";
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
  height: 100px;
`;
const WannaReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
function WannaReview(props) {
  const [SendButton] = useButton({
    height: 34,
    padding: "0 13px",
    backgroundColor: "#cc4d29",
    hoverBackgroundColor: "#e4461b",
  });
  const [SendButtonContent] = useButtonInnerContent({
    color: "#fff",
    FW: 600,
    FS: 11,
    LH: 16,
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
        <Stats></Stats>
      </WannaReviewHeader>
      <SendButton>
        <SendButtonContent>SEND</SendButtonContent>
      </SendButton>
    </WannaReviewComponent>
  );
}

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
          <WannaReview></WannaReview>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
Discussion.propTypes = {};
