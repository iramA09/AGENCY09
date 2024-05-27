import React, { useState } from 'react';
import RippleButton from '../../Hooks/RippleButton';

function StartAProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    number: '',
    email: '',
    website: '',
    country: '',
    service: '',
    budget: '',
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
      companyName: '',
      number: '',
      email: '',
      website: '',
      country: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina','Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados','Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const services = [ 
    'Strategy', 'Content', 'Tech', 'Media', 'Paperless', 'Films', 'Mobile', 'Keyword', 'Analytics' 
  ];

  return (

<div className='contactForm formDark'>

    <form onSubmit={handleSubmit}>
    <div  className='FormGridTwo '>
    
      <div className='form-group'>
        <input className='form-control' placeholder='Name' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <input className='form-control' placeholder='Company Name*' type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <input className='form-control' placeholder='Phone Number*' type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />
      </div>
     
      <div className='form-group'>
        <input className='form-control' placeholder='Email ID*' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <input className='form-control' placeholder='Current Website*' type="text" id="website" name="website" value={formData.website} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <select className='form-control' value={formData.country} onChange={handleChange} name="country">
          <option value="">Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div>

      <div className='form-group'>
        <select className='form-control' value={formData.service} onChange={handleChange} name="service">
          <option value="">Services</option>
          {services.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div className='form-group'>
        <input className='form-control' placeholder='Budget' type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} />
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

export default StartAProjectForm;
