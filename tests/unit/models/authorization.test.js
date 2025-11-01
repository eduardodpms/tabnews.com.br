import { ValidationError } from 'errors';
import auth from 'models/authorization';

const { validateUser } = auth;

describe('validateUser testing', () => {
  it('CT1 - Empty user', () => {
    const user = null;

    expect(() => validateUser(user)).toThrow(ValidationError);
  });

  it('CT2 - User not empty and features is a non empty array', () => {
    const user = {
      id: 1234,
      features: ['create:user', 'update:user'],
    };

    expect(() => validateUser(user)).not.toThrow(ValidationError);
  });

  it('CT3 - User not empty and features is an empty array', () => {
    const user = {
      id: 1234,
      features: null,
    };

    expect(() => validateUser(user)).toThrow(ValidationError);
  });

  it('CT4 - User not empty and features is not an array', () => {
    const user = {
      id: 1234,
      features: ('create:user', 'update:user'),
    };

    expect(() => validateUser(user)).toThrow(ValidationError);
  });
});
