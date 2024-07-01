import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircle } from "react-icons/io5";

const GetQuote = ({ closeModal }) => {

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return (
        <>
            <div className='modalBackground fixForm'>
                <div className='modalContainer'>
                    <button className='modalClose' onClick={() => closeModal(false)}><IoCloseCircle/></button>
   
   <div className='center'>
    <h4 className='yellow sizeH1'>Get Quote</h4>
    </div>
  <form>
    <div  className='FormGridS1'>

      <div className='form-group'><input className='form-control' placeholder='Name' type="text" id="name" name="name" required/></div>

      <div className='form-group'><input className='form-control' placeholder='Mobile' type="text" id="mobile" name="mobile" required/></div>

    </div>

    <div  className='FormGridS1'>
  
      <div className='form-group'><input className='form-control' placeholder='Email Id' type="email" id="email" name="email" required/></div>

      <div className='form-group'>
       <select className="form-control apply-field" id="forExperience" name="experience">
          <option selected="" disabled="">Experience In Years</option>
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
      </div>

    </div>

  <div  className='FormGridS1'>

    <div className='form-group'>
      <select className="form-control apply-field" id="forQualification" name="qualification">
        <option selected="" disabled="">Qualification</option>
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
    </div>

    <div className='form-group'>
     <select className="form-control apply-field" id="forDepartment" name="department">
        <option selected="" disabled="">Department</option>
        <option value="Business Developement">Business Developement</option>
        <option value="Ops">Ops</option>
        <option value="Strategy">Strategy</option>
        <option value="Content">Content</option>
        <option value="Graphic Designer">Graphic Designer</option>
        <option value="Production">Production</option>
        <option value="Digital PR">Digital PR</option>
        <option value="Media Planning &amp; Buying">Media Planning &amp; Buying</option>
        <option value="SEO">SEO</option>
        <option value="ORM">ORM</option>
        <option value="Tech Development &amp; Programming">Tech Development &amp; Programming</option>
        <option value="Mobile Development &amp; Programming">Mobile Development &amp; Programming</option>
        <option value="Human Resource">Human Resource</option>
        <option value="Finance &amp; Accounting">Finance &amp; Accounting</option>
        <option value="IT Support">IT Support</option>
        <option value="Admiistration">Admiistration</option>
        <option value="other">Other</option>
      </select>
    </div>

  </div>

  <div  className='FormGridS1'>

    <div className='form-group'>
      <select className="form-control apply-field" id="forIndustry" name="industry">
        <option selected="" disabled="">Industry </option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Advertising &amp; Media">Advertising &amp; Media</option>
        <option value="Printing &amp; packaging">Printing &amp; packaging</option>
        <option value="Internet/ Ecommerce">Internet/ Ecommerce</option>
        <option value="IT Software">IT Software</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Accounting/ Finance">Accounting/ Finance</option>
        <option value="Education/ Teaching/ Training">Education/ Teaching/ Training</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className='form-group'>
     <input type="text" placeholder="Current Location" name="current_location" className="form-control apply-field" id="forLocation" />
    </div>

  </div>

  <div  className='FormGridS1'>

    <div className='form-group'>
     <input type="text" placeholder="Annual Current CTC" name="current_ctc" className="form-control apply-field" id="forCTC" onkeyup="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')" />
    </div>

    <div className='form-group'><input className='form-control' placeholder='Resume' type="file" id="resume" name="resume" required/></div>

  </div>

  <div  className='FormGridS'>

    <div className='form-group'>
      <textarea name="app_message" cols="" rows="3" className="apply-field form-control c-message" placeholder="Message"></textarea>
    </div>

  </div>

  <div  className='FormGridS'>

    <div className='center pt-40'>
      <Link type="submit" className="btnYellow  fontS ripple-button"><span>Apply Now </span></Link>
    </div>

  </div>


  </form>
                </div>
            </div>
        </>
    )
}

export default GetQuote;
