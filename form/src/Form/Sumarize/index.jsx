import { Typography } from "@mui/material";
import { ButtonGoNext, ButtonGoPrev, ButtonsContainer, FormSumarize } from "../styles";

const Sumarize = ({ formData, updateStep, goToPreviousStep }) => {
  const { datosUsuario, datosPersonales, datosEntrega, datosEspecificos, preferencias } = formData;

  const handleFormSubmit = () => {
    updateStep(6);
  }


  return (
    <FormSumarize
    onSubmit={handleFormSubmit}>
      <Typography variant="h6" style={{ color: '#0575A5', textAlign: 'center', marginLeft: '0' }}>Resumen de datos</Typography>
      <Typography>
        <strong>Datos de Usuario:</strong>
      </Typography>
      <Typography>Email: {datosUsuario.email}</Typography>
      <Typography>Password: {datosUsuario.password}</Typography>
      <Typography>
        <strong>Datos Personales:</strong>
      </Typography>
      <Typography>Nombre: {datosPersonales.name}</Typography>
      <Typography>Apellidos: {datosPersonales.lastName}</Typography>
      <Typography>Número telefónico: {datosPersonales.phone}</Typography>
      <Typography>
        <strong>Datos de Entrega:</strong>
      </Typography>
      <Typography>Dirección: {datosEntrega.address}</Typography>
      <Typography>Ciudad: {datosEntrega.city}</Typography>
      <Typography>Provincia: {datosEntrega.providence}</Typography>
      <Typography>
        <strong>Datos Específicos:</strong>
      </Typography>
      <Typography>Fecha de nacimiento: {datosEspecificos.bornDate}</Typography>
      <Typography>Género: {datosEspecificos.gender}</Typography>
      <Typography>Estado civil: {datosEspecificos.civilStatus}</Typography>
      <Typography>
        <strong>Preferencias:</strong>
      </Typography>
      <Typography>Comunicaciones: {preferencias.comunication}</Typography>
      <Typography>Condiciones: {preferencias.conditions}</Typography>

      <ButtonsContainer>
        <ButtonGoPrev variant="contained" onClick={goToPreviousStep}>
          Anterior
        </ButtonGoPrev>
        <ButtonGoNext variant="contained" type="submit">
          Crear cuenta
        </ButtonGoNext>
      </ButtonsContainer>
    </FormSumarize>
  );
};

export default Sumarize;