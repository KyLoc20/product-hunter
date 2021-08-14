import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "../generic/Paper";
import Item from "./HiringItem";
import Button from "@/ui/Button/Button";
import { withBoxCSS } from "../generic/Box";
import { composeCSS } from "@/utilities/style";
import { withTextCSS } from "../generic/Text";
const Component = styled.section`
  ${[withBoxCSS({ column: true })]};
  width: 330px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 21px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
`;
const ViewAllButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 13px;
  button {
    transition: all 0.3s ease;
  }
`;
const ButtonContent = styled.span`
  display: flex;
  justify-content: center;
  width: 262px;
  color: #cc4d29;
  font-size: 11px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: normal;
`;

const PostJob = styled.div`
  display: flex;
  margin-top: 20px;
  color: rgb(111, 111, 111);
  font-size: 13px;
  line-height: 17px;
  font-weight: 600;
  .post {
    cursor: pointer;
    margin-left: 2px;
    color: #cc4d29;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default function Hiring(props) {
  console.log("Hiring PostJob", PostJob);
  console.log("Hiring Component", Component);
  return (
    <Component>
      <Header>Hiring now</Header>
      <Paper borderRadius={5}>
        <ContentContainer>
          {props.items.map((value) => (
            <Item
              key={value.name}
              name={value.name}
              description={value.description}
              location={value.location}
            ></Item>
          ))}
          <ViewAllButtonWrapper>
            <Button
              variant="outlined"
              backgroundColor="#fff"
              hoverBackgroundColor="#fff"
              borderColor="#e8e8e8"
              hoverBorderColor="#cc4d29"
              height={34}
              padding="0 13px"
            >
              <ButtonContent>VIEW ALL JOBS</ButtonContent>
            </Button>
          </ViewAllButtonWrapper>
          <PostJob>
            Hiring?<span className="post">Post a job</span>
          </PostJob>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
Hiring.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
    })
  ),
};
Hiring.defaultProps = {
  items: [],
};
