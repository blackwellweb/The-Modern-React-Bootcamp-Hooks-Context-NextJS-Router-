import React, { Component } from 'react';


class NewBoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = { height: '', width: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


    render() {
        return(
            <form className="NewBoxForm">
            <h1>Make a box</h1>
            <label htmlFor="height">Box height:</label>
            <input
                id="height"
                name="height"
                value={this.state.height}
                onChange={this.handleChange}
            />
            <label htmlFor="width">Box height:</label>
            <input
                id="width"
                name="width"
                value={this.state.width}
                onChange={this.handleChange}
            />
        </form>
        );
    }

}

export default NewBoxForm;
