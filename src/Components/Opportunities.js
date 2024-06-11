import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

import ApplyNow from './Forms/ApplyNow'


const jobData = [
  {
    key: "0",
    title: "Sr. Copywriter",
    jobBrief: "AGENCY09 is looking for a mind that loves words and working with them. A believer of ideas and communication, the mind should be able to create and edit. Working in a fast paced environment, the copy supervisor will be part of the core thinking process for plenty of brands.The main objective is to have quality control for the content produced by AGENCY09.",
    experience: "3+ years of Copywriting experience in a fast paced digital agency.",
    responsibility: [
      "You will be part of the content team that constantly has to bring new ideas to the market.",
      "Primary - Campaigns, Special Days, Social Media Content, Website Content, Video Led ideas",
      "Secondary - Brand Communication, Other offline communication and SEO"
    ],
    tasks: [
      "Write, edit and publish content for websites, blogs, videos, social media posts/campaigns, email campaigns, podcasts, e-books, whitepapers, and more",
      "A good understanding of brands/markets in India, current advertising trends, consumer behavior and related sense of the markets to be able to offer solutions(in conjunction with the creative team) to clients.",
      "Through copy, be able to deliver tangible results to clients/brands and make a difference through exemplary strategy and creativity.",
      "Creative/Out-of-the-Box thinking.",
      "Discussing the client's core message and target audience.",
      "Brainstorming visual and copy ideas with the team.",
      "Excellent command over the English language. Expert in writing skills, editing and proofreading abilities. Ability to write concise, attention-grabbing and hard-hitting copy that clearly puts the message across.",
      "Think ideas and work towards implementing the same.",
      "Work closely with the Art & Tech team on the projects.",
      "Ability to deliver within short-frames and meet the deadlines.",
      "Should have in-depth understanding of the digital media and the ability to write well, crack campaign ideas across digital platforms like facebook, Twitter, Should have the creative knack to deliver the best possible quality work."
    ],
    qualification: [
      "Bachelors' or above. Or a portfolio that never raises the question.",
    ],
      skills: [
      "Proficient in using Microsoft office.",
      "Ability to think and write for different audiences and mediums.",
      "A passion for words and communicating the essence of a story.",
      "Ability to self-manage, take initiative and prioritize tasks in a fast-paced environment."
    ],
    salary: "As per Industry Standards",
    location: "Open for working from our office in Mumbai. (Bandra).",
    joiningDate: "Immediate",
    applyEmail: "info@agency09.in"
  },

  {
    key: "1",
    title: "Assistant Creative Copywriter",
    jobBrief: " AGENCY09 is looking for a creative director. Leading a team of thinkers and doers, the role requires a mix of marketing expertise and creative understanding, promoting the products and services of our valued clients. We’re looking for an experienced manager of people, someone that can inspire others, taking our creative thinking and execution to a new level as we continue to grow. The ideal candidate will have a natural eye for design, content and a drive to inspire dynamic ideas that connect with all types of audiences.",
    experience: " 07 years of relevant experience with 3+ years of creative direction in agency or corporate setting",
    responsibility: [],
    tasks: ["Build, lead, and review work of the creative team in the production of all print, web, and digital marketing collateral",
    "Spearhead and manage content strategy for both small and large scale projects",
    "Supervise a cross-functional team of graphic designers, copywriters, social media experts, photographers/videographers, and project managers in the strategic development of messages and deliverables",
    "Conduct brainstorming sessions with creative team, maintaining strategic and creative thinking to develop innovative and actionable creative initiatives in a fiscally responsible manner",
    "Identifying opportunities to pitch/elevate creatives with existing clients - Collaborate with the creative and servicing departments in developing marketing plans, analyzing results and course correcting when required - Analyze brand tracking, market trends, consumer need, and the competitive landscape",
    "Daily and Monthly Responsibilities to meet client deliverables - Prioritize work and resources across engagements based on short- and long-term needs, setting schedules by collaborating with designers, copywriters, and production departments",
    "Review and approve art and copy developed by the team, ensuring deliverables effectively address marketing goals and challenges of the clients - Produce fresh, innovative work that translates complex ideas into compelling print materials and digital experiences for visually sophisticated audiences - Present, or oversee presentation of final concepts, and obtain approvals for deliverables",
    "Working on pitching ideas to new clients",
    "Presenting ideas, concepts or understanding briefs from clients at regular intervals",],
      qualification: [
      "Masters degree in marketing, business, advertisement or art",
      "Prior experience with copywriting, design, or production",
      "Prior project management experience, with a focus on creative direction",
      "Capability to mentor and guide"
    ],
    skills: [
      "Experience creating marketing/advertising campaigns from developing vision and the messaging to overseeing production on time and budget - Understanding and past experience in creating integrated content across all marketing channels from digital, social media, paid media, offline and print - Proven experience with concept development",
      "Highly skilled with leading a team of creative talent",
      "Strong creative vision with an understanding of business objectives"
    ],
    salary: "As per Industry Standards",
    location: "Open for working from our office in Mumbai. (Bandra).",
    joiningDate: "Immediate",
    applyEmail: "info@agency09.in"
  },

  {
    key: "2",
    title: "Business Development Specialist",
    jobBrief: " AGENCY09 is expanding its operations and is now looking for a business development manager, to explore opportunities that become an integral part of the company’s growth story.",
    experience: " 5-6 Years of relevant experience",
    responsibility: ["You will be working with the founders closely to develop areas of opportunities and look at growth of the organization from a long term perspective."],
    tasks: ["Actively seeking business opportunities with new and existing clients", "Find right contacts and filter the leads that fits the criteria at A09", "Addressing current enquiries generated organically.", "Work on RFP’s along with the pitching team and portray the best of the company’s abilities during the Pitch.", "Present ideas, solutions, products to the clients", "Spend time with the team, to learn the potential of the company and case studies in the field of tech and content"],
    qualification:["Bachelor/Masters Degree in Advertising or business"],
    skills: [
      "Ability to portray the company's experience and potential to win more clients.",
      "Presentable and welcoming approach and warm communication skills.",
      "Well Versed with making presentations and relevant other documents.",
      "Ability to create new contacts and generate revenue",
      "A team player to be able to work with various departments",
      "Strong analytically with demonstrated financial and business planning skills.",
      "Willingness to Learn new things, courses, tricks as a part of the profile.",
      "This is a long term and career oriented position.",
    ],
    salary: "Fixed + Variable (Revenue Share)",
    location: "Mumbai Office. (Bandra)",
    joiningDate: "Immediate",
    applyEmail: "info@agency09.in"
  },

  {
    key: "3",
    title: "Sr. Graphic Designer",
    jobBrief: "AGENCY09 is looking for a Sr Graphic Designer that can communicate ideas in pixels and pallets. We’re looking for a mind that is inline with current trends and has the outlook to feel future trends. A firm believer in ideas who can be an asset to our curious and efficient team of designers.",
    experience: "3+ of Designing experience in a Digital Agency or Advertising Agency",
    responsibility: ["You will be a part of the design team that constantly brings new ideas to the market Primary - Social Media Content, Website Designing, Campaigns"],
    tasks: ["Brand Communication, Brochure, Video Slides", "Participate in the creation process of story creation and brainstorming", "Ability to present your Ideas virtually","Research and Referencing capabilities", "Understanding the analytics and implementing learnings", "Decoding briefs and interfacing with the Account Manager/Clients for briefings and pitches", "Work closely and collaboratively with the people around you and partaking in the creative process", "Willingness to continue learning and pursue education or enhance skills along with the job."],
    qualification:["Graduate degree or above from Art School or a portfolio that doesn’t raise the question"],
    skills: [
      "Well Versed with Designing Softwares like (Illustrator/Photoshop/CorelDraw/Dreamweaver/InDesign and others) - Working experience with Sketch, Invision, and Adobe design tools. Having knowledge of Typography and Layout",
      "Ability to have fun in the creating process",
    ],
    salary: "As per Industry Standards",
    location: "Open for working from our office in Mumbai. (Bandra).",
    joiningDate: "Immediate",
    applyEmail: "info@agency09.in"
  },


  {
    key: "4",
    title: "Graphic Designer",
    jobBrief: "AGENCY09 is looking for a Graphic Designer that can communicate ideas in pixels and pallets. We’re looking for a mind that is inline with current trends and has the outlook to feel future trends. A firm believer in ideas who can be an asset to our curious and efficient team of designers.",
    experience: "2+ of Designing experience in a Digital Agency or Advertising Agency",
    responsibility: ["You will be a part of the design team that constantly brings new ideas to the market Primary - Social Media Content, Website Designing, Campaigns"],
    tasks: ["Brand Communication, Brochure, Video Slides", "Participate in the creation process of story creation and brainstorming", "Ability to present your Ideas virtually","Research and Referencing capabilities", "Understanding the analytics and implementing learnings", "Decoding briefs and interfacing with the Account Manager/Clients for briefings and pitches", "Work closely and collaboratively with the people around you and partaking in the creative process", "Willingness to continue learning and pursue education or enhance skills along with the job."],
    qualification:["Graduate degree or above from Art School or a portfolio that doesn’t raise the question"],
    skills: [
      "Well Versed with Designing Softwares like (Illustrator/Photoshop/CorelDraw/Dreamweaver/InDesign and others) - Working experience with Sketch, Invision, and Adobe design tools. Having knowledge of Typography and Layout",
      "Ability to have fun in the creating process",
    ],
    salary: "As per Industry Standards",
    location: "Open for working from our office in Mumbai. (Bandra).",
    joiningDate: "Immediate",
    applyEmail: "info@agency09.in"
  },
];

