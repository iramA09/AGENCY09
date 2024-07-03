import React, { useState, useEffect } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const StartAProjectFormPopup = ({ closeModal, defaultService }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    number: '',
    email: '',
    website: '',
    country: '',
    service: defaultService || '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState('Submit');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

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
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.number) newErrors.number = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.number)) newErrors.number = 'Phone number must be 10 digits';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.service) newErrors.service = 'Service is required';
    if (!formData.budget) newErrors.budget = 'Budget is required';
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
        const response = await fetch('https://www.agency09.in/test_api/enquiryApi.php', {
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
            companyName: '',
            number: '',
            email: '',
            website: '',
            country: '',
            service: defaultService || '',
            budget: '',
            message: ''
          });
        }
        setErrorMessage(responseData.message);
      } catch (error) {
        console.error('Error submitting form:', error.message);
        setErrorMessage('An error occurred while submitting the form');
      } finally {
        setButtonText('Submit');
        setIsButtonDisabled(false);
      }
    });
  };

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const services = [
    'Strategy', 'Content', 'Tech', 'Media', 'Paperless', 'Films', 'Mobile', 'Keyword', 'Analytics'
  ];

  return (
    <div className='modalBackground fixForm'>
      <div className='modalContainer'>
        <button className='modalClose' onClick={() => closeModal(false)}><IoCloseCircle /></button>
        <div className='center'>
          <h4 className='yellow sizeH1'>Get Quote</h4>
        </div>
        <div className='contactForm formDark'>
          <form onSubmit={handleSubmit}>
            <div className='FormGridTwo'>
              <div className='form-group'>
                <input className='form-control' placeholder='Name*' type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="errorText">{errors.name}</span>}
              </div>
              <div className='form-group'>
                <input className='form-control' placeholder='Company Name*' type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
                {errors.companyName && <span className="errorText">{errors.companyName}</span>}
              </div>
              <div className='form-group'>
                <input className='form-control' placeholder='Phone Number*' type="text" id="number" name="number" value={formData.number} onChange={handleChange} />
                {errors.number && <span className="errorText">{errors.number}</span>}
              </div>
              <div className='form-group'>
                <input className='form-control' placeholder='Email ID*' type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="errorText">{errors.email}</span>}
              </div>
              <div className='form-group'>
                <input className='form-control' placeholder='Website' type="text" id="website" name="website" value={formData.website} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <select className='form-control' name="country" id="country" value={formData.country} onChange={handleChange}>
                  <option value="">Country*</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && <span className="errorText">{errors.country}</span>}
              </div>
              <div className='form-group'>
                <select className='form-control' name="service" id="service" value={formData.service} onChange={handleChange}>
                  <option value="">Service Required*</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <span className="errorText">{errors.service}</span>}
              </div>
              <div className='form-group'>
                <input className='form-control' placeholder='Budget*' type="number" id="budget" name="budget" value={formData.budget} onChange={handleChange} />
                {errors.budget && <span className="errorText">{errors.budget}</span>}
              </div>
            </div>
            <div className='form-group'>
              <textarea className='form-control' placeholder='Message' id="message" name="message" value={formData.message} onChange={handleChange} />
            </div>
            <div className="errorText">{errorMessage}</div>
            <div className='FormGridS'>
              <div className='center pt-40'>
                <button type="submit" className="btnYellow fontS ripple-button" disabled={isButtonDisabled}>
                  <span>{buttonText}</span>
                </button>
              </div>
            </div>
            <div className='floatingDiv'>
              <img src='/assets/images/common/floating-icons.svg' alt='' />
            </div>
          </form>
          <div className="privacyText">
            <p>
              For more information on how we use your data, please refer to our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-and-conditions">Terms and Conditions</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartAProjectFormPopup;
