import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import '../assets/styles/components/LoginForm.scss';

const LoginForm = (props) => {
  const {
    isSubmitting,
    isValid,
  } = props;

  return (
    <div className='loginForm form'>
      <h2 className='loginForm__title'>Inicio de sesión</h2>
      <span>Por favor ingresa tus datos.</span>
      <Form className='loginForm__form formVertical'>
        <span className='label'>email</span>
        <Field
          type='email'
          name='email'
        />
        <ErrorMessage name='email'>
          {(message) => <div className='inputError'>{message}</div>}
        </ErrorMessage>
        <span className='label'>Contraseña</span>
        <Field
          type='password'
          name='password'
        />
        <ErrorMessage name='password'>
          {(message) => <div className='inputError'>{message}</div>}
        </ErrorMessage>
        <button
          type='submit'
          className={`submit ${isSubmitting || !isValid ? 'disabled' : ''}`}
          disabled={isSubmitting || !isValid}
        >
          Iniciar sesión
        </button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    return {
      email: '',
      password: '',
    };
  },

  validate(values) {
    const errors = {};

    if (!values.email) {
      errors.email = 'Ingresa tu email.';
    }

    if (!values.password) {
      errors.password = 'Ingresa tu contraseña.';
    }

    return errors;
  },

  handleSubmit(values, formikBag) {
    console.log(values);
    formikBag.setSubmitting(false);
  },
})(LoginForm);
