import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepOne from './first';
import StepTwo from './second';
import LastStep from './last';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: '#673AB7',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  formWrapper: {
    padding: "2vh",
  },
}));

export interface savedValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  occupation: string;
  password: string;
}

function getSteps() {
  return [
    "Account",
    "Personal Information",
    "Review Information",
  ];
}

export default function MuliStep() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const savedValues = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    occupation: "",
  });
  
  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
      return (
        <StepOne savedValues={savedValues} handleNext={handleNext} />
      );
    case 1:
      return (
        <StepTwo
          savedValues={savedValues}
          handleNext={handleNext}
          handleBack={handleBack}
        />
        );
    case 2:
      return (
        <LastStep
          savedValues={savedValues}
          handleBack={handleBack}
        />
      );
    default:
      return "ERROR";
  
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} style={{width: '50%',margin: '0 auto',color: '#673AB7'}}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>{getStepContent(activeStep)}</div>
      </div>
    </div>
  );
}