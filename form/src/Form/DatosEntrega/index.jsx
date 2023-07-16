import { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import { validarInput } from "./validaciones";
import { ButtonGoNext, ButtonGoPrev, ButtonsContainer } from "../styles";

const DatosEntrega = ({ updateStep, initialValues, setFormData, goToPreviousStep, previousData }) => {

  const [address, setAddress] = useState(initialValues.address)
  const [city, setCity] = useState(initialValues.city)
  const [providence, setProvidence] = useState(initialValues.providence)

  useEffect(() => {
    if (previousData) {
      setAddress(previousData.address);
      setCity(previousData.city);
      setProvidence(previousData.providence);
    }
  }, [previousData]);

  const [addressValid, setAddressValid] = useState(null);
  const [cityValid, setCityValid] = useState(null);
  const [providenceValid, setProvidenceValid] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isAddressValid = validarInput(address);
    const isCityValid = validarInput(city);
    const isProvidenceValid = validarInput(providence);

    setAddressValid(isAddressValid);
    setCityValid(isCityValid);
    setProvidenceValid(isProvidenceValid);

    if (isAddressValid && isCityValid && isProvidenceValid) {
      const newData = {
        ...initialValues,
        address,
        city,
        providence
      };

      setFormData((prevState) => ({
        ...prevState,
        datosEntrega: newData
      }));

      updateStep(3);
    }
  };
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleFormSubmit}
      
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        defaultValue={address}
        onChange={(e) => {
          setAddress(e.target.value)
          setAddressValid(null)
        }}
        error={addressValid === false}
        helperText={addressValid === false && "Ingresa al menos 4 caracteres."}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        defaultValue={city}
        onChange={(e) => {
          setCity(e.target.value)
          setCityValid(null)
        }
        }
        error={cityValid === false}
        helperText={cityValid === false && "Ingresa al menos 4 caracteres."}

      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        defaultValue={providence}
        onChange={(e) => {
          setProvidence(e.target.value)
          setProvidenceValid(null)
        }}
        error={providenceValid === false}
        helperText={providenceValid === false && "Ingresa al menos 4 caracteres."}
      />
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

export default DatosEntrega;
