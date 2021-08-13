import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Icon from "@/ui/Icon/Icon";
const Component = styled("section")`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 225px;
  height: 40px;
  padding-left: 40px;
  padding-right: 20px;
  background: #f5f8ff;
  border-radius: 5px;
  cursor: text;
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
const IconWrapper = styled("div")`
  position: absolute;
  display: flex;
  top: 12px;
  left: 16px;
  .icon {
    cursor: default;
  }
`;
const InputWrapper = styled("div")`
  display: flex;
  align-items: center;
  flex: 1;
  input {
    width: 100%;
    height: 40px;
    border: none;
    cursor: text;
    user-select: none;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 400;
    font-size: 16px;
    background: transparent;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 13px;
      line-height: 17px;
      color: rgb(117, 117, 117);
    }
  }
`;
export default function SearchInput(props) {
  const inputRef = React.useRef();
  const [inputValue, setInputValue] = React.useState("");
  const [inputFocused, setInputFocused] = React.useState(false);
  const handleFocus = () => {
    setInputFocused(true);
  };
  const handleBlur = () => {
    setInputFocused(false);
  };
  const handleChangeInput = (e) => {
    console.log("handleChangeInput", e.target, e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <Component className="search-input" style={{}}>
      <IconWrapper>
        <Icon name="search1" size={16} color="rgba(75, 88, 124,0.5)"></Icon>
      </IconWrapper>
      <InputWrapper>
        <input
          type="text"
          ref={inputRef}
          placeholder="Search Product Hunter"
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChangeInput}
        />
      </InputWrapper>
    </Component>
  );
}
