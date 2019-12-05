import React from 'react';

class Icon extends React.Component {
  
    onMouseOver(event) {
          this.props.onMouseOverEvent(this.props.name);
    }
    
    onMouseOut(event) {
          this.props.onMouseOutEvent(event);
    }
  
    render() {
      return (
        <a href="/" onMouseOver={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseOut.bind(this)}>
          <svg className="icon icon-bubble icon-larger">
            <use xlinkHref={ '#' + this.props.name }></use>
          </svg>
        </a>
      )
    }
  
};

export default Icon;