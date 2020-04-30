import * as React from "react";


class Post extends React.Component {
    render() {
        return(
            <img width={this.props.width} src={this.props.imgUrl} alt=""/>
        )
    }
}

export default Post;
