import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {

    render(){
        return (
            <div className='BoxList'>
                <NewBoxForm />
            </div>
        )
    }
}


export default BoxList;