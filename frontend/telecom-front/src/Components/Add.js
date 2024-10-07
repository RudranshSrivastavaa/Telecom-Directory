import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TextError from './TextError';

const initialValues = {
  firstName: '',
  lastName: '',
  contact: '',
  address: ''
};
const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  contact: Yup.string().required('Required'),
  address: Yup.string().required('Required')
});
const onSubmit = async (values) => {
  try {
    const response = await axios.post('http://localhost:5000/tel/users', values);
    console.log('Data saved successfully:', response.data);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

function Add() {
  const [formValues, setFormValues] = useState(null);

  const styles = {
    container: {
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    formControl: {
      marginBottom: '15px'
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      transition: 'border-color 0.3s'
    },
    inputFocus: {
      borderColor: '#007bff'
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer'
    },
    buttonDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed'
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginTop: '5px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add User</h2>
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        validateOnMount
      >
        {formik => {
          return (
            <Form style={styles.form}>
              <div style={styles.formControl}>
                <label htmlFor="firstName" style={styles.label}>First Name</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                  onBlur={(e) => e.target.style.borderColor = '#ccc'}
                />
                <ErrorMessage name="firstName" component="div" style={styles.error} />
              </div>

              <div style={styles.formControl}>
                <label htmlFor="lastName" style={styles.label}>Last Name</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                  onBlur={(e) => e.target.style.borderColor = '#ccc'}
                />
                <ErrorMessage name="lastName" component="div" style={styles.error} />
              </div>

              <div style={styles.formControl}>
                <label htmlFor="contact" style={styles.label}>Contact</label>
                <Field
                  type="text"
                  id="contact"
                  name="contact"
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                  onBlur={(e) => e.target.style.borderColor = '#ccc'}
                />
                <ErrorMessage name="contact" component="div" style={styles.error} />
              </div>

              <div style={styles.formControl}>
                <label htmlFor="address" style={styles.label}>Address</label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                  onBlur={(e) => e.target.style.borderColor = '#ccc'}
                />
                <ErrorMessage name="address" component="div" style={styles.error} />
              </div>

              <button type="submit" style={formik.isValid ? styles.button : { ...styles.button, ...styles.buttonDisabled }} disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Add;
