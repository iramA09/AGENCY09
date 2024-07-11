import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const WorkingWithUsDataGrowth = [

  {
    key: "8",
    header: "Career Advancement & Scholarships ",
    body: "Grow your career with our support and scholarships."
  },
  {
    key: "9",
    header: "Training & Career Growth  ",
    body: "Level up your skills with continuous training."
  },
  {
    key: "10",
    header: "Team Medical Insurance  ",
    body: "We've got your health covered with team insurance."
  },
  {
    key: "11",
    header: "Rewards & Recognition",
    body: "Shine bright and get rewarded for your awesome work."
  }
];

const WorkingWithUsDataLeaves = [
  
  {
    key: "0",
    header: "Paid Leaves & National Holidays",
    body: "Take a break with 21 days of paid time off, plus national holidays!"
  },
  {
    key: "1",
    header: "Work from Home Policy ",
    body: "Rock your PJs while you work from home (2 days a month)."
  },
  {
    key: "2",
    header: "Flexible Working Hours ",
    body: "Flex your schedule to balance work and life your way."
  },
  {
    key: "3",
    header: "Maternity Leave ",
    body: "Enjoy 184 days paid time off for your little one's arrival."
  },
  {
    key: "4",
    header: "Paternity Leave ",
    body: "New dads, take 7 days paid time off for your newborn!"
  },
  {
    key: "5",
    header: "Menstrual Leaves ",
    body: "Ladies, take it easy with 12 paid menstrual leaves a year."
  },
  {
    key: "6",
    header: "Birthday Off  ",
    body: "Celebrate your birthday with a full day off—cake is on us!"
  },
  {
    key: "7",
    header: "Christmas Leaves ",
    body: "Enjoy extra time off to jingle all the way."
  },
  {
    key: "12",
    header: "Bereavement Leave  ",
    body: "Take 12 days paid time off to heal."
  }
];

const WorkingWithUs = () => {
  return (


<>



    <h4 className='sizeH5 bold pb-10 uppercase'>Career</h4>

    <Accordion>
    {WorkingWithUsDataGrowth.map(item => (
      <Accordion.Item eventKey={item.key} key={item.key}>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>
          <p>{item.body}</p>
        </Accordion.Body>
      </Accordion.Item>
    ))}
    </Accordion>


    <h4 className='sizeH5 bold pb-10 pt-40 uppercase'>Leaves</h4>
    {/* <Accordion>
    {WorkingWithUsDataLeaves.map(item => (
    <Accordion.Item eventKey={item.key} key={item.key}>
    <Accordion.Header>{item.header}</Accordion.Header>
    <Accordion.Body>
    <p>{item.body}</p>
    </Accordion.Body>
    </Accordion.Item>
    ))}
    </Accordion> */}
    <p>At AGENCY09, we prioritize our employees' well-being and work-life balance. Our leaves include paid leaves, national holidays, a flexible work-from-home policy, and flexible working hours. </p>
    <p>We also believe in celebrating special occasions, so we offer a day off for your birthday.</p>


</>

  );
}

export default WorkingWithUs;
