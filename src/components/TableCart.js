import React from 'react';

class TableCart extends React.Component {

    makeTableRow = (arr) => {
       
        return arr.map((item, i) =>(
            <tr key={i}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toLocaleString()}</td>
                <td>${(item.price*item.quantity).toLocaleString()}</td>
                <td><button onClick={()=>this.props.handleRemoveItem(i)}>Remove Item</button></td>
            </tr>
        ));
    }

    sumItems = (arr) => {
        let total = 0;
        arr.forEach(item => {
            total = item.price*item.quantity + total;
        });
        return total;
    }

    render(){
        return(
            <table>
                <caption>Your tiems</caption>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Cost</th>
                        <th>Total Cost</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.makeTableRow(this.props.cart)}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">Total:</th>
                        <td>${this.sumItems(this.props.cart).toLocaleString()}</td>                        
                    </tr>
                </tfoot>
            </table>
        );
    }
}

export default TableCart;