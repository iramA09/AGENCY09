import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Components/Header';
import Footer from '../Components/Footer';
const PrivacyPolicy = () => {
  return (
    <>
    <Header />
      <div className="spacer"></div>

      <section className='privacy'><div className='container'>
      <div className='aboutS'>  
      <div className='aboutScol'>
      <h1 className='sizeH1 uppercase'>Privacy Policy</h1>  
      </div>   </div> 
     
            <p><b>AGENCY09</b> and its associated companies and 
            divisions respect your privacy. This Privacy Policy outlines the manner 
            in which your data is collected and used by us and you are advised to 
            please read it carefully.</p>
            
            <p>By accessing the website&nbsp;
            <Link to="/">www.agency09.in</Link>. 


            and services thereon, you agree to the collection and use of your data 
            by us in the manner provided in this Privacy Policy. If you have 
            questions or concerns regarding this statement, you can contact us on 
            <Link to="/">www.agency09.in</Link> Should you not agree with the terms of this Privacy Policy, please do not visit or access our website.</p>
            
            <p>The Policy only applies to the procedures and practices followed by entities that are managed, owned or controlled by&nbsp;
            <Link to="/">www.agency09.in</Link> or to the people that are engaged, employed or managed by <Link to="/">www.agency09.in</Link>. </p>
            
            <p>AGENCY09 may change this policy from time to time 
            by updating this page. You should check this page from time to time to 
            ensure that you are happy with any changes. Do feel free to contact us 
            with your questions or concerns about privacy on this website.</p><p>We require this information to understand your needs and provide you 
            with better products &amp; services, and in particular for the following
            reasons:</p>
            
            <ul><li>Internal record keeping</li><li>We may periodically send promotional emails about new products, 
            special offers or other information which we think you may find 
            interesting using the contact information which you have provided. This 
            include offers provided by our partners who may include third party 
            firms.</li><li>From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone or 
            mail. We may use the information to customize the website according to 
            your interests</li></ul>

            <p>
            <b>Information Security</b> <br/>
            Allowing you to transact in a safe and secure environment is fundamental
            to our business. It is our constant endeavor to ensure that your 
            information is safe and protected from any unauthorised access, usage or
            disclosure. We have implemented suitable security procedures and policy
            to safeguard the information that we collect and store.
            </p>



            <p> <b>What about cookies</b><br/>
            Most web servers and browsers ask for permission to download and save 
            “cookies” on your hard drive when you access a website. Cookies are 
            basically small files that allow the browser to remember information for
            specific users, thereby customizing your browsing experience.</p>

            <p>Cookies do not give us access to your personal information or 
            computer system, apart from data that you have voluntarily chosen to 
            share with us. Cookies help us to understand and analyse your browsing 
            preferences and thereby customize your website navigation experience.</p>

            <p><b>Links to external websites</b><br/>
            Our website may contain links to other websites of interest. However, 
            once you have used these links to leave our site, you should note that 
            we do not have any control over the information, offers, products, 
            services or security levels of the other website. Therefore, we cannot 
            be responsible for the protection and privacy of any information which 
            you provide whilst visiting such sites and such sites are not governed 
            by this privacy statement. You should exercise caution and look at the 
            privacy statement applicable to the website in question. </p>

            <p><b>Data Storage &amp; Information Security</b><br/>
            In order to maintain security of our website and protect you from fraud,
            errors and other issues, we also identify and store your IP address. 
            This helps us identify each user of our website and maintain a high 
            standard of security.</p>

            <p>When you transact with us, we may store personal information 
            including, but not limited to, your contact details such as billing 
            address and other information such credit/debit card number and related 
            details and bank account details.</p><p><b>Consent</b><br/>
            You consent to the use of your information as per the terms of this 
            Privacy Policy by using our website and sharing information with us.</p>

            <p><b>Copyright</b> <br/>
            This Privacy Policy is our Copyright and any reproduction of the same in whole or part could lead to legal action.</p>


            <p>You can offer your views, suggestions and feedback if any, by submitting your details in the <Link to="/contact">Contact Us</Link> Form on our website.</p>
        </div>
    </section>







    <Footer />

    </>
  )
}

export default PrivacyPolicy
