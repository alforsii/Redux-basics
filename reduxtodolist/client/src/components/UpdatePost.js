import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { Modal, Button } from 'antd';


class UpdatePost extends Component {
    state = {
        loading: false,
        visible: false,
        title:this.props.post.title,
        body:this.props.post.body,
        errMessage: ''
      };

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const { title, body } = this.state
        await this.props.updatePost( this.props.post._id,{ title, body})

        this.handleOk()
    } catch (err) {
        console.log(err)
        this.setState({errMessage: err.message})
    }

  }

  handleChange = (e) => {
    e.persist()
    this.setState(prevState=> ({
        [e.target.name]: e.target.value
    }))
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
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
            <Button key="submit" type="primary" loading={loading} onClick={this.handleSubmit}>
              Submit
            </Button>,
          ]}
        >
          <input type="text" name="title" onChange={this.handleChange} value={this.state.title} placeholder="Enter title"/>
          <input type="text" name="body" onChange={this.handleChange} value={this.state.body} placeholder="Enter body"/>
        </Modal>
      </div>
    );
  }
}


export default UpdatePost