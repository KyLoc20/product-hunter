import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Icon from "../../ui/Icon/Icon";
import Button from "../../ui/Button/Button";
import SearchInput from "./SearchInput";
const BasicAppBar = styled("section")`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  z-index: 100;
`;
const Component = styled(BasicAppBar)`
  position: sticky;
  top: -12px;
  padding-bottom: 20px;
  padding-right: 20px;
  height: 80px;
  background: #fff;
  box-shadow: 0 0 1px 1px rgba(33, 41, 63, 0.1);
`;
const BasicWrapper = styled("div")`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`;
const LogoWrapper = styled(BasicWrapper)``;
const Logo = styled("span")`
  width: 40px;
  height: 40px;
  background-image: url(/logo.png);
  background-size: cover;
  background-position: center;
`;
const SearchInputWrapper = styled(BasicWrapper)``;
const NavigationWrapper = styled("div")`
  display: flex;
  flex: 1;
`;
const Menu = styled(BasicWrapper)`
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: rgb(75, 88, 124);
  cursor: pointer;
`;
const UserGuideWrapper = styled("div")`
  display: flex;
`;
const HowToPost = styled(BasicWrapper)`
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  background: linear-gradient(227deg, #ff4582, #e12e0d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background: linear-gradient(227deg, #e12e0d, #e00249);
    -webkit-background-clip: text;
  }
`;
const SignIn = styled(BasicWrapper)``;
function SignInButton(props) {
  return (
    <SignIn>
      <Button>Sign In</Button>
    </SignIn>
  );
}
const SignUp = styled(BasicWrapper)`
  button .text {
    font-weight: 600;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
  }
`;
// "#f64900"
function SignUpButton(props) {
  return (
    <SignUp>
      <Button
        height={40}
        padding={"8px 16px"}
        depressed
        backgroundColor={"linear-gradient(227deg, #f64900, #f64900)"}
        hoverBackgroundColor={"linear-gradient(227deg,#ff4582,#e12e0d)"}
      >
        <span className="text">Sign Up</span>
      </Button>
    </SignUp>
  );
}
export default function AppBar(props) {
  return (
    <Component className="app-bar">
      <LogoWrapper>
        <Logo className="logo"></Logo>
      </LogoWrapper>
      <SearchInputWrapper>
        <SearchInput></SearchInput>
      </SearchInputWrapper>
      <NavigationWrapper>
        <Menu>Products</Menu>
        <Menu>Community</Menu>
        <Menu>Tools</Menu>
        <Menu>Jobs</Menu>
        <Menu>About</Menu>
      </NavigationWrapper>
      <UserGuideWrapper>
        <HowToPost>How to post a product?</HowToPost>
        <SignInButton></SignInButton>
        <SignUpButton></SignUpButton>
      </UserGuideWrapper>
    </Component>
  );
}
