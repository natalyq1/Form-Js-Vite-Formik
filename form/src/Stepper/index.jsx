import { Box, Stepper, Step, StepLabel } from "@mui/material";

const StepperComponent = (props) => {
 
  const steps = ["Datos de usuario", "Datos personales", "Datos de entrega", "Datos Especificos", "Preferencias"];

  return (
    <Box sx={{ width: "100%" , margin:'2em auto'}}>
      <Stepper sx={{ gap: '0.8rem', justifyContent: 'space-between' }} activeStep={props.step}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
