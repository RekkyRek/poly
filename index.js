import React, { Component } from 'react';

import dti from 'dom-to-image';
import './style/main.min.css';

class Poly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: '',
      _id: `polypane_${Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}`
    };

    this.updateBackdrop = this.updateBackdrop.bind(this);
  }

  updateBackdrop() {
    let that = this;
    
    console.log(that.state, document.getElementById(that.state._id))
    
    document.getElementById(that.state._id).style.opacity = 0;
    
    dti.toPng(document.body)
      .then(function (dataUrl) {
        console.log(that.state)
        document.getElementById(that.state._id).style.opacity = 1;
        that.setState({ backdrop: dataUrl })
      })
      .catch(function (error) {
        document.getElementById(that.state._id).style.opacity = 1;
        console.error('couldn\'t capture dom :(', error);
      });
  }

  componentDidMount() {
    this.updateBackdrop();
  } 

  render() {
    let size = window.innerWidth;
    if(this.refs.polypane != undefined) {
      size = this.refs.polypane.clientHeight * this.refs.polypane.clientHeight / this.refs.polypane.clientWidth;
    }
    return (
      <div className="poly" ref="polypane" id={this.state._id} style={this.props.style}>
        <div className="polyBlur" style={{ background: `url(${this.state.backdrop})`, filter: `blur(${this.props.blur}px)` }}></div>
        <div className="polyTint" style={{ background: `rgba(${this.props.tint.join(',')})` }}></div>
        <div className="polyNoise"></div>
        <div className="polyContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Poly;
