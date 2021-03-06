import React from 'react';
import {userFields} from '../models/userFields';
import {contactFields, IContactsState, IStateItem} from '../models/contacts';
import {Icon} from 'ui/Icon';
import { cutUserInput } from '../utils/manipulateString';

const classNames = require('classnames');

export class Contacts extends React.Component {
    readonly state: IContactsState = {
        [userFields.PHONE]: {
            isValid: false,
            isEditing: false,
            value: '0995649254'
        },
        [userFields.EMAIL]: {
            isValid: false,
            isEditing: false,
            value: 'youremail@gmail.com'
        },
        [userFields.CITY]: {
            isValid: false,
            isEditing: false,
            value: 'City, State'
        }
    };

    onInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        const field = event.target;
        const isValid = !event.target.validity.patternMismatch && field.value.length > 0;
        this.setState({
            [field.name]: {
                value: field.value,
                isValid,
                isEditing: true
            }
        });
    }

    calculateInputClasses = ({ isValid }: IStateItem) => {
        return classNames(
            'edit-field-input',
            'edit-field-input_size_s',
            'edit-field-input_margin-left_13px',
            {
                'edit-field-input_border-color_success': isValid,
                'edit-field-input_border-color_failure': !isValid,
            }
        );
    }

    toggleEditing = ( fieldName: contactFields ) => {
        this.setState((state: Record<contactFields, IStateItem>) => {
            return {
                [fieldName]: {
                    value: state[fieldName].value,
                    isEditing: !state[fieldName].isEditing,
                    isValid: state[fieldName].isValid
                }
            };
        });
    }

    onSaveButtonClick = (fieldName: contactFields, isValid: boolean) => {
        if (!isValid) {
            return;
        }
        this.toggleEditing(fieldName);
    }

    render() {
        const { userPhone, userEmail, userLocation } = this.state;
        const {
            onInputChange,
            toggleEditing,
            calculateInputClasses,
            onSaveButtonClick,
        } = this;
        return (
            <section className="contacts">
                <h2 className="h2-text h2 h2_main-sections-layout h2_padding-top_0">Contacts</h2>
                <ul className="contacts-list contacts__contacts-list">
                    <li className="contacts-list__item">
                        <div className="contacts-list__description-icon-wrapper">
                            <Icon className="contacts-list__description-icon" id="phone"/>
                        </div>
                        { userPhone.isEditing ?
                            (<>
                                <input type="tel"
                                    className={ calculateInputClasses(userPhone) }
                                    name={ userFields.PHONE }
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                    maxLength={10}
                                    onChange={ onInputChange }
                                    value={ userPhone.value }
                                    autoFocus={ true }
                                    />
                                <button className="action-button contacts-list__action-button"
                                        type="button"
                                        onClick={ onSaveButtonClick.bind(this, userFields.PHONE, userPhone.isValid) }>
                                    <Icon className="action-button__action-icon" id="save"/>
                                    Save
                                </button>
                            </>) :
                            <p  className="contacts-list__item-info plain-text"
                                onClick={ toggleEditing.bind(this, userFields.PHONE) }>
                                { cutUserInput(userPhone.value, 40) }</p>
                        }
                    </li>
                    <li className="contacts-list__item">
                        <div className="contacts-list__description-icon-wrapper">
                            <Icon className="contacts-list__description-icon" id="email"/>
                        </div>
                        { userEmail.isEditing ?
                            (<>
                                <input type="email"
                                       className={ calculateInputClasses(userEmail) }
                                       name={ userFields.EMAIL }
                                       pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                                       maxLength={254}
                                       onChange={ onInputChange }
                                       value={ userEmail.value }
                                       autoFocus={ true }/>
                                <button className="action-button contacts-list__action-button"
                                        type="button"
                                        onClick={ onSaveButtonClick.bind(this, userFields.EMAIL, userEmail.isValid) }>
                                    <Icon className="action-button__action-icon" id="save"/>
                                    Save
                                </button>
                            </>) :
                                <p className="contacts-list__item-info plain-text"
                                   onClick={ toggleEditing.bind(this, userFields.EMAIL) }>{ cutUserInput(userEmail.value, 40) }</p>
                        }
                    </li>
                    <li className="contacts-list__item">
                        <div className="contacts-list__description-icon-wrapper">
                            <Icon className="contacts-list__description-icon" id="email"/>
                        </div>
                        { userLocation.isEditing ?
                            (<>
                                <input type="text"
                                       className={ calculateInputClasses(userLocation) }
                                       name={ userFields.CITY }
                                       pattern="[A-Z]{1}[a-z]+, ?[A-Z]{1}[a-z]+"
                                       maxLength={100}
                                       onChange={ onInputChange }
                                       value={ userLocation.value }
                                       autoFocus={ true }/>
                                <button className="action-button contacts-list__action-button"
                                        type="button"
                                        onClick={ onSaveButtonClick.bind(this, userFields.CITY, userLocation.isValid) }>
                                    <Icon className="action-button__action-icon" id="save"/>
                                    Save
                                </button>
                            </>) :
                            <p className="contacts-list__item-info plain-text"
                               onClick={ toggleEditing.bind(this, userFields.CITY) }>{ cutUserInput(userLocation.value, 40) }</p>
                        }
                    </li>
                </ul>
            </section>
        );
    }
}
