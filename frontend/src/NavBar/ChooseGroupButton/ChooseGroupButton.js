import * as React from "react";

import ActualData from "../../ActualData";


class ChooseGroupButton extends React.Component {

    // changeActulaTitle = () => {
    //     console.log(ActualData.title)
    //     ActualData.title = this.props.category
    // }

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
