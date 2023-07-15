import { useEffect, useState } from "react";
import { Button, Box, InputLabel, Select, MenuItem } from "@mui/material";
import { validarInput } from "./validaciones";

const Preferencias = ({ updateStep, initialValues, setFormData, goToPreviousStep, previousData }) => {

  const [comunication, setComunication] = useState(initialValues.comunication)
  const [conditions, setConditions] = useState(initialValues.conditions)

  useEffect(() => {
    if (previousData) {
      setComunication(previousData.comunication);
      setConditions(previousData.conditions);
    }
  }, [previousData]);

  const [comunicationValid, setComunicationValid] = useState(null);
  const [conditionsValid, setConditionsValid] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isComunicationValid = validarInput(comunication);
    const isConditionsValid = validarInput(conditions);

    setComunicationValid(isComunicationValid);
    setConditionsValid(isConditionsValid);

    if (isComunicationValid && isConditionsValid) {
      const newData = {
        ...initialValues,
        comunication,
        conditions,
      };

      setFormData((prevState) => ({
        ...prevState,
        preferencias: newData
      }));

      updateStep(5);
    }
  };
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleFormSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>

      <InputLabel id="demo-simple-select-label" sx={{ textAlign: 'left', marginTop: '3em', marginBottom: '0.5em' }}>Medio de comunicación</InputLabel>
      <Select fullWidth
        value={comunication}
        onChange={(e) => {
          setComunication(e.target.value)
          setComunicationValid(null)
        }}
        error={comunicationValid === false}
        helperText={comunicationValid === false && "Ingresa una fecha"}
      >
        <MenuItem value={'email'} selected>Email</MenuItem>
        <MenuItem value={'mensaje'}>Mensaje de texto</MenuItem>
        <MenuItem value={'llamada'}>Llamada</MenuItem>
      </Select>


      <InputLabel id="demo-simple-select-label" sx={{ textAlign: 'left', marginTop: '1em', marginBottom: '0.5em' }}>Acepta  <a href="https://www.google.com"> términos y condiciones </a></InputLabel>
      <Select fullWidth
        value={conditions}
        onChange={(e) => {
          setConditions(e.target.value)
          setConditionsValid(null)
        }}
        error={conditionsValid === false}
        helperText={conditionsValid === false && "Ingresa una fecha"}
      >
        <MenuItem value={'si'} selected>Sí</MenuItem>
        <MenuItem value={'no'}>No</MenuItem>
      </Select>

      <Button variant="contained" onClick={goToPreviousStep}>
        Anterior
      </Button>
      <Button variant="contained" type="submit" sx={{ textAlign: 'left', marginTop: '1.2em' }}>
        Crear cuenta
      </Button>
    </Box>
  );
};

export default Preferencias;
