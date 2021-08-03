import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const Component = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 30px 0;
  justify-content: space-between;
`;
const Image = styled.img`
  margin-left: 10px;
  width: 100px;
  height: 100px;
`;
export default function Header(props) {
  return (
    <Component>
      <Image src={props.coverUrl} alt="cover" ></Image>
    </Component>
  );
}
Header.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  coverUrl: PropTypes.string,
  pricingType: PropTypes.string,
  topicItems: PropTypes.arrayOf(PropTypes.string),
  rank: PropTypes.number,
  rankDate: PropTypes.string,
};
Header.defaultProps = {
  topicItems: [],
};
