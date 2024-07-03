import React, { useState, useEffect } from 'react';
import { IoCloseCircle } from "react-icons/io5";

const ApplyNow = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    experience: '',
    qualification: '',
    department: '',
    industry: '',
    current_location: '',
    current_ctc: '',
    resume: null,
    app_message: '',
  });

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState('Apply Now');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
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
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (!formData.qualification) newErrors.qualification = 'Qualification is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.current_location) newErrors.current_location = 'Current location is required';
    if (!formData.current_ctc) {
      newErrors.current_ctc = 'Current CTC is required';
    } else if (formData.current_ctc > 500000) {
      newErrors.current_ctc = 'Current CTC cannot exceed 500,000';
    }
    if (!formData.resume) newErrors.resume = 'Resume is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = handleValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Change button text and disable it
    setButtonText('Processing...');
    setIsButtonDisabled(true);

    // Get reCAPTCHA token
    const grecaptcha = window.grecaptcha;
    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute('6LelbAYqAAAAAGvo7ZJ_k3t_R1z4rJKA7Aeu7ojF', { action: 'submit' });

      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      formDataToSend.append('recaptcha_token', token);

      try {
        const response = await fetch('http://localhost/react/test_api/applyApi.php', {
          method: 'POST',
          body: formDataToSend,
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
            experience: '',
            qualification: '',
            department: '',
            industry: '',
            current_location: '',
            current_ctc: '',
            resume: null,
            app_message: '',
          });
          setErrorMessage(responseData.message);
        }

      } catch (error) {
        console.error('Error submitting form:', error.message);
      } finally {
        // Reset button text and re-enable it
        setButtonText('Apply Now');
        setIsButtonDisabled(false);
      }
    });
  };

  return (
    <>
      <div className='modalBackground fixForm'>
        <div className='modalContainer'>
          <button className='modalClose' onClick={() => closeModal(false)}><IoCloseCircle /></button>
          <div className='center'>
            <h4 className='yellow sizeH1'>Apply Now</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='FormGridS1'>
              <div className='form-group'>
                <input
                  className='form-control'
                  placeholder='Name*'
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
                  placeholder='Mobile*'
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <span className='errorText'>{errors.mobile}</span>}
              </div>
            </div>
            <div className='FormGridS1'>
              <div className='form-group'>
                <input
                  className='form-control'
                  placeholder='Email Id*'
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className='errorText'>{errors.email}</span>}
              </div>
              <div className='form-group'>
                <select
                  className="form-control apply-field"
                  id="forExperience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="" disabled>Experience In Years*</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
                {errors.experience && <span className='errorText'>{errors.experience}</span>}
              </div>
            </div>
            <div className='FormGridS1'>
              <div className='form-group'>
                <select
                  className="form-control apply-field"
                  id="forQualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                >
                  <option value="" disabled>Qualification*</option>
                  <option value="Any Postgraduate">Any Postgraduate</option>
                  <option value="Any Graduate">Any Graduate</option>
                  <option value="MBA/PGDM">MBA/PGDM</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="BCA">BCA</option>
                  <option value="B.Tech/B.E.">B.Tech/B.E.</option>
                  <option value="CA">CA</option>
                  <option value="M.A">M.A</option>
                  <option value="BFA or MFA">BFA or MFA</option>
                  <option value="Specialisation in audio visuals">Specialisation in audio visuals</option>
                  <option value="B.A">B.A</option>
                  <option value="PG Diploma">PG Diploma</option>
                  <option value="Diploma">Diploma</option>
                  <option value="M.Com">M.Com</option>
                  <option value="B.B.A/ B.M.S">B.B.A/ B.M.S</option>
                  <option value="B COM">B COM</option>
                  <option value="other">Other</option>
                </select>
                {errors.qualification && <span className='errorText'>{errors.qualification}</span>}
              </div>
              <div className='form-group'>
                <select
                  className="form-control apply-field"
                  id="forDepartment"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="" disabled>Department*</option>
                  <option value="Business Developement">Business Developement</option>
                  <option value="Ops">Ops</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Content">Content</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Production">Production</option>
                  <option value="Digital PR">Digital PR</option>
                  <option value="Media Planning & Buying">Media Planning & Buying</option>
                  <option value="SEO">SEO</option>
                  <option value="ORM">ORM</option>
                  <option value="Tech Development & Programming">Tech Development & Programming</option>
                  <option value="Mobile Development & Programming">Mobile Development & Programming</option>
                  <option value="Human Resource">Human Resource</option>
                  <option value="Finance & Accounting">Finance & Accounting</option>
                  <option value="IT Support">IT Support</option>
                  <option value="Administration">Administration</option>
                  <option value="other">Other</option>
                </select>
                {errors.department && <span className='errorText'>{errors.department}</span>}
              </div>
            </div>
            <div className='FormGridS1'>
              <div className='form-group'>
                <select
                  className="form-control apply-field"
                  id="forIndustry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="" disabled>Industry*</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Advertising & Media">Advertising & Media</option>
                  <option value="Printing & packaging">Printing & packaging</option>
                  <option value="Internet/ Ecommerce">Internet/ Ecommerce</option>
                  <option value="IT Software">IT Software</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Accounting/ Finance">Accounting/ Finance</option>
                  <option value="Education/ Teaching/ Training">Education/ Teaching/ Training</option>
                  <option value="other">Other</option>
                </select>
                {errors.industry && <span className='errorText'>{errors.industry}</span>}
              </div>
              <div className='form-group'>
                <input
                  type="text"
                  placeholder="Current Location*"
                  name="current_location"
                  className="form-control apply-field"
                  id="forLocation"
                  value={formData.current_location}
                  onChange={handleChange}
                />
                {errors.current_location && <span className='errorText'>{errors.current_location}</span>}
              </div>
            </div>
            <div className='FormGridS1'>
              <div className='form-group'>
                <input
                  type="text"
                  placeholder="Annual Current CTC*"
                  name="current_ctc"
                  className="form-control apply-field"
                  id="forCTC"
                  value={formData.current_ctc}
                  onChange={handleChange}
                  onKeyUp={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                />
                {errors.current_ctc && <span className='errorText'>{errors.current_ctc}</span>}
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  placeholder='Resume*'
                  type="file"
                  id="resume"
                  name="resume"
                  accept='.pdf,.doc,.docx'
                  onChange={handleChange}
                />
                {errors.resume && <span className='errorText'>{errors.resume}</span>}
              </div>
            </div>
            <div className='FormGridS'>
              <div className='form-group'>
                <textarea
                  name="app_message"
                  cols=""
                  rows="3"
                  className="apply-field form-control c-message"
                  placeholder="Message"
                  value={formData.app_message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className='FormGridS'>
              <div className='center pt-40'>
                <button type="submit" className="btnYellow fontS ripple-button" disabled={isButtonDisabled}>
                  <span>{buttonText}</span>
                </button>
              </div>
            </div>
          </form>
          <div className="form_response">
            {errorMessage && <span className="error">{errorMessage}</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyNow;