const Opportunities = () => {

  const [OpenModalApplyNow, setOpenModalApplyNow] = React.useState(false);

  return (
    <>
    <Accordion>
      {jobData.map(job => (
        <Accordion.Item eventKey={job.key} key={job.key}>
          <Accordion.Header>{job.title}</Accordion.Header>
          <Accordion.Body>
            <h5>Job Brief:</h5>
            <p>{job.jobBrief}</p>

            <h5>Experience:</h5>
            <p>{job.experience}</p>

            <h5>Responsibility:</h5>
            {job.responsibility.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <ul>
              {job.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>

            <h5>Qualification:</h5>
            <div className='oppQual'>
            {job.qualification.map((qual, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: qual }} />
            ))}
            </div>
            <h5>Skills:</h5>
            <ul>
              {job.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h5>Salary:</h5>
            <p>{job.salary}</p>

            <h5>Location:</h5>
            <p>{job.location}</p>

            <h5>Joining Date:</h5>
            <p>{job.joiningDate}</p>

            <h5>Apply:</h5>
            <p>Write to <Link to={`mailto:${job.applyEmail}`}>{job.applyEmail}</Link></p>

            <div className='btnSpace pb-0'>     
              <Link onClick={() => { setOpenModalApplyNow(true); }} className="btnBlack fontM ripple-button"><span>Apply Now</span></Link>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>

  {OpenModalApplyNow && <ApplyNow closeModal={setOpenModalApplyNow} />}
  </>
  );
}

export default Opportunities;
