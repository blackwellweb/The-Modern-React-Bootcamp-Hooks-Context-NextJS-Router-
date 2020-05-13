import React, { Component } from 'react'

class IconList extends Component {
    static defaultProps = {
        options: [
            'angry',
            'anchor',
            'archive',
            'at',
            'archway',
            'baby',
            'bell',
            'bolt',
            'bone',
            'car',
            'city',
            'cloud',
            'couch'
        ]
    };

    constructor(props) {
        super(props);
        this.state = { icons: ['bone', 'cloud'] };
        this.addIcon = this.addIcon.bind(this);
    }

    // addIcon() {
    //     let idx = Math.floor(Math.random() * this.props.options.length);
    //     let newIcon = this.props.options[idx];

    //     // This is Bad!!
    //     // Don’t update arrays in the state like this!!
    //     // We don’t want to directly mutate an object or array and then saving that to the state
    //     // Instead we what to make a copy of the existing data structure and update it
    //     let icons = this.state.icons;
    //     icons.push(newIcon);
    //     this.setState({icons: icons});
    // }

    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({icons: [...this.state.icons, newIcon]});

    }


    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
        return (
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        )
    }


}

export default IconList;