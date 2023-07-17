export const LOGIN_REGEX = /^[a-zA-Z]+[a-zA-Z0-9_-]*$/;
export const NAME_REGEX = /^([А-ЯЁA-Z][а-яёa-z]*)$/;
export const EMAIL_REGEX = /^[^ @]+@[^ @]+\.[^ @]+$/;
export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d).+$/;
export const PHONE_REGEX = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
export const REQUIRED = 'Это поле обязательно';
export const INCORRECT_FIELD = 'Некорректно заполнено поле';
export const min = 'Минимум';
export const max = 'Максимум';
