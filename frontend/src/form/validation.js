import isEmail from 'validator/lib/isEmail';
import isPhone from 'validator/lib/isMobilePhone';

export function email(value) {
  return value && !isEmail(value.trim()) ? 'Invalid email' : null;
}

export function phone(value) {
  return value && !isPhone(value.trim()) ? 'Invalid phone number' : null;
}

function isDirty(value) {
  return value || value === 0;
}

export function required(requiredFields, values) {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: 'Required' }),
    }),
    {},
  );
}
