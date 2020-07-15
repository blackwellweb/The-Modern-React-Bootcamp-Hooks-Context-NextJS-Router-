import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class VendingMachine extends Component {
    render(){
        return(
            <div className="VendingMachine">
                <h1>I am the  VendingMachine</h1>
                <Link exact to="/soda">Soda</Link>
                <Link exact to="/chips">Chips</Link>
                <Link exact to="/sardines">Sardines</Link>
            </div>
        )
    }
}


export default VendingMachine;