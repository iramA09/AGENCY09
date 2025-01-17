import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import ApplyNow from './Forms/ApplyNow';

const Opportunities = () => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [OpenModalApplyNow, setOpenModalApplyNow] = useState(false);

  useEffect(() => {
    fetch('https://agency09.in/cms/api/getCareer')
      .then(response => response.json())
      .then(data => {
        setJobData(data.data); // Access the data array from the response
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Accordion>
        {jobData.map(job => (
          <Accordion.Item eventKey={job.id.toString()} key={job.id}>
            <Accordion.Header>{job.title}</Accordion.Header>
            <Accordion.Body>
              <div dangerouslySetInnerHTML={{ __html: job.content }} />
              <div className='btnSpace pb-0'>
                <Link onClick={() => { setOpenModalApplyNow(true); }} className="btnBlack fontM ripple-button">
                  <span>Apply Now</span>
                </Link>
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
