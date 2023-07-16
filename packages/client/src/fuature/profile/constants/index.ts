export const LOGIN_REGEX = /^[a-zA-Z]+[a-zA-Z0-9_-]*$/;
export const NAME_REGEX = /^([А-ЯЁA-Z][а-яёa-z]*)$/;
export const EMAIL_REGEX = /^[^ @]+@[^ @]+\.[^ @]+$/;
export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d).+$/;
export const PHONE_REGEX = /^\+(?:[0-9] ?){6,14}[0-9]$/;
export const REQUIRED = 'Это поле обязательно';
export const INCORRECT_FIELD = 'Некорректно заполнено поле';
