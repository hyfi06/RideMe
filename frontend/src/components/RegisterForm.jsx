import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import '../assets/styles/components/RegisterForm.scss';

const RegisterForm = (props) => {
  const {
    isSubmitting,
    isValid,
  } = props;

  return (
    <div className='registerForm form'>
      <h2 className='registerForm__title'>Registro</h2>
      <span>Por favor ingresa los siguientes datos:</span>
      <Form className='registerForm__form formHorizontal'>
        <div className='formHorizontal__line'>
          <div className='formHorizontal__line-item'>
            <span className='label'>Nombre</span>
            <Field
              type='text'
              name='name'
            />
            <ErrorMessage name='name'>
              {(message) => <div className='inputError'>{message}</div>}
            </ErrorMessage>
          </div>
          <div className='formHorizontal__line-item'>
            <span className='label'>Primer Apellido</span>
            <Field
              type='text'
              name='firstLastName'
            />
            <ErrorMessage name='firstLastName'>
              {(message) => <div className='inputError'>{message}</div>}
            </ErrorMessage>
          </div>
          <div className='formHorizontal__line-item'>
            <span className='label'>Segundo Apellido</span>
            <Field
              type='text'
              name='secondLastName'
            />
            <ErrorMessage name='secondLastName'>
              {(message) => <div className='inputError'>{message}</div>}
            </ErrorMessage>
          </div>
        </div>
        <div className='formHorizontal__line'>
          <div className='formHorizontal__line-item'>
            <span className='label'>email</span>
            <Field
              type='email'
              name='email'
            />
            <ErrorMessage name='email'>
              {(message) => <div className='inputError'>{message}</div>}
            </ErrorMessage>
          </div>
          <div className='formHorizontal__line-item'>
            <span className='label'>Contraseña</span>
            <Field
              type='password'
              name='password'
            />
            <ErrorMessage name='password'>
              {(message) => <div className='inputError'>{message}</div>}
            </ErrorMessage>
          </div>
          <div className='formHorizontal__line-item'>
            <span className='label'>Confirma la contraseña</span>
            <Field
              type='password'
              name='passwordConfirm'
            />
            <ErrorMessage name='passwordConfirm'>
              {(message) => <div className='inputError'>{message}</div>}
            </ErrorMessage>
          </div>
        </div>
        <div className='formHorizontal__line'>
          <div className='formHorizontal__line-item'>
            <span className='label'>Teléfono</span>
            <Field
              type='tel'
              name='telephone'
            />
            <ErrorMessage name='telephone'>
              {(message) => <div className='inputError'>{message}</div>}
            </ErrorMessage>
          </div>
          <div className='formHorizontal__line-item'>
            <span className='label'>Foto de perfil</span>
            <Field
              className='inputFile'
              type='file'
              name='photo'
            />
            <ErrorMessage name='photo'>
              {(message) => <div className='inputError'>{message}</div>}
            </ErrorMessage>
          </div>
        </div>
        <div className='buttonContainer'>
          <button
            type='submit'
            className={`submit ${isSubmitting || !isValid ? 'disabled' : ''}`}
            disabled={isSubmitting || !isValid}
          >
            Registrar
          </button>
        </div>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    return {
      name: '',
      firstLastName: '',
      secondLastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      telephone: '',
      photo: '',
    };
  },

  validate(values) {
    const errors = {};

    if (!values.name) {
      errors.name = 'Ingresa tu nombre.';
    }

    if (!values.firstLastName) {
      errors.firstLastName = 'Ingresa tu primer apellido.';
    }

    if (!values.email) {
      errors.email = 'Ingresa tu email.';
    }

    if (!values.password) {
      errors.password = 'Ingresa una contraseña.';
    } else if (!values.passwordConfirm) {
      errors.passwordConfirm = 'Confirma la contraseña ingresada.';
    } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = 'Las contraseñas no coinciden.';
    }

    if (!values.telephone) {
      errors.telephone = 'Ingresa tu teléfono.';
    }

    if (!values.photo) {
      errors.photo = 'Sube una foto de perfil.';
    }

    return errors;
  },

  handleSubmit(values, formikBag) {
    console.log(values);
    formikBag.setSubmitting(false);
  },
})(RegisterForm);
