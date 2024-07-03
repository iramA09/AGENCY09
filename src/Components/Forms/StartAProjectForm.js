import React, { useState } from 'react';

function StartAProjectForm() {
  const [errorMessage, setErrorMessage] = useState('');
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

  const [errors, setErrors] = useState({
    name: '',
    companyName: '',
    number: '',
    email: '',
    website: '',
    country: '',
    service: '',
    budget: ''
  });

  const [buttonText, setButtonText] = useState('Submit');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.number) {
      newErrors.number = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = 'Phone number must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.website) newErrors.website = 'Website is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.service) newErrors.service = 'Service is required';
    if (!formData.budget) newErrors.budget = 'Budget is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setButtonText('Processing...');
    setIsButtonDisabled(true);

    
    const grecaptcha = window.grecaptcha;
    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute('6LelbAYqAAAAAGvo7ZJ_k3t_R1z4rJKA7Aeu7ojF', { action: 'submit' });
      try {
        const response = await fetch('https://www.agency09.in/test_api/enquiryApi.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...formData, recaptcha_token: token })
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        const responseData = await response.json();
        if (responseData.status === 1) {
          setErrorMessage(responseData.message);
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
        } else {
          setErrorMessage(responseData.message);
        }
      
      } catch (error) {
        console.error('Error submitting form:', error.message);
        setErrorMessage('Error submitting form');
      } finally {
        setButtonText('Submit');
        setIsButtonDisabled(false);
      }
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
        <div className='FormGridTwo'>
          <div className='form-group'>
            <input className='form-control' placeholder='Name' type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="errorText">{errors.name}</span>}
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='Company Name*' type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
            {errors.companyName && <span className="errorText">{errors.companyName}</span>}
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='Phone Number*' type="number" id="number" name="number" value={formData.number} onChange={handleChange} />
            {errors.number && <span className="errorText">{errors.number}</span>}
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='Email ID*' type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="errorText">{errors.email}</span>}
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='Current Website*' type="text" id="website" name="website" value={formData.website} onChange={handleChange} />
            {errors.website && <span className="errorText">{errors.website}</span>}
          </div>
          <div className='form-group'>
            <select className='form-control' value={formData.country} onChange={handleChange} name="country">
              <option value="">Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
            {errors.country && <span className="errorText">{errors.country}</span>}
          </div>
          <div className='form-group'>
            <select className='form-control' value={formData.service} onChange={handleChange} name="service">
              <option value="">Services</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && <span className="errorText">{errors.service}</span>}
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='Budget' type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} />
            {errors.budget && <span className="errorText">{errors.budget}</span>}
          </div>
        </div>
        <div className='FormGridS1'>
          <div className='form-group'>
            <textarea className='form-control textarea' placeholder='Message (Optional)' id="message" name="message" value={formData.message} onChange={handleChange} />
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

export default StartAProjectForm;