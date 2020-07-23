import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


class Dog extends Component {

    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        this.props.history.goBack();
    }


    render() {

        const data = this.props.data;
        const facts = data.facts.map(fact =>
            <p key={uuid()}>{fact}</p>
        );

        return (
            <div className="Dog">
                <img src={data.src} alt={`${data.name} the dog`}/>
                <h1>{data.name}</h1>
                <h2>{data.age}</h2>
                {facts}
                <button onClick={this.handleBack}>Go back</button>
            </div>
        )
    }
}

export default withRouter(Dog);