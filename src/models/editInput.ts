export interface IEditInputProps {
    isEditing: boolean;
    fieldName: string;
    inputValue: string;
    editHandler: (fieldName: string, fieldValue: string) => void;
}