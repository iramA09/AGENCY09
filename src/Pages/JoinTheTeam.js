import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { PiArrowCircleRightThin } from "react-icons/pi";
import JoinTheTeamForm from '../Components/Forms/JoinTheTeamForm';
import useLenisScroll from '../Hooks/useLenisScroll';
import Accordion from 'react-bootstrap/Accordion';



const JoinTheTeam = () => {
  useLenisScroll();
  return (
    <>
      <Header />

<div className="spacer"></div>

<section><div className='container'>
<div className='aboutS'>  
    <div className='aboutScol'>
    <h1 className='sizeH1 uppercase'>Join The Team</h1>  
    <div className='arrowRightH'><PiArrowCircleRightThin /></div>
    </div>      
    <div className='aboutScol'>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
    </div> 
    </div>
    </div></section>

    <section className='navItmesWrap'>
      <div className='container'>
      <div className='navItmes'>
        <ul>
        <li><span>Ui/UX Design</span></li>
        <li><span>Web Development</span></li>
        <li><span>Graphic Designer</span></li>
        <li><span>Copy Writer</span></li>
        <li><span>Brand</span></li>
        <li><span>Influencer</span></li>
        <li><span>Media House</span></li>
        <li><span>Artist</span></li>
        <li><span>Service Provider</span></li>
        <li><span>Illustration</span></li>
        </ul>
      </div>  
      </div>
    </section>
    

    <section className='yellowB'>
      <div className='container'>
      <Accordion defaultActiveKey="0" className="accordionS2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>• Health & Wellbeing</Accordion.Header>
                  <Accordion.Body>
                    <h4>Description:</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    
                    <ul>
                    <li>Ensure on time, accurate program execution</li>
                    <li>Prioritise & manage multiple projects simultaneously</li>
                    <li>Produce timely and accurate project reports for internal reference</li>
                    <li>Attention to detail and proactive in evaluating recommending, and implementing opportunities to improve internal tools and processes</li>
                    <li>Flexible in supporting the creative team on a wide variety of administrative duties</li>
                    <li>Strong client relationships at the administrative level</li>
                    <li>Coordinating, scheduling of meetings; taking notes and distributing; follow up on actions</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>• Professional Growth</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>• Profit Sharing</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>• Time Off</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>• Parental Leave</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>• Hardship Leave</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>• Retirement</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>




             </Accordion>

      </div>
    </section>





    <section className='servicesFormWrap'>
      <div className='container'>
        <h2 className='sizeH3 uppercase center'>Apply Now</h2>
        <JoinTheTeamForm />
      </div>
    </section>

      <Footer />
    </>
  )
}
export default JoinTheTeam
