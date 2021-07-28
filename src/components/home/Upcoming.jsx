import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "../Paper";
import Item from "./UpcomingItem";
import Button from "../../../ui/Button/Button";
const Component = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 330px;
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
  .power {
    margin-left: 4px;
    line-height: 20px;
    font-size: 13px;
    font-weight: 400;
    color: rgb(111, 111, 111);
  }
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
`;
export default function Upcoming(props) {
  return (
    <Component>
      <Header>
        Upcoming Products <span className="power">Powered by Ship</span>
      </Header>
      <Paper borderRadius={5}>
        <ContentContainer>
          {props.items.map((value, index) => (
            <Item
              key={value.name}
              first={index === 0}
              name={value.name}
              description={value.description}
              coverUrl={value.cover}
              follows={value.follows}
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
              <ButtonContent>VIEW ALL</ButtonContent>
            </Button>
          </ViewAllButtonWrapper>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
Upcoming.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      cover: PropTypes.string,
      follows: PropTypes.number,
      first: PropTypes.bool,
    })
  ),
};
Upcoming.defaultProps = {
  items: [],
};
