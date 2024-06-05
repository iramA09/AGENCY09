import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WorkWithUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
  };

  return (

<div className='serviceForm'>

    <form onSubmit={handleSubmit}>
      <div  className='FormGridS1'>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='Name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          required
        />
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
          required
        />
      </div>

      </div>

      <div  className='FormGridS1'>
      <div className='form-group'>
        <select
          className='form-control'
          value={formData.service}
          onChange={handleChange}
          name="service"
        >
          <option value="">Select Service</option>
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='Service Requested For'
          type="text"
          id="ServiceRequested"
          name="ServiceRequested"
          value={formData.ServiceRequested}
          onChange={handleChange}
        />
      </div>

      <div className='form-group'>
        <input
          className='form-control'
          placeholder='How did you hear about us?'
          type="text"
          id="hearAbout"
          name="hearAbout"
          value={formData.hearAbout}
          onChange={handleChange}
        />
      </div>

      </div>

      <div  className='FormGridS2'>

      <div className='form-group'>
        <textarea
          className='form-control'
          placeholder='Message (Optional)'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className='form-group-btn'>
      <Link type="submit" className="btnBlack fontS ripple-button"><span> Apply Now </span></Link>
      </div>
    </div>
    </form>

</div>
  
  );
}

export default WorkWithUsForm;
