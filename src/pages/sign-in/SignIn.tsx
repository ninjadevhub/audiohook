import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Page from '../../components/page/Page';
import SignInForm from '../../components/sign-in-form';
import types from '../../store/actions/types';
import './style.scss';

const SignInIcon = '/images/sign-in.svg';

const SignIn: React.FC = () => {
  const [isFirstStep, changeStep] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

   const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setInputValue(event.target.value);
  };

  const emailSubmitHandler = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    event.preventDefault();
    dispatch({ type: types.SIGN_IN_USER, payload: { email: inputValue } });
    console.log(inputValue, 'email');
  }

  const passcodeSubmitHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    console.log('passcode');
  }

  return (
    <Page>
        <div className="sign-in">
          <div className="sign-in__left-side">
            <div className="sign-in__form-wrapper">
              {isFirstStep ?
                <SignInForm
                  title="Sign in"
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address"
                  buttonLabel="Send Passcode"
                  formHandler={emailSubmitHandler}
                  handleInputChange={handleInputChange}
                /> :
                <SignInForm
                  title="Passcode"
                  subtitle="A 6 digit passcode has been sent to the email provided. Please enter that passcode below."
                  label="Passcode"
                  placeholder="Enter passcode"
                  buttonLabel="Sign In"
                  formHandler={passcodeSubmitHandler}
                  handleInputChange={handleInputChange}
                  isPasscodeStep
                />
              }
              <p className="sign-in__sign-up-message">Don’t have an account? <Link to="/sign-up">Sign Up</Link></p>
            </div>
          </div>
          <div className="sign-in__right-side">
            <img src={SignInIcon} className="sign-in__icon" alt="" />
          </div>
        </div>
    </Page>
  );
};
export default SignIn;
