import 'date-fns';
import React from 'react';
import './style.scss';

import Dropzone from '../dropzone';

const CreativeStep: React.FC = () => {
  return (
    <div className="creative-step">
      <div className="creative-step__title">Creative</div>
      <div className="creative-step__wrapper">
        <div className="creative-step__dropzone">
          <Dropzone showCreateAd />
        </div>
      </div>
    </div>
  );
};
export default CreativeStep;
