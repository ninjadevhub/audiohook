import { combineReducers } from 'redux';
import types from '../actions/types';

const initialState = () => ({ profile: {} });

const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case types.SIGN_IN_USER:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload
        }
      }
    
      default:
        return state
  }
}

export default combineReducers({ userReducer });
