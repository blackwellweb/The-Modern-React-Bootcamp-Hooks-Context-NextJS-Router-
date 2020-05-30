import React, { Component } from 'react';


class NewBoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = { height: '', width: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(evt) {
        evt.preventDefault();

        // This will pass the state (height and width) up to the parent component BoxList.js and it will use it 
        this.props.addBox(this.state);

        this.setState({ height: '', width: '' });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


    render() {
        return (
            <form className="NewBoxForm" onSubmit={this.handleSubmit}>
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
                <button>Make a new box</button>
            </form>
        );
    }

}

export default NewBoxForm;
