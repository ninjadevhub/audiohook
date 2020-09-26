import types from './types';

export const signInUser = (email: string) => ({
  type: types.SIGN_IN_USER,
  id: 'id', //TODO: add id
  email
});