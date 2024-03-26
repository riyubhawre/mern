import React, { Component } from 'react';

class PostList extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
          console.log(response)
          this.setState({post:response.data})
        })
        .catch(error=>{
          console.log(error)
          this.setState({errorMsg:"this is error"})
        })
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default PostList
