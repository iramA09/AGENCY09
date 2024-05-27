import React, { useState } from 'react';
import RippleButton from '../../Hooks/RippleButton';

function ParterWithUs() {
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
    console.log(formData);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
  };

  return (

<div className='contactForm formDark'>

  <form onSubmit={handleSubmit}>
    <div  className='FormGridTwo '>
      <div className='form-group'>
        <input className='form-control' placeholder='Name' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
      </div>
      <div className='form-group'>
        <input className='form-control' placeholder='Mobile' type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
      </div>
      <div className='form-group'>
        <input className='form-control' placeholder='Email Id' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
    </div>

    <div  className='FormGridS1'>
      <div className='form-group'>
        <textarea className='form-control textarea' placeholder='Message (Optional)' id="message" name="message" value={formData.message} onChange={handleChange} />
      </div>
    </div>

    <div  className='FormGridS1'>
      <div className='form-group-btn center'>
        <RippleButton type="submit" className="btnBlack fontS "><span> Submit </span></RippleButton>
      </div>
    </div>

    </form>

</div>
  
  );
}

export default ParterWithUs;
