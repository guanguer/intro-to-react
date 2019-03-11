import React, { ReactElement } from "react";
import { createPortal } from "react-dom";

class Modal extends React.Component {
  private el = document.createElement("div");
  private modalRoot = document.getElementById("modal");

  public componentDidMount() {
    if (this.modalRoot) {
      this.modalRoot.appendChild(this.el);
    }
  }

  public componentWillUnmount() {
    if (this.modalRoot) {
      this.modalRoot.removeChild(this.el);
    }
  }

  public render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
