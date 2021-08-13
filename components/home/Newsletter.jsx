import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "../generic/Paper";
import Button from "@/ui/Button/Button";
const Component = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
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
  width: 100%;
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #e8e8e8;
`;
const NewsMedia = styled.div`
  width: 330px;
  height: 110px;
  video {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
const AutoWrapText = styled.p`
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
`;
const NewsTitle = styled(AutoWrapText)`
  display: flex;
  align-items: center;
  padding: 10px;
  line-height: 32px;
  font-size: 20px;
  font-weight: 300;
`;

const Subscribe = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
`;
const SubscribeReminder = styled(AutoWrapText)`
  font-weight: 700;
  margin-bottom: 10px;
}
`;
const EmailInputWrapper = styled.div`
  margin-bottom: 10px;
  input {
    width: 290px;
    height: 34px;
    box-sizing: border-box;
    padding: 0 10px;
    border-radius: 3px;
    border: 1px solid #e8e8e8;
    cursor: text;
    user-select: none;
    font-weight: 400;
    font-size: 13px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 13px;
      line-height: 17px;
      color: #6f6f6f;
    }
`;
const SubscribeButtonWrapper = styled.div`
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
  width: 264px;
  color: #fff;
  font-size: 11px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: normal;
`;
export default function Newsletter(props) {
  return (
    <Component>
      <Header>Newsletter</Header>
      <Paper borderRadius={5}>
        <ContentContainer>
          <Preview>
            <NewsMedia>
              <video
                width="330"
                height="110"
                poster="https://ph-files.imgix.net/78e0caaa-173a-46e0-94f4-0926f3d934d7.gif?auto=compress&fm=webp&codec=mozjpeg&cs=strip&w=330&h=110"
                autoPlay
                loop
                disableRemotePlayback
                disablePictureInPicture
              ></video>
            </NewsMedia>
            <NewsTitle>$100M for no-code</NewsTitle>
          </Preview>
          <Subscribe>
            <SubscribeReminder>
              Get the best new products in your inbox, every day 👇
            </SubscribeReminder>
            <EmailInputWrapper>
              <input type="text" placeholder="Your email" />
            </EmailInputWrapper>
            <SubscribeButtonWrapper>
              <Button
                backgroundColor="#cc4d29"
                hoverBackgroundColor="#e4461b"
                height={34}
                padding="0 13px"
                depressed
              >
                <ButtonContent>SUBSCRIBE</ButtonContent>
              </Button>
            </SubscribeButtonWrapper>
          </Subscribe>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
Newsletter.propTypes = {};
Newsletter.defaultProps = {};
