import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    setErrors({}); // Reset previous errors

    // Validate username
    if (formData.name.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'name must be at least 3 characters',
      }));
    }

    // Validate email
    if (formData.name.length < 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }

    // Validate age (numeric only)
    if (formData.name.length < 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: 'Age must be a number',
      }));
    }

    // Validate password length
    if (formData.password.length< 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters',
      }));
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match',
      }));
    }

    // If no errors, you can submit the form or perform other actions
    if (Object.keys(errors).length === 0) {
      alert('Registration successful!');
    }
  };

  return (
    <form onSubmit={validateForm}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      {errors.username && <p className="error">{errors.username}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
          onChange={handleChange}
        required
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age:</label>
      <input
        type="text"
        id="age"
        name="age"
        pattern="\d+"
        title="Please enter a valid age (numeric only)"
        value={formData.age}
        onChange={handleChange}
        required
      />
      {errors.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        minLength="5"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        minLength="5"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      <button type="submit">submit</button>
    </form>
  );
};

export default RegistrationForm;
