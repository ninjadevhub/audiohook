import React from 'react';
import './style.scss';

export interface ISubmitForm {
  label: string;
  type: string;
  placeholder: string;
  buttonLabel: string;
  formHandler: (event: any) => void;
  handleInputChange: (event: any) => void;
}

const SubmitForm: React.FC<ISubmitForm> = ({ label, type, placeholder, buttonLabel, formHandler, handleInputChange }) => {
  return (
    <form className="submit-form" onSubmit={formHandler}>
      <label className="submit-form__label">{label}</label>
      <input type={type} placeholder={placeholder} className="submit-form__input" required onChange={handleInputChange} />
      <button type="submit" className="submit-form__button">{buttonLabel}</button>
    </form>
  );
};
export default SubmitForm;
