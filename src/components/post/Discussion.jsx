import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Icon from "../../../ui/Icon/Icon";
import Paper from "../Paper";
import useButton from "../common/useButton";
const Component = styled.section`
  width: 710px;
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
export default function Discussion(props) {
  const [SendButton]=useButton({height:34,padding:"0 13px",backgroundColor:"#cc4d29",hoverBackgroundColor:"#e4461b"})
  return (
    <Component>
      <Header>
        <span className="title">DISCUSSION</span>
        <span className="follow-discussion">
          FOLLOW DISCUSSION <Icon name="query" size={12}></Icon>
        </span>
      </Header>
      <SendButton>SEND</SendButton>
    </Component>
  );
}
Discussion.propTypes = {};
