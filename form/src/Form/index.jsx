import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import DatosEspecificos from "./DatosEspecificos";
import Preferencias from "./Preferencias";

const Form = () => {

  const [step, setStep] = useState(0)
  //step = 0 ---> <DatosUsuario />
  //step = 1 ---> <DatosPersonales />
  //step = 2 ---> <DatosEntrega />
  //step = 3 ---> <Complete />

  const updateStep = (step) => {
    console.log('actualizar paso', step);
    setStep(step)
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <DatosEspecificos updateStep={updateStep} />,
    4: <Preferencias updateStep={updateStep} />,
    5: <Complete />,

  }

  return (
    <Box
      sx={{
        margin: '0',
        padding: "30px",
        paddingTop: "90px",
        display: "flexbox",
        flexDirection: "column",
        
      }}
    >
      <LogoSpace>
        <Img src={"/img/delivery.svg"} />
        <Typography variant="h3">Foolish Store</Typography>
      </LogoSpace>
      <FormSpace>
        {step <= 5 && <Stepper  step={step} />} 
        {/* <DatosUsuario />
        <DatosPersonales />
        <DatosEntrega />
        */}
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
