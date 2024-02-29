import { Component } from 'react';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';
import products from './Products';

export default class Store extends Component {
  constructor() {
    super()
    this.state = {  
      iconView: 'view_module'      
    };
    this.products = products
    this.onSwitch = this.onSwitch.bind(this);
  }
  
  onSwitch() {
    this.setState({iconView: this.state.iconView === 'view_module' ? 'view_list' : 'view_module'})
  }

  render() {
    return (
      <div className="container">
        <IconSwitch 
          icon={this.state.iconView}
          onSwitch={this.onSwitch}
        />
        {
        this.state.iconView === "view_module"
        ? (<ListView items={this.products} />)
        : (<CardsView cards={this.products} />)
        }
      </div>
    )
  }
}
