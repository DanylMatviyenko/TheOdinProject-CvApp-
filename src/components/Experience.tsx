import React, { useState } from 'react';
import {Icon} from '../ui/Icon';

export function Experience() {
    const [userExperience, setUserExperience]  = useState(
        'WRITE YOUR JOB TITLE HERE\n' +
        'In 2 lines, summarize your main responsibilities using past tense and provide information about the organization.'
    );
    const [isEditing, setIsEditing] = useState(false);

    const onTxtAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserExperience(event.target.value);
    }

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    }

    return (
        <section className="experience">
            <h2 className="h2-text h2 experience__h2">Experience</h2>
            { isEditing ? (
                <>
                <textarea name="experience"
                          className="experience__textarea plain-text"
                          value={userExperience}
                          onChange={onTxtAreaChange}/>
                <button className="action-button experience__action-button"
                        type="button"
                        onClick={toggleEditing}>
                    <Icon className="action-button__action-icon" id="save"/>
                    Save
                </button>
                </>
            ) :
                <p className="plain-text experience__plain-text"
                   onClick={ toggleEditing }>
                    {userExperience}
                </p> }
        </section>
    );
}