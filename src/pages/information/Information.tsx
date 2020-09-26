import React from 'react';
import { useHistory } from 'react-router-dom';
import Page from '../../components/page/Page';
import './style.scss';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import OptimizationForm from '../../components/form/optimization';
import AudienceForm from '../../components/form/audience';
import CreativeStep from '../../components/creative-step';

const arrow = '/images/arrow.svg';
function getSteps() {
  return [
    'Basic Information & KPI Optimizations',
    'Audience & Geography',
    'Creative',
  ];
}

function renderStepComponent(step: number) {
  switch (step) {
    case 0:
      return <OptimizationForm />;
    case 1:
      return <AudienceForm />;
    case 2:
      return <CreativeStep />;
    default:
      return <OptimizationForm />;
  }
}

const Information: React.FC = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  const handleNext = () => {
    let newSkipped = skipped;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onBackBtnClicked = (e) => {
    e.preventDefault();
    history.push('/');
  };
  return (
    <Page>
      <div className="stepper-wrapper">
        <div className="back" onClick={onBackBtnClicked}>
          {/* <ArrowBackIosIcon /> */}
          <img src={arrow} />
          <span>Back to Dashboard</span>
        </div>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps} className="step-label">
                  {label}
                </StepLabel>
                {index < 2 && (
                    <span className="step-divider">- - - - - - - - -</span>
                  )}
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className="information">
        {renderStepComponent(activeStep)}
        <div className="action-btn">
          {activeStep !== 0 ? (
            <Button className="cancel-btn" onClick={handleBack}>Previous step</Button>
          ) : (
            ''
          )}

          <Button
            className="next-btn"
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Add Campaign' : 'Next'}
          </Button>
        </div>
        <p></p>
      </div>
    </Page>
  );
};
export default Information;
