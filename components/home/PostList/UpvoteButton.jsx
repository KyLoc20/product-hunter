import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useButton } from "@/components/generic/Button";
import { withBoxCSS } from "@/components/generic/Box";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import Icon from "@/ui/Icon/Icon";
const Wrapper = styled.span`
  margin-left: 20px;
`;
const Setting = {
  variant: "outlined",
  height: 74,
  padding: "0 8px",
  backgroundColor: "#fff",
  hoverBackgroundColor: "#f9f9f9",
  borderColor: "#d9e1ec",
};
const Content = styled.span`
  ${[withBoxCSS({ AI: "center", column: true }), customTextCSS("button13")]};
  width: 46px;
  .icon {
    margin-bottom: -8px;
  }
`;
export default function UpvoteButton(props) {
  const [Button] = useButton({
    ...Setting,
  });
  return (
    <Wrapper>
      <Button>
        <Content>
          <Icon name="upTriangle" size={25}></Icon>
          {props.upvotes}
        </Content>
      </Button>
    </Wrapper>
  );
}
UpvoteButton.propTypes = {
  upvotes: PropTypes.number,
};
