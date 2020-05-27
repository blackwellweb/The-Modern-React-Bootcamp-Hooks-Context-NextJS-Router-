import React, { Component } from 'react';


class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Milk', qty: '2 gallons' },
                { name: 'Bread', qty: '2 loaves' },
            ]
        }
    };


    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li>
                        {item.name}:{item.qty}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        return(
            <div>
                <h1>ShoppingList</h1>
                {this.renderItems()}
            </div>
        )
    }



}






export default ShoppingList;
