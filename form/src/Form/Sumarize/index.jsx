import { Button, Typography } from "@mui/material";

const Sumarize = ({ formData, updateStep, goToPreviousStep }) => {
  const { datosUsuario, datosPersonales, datosEntrega, datosEspecificos, preferencias } = formData;

  const handleFormSubmit = () => {
    updateStep(6);
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <Typography variant="h4">Resumen de datos</Typography>
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

      <Button variant="contained" onClick={goToPreviousStep}>
        Anterior
      </Button>
      <Button variant="contained" type="submit" sx={{ textAlign: 'left', marginTop: '1.2em' }}>
        Crear cuenta
      </Button>
    </form>
  );
};

export default Sumarize;