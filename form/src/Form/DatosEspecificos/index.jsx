import { useState } from "react";
import { TextField, Button, Box, FormLabel, InputLabel, Select, MenuItem } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEspecificos = ({ updateStep }) => {

  const [bornDate, setBornDate] = useState({ value: '', valid: null })
  const [gender, setGender] = useState({ value: '', valid: null })
  const [civilStatus, setCivilStatus] = useState({ value: '', valid: null })


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
        if ( civilStatus.valid && gender.valid && bornDate.valid) {
          updateStep(4)
        } else {
          console.log('no hacer nada');
        }
      }}
    >
      
      <FormLabel sx={{ textAlign: 'left', marginTop: '2em', marginBottom: '0.3em' }}>Fecha de nacimiento</FormLabel>
      <TextField
        variant="outlined"
        fullWidth
        margin="dense"
        type="date"
        error={bornDate.valid === false}
        helperText={bornDate.valid === false && "Ingresa una fecha"}
        value={bornDate.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setBornDate({ value, valid })
        }
        }
      />
      
      <InputLabel id="demo-simple-select-label" sx={{ textAlign: 'left', marginTop: '0.3em', marginBottom: '0.3em' }}>Género</InputLabel>
      <Select fullWidth
        value={bornDate.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setGender({ value, valid })
        }
        }
      >
        <MenuItem value={'masculino'} selected>Masculino</MenuItem>
        <MenuItem value={'femenino'}>Femenino</MenuItem>
        <MenuItem value={'otro'}>Otro</MenuItem>
      </Select>


      <InputLabel  sx={{ textAlign: 'left', marginTop: '0.3em', marginBottom: '0.3em' }}>Estado civíl</InputLabel>
      <Select fullWidth
        value={civilStatus.value}
        onChange={
          (input) => {
            const value = input.target.value
            const valid = validarInput(value)
            setCivilStatus({ value, valid })
          }
        }
      >
        <MenuItem value={'soltero'}>Soltero</MenuItem>
        <MenuItem value={'casado'}>Casado</MenuItem>
        <MenuItem value={'otro'}>Otro</MenuItem>
      </Select>

      <Button variant="contained" type="submit" sx={{
     marginTop: '1em'}} >
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosEspecificos;
