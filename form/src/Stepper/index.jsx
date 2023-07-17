/* eslint-disable react/prop-types */
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import { Article } from "../styles";

const StepperComponent = (props) => {
 
  const steps = ["Datos de usuario", "Datos personales", "Datos de entrega", "Datos Especificos", "Preferencias",'Resumen'];

  return (
    <Box sx={{ width: "100%" , margin:'2em auto 0 auto'}}>
      <Typography variant="h5" style={{ textAlign: 'center', color: '#0575A5', marginBottom: '1.5em' }}>Formulario de registro</Typography>
      <Article>
      <Stepper sx={{ gap: '0.5rem', justifyContent: 'space-between' }} s activeStep={props.step}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel style={{marginBottom:'1.5em'}}>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </Article>
    </Box>
  );
};

export default StepperComponent;
