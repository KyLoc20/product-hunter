import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useButton } from "@/components/generic/Button";
import { withBoxCSS } from "@/components/generic/Box";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
import Icon from "@/ui/Icon/Icon";
const Wrapper = styled.span``;
const Setting = {
  variant: "outlined",
  height: 24,
  padding: "0 8px",
  backgroundColor: "#fff",
  hoverBackgroundColor: "#e8e8e8",
  borderColor: "#d9e1ec",
  contentColor: "#4b587c",
};
const Content = styled.span`
  ${[withBoxCSS({ AI: "center" }), customTextCSS("buttonLite")]};
  letter-spacing: 0.035em;
  .icon {
    margin-right: 2px;
  }
`;
export default function CommentButton(props) {
  const [Button] = useButton({
    ...Setting,
  });
  return (
    <Wrapper>
      <Button>
        <Content>
          <Icon name="message1" size={12}></Icon>
          {props.comments}
        </Content>
      </Button>
    </Wrapper>
  );
}
CommentButton.propTypes = {
  comments: PropTypes.number,
};
