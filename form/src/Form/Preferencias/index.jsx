import { useState } from "react";
import { Button, Box, InputLabel, Select, MenuItem } from "@mui/material";
import { validarInput } from "./validaciones";

const Preferencias = ({ updateStep }) => {

  const [comunication, setComunication] = useState({ value: '', valid: null })
  const [conditions, setConditions] = useState({ value: '', valid: null })


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
      onSubmit={(e) => {
        e.preventDefault()
        console.log(conditions.value);
        if (comunication.valid && conditions.valid) {
          updateStep(5)
        } else {
          console.log('no hacer nada');
        }
      }}
    >

      <InputLabel id="demo-simple-select-label" sx={{ textAlign: 'left', marginTop: '3em', marginBottom: '0.5em' }}>Medio de comunicación</InputLabel>
      <Select fullWidth
        value={comunication.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setComunication({ value, valid })
        }
        }
      >
        <MenuItem value={'email'} selected>Email</MenuItem>
        <MenuItem value={'mensaje'}>Mensaje de texto</MenuItem>
        <MenuItem value={'llamada'}>Llamada</MenuItem>
      </Select>


      <InputLabel id="demo-simple-select-label" sx={{ textAlign: 'left', marginTop: '1em', marginBottom: '0.5em' }}>Acepta  <a href="https://www.google.com"> términos y condiciones </a></InputLabel>
      <Select fullWidth
        value={conditions.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setConditions({ value, valid })
        }
        }
      >
        <MenuItem value={'si'} selected>Sí</MenuItem>
        <MenuItem value={'no'}>No</MenuItem>
      </Select>

      <Button variant="contained" type="submit" sx={{ textAlign: 'left', marginTop: '1.2em' }}>
        Crear cuenta
      </Button>
    </Box>
  );
};

export default Preferencias;
