import React, { useState } from 'react';
import RippleButton from '../../Hooks/RippleButton';

function ParterWithUs() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Reset error message when user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    // Basic validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Send form data to the API
      const response = await fetch('http://localhost/react/test_api/getInApi.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      } else {
        // Parse the JSON response
        const responseData = await response.json();
        // Now you can access the response data
        if (responseData.status === 1) {
          console.log(responseData.message);
          setErrorMessage(responseData.message);
          // Reset form data upon successful submission
          setFormData({
            name: '',
            mobile: '',
            email: '',
            message: ''
          });
        } else {
          console.log(responseData.message);
          setErrorMessage(responseData.message);
        }
      }

    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Optionally, you can set an error state here for displaying error feedback to the user
    }
  };

  return (
    <div className='contactForm formDark'>
      <form onSubmit={handleSubmit}>
        <div className='FormGridTwo'>
          <div className='form-group'>
            <input className='form-control' placeholder='Name' type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className='errorText'>{errors.name}</span>}
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Mobile'
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <span className='errorText'>{errors.mobile}</span>}
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Email Id'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className='errorText'>{errors.email}</span>}
          </div>
        </div>
        <div className='FormGridS1'>
          <div className='form-group'>
            <textarea
              className='form-control textarea'
              placeholder='Message (Optional)'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='FormGridS1'>
          <div className='form-group-btn center'>
            <RippleButton type="submit" className="btnBlack fontS"><span> Submit </span></RippleButton>
          </div>
        </div>
      </form>
      <div className="form_response">
        {errorMessage && <span className="error">{errorMessage}</span>}
      </div>
    </div>
  );
}

export default ParterWithUs;
