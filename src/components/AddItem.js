import React from 'react';

class AddItem extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        // Get the form values
        //Quantity
        let quantity = e.target.elements.quantity.value*1; // *1-->to convert to number 

        //get the products and price
        let productAndPrice = e.target.elements.selectItem.value;

        //Split the string via the "|"
        productAndPrice = productAndPrice.split('|');

        //get the product
        const product = productAndPrice[0];
        //get the price
        const price = productAndPrice[1];

        this.props.handleAddItem(product, price, quantity)
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="selectItem">Select Item:</label>
                    <select name="selectItem" id="selectItem">

        {this.props.products.map( (product, i) => 
            <option key={i} value={`${product.item}|${product.price}`}>{product.item} : ${product.price.toLocaleString()}</option> )}
                        {/* <option value="Camera|500">Camera : $500</option> */}

                    </select>
                    <label htmlFor="quantity"> Quantity: </label>
                    <input type="number"
                            name="quantity"
                            id="quantity" 
                            min="1"
                            max="20"
                            defaultValue="1"
                            /> &nbsp;
                    <button type="submit">Add Item</button>
                        
                </form>
            </div>
        );
    }
}

export default AddItem;