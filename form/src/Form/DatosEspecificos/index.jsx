import { useEffect, useState } from "react";
import { TextField, Button, Box, FormLabel, InputLabel, Select, MenuItem, responsiveFontSizes } from "@mui/material";
import { validarInput } from "./validaciones";
import { ButtonGoNext, ButtonGoPrev, ButtonsContainer } from "../styles";

const DatosEspecificos = ({ updateStep, initialValues, setFormData, goToPreviousStep, previousData }) => {

  const [bornDate, setBornDate] = useState(initialValues.bornDate)
  const [gender, setGender] = useState(initialValues.gender)
  const [civilStatus, setCivilStatus] = useState(initialValues.civilStatus)

  useEffect(() => {
    if (previousData) {
      setBornDate(previousData.bornDate);
      setGender(previousData.gender);
      setCivilStatus(previousData.civilStatus);
    }
  }, [previousData]);

  const [bornDateValid, setBornDateValid] = useState(null);
  const [genderValid, setGenderValid] = useState(null);
  const [civilStatusValid, setCivilStatusValid] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isBornDateValid = validarInput(bornDate);
    const isGenderValid = validarInput(gender);
    const isCivilStatusValid = validarInput(civilStatus);

    setBornDateValid(isBornDateValid);
    setGenderValid(isGenderValid);
    setCivilStatusValid(isCivilStatusValid);

    if (isBornDateValid && isGenderValid && isCivilStatusValid) {
      const newData = {
        ...initialValues,
        bornDate,
        gender,
        civilStatus
      };

      setFormData((prevState) => ({
        ...prevState,
        datosEspecificos: newData
      }));

      updateStep(4);
    }
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleFormSubmit}
      >
      
      <FormLabel style={{ fontSize: '12px' }} sx={{ textAlign: 'left', marginTop: '2em', marginBottom: '0.3em' }}>Fecha de nacimiento</FormLabel>
      <TextField
        variant="outlined"
        fullWidth
        margin="dense"
        type="date"
        defaultValue={bornDate}
        onChange={(e) => {
          setBornDate(e.target.value) 
          setBornDateValid(null)
        }}
       error={bornDateValid === false}
        helperText={bornDateValid === false && "Ingresa una fecha"}
      />
      
      <InputLabel style={{fontSize:'12px'}} sx={{ textAlign: 'left', marginTop: '0.3em', marginBottom: '0.3em',}}>Género</InputLabel>
      <Select fullWidth
        defaultValue={gender}
        onChange={(e) => {
          setGender(e.target.value)
          setGenderValid(null)
        }}
        error={genderValid === false}
        helperText={genderValid === false && "Escoge una opción"}
      >
        <MenuItem value={'masculino'} selected>Masculino</MenuItem>
        <MenuItem value={'femenino'}>Femenino</MenuItem>
        <MenuItem value={'otro'}>Otro</MenuItem>
      </Select>


      <InputLabel style={{ fontSize: '12px' }} sx={{ textAlign: 'left', marginTop: '0.3em', marginBottom: '0.3em' }}>Estado civíl</InputLabel>
      <Select fullWidth
        defaultValue={civilStatus}
        onChange={
          (e) => {
            setCivilStatus(e.target.value) 
            setCivilStatusValid(null)
          }}
        error={civilStatusValid === false}
        helperText={civilStatusValid === false && "Escoge una opción"}
      >
        <MenuItem value={'soltero'}>Soltero</MenuItem>
        <MenuItem value={'casado'}>Casado</MenuItem>
        <MenuItem value={'otro'}>Otro</MenuItem>
      </Select>

      <ButtonsContainer>
        <ButtonGoPrev variant="contained" onClick={goToPreviousStep}>
          Anterior
        </ButtonGoPrev>
        <ButtonGoNext variant="contained" type="submit">
          Siguiente
        </ButtonGoNext>
      </ButtonsContainer>
    </Box>
  );
};

export default DatosEspecificos;
