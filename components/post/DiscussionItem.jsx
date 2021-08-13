import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Avatar from "../generic/Avatar";
import Icon from "@/ui/Icon/Icon";
import { useButton, useButtonInnerContent } from "../generic/useButton";
const Component = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;
const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 10px;
`;

const CommentItemsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Author = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const NoWrapText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const AuthorName = styled(NoWrapText)`
  display: flex;
  align-items: center;
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
`;
const AuthorIntroduction = styled(NoWrapText)`
  line-height: 20px;
  font-size: 13px;
  color: #6f6f6f;
`;
const TitleBadge = styled.span`
  margin-left: 10px;
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: 500;
  background-color: rgba(0, 179, 126, 0.1);
  color: #056d4e;
  font-size: 11px;
  line-height: 15px;
`;
const WordsWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  p:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const ContentText = styled.p`
  margin: 0;
  line-height: 20px;
  font-size: 13px;
  word-wrap: break-word;
`;
const ActionWrapper = styled.div`
  display: flex;
  height: 24px;
  margin-bottom: 8px;
  button {
    margin-right: 20px;
    .icon {
      margin-top: -2px;
    }
  }
`;
const DateLabel = styled.span`
  display: flex;
  align-items: center;
  padding: 2px 5px;
  height: 20px;
  cursor: pointer;
  margin-right: 5px;
  font-weight: 300;
  font-size: 11px;
`;
const BasicButtonProps = {
  height: 24,
  padding: "2px 5px",
  backgroundColor: "#fff",
  hoverBackgroundColor: "#f3f3f3",
  contentColor: "#6f6f6f",
  borderRadius: 3,
};
const BasicButtonContentProps = {
  FW: 600,
  FS: 11,
  LH: 16,
};

export default function Item(props) {
  const [UpvoteButton] = useButton({
    ...BasicButtonProps,
  });
  const [UpvoteButtonContent] = useButtonInnerContent({
    ...BasicButtonContentProps,
  });
  const [ReplyButton] = useButton({
    ...BasicButtonProps,
  });
  const [ReplyButtonContent] = useButtonInnerContent({
    ...BasicButtonContentProps,
  });
  const [ShareButton] = useButton({
    ...BasicButtonProps,
  });
  const [ShareButtonContent] = useButtonInnerContent({
    ...BasicButtonContentProps,
  });
  const [MoreButton] = useButton({
    ...BasicButtonProps,
    padding: "0 5px",
    hoverBackgroundColor: "#fff",
    rippleDisabled: true,
  });
  const [MoreButtonContent] = useButtonInnerContent({
    ...BasicButtonContentProps,
  });
  return (
    <Component style={{ marginBottom: props.layer === 1 ? "20px" : null }}>
      <Avatar srcUrl={props.avatar} size={30}></Avatar>
      <ContentContainer>
        <Author>
          <AuthorName>
            {props.name}
            {props.titleItems.map((sTitle, index) => (
              <TitleBadge key={index}>{sTitle}</TitleBadge>
            ))}
            <KarmaBadge></KarmaBadge>
          </AuthorName>
          <AuthorIntroduction>{props.introduction}</AuthorIntroduction>
        </Author>
        <WordsWrapper>
          {props.contentItems.map((sParagraph, index) => (
            <ContentText key={index}>{sParagraph}</ContentText>
          ))}
        </WordsWrapper>
        <ActionWrapper>
          <UpvoteButton>
            <UpvoteButtonContent>
              <Icon name="upTriangle" size={18}></Icon>Upvote ({props.upvotes})
            </UpvoteButtonContent>
          </UpvoteButton>
          <ReplyButton>
            <ReplyButtonContent>Reply</ReplyButtonContent>
          </ReplyButton>
          <ShareButton>
            <ShareButtonContent>Share</ShareButtonContent>
          </ShareButton>
          <DateLabel>{props.date}</DateLabel>
          <MoreButton>
            <MoreButtonContent>
              <Icon name="more" size={15} viewBox="0 -2 24 24" />
            </MoreButtonContent>
          </MoreButton>
        </ActionWrapper>
        <CommentItemsContainer>
          {props.commentItems.map((oComment, index) => (
            <Item
              key={index}
              name={oComment.name}
              introduction={oComment.introduction}
              avatar={oComment.avatar}
              href={oComment.href}
              karmas={oComment.karmas}
              titleItems={oComment.titleItems}
              contentItems={oComment.contentItems}
              upvotes={oComment.upvotes}
              date={oComment.date}
              commentItems={oComment.commentItems}
              layer={props.layer + 1}
              maxLayer={2}
            ></Item>
          ))}
        </CommentItemsContainer>
      </ContentContainer>
    </Component>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  introduction: PropTypes.string,
  avatar: PropTypes.string,
  href: PropTypes.string,
  karmas: PropTypes.number,
  titleItems: PropTypes.arrayOf(PropTypes.string),
  contentItems: PropTypes.arrayOf(PropTypes.string),
  layer: PropTypes.number,
  maxLayer: PropTypes.number,
  upvotes: PropTypes.number,
  date: PropTypes.string,
  commentItems: PropTypes.object,
};
Item.defaultProps = {
  maxLayer: 2,
  titleItems: [],
  contentItems: [],
  commentItems: [],
};
const KarmaBadgeComponent = styled.span`
  margin-left: 10px;
`;
function KarmaBadge(props) {
  return (
    <KarmaBadgeComponent>
      <svg width="12" height="12" viewBox="0 0 12 12">
        <g fill="none" fill-rule="evenodd">
          <circle
            stroke="#BB6829"
            stroke-width="0.5"
            fill="#EC984C"
            cx="6"
            cy="6"
            r="5.75"
          ></circle>
          <path
            d="M4.82 3.712v2.035l2.1-2.407c.1-.116.187-.2.258-.257A.447.447 0 017.46 3a.495.495 0 01.516.511c0 .172-.08.342-.24.51L6.433 5.376l1.5 2.36c.105.162.184.305.237.428.054.123.08.242.08.358 0 .13-.046.243-.14.338a.5.5 0 01-.374.14.593.593 0 01-.364-.105.872.872 0 01-.237-.28A17.102 17.102 0 016.96 8.3L5.696 6.16l-.876.922v1.2c0 .242-.05.422-.15.54A.49.49 0 014.28 9a.533.533 0 01-.458-.293.75.75 0 01-.06-.257 6.198 6.198 0 01-.012-.424V3.712c0-.237.047-.415.142-.534A.47.47 0 014.28 3c.16 0 .29.06.39.176.1.118.15.296.15.536z"
            fill="#5B2C08"
          ></path>
        </g>
      </svg>
    </KarmaBadgeComponent>
  );
}
KarmaBadge.propTypes = {
  points: PropTypes.number,
};
