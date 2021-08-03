import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Icon from "../../ui/Icon/Icon";
const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 30;
  background: rgba(0, 0, 0, 0.7);
`;
const ContentContainer = styled("main")`
  display: flex;
  justify-content: center;
  margin: 100px 0 40px;
  padding: 20px;
  width: 1100px;
  min-height: 100vh;
  z-index: 40;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.3);
  background: #f3f3f3;
  border-radius: 3px;
`;
const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 40px;
  height: 40px;
  z-index: 40;
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: rgb(204, 77, 41);
  }
  .icon {
    margin-top: -4px;
  }
`;
export default function ModalContainer(props) {
  const handleCloseModal = (e) => {
    //todo IMPORTANT to stopPropagation because it will trigger the parent components' onClick
    e.stopPropagation();
    props.onClose?.();
  };
  const handleKeepModalOpen = (e) => {
    e.stopPropagation();
  };
  return (
    <Container onClick={handleCloseModal}>
      <CloseButtonWrapper onClick={handleCloseModal}>
        <Icon name="cross1" size={12}></Icon>
      </CloseButtonWrapper>
      <ContentContainer onClick={handleKeepModalOpen}></ContentContainer>
    </Container>
  );
}
ModalContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
};
