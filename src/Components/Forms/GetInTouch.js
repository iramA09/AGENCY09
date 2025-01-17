import React, { useState } from 'react';

function GetInTouch() {
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.service) newErrors.service = 'Service is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = handleValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setButtonText('Processing...');
    setIsButtonDisabled(true);

    const grecaptcha = window.grecaptcha;
    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute('6LelbAYqAAAAAGvo7ZJ_k3t_R1z4rJKA7Aeu7ojF', { action: 'submit' });

      const formDataToSend = { ...formData, recaptcha_token: token };

      try {
        const response = await fetch('https://www.agency09.in/test_api/getInApi.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataToSend)
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        const responseData = await response.json();
        if (responseData.status === 1) {
          setFormData({
            name: '',
            mobile: '',
            email: '',
            service: '',
            message: ''
          });
          setErrorMessage(responseData.message);
        } else {
          setErrorMessage(responseData.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error.message);
      } finally {
        setButtonText('Submit');
        setIsButtonDisabled(false);
      }
    });
  };

  return (
    <div className='contactForm formDark '>
      <form onSubmit={handleSubmit}>
        <div className='FormGridTwo'>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Name'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
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
          <div className='form-group'>
            <select className='form-control' id='service' name='service' value={formData.service} onChange={handleChange}>
            <option value="">Select Service*</option>
            <option value="Strategy">Strategy</option>
            <option value="Content">Content</option>
            <option value="Tech">Tech</option>
            <option value="Media">Media</option>
            <option value="Paperless">Paperless</option>
            <option value="Films">Films</option>
            <option value="Mobile">Mobile</option>
            <option value="Keyword">Keyword</option>
            <option value="Analytics">Analytics</option>
            </select>
            {errors.service && <span className='errorText'>{errors.service}</span>}
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
            <button type="submit" className="btnBlack fontS ripple-button" disabled={isButtonDisabled}>
              <span>{buttonText}</span>
            </button>
          </div>
        </div>
      </form>
      <div className="form_response">
        {errorMessage && <span className="error">{errorMessage}</span>}
      </div>
    </div>
  );
}

export default GetInTouch;
