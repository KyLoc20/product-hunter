import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Avatar from "../generic/Avatar";
import Paper from "../generic/Paper";
const Component = styled.section`
  width: 330px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const HunterComponent = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
`;
const BasicHeader = styled.div`
  line-height: 16px;
  margin-bottom: 10px;
  font-size: 11px;
  color: #6f6f6f;
`;
const HunterHeader = styled(BasicHeader)``;
function Hunter(props) {
  //the founders of the product
  return (
    <HunterComponent>
      <HunterHeader>HUNTER</HunterHeader>
      <UserItem
        name={props.hunter?.name}
        introduction={props.hunter?.introduction}
        avatarUrl={props.hunter?.avatar}
      ></UserItem>
    </HunterComponent>
  );
}
Hunter.propTypes = {
  hunter: PropTypes.shape({
    name: PropTypes.string,
    introduction: PropTypes.string,
    avatar: PropTypes.string,
  }),
};
const MakerComponent = styled.div`
  width: 290px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const MakerHeader = styled(BasicHeader)`
  margin-top: 10px;
`;
const MakerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 142px;
  overflow-y: auto;
  .user-item:not(:first-child) {
    margin-top: 20px;
  }
`;
function Maker(props) {
  return (
    <MakerComponent>
      <MakerHeader>MAKERS</MakerHeader>
      <MakerItemContainer>
        {props.makerItems.map((item, index) => (
          <UserItem
            key={index}
            name={item.name}
            introduction={item.introduction}
            avatarUrl={item.avatar}
          ></UserItem>
        ))}
      </MakerItemContainer>
    </MakerComponent>
  );
}
Maker.propTypes = {
  makerItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      introduction: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
};
Maker.defaultProps = {
  makerItems: [],
};
const UserItemComponent = styled.div`
  display: flex;
  height: 40px;
`;
const NoWrapText = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 10px;
`;
const UserName = styled(NoWrapText)`
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
`;
const UserIntroduction = styled(NoWrapText)`
  line-height: 20px;
  font-size: 13px;
  color: #6f6f6f;
`;
function UserItem(props) {
  return (
    <UserItemComponent className="user-item">
      <Avatar srcUrl={props.avatarUrl} size={30}></Avatar>
      <UserContent>
        <UserName>{props.name}</UserName>
        <UserIntroduction>{props.introduction}</UserIntroduction>
      </UserContent>
    </UserItemComponent>
  );
}
UserItem.propTypes = {
  name: PropTypes.string,
  introduction: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default function Producer(props) {
  return (
    <Component>
      <Paper>
        <ContentContainer>
          <Hunter hunter={props.hunter}></Hunter>
          <Maker makerItems={props.makerItems}></Maker>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
Producer.propTypes = {
  hunter: PropTypes.shape({
    name: PropTypes.string,
    introduction: PropTypes.string,
    avatar: PropTypes.string,
  }),
  makerItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      introduction: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
};
