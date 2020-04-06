import React from 'react';
import { app, products } from '../data/shopping-spree-data';
import Header from './Header';
import Balance from './Balance';
import TableCart from './TableCart.js';
import AddItem from './AddItem.js';

class ShoppingApp extends React.Component {

  state = {
    balance: app.limit,
    cart: []
  }

  handleAddItem = (product, price, quantity) => {

    const productObj = {product, price, quantity};

    this.setState((prevState) => {
      const updatedCart = [...prevState.cart]
      updatedCart.push(productObj);

      const updatedBalance = prevState.balance - productObj.price * productObj.quantity;

      return {
        cart: updatedCart,
        balance: updatedBalance
      };
    })
  }

  handleRemoveItem = (index) => {

    this.setState((prevState) => {

      const updatedCart = [...prevState.cart]
      
      const updatedBalance = prevState.balance + updatedCart[index].price * updatedCart[index].quantity;
      updatedCart.splice(index, 1);

      return {
        cart: updatedCart,
        balance: updatedBalance
      };
    })

  }

  render(){
    return (
      <div className="App">
        <Header title={app.title} />
        <Balance balance={this.state.balance} />
        {this.state.cart.length === 0 ? 
          <p>Add some items</p> : <TableCart cart={this.state.cart} handleRemoveItem={this.handleRemoveItem}/>}
        <AddItem products={products} handleAddItem={this.handleAddItem}/>
      </div>
    );
  }
    
  
}

export default ShoppingApp;
