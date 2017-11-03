import React from 'react';
import ReactDOM from 'react-dom';
import styles from './hover.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

class Hover extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName={`cell item-${this.props.index + 1}`}>
        {
          this.props.top &&
          <div styleName='top'>
            <span  className={`fa fa-${this.props.top}`}></span>
          </div>
        }
        <div styleName='mask'></div>
        <div styleName='child'>
          <div styleName='icons'>
            {this.props.icons.map((elem, index) => (
              <span key={index} className={`fa fa-${elem}`}></span>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default CSSModules(Hover, styles, {allowMultiple: true})
{/*
    <div  styleName={`cell`}>
      <div styleName='mask'></div>
      <div styleName='child'>
        <span className='fa fa-eye'></span>
        <span className='fa fa-heart'></span>
        <span className='fa fa-heart-o'></span>
      </div>
    </div>
    */
}
