import React, { Component } from 'react';
import GalleryComponent from './GalleryComponent';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Spinner from 'react-spinkit';
import NotificationSystem from 'react-notification-system';

const images = [
      {
        orgName: 'PORTICO S.A.C.',
        websiteUrl: 'http://portico.com.pe/',
        imgFullPath: '//haroldleon.com/images/fulls/portico_full.jpg',
        imgThumbPath: 'images/thumbs/portico.jpg',
        description: 'Es una empresa dedicada al desarrollo integral de proyectos de arquitectura, construcción, diseño de interiores y mobiliario...'
      },
      {
        orgName: 'HTF CONTRATISTAS S.A.C.',
        websiteUrl: 'http://htfcontratistas.com/',
        imgFullPath: 'http://haroldleon.com/images/fulls/htf_full.jpg',
        imgThumbPath: 'images/thumbs/htf.jpg',
        description: 'Empresa que ofrece servicios de gestión integral de proyectos, suministrando servicios de manera total o parcial; desde el concepto de Arquitectura y especialidades hasta la construcción e implementación de los espacios.'
      },
      {
        orgName: 'PROANPE S.A.C.',
        websiteUrl: 'http://proanpe.com/',
        imgFullPath: 'http://haroldleon.com/images/fulls/proanpe_full.jpg',
        imgThumbPath: 'images/thumbs/proanpe.jpg',
        description: 'Sus principales actividades se centran en el acopio, procesamiento, limpieza, selección y comercialización de productos andinos bajo estándares con certificaciones de calidad y buenas prácticas profesionales, con proyección tanto a nivel nacional como internacional.'
      },
      {
        orgName: 'GERENCIA DE PROYECTOS R&R S.A.C.',
        websiteUrl: 'http://gruporyr.pe/',
        imgFullPath: 'http://haroldleon.com/images/fulls/ryr_full.jpg',
        imgThumbPath: 'images/thumbs/ryr.jpg',
        description: 'Es una empresa trujillana correctamente constituida para desarrollarse en el sector construcción e inmobiliario.'
      },
      {
        orgName: 'iGO ADS',
        websiteUrl: 'http://igoads.org/',
        imgFullPath: 'http://haroldleon.com/images/fulls/igoads_full.jpg',
        imgThumbPath: 'images/thumbs/igoads.jpg',
        description: 'Es una potente herramienta web que permite administrar las campañas digitales de las empresas.'
      },
	  {
        orgName: 'eMailer APP',
        websiteUrl: 'http://104.155.177.231:9000/',
        imgFullPath: 'http://haroldleon.com/images/fulls/emailer_full.jpg',
        imgThumbPath: 'images/thumbs/emailer.jpg',
        description: 'Es una aplicación web que permite a las empresas hacer el tracking de los correos que envian a sus clientes en tiempo real. Para desarrollar esta aplicación se usaron herramientas como: NodeJs, ReactJs, Sequelize, y se encuentra alojada en Google Cloud.'
      }
  ]


class MainComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
            photoIndex: 0,
            isOpen: false,
            email: '', name: '', message: '',
            _notificationSystem: null,
    };


    this._addNotification = this._addNotification.bind(this);
    this.validateEmail = this.validateEmail.bind(this);

    this._handleClick = this._handleClick.bind(this);
    this._handleCloseGallery = this._handleCloseGallery.bind(this);
    this._handlePrevRequest = this._handlePrevRequest.bind(this);
    this._handleNextRequest = this._handleNextRequest.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleMessageChange = this._handleMessageChange.bind(this);
  }

  componentDidMount() {
    this.setState({_notificationSystem: this.refs.notificationSystem});
    var spin = this.refs.spinner;
    spin.className = "SpinnerHidden";
  }

  _addNotification(event) {
    event.preventDefault();
    
  }

  _handleCloseGallery(){
    console.log('carrando...');
     this.setState({ isOpen: false, photoIndex: 0,})
  }

  _handlePrevRequest(){
     
    const photoIndex = this.state.photoIndex;
    this.setState({
        photoIndex: (photoIndex + images.length - 1) % images.length,
    })

  }

  _handleNextRequest(){
    const photoIndex = this.state.photoIndex;
    this.setState({
        photoIndex: (photoIndex + 1) % images.length,
    })
  }

  _handleClick(ev){
    ev.preventDefault();
    let opened;
    if(this.state.isOpen == true){
        opened = false;
    }else{
      opened = true;
    }
    var position = parseInt(ev.target.name);

    if(position == null){
      position = 0;
    }

    this.setState({
      isOpen: opened,
      photoIndex: position,
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  _handleNameChange(ev){
      ev.target.classList.remove("InputWarning");
      this.setState({name: ev.target.value});
  }

  _handleMessageChange(ev){
    ev.target.classList.remove("InputWarning");
      this.setState({message: ev.target.value});
  }

  _handleEmailChange(ev){
    ev.target.classList.remove("InputWarning");
     this.setState({email: ev.target.value});
  }

  _handleSubmit(ev){

     
      var spin = this.refs.spinner; 

      spin.className = "SpinnerBlock";

      var exito = true;

       ev.preventDefault();
      if(this.state.name==='' || this.state.name===null){
        var inputName = this.refs.name;
        inputName.classList.add('InputWarning');
        exito = false;
      }

      if(this.state.email==='' || this.state.email===null){
        var inputEmail = this.refs.email;
        inputEmail.classList.add('InputWarning');
        exito = false;
      }else{
        if (!this.validateEmail(this.state.email)) {
          var inputEmail = this.refs.email;
          inputEmail.classList.add('InputWarning');
          exito = false;
        }
      }

      if(this.state.message==='' || this.state.message===null){
        var inputMessage = this.refs.message;
        inputMessage.classList.add('InputWarning');
        exito = false;
      }

     
      
      if(exito === false){
          spin.className = "SpinnerHidden";
        return false;
      }
      

      return fetch('http://haroldleon.com/email/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailAddress: this.state.email,
          fullName: this.state.name,
          message: this.state.message,
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          var title, level;
          if(responseJson.success===true){
              title = 'Gracias por contactarme :D';
              level = 'info';
          }else{
              title = 'Mensaje no enviado :(';
              level = 'warning';
          }

          
          console.log(responseJson);
          setTimeout(() => {
            spin.className = "SpinnerHidden";
            this.state._notificationSystem.addNotification({
              message: responseJson.message,
              level: level,
              title: title,
              autoDismiss: 5,
            });
          }, 2000);
        })
        .catch((error) => {
          
          
          console.log(error);
          setTimeout(() => {
            spin.className = "SpinnerHidden";
            this.state._notificationSystem.addNotification({
              message: error.message,
              level: 'error',
              title: 'Hubo un error :(',
              autoDismiss: 5,
            });
          }, 2000);
        });

      

  }


  render() {
    var _this = this;
    var works = images.map(function(item, i){
                  
                  // return statement goes here
                    return <Col xs={12} sm={6} md={6}  key={'images'+i}><article className="work-item">
                            <a href={item.imgFullPath} name={i} className="image fit thumb"  onClick={_this._handleClick}>
                            <img src={item.imgThumbPath} alt="" />
                            </a>
                            <h3><a href={item.websiteUrl} rel="nofollow" target="_blank">{item.orgName}</a></h3>
                            <p>Website: <a href={item.websiteUrl} rel="nofollow" target="_blank">{item.websiteUrl}</a></p>
                            <p>Descripci&oacute;n:  {item.description}</p>
                          </article></Col>;
                });

    return (
      
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Sobre m&iacute;</h2>
            </header>
            <p>Soy egresado de la <em title="Universidad Nacional de Trujillo">U.N.T.</em>, cuento con más de dos a&ntilde;os experiencia en el an&aacute;lisis y desarrollo de sistemas. Durante este tiempo he aprendido a usar nuevas tecnologías y herramientas que me han facilitado el desarrollo de sistemas web que van desde simples hasta distribuidos.</p>

<p>Mi motivaci&oacute;n ha sido desarrollar sistemas robustos y escalables, pero del lado del servidor; sin embargo, las tendencias actuales muestran que para que una aplicación sea exitosa, los sistemas deben tener un alto grado de <em title="La usabilidad se refiere a la facilidad con la que los usuarios pueden interactuar con las interfaces del sistema. (Fuente: Wikipedia)">usabilidad</em> y <em title="Hablar de Accesibilidad Web es hablar de un acceso universal a la Web, independientemente del tipo de hardware, software, infraestructura de red, idioma, cultura, localización geográfica y capacidades de los usuarios. (Fuente: W3C)">accesibilidad</em>. Es así que descubr&iacute; Reactjs, llevo unos cuantos meses us&aacute;ndola y estoy fascinado con todo su potencial. Espero, con el transcurso del tiempo, llegar a desarrollarme como un Desarrollador <em title="Es un programador con un perfil técnico muy completo que conoce bien tanto lo referente a back-end como lo referente a front-end, se maneja en sistemas y sabe entender. (Fuente: bbvaopen4u.com)">Full Stack</em>.</p>
            
          </section>

          <section id="two">
            <h2>Trabajos Realizados</h2>
            <Grid fluid>
              <Row >

              {
                works
                
              }

              </Row>
            </Grid>


            <GalleryComponent isOpen={this.state.isOpen} photoIndex={this.state.photoIndex} images={images} 
            handleClose={this._handleCloseGallery} handlePrev={this._handlePrevRequest} handleNext={this._handleNextRequest}/>
          </section>

          <section id="three">
            <h2>Cont&aacute;ctame</h2>
            <p>Env&iacute;ame alg&uacute;n mensaje o sugerencia.</p>
            <Grid fluid>
              <Row>
                  <Col xs={12} sm={8} md={8}>
                      <form onSubmit={this._handleSubmit}>
                        <Row className="uniform 50%">
                          <Col xs={12} sm={6} md={6}>
                            <input type="text" name="name" id="name" ref="name" placeholder="Nombres" onChange={this._handleNameChange}/></Col>
                          <Col xs={12} sm={6} md={6}>
                            <input type="email" name="email" id="email" ref="email" placeholder="Email" onChange={this._handleEmailChange}/></Col>
                          <Col xs={12} sm={12} md={12}>
                            <textarea name="message" id="message" ref="message" placeholder="Mensaje" rows="4" onChange={this._handleMessageChange}></textarea>
                          </Col>
                        </Row>
                        <br />
                        <ul className="actions">
                          <li><input type="submit" value="Enviar Mensaje"/></li>
                          <li ref="spinner"><Spinner spinnerName="three-bounce" /></li>
                        </ul>
                      </form>
                      
                  </Col>

                  <Col xs={12} sm={4} md={4}>
                      <ul className="labeled-icons">
                        <li>
                          <h3 className="icon fa-home"><span className="label">Direcci&oacute;n</span></h3>Trujillo, La Libertad 13012<br />
                          Per&uacute;
                        </li>
                        <li>
                          <h3 className="icon fa-mobile"><span className="label">Tel&eacute;fono</span></h3>
                          (+51) 944 401 455
                        </li>
                        <li>
                          <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                          <a href="mailto:hleond20(@)gmail(.)com" title="Cambia (arroba) por @ y (punto) por .">hleond20 (arroba) gmail (punto) com</a>
                        </li>
                      </ul>
                  </Col>

              </Row>
            </Grid>
          
          </section>
         <NotificationSystem ref="notificationSystem" />

        </div>
         
               
    );
  }
}

export default MainComponent;
