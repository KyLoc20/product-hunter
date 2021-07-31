import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  //todo due to nextjs ServerError: document is not defined, DO NOT USE IT UNLESS IT IS MOUNTED
  const el = document.getElementById(props.target);
  if (!el) return null;
  else
    return ReactDOM.createPortal(
      <React.Fragment>{props.children}</React.Fragment>,
      el
    );
}
Modal.propTypes = {
  target: PropTypes.string.isRequired, //the id of the mounted element
};

const useModal = (target) => {
  const [active, setActive] = React.useState(false);
  const show = () => {
    setActive(true);
  };
  const hide = () => {
    setActive(false);
  };
  const RenderModal = (props) => {
    return (
      <React.Fragment>
        {active && <Modal target={target}>{props.children}</Modal>}
      </React.Fragment>
    );
  };
  return {
    show,
    hide,
    RenderModal,
  };
};
export { useModal, Modal };
