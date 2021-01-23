import { userFields } from './user';

export interface IAppState {
    [userFields.NAME]: string;
    [userFields.PROFESSION]: string;
    isFieldEditing: IHeaderEditing;
}
interface IHeaderEditing {
    [userFields.NAME]: boolean;
    [userFields.PROFESSION]: boolean;
}