import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Narbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';
import { withStyles } from "@material-ui/styles";

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
    },
    colors: {
        height: "90%"
    }
    
}

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeFormat(val) {
        this.setState({ format: val })
    }


    render() {

        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[this.state.level].map(color =>
            <ColorBox
                background={color[format]}
                key={color.id}
                name={color.name}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette={true}
            />
        );

        return (
            <div className={classes.Palette}>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showingAllColors
                />
                <div className={classes.colors}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}


export default withStyles(styles)(Palette);
