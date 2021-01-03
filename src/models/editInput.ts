export interface IEditInput {
    isEditing: boolean;
    fieldName: string;
    inputValue: string;
    editHandler: (fieldName: string, fieldValue: string) => void;
}