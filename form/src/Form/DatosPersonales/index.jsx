import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarApellidos, validarNombre, validarTelefono } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {

  const [name, setName] = useState({ value: '', valid: null })
  const [lastName, setLastName] = useState({ value: '', valid: null })
  const [phone, setPhone] = useState({ value: '', valid: null })

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit = {(e) => {
        e.preventDefault()
        if (name.valid && lastName.valid && phone.valid) {
          updateStep(2)
        } else {
          console.log('no hacer nada');
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={name.valid === false}
        helperText={name.valid === false && "Ingresa al menos 2 caracteres y máximo 30."}
        value={name.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarNombre(value)
          setName({ value, valid })
        }
        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={lastName.valid === false}
        helperText={lastName.valid === false && "Ingresa al menos 8 caracteres y máximo 50."}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarApellidos(value)
          setLastName({ value, valid })
        }
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        error={phone.valid === false}
        helperText={phone.valid === false && "Ingresa al menos 8 digitos y máximo 14."}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarTelefono(value)
          setPhone({ value, valid })
        }
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
