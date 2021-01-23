import { userFields } from './user';

export interface IContactsState {
    [userFields.PHONE]: string;
    [userFields.EMAIL]: string;
    [userFields.CITY]: string;
}
export interface IContactInput {
    isEditing: boolean;
    fieldName: string;
    inputValue: string;
    editHandler: (fieldName: string, fieldValue: string) => void;
    pattern: RegExp;
}
export interface IContactState {
    inputValue: string;
    isValid: boolean;
}