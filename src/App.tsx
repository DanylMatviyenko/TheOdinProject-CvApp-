import React from 'react';
import { IAppState } from './models/user';
import { EditPropertyInput } from './components/EditPropertyInput';
import './App.scss';

class App extends React.Component {
  readonly state: IAppState = {
      userName: {
          value: 'emma watson',
          isEditing: false
      },
      userProfession: {
          value: 'your professional title',
          isEditing: false
      }
  }
  /*constructor(props: object) {
    super(props);
  }*/
  updateTextField = (fieldName: string, fieldValue: string): void => {
      this.setState({
          [fieldName]: {
              value: fieldValue,
              isEditing: false
          }
      });
  }
  toggleEditing = (fieldName: string): void => {
      this.setState({
          [fieldName]: {
              isEditing: true
          }
      });
  }
  render() {
    return (
        <header className="header">
          <div className="container header__container">
              <div className="header__user-field">
                  <h1 className="h1-text h1"
                      //add enums instead userName
                      onClick={
                          this.toggleEditing.bind(this, 'userName')
                      }>{ this.state.userName.value }</h1>
                  <EditPropertyInput fieldName="userName"
                                     inputValue={ this.state.userName.value }
                                     editHandler={ this.updateTextField }
                                     isEditing={ this.state.userName.isEditing }/>
              </div>
              <div className="header__user-field">
                  <h2 className="h2-text h2"
                      onClick={
                          this.toggleEditing.bind(this, 'userProfession')
                      }>{ this.state.userProfession.value }</h2>
                  <EditPropertyInput fieldName="userProfession"
                                     inputValue={ this.state.userProfession.value }
                                     editHandler={ this.updateTextField }
                                     isEditing={ this.state.userProfession.isEditing }/>
              </div>
          </div>
        </header>
    );
  }
}

export default App;
