import {
  EMAIL_REGEX,
  INCORRECT_FIELD,
  LOGIN_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
  REQUIRED,
  max,
  min,
} from '../constants';

export const baseValidationRules = { required: REQUIRED };

const lengthCount = (count: number, direction: string) => ({ value: count, message: `${direction} ${count}` });

export const loginValidationScheme = {
  ...baseValidationRules,
  minLength: lengthCount(3, min),
  maxLength: lengthCount(20, max),
  pattern: {
    value: LOGIN_REGEX,
    message: INCORRECT_FIELD,
  },
};

export const nameValidationScheme = {
  ...baseValidationRules,
  pattern: {
    value: NAME_REGEX,
    message: INCORRECT_FIELD,
  },
};

export const emailValidationScheme = {
  ...baseValidationRules,
  pattern: {
    value: EMAIL_REGEX,
    message: 'Хмм, это не выглядит как электронная почта',
  },
};

export const phoneValidationScheme = {
  ...baseValidationRules,
  minLength: lengthCount(10, min),
  pattern: {
    value: PHONE_REGEX,
    message: 'Номер может начинаться с +7 или 8',
  },
};

export const passwordValidationScheme = {
  ...baseValidationRules,
  minLength: lengthCount(8, min),
  maxLength: lengthCount(40, max),
  pattern: {
    value: PASSWORD_REGEX,
    message: 'min 8 символов, min 1 цифра и 1 загл. буква',
  },
};
