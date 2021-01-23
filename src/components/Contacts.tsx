import React from 'react';
import {userFields} from '../models/user';
import {IContactsState} from '../models/contacts';

export class Contacts extends React.Component {
    readonly state: IContactsState = {
        [userFields.PHONE]: '0995649254',
        [userFields.EMAIL]: 'youremail@gmail.com',
        [userFields.CITY]: 'City, State'
    };
    render() {
        return (
            <section className="contacts">
                <h2 className="h2-text">Contacts</h2>
                <ul className="contacts-list">
                    <li className="contacts-list__item">
                        <div className="contacts-list__item-icon"></div>
                        <p className="contacts-list__item-info plain-text">{ this.state[userFields.PHONE] }</p>

                    </li>
                    <li className="contacts-list__item">
                        <div className="contacts-list__item-icon"></div>
                        <p className="contacts-list__item-info plain-text">{ this.state[userFields.EMAIL] }</p>
                    </li>
                    <li className="contacts-list__item">
                        <div className="contacts-list__item-icon"></div>
                        <p className="contacts-list__item-info plain-text">{ this.state[userFields.CITY] }</p>
                    </li>
                </ul>
            </section>
        );
    }
}