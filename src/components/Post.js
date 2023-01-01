import React, { Component, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    let id = this.props.params.post_id
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(result => {
      this.setState({
        post: result.data
      }) 
    })
    
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading Post...</div>
    )
    return (
      <div className="container">{post}</div>      
    )
  }
}

export default(props) => (<Post {...props} params={useParams()} />)
