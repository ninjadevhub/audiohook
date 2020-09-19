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
const arrow = '/images/arrow.svg';
function getSteps() {
  return [
    'Basic Information & KPI Optimizations',
    'Audience & Geography',
    'Creative',
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
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
          Back to Dashboard
        </div>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps} className="step-label">
                  {label}
                  {index < 2 && (
                    <span className="step-divider">- - - - - - - - -</span>
                  )}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className="information">
        <OptimizationForm />
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
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </Page>
  );
};
export default Information;
