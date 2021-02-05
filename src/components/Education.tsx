import React, {useState} from 'react';
import uniqid from 'uniqid';
import { Icon } from '../ui/Icon';
import { cutUserInput } from '../utils/manipulateString';
import { IEducationState, educationFields } from '../models/education';

const classNames = require('classnames');

export function Education() {
    const educationListInitial: IEducationState[] = [
        {
            id: uniqid(),
            major: 'YOUR DEGREE NAME / MAJOR ',
            university: 'University Name',
            years: '2015-2020'
        }
    ];
    const [educationList, setEducationList] = useState(educationListInitial);
    const [isFormVisible, setIsFormVisible ] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible((prevState => !prevState));
    }
    const removeEducationItem = (id: string) => {
        setEducationList(
            educationList.filter((educationItem) => !(educationItem.id === id))
        );
    }
    const addEducationItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newEducationItem: IEducationState = {
            id: uniqid(),
            major: '',
            university: '',
            years: ''
        };
        const form = event.target as HTMLFormElement;
        [...form.elements].forEach((element) => {
            if (element.nodeName === "INPUT") {
                const rawElement = element as HTMLInputElement;
                const elementName = rawElement.name as educationFields;
                newEducationItem[elementName] = rawElement.value;
            }
        });
        setEducationList((prevState) => {
            const newState = prevState.slice();
            newState.push(newEducationItem)
            return newState;
        });
    }

    return (
    <section className="education">
        <h2 className="h2-text h2 h2_main-sections-layout">Education</h2>
        <ul className="education-list">
            { educationList.map(({ id, major, university, years }) => {
                return <li key={ id }
                           className="education-list__item plain-text">
                    <ul className="fields-list">
                        <li className="fields-list__item">{ cutUserInput(major, 65) }</li>
                        <li className="fields-list__item">{ cutUserInput(university, 65) }</li>
                        <li className="fields-list__item">{ cutUserInput(years, 65) }</li>
                    </ul>
                    <button className="icon-button"
                            type="button"
                            onClick={ () => removeEducationItem(id) }>
                        <Icon className="icon-button__action-icon" id="cross-x"/>
                    </button>
                </li>
            }) }
        </ul>
        <button className="action-button education__action-button"
                type="button"
                onClick={ () => { if (!isFormVisible) toggleFormVisibility() } }>
            <Icon className="action-button__action-icon" id="plus"/>
            Add
        </button>
        <form className={ classNames(
            "add-education-form",
            'education__add-education-form',
            { 'add-education-form_display_none': !isFormVisible }
            ) }
              onSubmit={ addEducationItem }>
            <label className="add-education-form__label">
                <p className="plain-text">Major:</p>
                <input
                       type="text"
                       className="edit-field-input edit-field-input_size_s add-education-form__edit-field-input"
                       required={ true }
                       name="major"/>
            </label>
            <label className="add-education-form__label">
                <p className="plain-text">University:</p>
                <input type="text"
                       className="edit-field-input edit-field-input_size_s add-education-form__edit-field-input"
                       required={ true }
                       name="university"/>
            </label>
            <label className="add-education-form__label">
                <p className="plain-text">Years:</p>
                <input type="text"
                       className="edit-field-input edit-field-input_size_s add-education-form__edit-field-input"
                       required={ true }
                       pattern="[0-9]{4}-[0-9]{4}"
                       name="years"/>
            </label>
            <div className="control-buttons">
                <button className="action-button add-education-form__action-button"
                        type="submit">
                    <Icon className="action-button__action-icon" id="save"/>
                    Save
                </button>
                <button className="action-button action-button_margin-left_13px add-education-form__action-button"
                        type="button"
                        onClick={ () => { toggleFormVisibility() } }>
                    <Icon className="action-button__action-icon" id="cross-x"/>
                    Cancel
                </button>
            </div>
        </form>
    </section>);
}