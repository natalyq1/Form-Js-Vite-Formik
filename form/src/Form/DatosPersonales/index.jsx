import { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";

const DatosPersonales = ({ updateStep, initialValues, setFormData, goToPreviousStep, previousData }) => {
  const [name, setName] = useState(initialValues.name);
  const [lastName, setLastName] = useState(initialValues.lastName);
  const [phone, setPhone] = useState(initialValues.phone);

  useEffect(() => {
    if (previousData) {
      setName(previousData.name);
      setLastName(previousData.lastName);
      setPhone(previousData.phone);
    }
  }, [previousData]);

  const [nameValid, setNameValid] = useState(null);
  const [lastNameValid, setLastNameValid] = useState(null);
  const [phoneValid, setPhoneValid] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validarNombre(name);
    const isLastNameValid = validarApellidos(lastName);
    const isPhoneValid = validarTelefono(phone);

    setNameValid(isNameValid);
    setLastNameValid(isLastNameValid);
    setPhoneValid(isPhoneValid);

    if (isNameValid && isLastNameValid && isPhoneValid) {
      const newData = {
        ...initialValues,
        name,
        lastName,
        phone
      };

      setFormData((prevState) => ({
        ...prevState,
        datosPersonales: newData
      }));

      updateStep(2);
    }
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleFormSubmit}>
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        defaultValue={name}
        onChange={(e) => {
          setName(e.target.value)
          setNameValid(null)
        }}
        error={nameValid === false}
        helperText={nameValid === false && "Ingrese al menos 2 caracteres y máximo 30."}

      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        defaultValue={lastName}
        onChange={(e) => {
          setLastName(e.target.value)
          setLastNameValid(null)
        }}
        error={lastNameValid === false}
        helperText={lastNameValid === false && "Ingrese al menos 8 caracteres y máximo 50."}

      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        defaultValue={phone}
        onChange={(e) => {
          setPhone(e.target.value)
          setPhoneValid(null)
        }}
        error={phoneValid === false}
        helperText={phoneValid === false && "Ingrese al menos 8 dígitos y máximo 14."}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
      <Button variant="contained" onClick={goToPreviousStep}>
        Anterior
      </Button>
    </Box>
  );
};

export default DatosPersonales;
