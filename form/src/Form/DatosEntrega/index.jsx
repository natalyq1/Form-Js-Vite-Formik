import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({ updateStep }) => {

  const [address, setAddress] = useState({ value: '', valid: null })
  const [city, setCity] = useState({ value: '', valid: null })
  const [providence, setProvidence] = useState({ value: '', valid: null })


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
        if (address.valid && city.valid && providence.valid) {
          updateStep(3)
        } else {
          console.log('no hacer nada');
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={address.valid === false}
        helperText={address.valid === false && "Ingresa al menos 4 caracteres."}
        value={address.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setAddress({ value, valid })
        }
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={city.valid === false}
        helperText={city.valid === false && "Ingresa al menos 4 caracteres."}
        value={city.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setCity({ value, valid })
        }
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={providence.valid === false}
        helperText={providence.valid === false && "Ingresa al menos 4 caracteres."}
        value={providence.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setProvidence({ value, valid })
        }
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosEntrega;
