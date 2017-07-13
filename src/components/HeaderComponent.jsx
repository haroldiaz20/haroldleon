import React, { Component } from 'react';
import logo from '../logo.svg'
import avatar from '../assets/images/harold_avatar.jpg';


class HeaderComponent extends Component {

  constructor(props){
    super(props);

  }



  render() {

    return (
      
        <header id="header">
            <div className="inner">
                <a href="#" className="image avatar">
                  <img src={avatar} alt="harold leon" />
                </a>
                <h1><strong>Harold Le&oacute;n D&iacute;az</strong>, <br />Desarrollador Web & M&oacute;vil.<br /> <a href="https://open.spotify.com/user/haroldiaz20/playlist/1v5YQS1I4oDrEfwfYT3r4h" rel="nofollow" target="_blank">Shoegazing</a> & <a href="http://www.imdb.com/list/ls059968061/" rel="nofollow" target="_blank">sci-fi</a>.</h1>
                
            </div>
            {this.props.footerComponent}
        </header>
         
               
    );
  }
}

export default HeaderComponent;
