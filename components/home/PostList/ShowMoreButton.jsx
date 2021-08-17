import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useButton } from "@/components/generic/Button";
import { withBoxCSS } from "@/components/generic/Box";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import Icon from "@/ui/Icon/Icon";
const Wrapper = styled.div`
  ${[withBoxCSS({ JC: "center" }), customTextCSS("buttonLite")]};
  width: 100%;
  height: 46px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .icon {
    margin-top: 1px;
    margin-right: 4px;
  }
`;
export default function ShowMoreButton(props) {
  const handleClick = (e) => {
    props.onClick?.(e);
  };
  return (
    <Wrapper onClick={handleClick}>
      <Icon name="down2" size={12} color="rgb(204, 200, 199)"></Icon>
      {`SHOW ${props.moreNum} MORE`}
    </Wrapper>
  );
}
ShowMoreButton.propTypes = {
  moreNum: PropTypes.number,
  onClick: PropTypes.func,
};
