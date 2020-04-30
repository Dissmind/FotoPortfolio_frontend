import * as React from "react";


class ChooseGroupButton extends React.Component {
    render() {
        return(
            <div>
                <h3
                    onClick={this.props.changeTitle.bind(this, this.props.category)}
                >{this.props.category}</h3>
            </div>
        )
    }
}

export default ChooseGroupButton;
