import * as React from "react";

const classNames = require('classNames');

export class ContactInput extends React.Component {
    /*readonly state: IContactState = {
        inputValue: this.props.inputValue,
        isValid: false
    }
    onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            inputValue: event.target.value
        });
    }
    onInputBlur = (): void => {
        const inputValue = !this.state.inputValue ? null : this.state.inputValue;
        this.setState({
            //isValid: this.props.pattern.test();
        });
        if(inputValue && this.props.pattern.test(inputValue)) {
            this.props.editHandler(this.props.fieldName, inputValue);
        }
    }
    calculateInputClass = (): string => {
        const fieldName = this.props.fieldName;
        return classNames(
            'edit-field-input',
            {
                'edit-field-input_size_l': fieldName === userFields.NAME,
                'edit-field-input_size_m': fieldName === userFields.PROFESSION
            }
        );
    }
    render() {
        const inputClass = this.calculateInputClass();
        if(this.props.isEditing) {
            return (
                <input className={ inputClass }
                       value={ this.state.inputValue }
                       onChange={this.onInputChange}
                       onBlur={this.onInputBlur}
                       autoFocus={ true }/>
            )
        }
        return null;
    }*/
}
