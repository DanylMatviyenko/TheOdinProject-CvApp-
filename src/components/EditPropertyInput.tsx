import React from "react";
import { IEditInput } from '../models/editInput'

export class EditPropertyInput extends React.Component<IEditInput> {
    readonly state = {
        inputValue: this.props.inputValue
    }
    onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            inputValue: event.target.value
        });
    }
    onInputBlur = (): void => {
        this.props.editHandler(this.props.fieldName, this.state.inputValue)
    }
    render() {
        if(this.props.isEditing) {
            return (
                <input className="edit-input"
                       value={ this.state.inputValue }
                       onChange={this.onInputChange}
                       onBlur={this.onInputBlur} autoFocus={ true }/>
            )
        }
        return null;
    }
}