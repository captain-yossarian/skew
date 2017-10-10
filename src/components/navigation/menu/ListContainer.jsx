import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './menuItems.scss';

class ListContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      deep:this.props.deep,
      container:'ListContainer'
    }
  }
  render(){
    return(
      <ul deep={this.props.deep} styleName={this.props.css}>
        {this.props.children}
      </ul>
    )
  }
}
export default CSSModules(ListContainer,styles, {allowMultiple: true})