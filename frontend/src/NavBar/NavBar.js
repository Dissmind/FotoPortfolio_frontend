import * as React from "react";

import './NavBar.css'
import ChooseGroupButton from "./ChooseGroupButton/ChooseGroupButton";


class NavBar extends React.Component {

    state = {
        categories: [
            'Women',
            'Love story',
            'Wedding'
        ],

        styles: {
            openOrClose: {}
        }
    }



    closeNavBar = () => {


        this.setState({styles: {openOrClose: {
                    'width': '1%'
                }}});
    }


    render() {



        return(
            <div
                className="root"
                style={this.state.styles.openOrClose}
            >
                <button
                    onClick={this.closeNavBar}
                >Тест батон</button>
                <h3
                    onClick={this.props.changeTitle.bind(this, 'About me')}
                >About me</h3>
                <br/>

                {
                    this.state.categories.map((category) =>
                        <ChooseGroupButton
                            category={category}
                            changeTitle={this.props.changeTitle}
                        ></ChooseGroupButton>
                    )
                }

                <br/>
                <h3
                    onClick={this.props.changeTitle.bind(this, 'Contact')}
                >Contact</h3>
            </div>
        )
    }
}

export default NavBar;
