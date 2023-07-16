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
import Sumarize from "./Sumarize";

const Form = () => {
  const [formData, setFormData] = useState({
    datosUsuario: {
      email: "",
      password: "",
    },
    datosPersonales: {
      name: "",
      lastName: "",
      phone: ""
    },
    datosEntrega: {
      address: "",
      city: "",
      providence: ""
    },
    datosEspecificos: {
      bornDate: '',
      gender: '',
      civilStatus: '',
    },
    preferencias: {
      comunications: '',
      conditions: ''
    }
  });


  const [step, setStep] = useState(0)
  //step = 0 ---> <DatosUsuario />
  //step = 1 ---> <DatosPersonales />
  //step = 2 ---> <DatosEntrega />
  //step = 3 ---> <Complete />
  const updateStep = (step) => {
    console.log('actualizar paso', step);
    setStep(step)
  }
  const goToPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };


  const steps = {
    0: <DatosUsuario
      updateStep={updateStep}
      initialValues={formData.datosUsuario}
      setFormData={setFormData} />,
    1: <DatosPersonales
      updateStep={updateStep}
      initialValues={formData.datosPersonales}
      setFormData={setFormData}
      goToPreviousStep={goToPreviousStep}
      previousData={formData.datosUsuario}
    />,
    2: <DatosEntrega
      updateStep={updateStep}
      initialValues={formData.datosEntrega}
      setFormData={setFormData}
      goToPreviousStep={goToPreviousStep}
      previousData={formData.datosPersonales}
    />,
    3: <DatosEspecificos
      updateStep={updateStep}
      initialValues={formData.datosEspecificos}
      setFormData={setFormData}
      goToPreviousStep={goToPreviousStep}
      previousData={formData.datosEntrega}
    />,
    4: <Preferencias
      updateStep={updateStep}
      initialValues={formData.preferencias}
      setFormData={setFormData}
      goToPreviousStep={goToPreviousStep}
      previousData={formData.datosEspecificos}
    />,
    5: <Sumarize
      setFormData={setFormData}
      formData={formData}
      goToPreviousStep={goToPreviousStep}
      previousData={formData.preferencias}
      updateStep={updateStep}
    />,
    6: <Complete />,

  }


  return (
    <Box>
      <LogoSpace>
        <Img src={"/img/delivery.svg"} />
        <Typography variant="h3" style={{ color: '#F28124' }}>Foolish <span style={{ color: '#FF9D4D' }}>Store</span></Typography>

      </LogoSpace>
      
      <FormSpace>
        {step < 6 && <Stepper step={step} />}
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
