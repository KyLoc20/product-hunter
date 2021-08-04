import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const Component = styled.div`
  display: flex;
  height: 50px;
  padding: 0 15px 0 10px;
  align-items: center;
  background: #f9f9f9;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  cursor: pointer;
`;
const Badge = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  .value {
    position: absolute;
    color: rgb(239, 239, 239);
    font-size: 13px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
  }
`;

const RankContent = styled.div`
  display: flex;
  margin-left: 5px;
  flex-direction: column;
  line-height: 20px;
  white-space: nowrap;
  color: rgb(111, 111, 111);
  font-size: 13px;
  .rank-text {
    font-weight: 600;
  }
`;
function RankBadge(props) {
  return (
    <Badge>
      <span className="value">{props.rank}</span>
      <svg width="36" height="36" viewBox="0 0 36 36">
        <g transform="translate(8 4)" fill="none" fill-rule="evenodd">
          <path
            d="M4.33 16.364L.328 24.9c-.126.258.007.42.427.34l3.258-.708a.244.244 0 01.317.17l1.467 3.007c.14.324.302.39.428.133l4.26-8.934-6.155-2.544zm12.34 0l4.002 8.536c.133.258-.007.42-.427.34l-3.258-.708a.246.246 0 00-.317.17l-1.467 3.007c-.14.324-.295.39-.428.133l-4.26-8.934 6.155-2.544z"
            fill="#DE7818"
            fill-rule="nonzero"
          ></path>
          <path
            d="M9.298 21.392c0 .007-.014 0-.029 0a10.44 10.44 0 01-5.97-2.742c-.008-.008-.03-.015-.023-.023l.184-.39c.008-.015.022.022.03.03 1.577 1.466 3.767 2.388 6.007 2.66.008 0 .023 0 .023.008l-.222.457z"
            fill="#B35454"
            fill-rule="nonzero"
          ></path>
          <circle
            fill="#9B9B9B"
            fill-rule="nonzero"
            cx="10.5"
            cy="10.489"
            r="10.489"
          ></circle>
          <circle
            fill="#949494"
            fill-rule="nonzero"
            cx="10.5"
            cy="10.489"
            r="9.045"
          ></circle>
          <circle
            fill="#B6B6B6"
            fill-rule="nonzero"
            cx="10.75"
            cy="10.75"
            r="8.75"
          ></circle>
          {/* <path
            d="M7.19 9.018v.036h1.969v-.041c0-.698.504-1.19 1.23-1.19.697 0 1.155.416 1.155 1.037 0 .498-.317.926-1.56 2.074l-2.67 2.514v1.436h6.427v-1.676h-3.563v-.111l1.395-1.284c1.5-1.336 2.05-2.168 2.05-3.105 0-1.494-1.265-2.508-3.158-2.508-1.962 0-3.275 1.137-3.275 2.818z"
            fill="#EFEFEF"
          ></path> */}
          <path
            d="M12.97 3.089a7.604 7.604 0 01.353 14.698c2.035-1.555 3.384-4.209 3.384-7.224 0-3.184-1.504-5.963-3.738-7.474z"
            fill-opacity="0.2"
            fill="#FFF"
            fill-rule="nonzero"
          ></path>
          <path
            d="M11.702 21.392c.007.007.022 0 .029 0 2.293-.288 4.4-1.21 5.986-2.728.007-.007.029-.014.022-.022l-.185-.39c-.007-.015-.022.022-.03.029-1.577 1.467-3.773 2.374-6.021 2.646-.008 0-.023 0-.023.008l.222.457z"
            fill="#B35454"
            fill-rule="nonzero"
          ></path>
        </g>
      </svg>
    </Badge>
  );
}
RankBadge.propTypes = {
  rank: PropTypes.number,
};
export default function RankBanner(props) {
  if (!props.rank) return null;
  else
    return (
      <Component>
        <RankBadge rank={props.rank}></RankBadge>
        <RankContent>
          <span className="rank-text">{`#${props.rank} Product of the day`}</span>
          <span className="date-text">{props.date}</span>
        </RankContent>
      </Component>
    );
}
RankBanner.propTypes = {
  rank: PropTypes.number,
  date: PropTypes.string,
};
RankBanner.defaultProps = {};
