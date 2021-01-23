import * as React from 'react';
import { IAppState } from './models/app';
import { userFields } from './models/user';
//import { EditPropertyInput } from './components/EditPropertyInput';
//import { Contacts } from './components/Contacts';
const classNames = require('classnames');

class App extends React.Component {
  readonly state: IAppState = {
      [userFields.NAME]: 'emma watson',
      isFieldEditing: {
          [userFields.NAME]: false,
          [userFields.PROFESSION]: false
      },
      [userFields.PROFESSION]: 'your professional title'
  }

  toggleEditing = (fieldName: string): void => {
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
            'edit-field-input_size_m': fieldName === userFields.PROFESSION
        }
    );
  }

  render() {
      const { userName, userProfession, isFieldEditing }  = this.state;
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
                                    autoFocus={ true }/>) :
                            <h1 className="h1-text h1"
                                onClick={
                                    this.toggleEditing.bind(this, userFields.NAME)
                                }>{ userName }</h1>
                        }
                    </div>
                    <div className="header__user-field header__user-field_margin_20px">
                        { isFieldEditing[userFields.PROFESSION] ?
                            (<input className={ this.calculateInputClass(userProfession) }
                                    name={ userFields.PROFESSION }
                                    value={ userProfession }
                                    onChange={ this.onInputChange }
                                    onBlur={ this.onInputBlur }
                                    autoFocus={ true }/>) :
                            <h2 className="h2-text h2 h2-text_align_center"
                                onClick={
                                    this.toggleEditing.bind(this, userFields.PROFESSION)
                                }>{ userProfession }</h2>

                        }
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="container">
                    <aside className="aside">
                    </aside>
                </div>
            </main>
        </div>
    );
  }
}

export default App;
