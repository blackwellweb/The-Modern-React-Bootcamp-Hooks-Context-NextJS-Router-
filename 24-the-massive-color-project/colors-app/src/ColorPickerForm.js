import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import styles from './styles/ColorPickerForm';


class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = { currentColor: "teal", newColorName: "", };
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }

    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor);
        this.setState({newColorName: ""});
    }

    render() {
        const { paletteIsFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div className={classes.ColorPickerForm}>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={(newColor) => this.updateCurrentColor(newColor)}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
                    <TextValidator
                        value={newColorName}
                        placeholder="Color Name"
                        className={classes.colorNameInput} 
                        variant={'filled'}
                        margin='normal'
                        name='newColorName'
                        onChange={this.handleChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={[
                            'This field is required',
                            'Color name must be unique',
                            'Color already used!'
                        ]}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={paletteIsFull}
                        className={classes.addColor}
                        style={{ backgroundColor: paletteIsFull ? "gray" : currentColor }}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}


export default withStyles(styles)(ColorPickerForm);