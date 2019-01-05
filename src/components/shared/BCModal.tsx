import React, { Component } from 'react';
import { Modal } from 'antd';

interface ModalProps {
  title?: string;
  component: any
  footer?: any
}

interface State {
  showModal: boolean;
};

class BcModal extends Component<ModalProps, State> {
  constructor(props: State & ModalProps) {
    super(props);
    this.state = {
      showModal: true
    }
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({showModal: false})
  }
  render() {
    const { showModal } = this.state;
    const { title, component, footer } = this.props;
    return (
      <Modal
        title={title}
        visible={showModal}
        onCancel={this.closeModal}
        footer={footer || []}
      >
        {component({closeModal:this.closeModal, ...this.props})}
      </Modal>
  )}
}

export { BcModal }