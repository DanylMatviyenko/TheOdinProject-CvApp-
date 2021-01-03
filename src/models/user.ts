export interface IAppState {
    userName: IUserFieldProperties;
    userProfession: IUserFieldProperties;
}
interface IUserFieldProperties {
    value: string;
    isEditing: boolean;
}