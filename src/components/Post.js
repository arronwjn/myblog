import React from 'react';


class Post extends React.Component {
  componentWillMount(){
    console.log(this.props)
  }
  render () {
    return(
      <div>
        <div>
         post
         {this.props.params.title}
        </div>

      </div>
    )
  }
}
export default Post;
