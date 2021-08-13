import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Icon from "@/ui/Icon/Icon";
import Checkbox from "@/ui/Checkbox/Checkbox";
import { useButton, useButtonInnerContent } from "../generic/useButton";
// import { useTextarea } from "../common/useTextarea";
import { TextareaComponent as Textarea, useTextarea } from "../generic/useTextarea";
import Avatar from "../generic/Avatar";

const Component = styled.form`
  display: flex;
  margin-top: 20px;
  width: 670px;
`;
const SendButtonProps = {
  height: 34,
  padding: "0 13px",
  backgroundColor: "#cc4d29",
  hoverBackgroundColor: "#e4461b",
};
const SendButtonContentProps = {
  color: "#fff",
  FW: 600,
  FS: 11,
  LH: 16,
};

export default function ReviewForm(props) {
  console.log("render -> ReviewForm");
  const [SendButton] = useButton({
    ...SendButtonProps,
  });
  const [SendButtonContent] = useButtonInnerContent({
    ...SendButtonContentProps,
  });
  return (
    <Component
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Avatar srcUrl={props.userAvatar} size={30}></Avatar>
      <ReviewInputContainer></ReviewInputContainer>
      <SendButton>
        <SendButtonContent>SEND</SendButtonContent>
      </SendButton>
    </Component>
  );
}
ReviewForm.propTypes = {
  userAvatar: PropTypes.string,
};
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 10px;
`;

// function ReviewInputContainer(props) {

//   const [showOtherContent, hideOtherContent, GhostInputOtherContent] = useGhost(
//     InputOtherContent,
//     false
//   );
//   const [inputValue, setInputValue] = React.useState("");
//   const [inputHeight, setInputHeight] = React.useState(32);
//   const handleInputChange = (e) => {
//     // console.log("-> handleChange in ReviewInputContainer", e.target.value);
//     if (e.target.value !== "") showOtherContent();
//     else hideOtherContent();
//     setInputValue(e.target.value)
//   };
//   React.useEffect(() => {
//     let numRowsOfContent = inputValue.split("\n").length;
//     setInputHeight((numRowsOfContent > 10 ? 10 : numRowsOfContent) * 20 + 12);
//   }, [inputValue]);
//   const computedHeight = React.useMemo(() => {
//     return `${inputHeight}px`;
//   }, [inputHeight]);
//   return (
//     <InputContainer>
//       <Textarea height={computedHeight} onChange={handleInputChange} placeholder="What do you think of this product?" />
//       <GhostInputOtherContent></GhostInputOtherContent>
//     </InputContainer>
//   );
// }
function ReviewInputContainer(props) {
  const [showOtherContent, hideOtherContent, GhostInputOtherContent] = useGhost(
    InputOtherContent,
    false
  );
  //with the hook useTextarea
  const [setInputValue, inputHeight, Textarea] = useTextarea({});
  const handleInputChange = (e) => {
    // console.log("-> handleChange in ReviewInputContainer", e.target.value);
    if (e.target.value !== "") showOtherContent();
    else hideOtherContent();
    setInputValue(e.target.value);
  };
  const computedHeight = React.useMemo(() => {
    return `${inputHeight}px`;
  }, [inputHeight]);
  return (
    <InputContainer>
      <Textarea
        height={computedHeight}
        onChange={handleInputChange}
        placeholder="What do you think of this product?"
      />
      <GhostInputOtherContent></GhostInputOtherContent>
    </InputContainer>
  );
}
const OtherContentWrapper = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const ShortcutReminder = styled.span`
  color: #6f6f6f;
  font-size: 13px;
  line-height: 20px;
  .icon {
    margin-left: 4px;
    margin-top: -12px;
    color: rgb(221, 218, 217);
  }
`;
const ShareOnTwitter = styled.div`
  position: relative;
  left: 70px;
`;
function InputOtherContent(props) {
  console.log("render ---> InputOtherContent");
  return (
    <OtherContentWrapper>
      <ShortcutReminder>
        {"@user, !product, ?makers"}
        <Icon name="query" size={10}></Icon>
      </ShortcutReminder>
      <ShareOnTwitter>
        <Checkbox
          label="Share on Twitter"
          size={18}
          iconSize={15}
          labelFontSize={13}
          iconColor="rgb(0,117,255)"
          rippleColor="rgba(0,0,0,0)"
          iconHoverColor="rgba(0,0,0,0)"
        ></Checkbox>
      </ShareOnTwitter>
    </OtherContentWrapper>
  );
}
const useGhost = (render, initialActive) => {
  const [active, setActive] = React.useState(initialActive || false);
  const show = () => {
    setActive(true);
  };
  const hide = () => {
    setActive(false);
  };
  const RenderComponent = render;
  const RenderGhost = (props) => {
    return (
      <React.Fragment>
        {active && <RenderComponent>{props.children}</RenderComponent>}
      </React.Fragment>
    );
  };
  return [show, hide, RenderGhost];
};
