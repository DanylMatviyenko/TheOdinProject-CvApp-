import { userFields } from './userFields';

export interface IContactsState {
    [userFields.PHONE]:  IStateItem,
    [userFields.EMAIL]: IStateItem,
    [userFields.CITY]: IStateItem
}
export interface IStateItem {
    isValid: boolean,
    isEditing: boolean,
    value: string
}
export type contactFields = userFields.PHONE | userFields.EMAIL | userFields.CITY;