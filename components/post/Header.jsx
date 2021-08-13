import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import RankBanner from "./RankBanner";
import Button from "@/ui/Button/Button";
const Component = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 160px;
  padding: 30px 15px;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  height: 100px;
`;
const BasicText = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Name = styled(BasicText)`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`;
const Description = styled(BasicText)`
  margin-top: 5px;
  line-height: 24px;
  color: rgb(111, 111, 111);
`;
const OtherInfo = styled.div`
  display: flex;
  margin-top: 9px;
  height: 30px;
`;
const BasicButtonInnerContent = styled.span`
  line-height: 15px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: normal;
`;
const PriceTypeButtonWrapper = styled.span`
  margin-top: 5px;
  margin-right: 8px;
`;
const PriceTypeButtonInnerContent = styled(BasicButtonInnerContent)`
  font-weight: 600;
  color: #cc4d29;
`;
const TopicButtonWrapper = styled.span`
  margin-top: 5px;
`;
const TopicButtonInnerContent = styled(BasicButtonInnerContent)`
  color: rgb(111, 111, 111);
`;
export default function Header(props) {
  return (
    <Component>
      <Image src={props.coverUrl} alt="cover"></Image>
      <HeaderContent>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
        <OtherInfo>
          <PriceTypeButtonWrapper>
            <Button
              variant="outlined"
              height={24}
              padding="0 8px"
              backgroundColor="#f8f8f8"
              borderColor="#e8e8e8"
              hoverBorderColor="#cc4d29"
            >
              <PriceTypeButtonInnerContent>
                🏷️ {props.pricingType}
              </PriceTypeButtonInnerContent>
            </Button>
          </PriceTypeButtonWrapper>
          <TopicButtonWrapper>
            <Button
              variant="outlined"
              height={24}
              padding="0 8px"
              backgroundColor="#f8f8f8"
              hoverBackgroundColor="#ebebeb"
              borderColor="#e8e8e8"
            >
              <TopicButtonInnerContent>
                {props.topicItems[0]}
              </TopicButtonInnerContent>
            </Button>
          </TopicButtonWrapper>
        </OtherInfo>
      </HeaderContent>
      <RankBanner rank={props.rank} date={props.rankDate}></RankBanner>
    </Component>
  );
}
Header.propTypes = {
  name: PropTypes.string,
  coverUrl: PropTypes.string,
  pricingType: PropTypes.string,
  topicItems: PropTypes.arrayOf(PropTypes.string),
  rank: PropTypes.number,
  rankDate: PropTypes.string,
};
Header.defaultProps = {
  topicItems: [],
};
