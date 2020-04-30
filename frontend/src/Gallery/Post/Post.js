import * as React from "react";


class Post extends React.Component {
    render() {
        return(
            <div>
                <img width={"25%"} src={this.props.imgUrl} alt=""/>
            </div>
        )
    }
}

export default Post;
