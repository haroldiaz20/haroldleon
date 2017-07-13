import React, { Component } from 'react';

import logo from '../logo.svg'


class FooterComponent extends Component {

  constructor(props){
    super(props);

  }



  render() {

    return (
      
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
           
            <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
          </ul>
          <ul className="copyright">
          <li>Este sitio web ha sido constru&iacute;do utilizando la asombrosa herramienta <em>"create-react-app"</em>.  <img src={logo} className="App-logo"/></li>
          </ul>
          <ul className="copyright">
            <li>&copy; Harold Le&oacute;n</li>
            <li>Dise&ntilde;o: <a href="http://html5up.net" rel="nofollow" target="_blank">HTML5 UP</a></li>
            <li>Im&aacute;genes: <a href="http://unsplash.com" rel="nofollow" target="_blank">Unsplash</a></li>
          </ul>
        </div>
      </footer>

         
               
    );
  }
}

export default FooterComponent;
