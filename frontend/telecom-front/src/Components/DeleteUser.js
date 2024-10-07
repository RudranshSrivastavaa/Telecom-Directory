import React, { useState } from 'react';
import axios from 'axios';

function DeleteUser() {
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    if (!firstName) {
      setMessage('Please enter a first name');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/tel/users/${firstName}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Error deleting user');
    }
  };

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
      width: '100%'
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#dc3545',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      width: '100%'
    },
    message: {
      marginTop: '10px',
      fontSize: '14px',
      color: 'green'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Delete User</h2>

      <div style={styles.formControl}>
        <label htmlFor="firstName" style={styles.label}>First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          style={styles.input}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <button onClick={handleDelete} style={styles.button}>
        Delete User
      </button>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

export default DeleteUser;
