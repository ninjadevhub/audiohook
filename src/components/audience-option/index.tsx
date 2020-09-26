import React from 'react';
import './style.scss';

export interface ISubmitForm {
  title: string;
  subtitle: string;
  selectedOption: string;
  onChange: (e) => void;
}

const AudienceOption: React.FC<ISubmitForm> = ({ title, subtitle, selectedOption, onChange }) => {
  const activeOption = selectedOption === title;
  return (
      <label className={`audience-option ${activeOption ? 'audience-option_active' : ''}`}>
        <input type="radio" className="audience-option__input" name="audience-option" value={title} checked={activeOption} onChange={onChange} />
        <span className="audience-option__checkmark"></span>
        <div>
          <p className="audience-option__title">{title}</p>
          <p className="audience-option__subtitle">{subtitle}</p>
        </div>
      </label>
  );
};
export default AudienceOption;
