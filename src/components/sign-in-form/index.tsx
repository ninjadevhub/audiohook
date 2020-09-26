import React from 'react';
import { Link } from 'react-router-dom';
import SubmitForm from '../form/submit-form';
import './style.scss';

export interface ISignInForm {
  title: string;
  subtitle: string;
  label: string;
  type?: string;
  placeholder: string;
  buttonLabel: string;
  formHandler: (event: any) => void;
  handleInputChange: (event: any) => void;
  isPasscodeStep?: boolean;
}

const SignInForm: React.FC<ISignInForm> = ({ title, subtitle, label, type = "text", placeholder, buttonLabel, formHandler, handleInputChange, isPasscodeStep }) => {
  return (
    <div className={`sign-in-form ${isPasscodeStep ? 'passcode' : ''}`}>
      <h1 className="sign-in-form__title">{title}</h1>
      <h2 className="sign-in-form__subtitle">{subtitle}</h2>
      <SubmitForm label={label} type={type} placeholder={placeholder} buttonLabel={buttonLabel} formHandler={formHandler} handleInputChange={handleInputChange} />
      {isPasscodeStep ? <p className="sign-in-form__passcode-message">Don’t receive the passcode, <Link to="/">request a new passcode</Link></p> : null}
    </div>
  );
};
export default SignInForm;
