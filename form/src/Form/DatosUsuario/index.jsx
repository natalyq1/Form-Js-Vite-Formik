import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({ updateStep, initialValues, setFormData }) => {
  const [password, setPassword] = useState(initialValues.password);
  const [email, setEmail] = useState(initialValues.email);

  const [passwordValid, setPasswordValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isPasswordValid = validarPassword(password);
    const isEmailValid = validarEmail(email);

    setPasswordValid(isPasswordValid);
    setEmailValid(isEmailValid);

    if (isPasswordValid && isEmailValid) {
    const newData = {
      ...initialValues,
      password,
      email
    };

    setFormData((prevState) => ({
      ...prevState,
      datosUsuario: newData
    }));

    updateStep(1);
  }
}

  return (
    <Box component="form" autoComplete="off" onSubmit={handleFormSubmit}>
      
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        value={email}
        onChange={(e) => {
        setEmail(e.target.value)
        setEmailValid(null)
      }}
        error={emailValid === false}
        helperText={emailValid === false ? "Ingrese un correo electrónico válido.": ''}

      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        setPasswordValid(null)
        }}
        error={passwordValid === false}
        helperText={passwordValid === false ? "Ingrese al menos 2 caracteres y máximo 30.": ''}
      />
      <Button      variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;
