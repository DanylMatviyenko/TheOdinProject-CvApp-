import { userFields } from './userFields';

export interface IRequiredFields {
    [userFields.NAME]: string;
    [userFields.PROFESSION]: string;
    isFieldEditing: IIsFieldEditing;
}
interface IIsFieldEditing {
    [userFields.NAME]: boolean;
    [userFields.PROFESSION]: boolean;
}