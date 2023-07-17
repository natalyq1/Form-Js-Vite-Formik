import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Boton primario: Llamada a la acción
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Llamada a la acción
   */
  primary: PropTypes.bool,
  /**
   * Color de fondo
   */
  backgroundColor: PropTypes.string,
  /**
   * Tamaños
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Contenido
   */
  label: PropTypes.string.isRequired,
  /**
   * Acción al dar clic
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
