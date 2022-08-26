export interface Form {
    formDto: FormDto;
    checkboxDtos?: (CheckboxDtosEntity)[] | null;
    dateInputDtos?: (DateInputDtosEntity)[] | null;
    dateTimeInputDtos?: (DateTimeInputDtosEntity)[] | null;
    emailInputDtos?: (EmailInputDtosEntity)[] | null;
    fileInputDtos?: (FileInputDtosEntity)[] | null;
    numberInputDtos?: (NumberInputDtosEntity)[] | null;
    passwordInputDtos?: (PasswordInputDtosEntity)[] | null;
    separatorDtos?: (SeparatorDtosEntity)[] | null;
    textInputDtos?: (TextInputDtosEntity)[] | null;
}
export interface FormDto {
    id: number;
    formName: string;
    userId: number;
    createTimestamp: string;
    updateTimestamp: string;
    removed: string;
    archived: string;
    favorite: string;
}
export interface CheckboxDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    checkboxId: string;
    header: string;
    required: string;
}
export interface Form1 {
    id: number;
    formName: string;
    user: User;
    createTimestamp: string;
    updateTimestamp: string;
    removed: string;
    archived: string;
    favorite: string;
}
export interface User {
    id: number;
    name?: string;
    surname?: string;
    username: string;
}
export interface DateInputDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    dateInputId: string;
    title: string;
    hide: string;
    dateFormat: string;
    dateValue: string;
    selected: string;
}
export interface DateTimeInputDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    dateTimeInputId: string;
    header: string;
    hide: string;
    dateFormat: string;
    dateValue: string;
    selected: string;
}
export interface EmailInputDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    emailInputId: string;
    question: string;
    placeholder: string;
    subtext: string;
}
export interface FileInputDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    fileInputId: string;
    header: string;
}
export interface NumberInputDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    numberInputId: string;
    header: string;
    defaultValue: string;
    isNegative: string;
}
export interface PasswordInputDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    passwordInputId: string;
    question: string;
    placeholder: string;
}
export interface SeparatorDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    separatorId: string;
    height: string;
    color: string;
    space: string;
}
export interface TextInputDtosEntity {
    id: number;
    sequenceNumberForLocation: number;
    form: Form1;
    createTimestamp: string;
    updateTimestamp: string;
    textInputId?: string;
    question: string;
    placeholder: string;
    subtext?: string;
    message?: string;
    change?: string;
}
