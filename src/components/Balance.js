import React from 'react';

class Balance extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.balance >= 0 ? 'You have a credit of' : 
                'You owe'}: ${Math.abs(this.props.balance).toLocaleString()}</p>
            </div>
        );
    }
}

export default Balance;