import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainComponent from './components/MainComponent';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {width:0, height: 0,};  

    this.updateDimensions = this.updateDimensions.bind(this);
  }


  /**
  * Calculate & Update state of new dimensions
  */
  updateDimensions() {

      let update_width  = window.innerWidth;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });

  }

  /**
   * Add event listener
   */
  componentDidMount() {
    
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  render() {
    var component;
    {
      if(this.state.width >= 980){
          component =  <div>
                <HeaderComponent footerComponent={<FooterComponent />}/>
                <MainComponent />           
          </div>
      }else{
        component = 
            <div>              
              <HeaderComponent footerComponent=''/>              
              <MainComponent />
              <FooterComponent />
          </div>
      }
    }
    return (
      
        <div className="App">
        {component}
        </div>
         
               
    );
  }
}

export default App;
