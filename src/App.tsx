import * as React from 'react';
import { IRequiredFields } from './models/userHeader';
import { userFields } from './models/userFields';
import {Contacts} from './components/Contacts';
import {Education} from './components/Education';
import {Experience} from './components/Experience';

const classNames = require('classnames');

//create small functional components for header and contacts section
class App extends React.Component {
  readonly state: IRequiredFields = {
      [userFields.NAME]: 'emma watson',
      [userFields.PROFESSION]: 'your professional title',
      isFieldEditing: {
          [userFields.NAME]: false,
          [userFields.PROFESSION]: false,
      }
  }

  startEditing = (fieldName: string): void => {
      this.setState({
          isFieldEditing: {
              [fieldName]: true
          }
      });
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
          [event.target.name]: event.target.value
      });
  }

  onInputBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const targetInput = event.target;
      const inputValue = !targetInput.value ? 'Empty' : targetInput.value;
      this.setState(() => {
          return {
              [targetInput.name]: inputValue,
              isFieldEditing: {
                  [targetInput.name]: false
              }
          }
      });
  }

  calculateInputClass = (fieldName: string): string => {
    return classNames(
        'edit-field-input',
        {
            'edit-field-input_size_l': fieldName === userFields.NAME,
            'edit-field-input_size_m': fieldName === userFields.PROFESSION,
            'edit-field-input_text-align_center': fieldName === userFields.PROFESSION
        }
    );
  }

  render() {
      const {
          userName,
          userProfession,
          isFieldEditing
      }  = this.state;
    return (
        <div className="wrapper">
            <header className="header">
                <div className="container header__container">
                    <div className="header__user-field">
                        { isFieldEditing[userFields.NAME] ?
                            (<input className={ this.calculateInputClass(userFields.NAME) }
                                    name={ userFields.NAME }
                                    value={ userName }
                                    onChange={ this.onInputChange }
                                    onBlur={ this.onInputBlur }
                                    autoFocus={ true }
                                    maxLength={ 100 }/>) :
                            <h1 className="h1-text h1"
                                onClick={
                                    this.startEditing.bind(this, userFields.NAME)
                                }>{ userName }</h1>
                        }
                    </div>
                    <div className="header__user-field header__user-field_margin_20px">
                        { isFieldEditing[userFields.PROFESSION] ?
                            (<input className={ this.calculateInputClass(userFields.PROFESSION) }
                                    name={ userFields.PROFESSION }
                                    value={ userProfession }
                                    onChange={ this.onInputChange }
                                    onBlur={ this.onInputBlur }
                                    autoFocus={ true }/>) :
                            <h2 className="h2-text h2 h2-text_align_center"
                                onClick={
                                    this.startEditing.bind(this, userFields.PROFESSION)
                                }>{ userProfession }</h2>

                        }
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="container main__container">
                    <div className="side-container">
                        <Contacts />
                        <Education/>
                    </div>
                    <div className="main-container">
                        <Experience />
                    </div>
                </div>
            </main>
        </div>
    );
  }
}

export default App;
