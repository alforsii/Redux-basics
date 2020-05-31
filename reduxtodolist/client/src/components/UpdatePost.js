import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class UpdatePost extends Component {
  state = {
    loading: false,
    visible: false,
    title: this.props.post.title,
    body: this.props.post.body,
    errMessage: '',
  };

  handleSubmit = async () => {
    try {
      this.setState({ loading: true });
      const { title, body } = this.state;
      await this.props.updatePost(this.props.post._id, { title, body });

      this.handleOk();
    } catch (err) {
      console.log(err);
      this.setState({ errMessage: err.message });
    }
  };

  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      if (e.target.name === 'title') {
        this.body.focus();
        return;
      } else {
        this.submitButton.focus();
        return;
      }
    }
  };

  handleChange = (e) => {
    e.persist();

    this.setState((prevState) => ({
      //1.using ref
      title: this.title.value,
      body: this.body.value,
      // 2.regular handle event
      // [e.target.name]: e.target.value
    }));
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: false, visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    // const { title, body} = this.state
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Update post
        </Button>
        <Modal
          visible={visible}
          title="Update post"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              cancel
            </Button>,
            <Button
              id="submit-btn"
              key="submit"
              type="primary"
              loading={loading}
              ref={(input) => (this.submitButton = input)}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>,
          ]}
        >
          {/* <input type="text" name="title" onChange={this.handleChange} ref={(value) => this.title = value }  placeholder="Enter title"/>
          <input type="text" name="body" onChange={this.handleChange} ref={(value) => this.body = value }  placeholder="Enter body"/> */}
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            ref={(value) => (this.title = value)}
            value={this.state.title}
            placeholder="Enter title"
          />

          <input
            type="text"
            name="body"
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            ref={(value) => (this.body = value)}
            value={this.state.body}
            placeholder="Enter body"
          />
        </Modal>
      </div>
    );
  }
}

export default UpdatePost;
