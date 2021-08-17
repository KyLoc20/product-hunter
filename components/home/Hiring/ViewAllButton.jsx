import styled from "@emotion/styled";
import { useButton } from "@/components/generic/Button";
import { withBoxCSS } from "@/components/generic/Box";
import { withTextCSS, customTextCSS } from "@/components/generic/Text";
const Wrapper = styled.div`
  ${[withBoxCSS({ JC: "center" })]};
  padding: 0 13px;
  button {
    transition: all 0.3s ease;
  }
`;
const Setting = {
  variant: "outlined",
  height: 34,
  padding: "0 13px",
  backgroundColor: "#fff",
  borderColor: "#e8e8e8",
  hoverBorderColor: "#cc4d29",
  contentColor: "#cc4d29",
};
const Content = styled.span`
  ${[withBoxCSS({ JC: "center" }), customTextCSS("button")]};
  width: 262px;
`;
function ViewAllButton(props) {
  const [Button] = useButton({
    ...Setting,
  });
  return (
    <Wrapper>
      <Button>
        <Content>VIEW ALL JOBS</Content>
      </Button>
    </Wrapper>
  );
}
export { ViewAllButton };
