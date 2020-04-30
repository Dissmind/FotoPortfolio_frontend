import React from 'react';
import logo from './logo.svg';
import './App.css';


import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";




class App extends React.Component {
  state = {
    actualData: {
      title: ''
    }
  }

  changeTitle = (_title) => {
    this.setState({actualData: {title: _title}})
  }

  render() {
    return (
        <div className="App">
          <NavBar
              changeTitle={this.changeTitle}
          ></NavBar>

          <Header></Header>

          <Gallery
              title={this.state.actualData.title}
          ></Gallery>

          <Footer></Footer>
        </div>
    );
  }
}

export default App;
