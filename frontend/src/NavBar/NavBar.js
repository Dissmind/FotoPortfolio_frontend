import * as React from "react";

import './NavBar.css'
import ChooseGroupButton from "./ChooseGroupButton/ChooseGroupButton";


class NavBar extends React.Component {

    state = {
        categories: [
            'Women',
            'Love story',
            'Wedding'
        ]
    }

    render() {
        return(
            <div className="root">
                {
                    this.state.categories.map((category) =>
                        <ChooseGroupButton
                            category={category}
                            changeTitle={this.props.changeTitle}
                        ></ChooseGroupButton>
                    )
                }
            </div>
        )
    }
}

export default NavBar;
