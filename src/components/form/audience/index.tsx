import 'date-fns';
import React, { useState } from 'react';
import './style.scss';

import TextField from '@material-ui/core/TextField';
import AudienceOption from '../../audience-option';

const DocumentIcon = '/images/document-icon.svg';

const audienceOptionsData = [
  {
    id: 0,
    title: 'Retargeting',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
  },
  {
    id: 1,
    title: 'Lookalike',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
  },
  {
    id: 2,
    title: 'Email list',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
  }
]

const AudienceForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(audienceOptionsData[0].title);

  const handleRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
  }

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selectedOption);
  }

  return (
    <div className="opt-wrapper">
      <div className="title">Audience & Geography</div>
      <div className="form">
        <div className="form-wrapper">
          <div className="audience-header">
            <img src={DocumentIcon} className="audience-header__icon" alt="" />
            <div>
              <h5 className="audience-header__title">Add Audience and Geography</h5>
              <p className="audience-header__subtitle">Choose retargeting, or look alike, or upload email list.</p>
            </div>
          </div>

          <form className="audience-options" onSubmit={handleFormSubmit}>
            {audienceOptionsData.map(({ id, title, subtitle }) => <AudienceOption key={id} title={title} subtitle={subtitle} selectedOption={selectedOption} onChange={handleRadioButton} />)}
          </form>

          <div className="item">
            <div className="custom-input-wrapper">
              <div className="label">Geography</div>
              <TextField
                label=""
                className="custom-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AudienceForm;
