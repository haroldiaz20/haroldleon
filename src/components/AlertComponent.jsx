import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';

class AlertComponent extends Component {

  constructor(props){
    super(props);
    this._addNotification = this._addNotification.bind(this);
    this.state = {
      _notificationSystem: null,
    }
  }

  _addNotification(event) {
    event.preventDefault();
    this.state._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'info',
      title: 'Gracias por contactarme :D'
    });
  }

  componentDidMount() {
    this.setState({_notificationSystem: this.refs.notificationSystem});
  }

  render(){
    return (
      <div>
        <button onClick={this._addNotification}>Add notification</button>
        <NotificationSystem ref="notificationSystem" />
      </div>
      );
  }

}


export default AlertComponent;