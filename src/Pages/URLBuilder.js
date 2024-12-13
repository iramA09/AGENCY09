import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import {PiArrowCircleRightThin} from 'react-icons/pi';
import {GoNorthStar} from 'react-icons/go'


const URLBuilder = () => {
  const [domain, setDomain] = useState('');
  const [source, setSource] = useState('');
  const [medium, setMedium] = useState('');
  const [name, setName] = useState('');
  const [term, setTerm] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const updateOutput = () => {
    let updatedUrl = `${domain}?utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(name)}`;
    if (term) {
      updatedUrl += `&utm_term=${encodeURIComponent(term)}`;
    }
    if (content) {
      updatedUrl += `&utm_content=${encodeURIComponent(content)}`;
    }

    if (domain && source && medium && name) {
      setUrl(updatedUrl);
    } else {
      setUrl('');
    }
  };

  useEffect(() => {
    updateOutput();
  }, [domain, source, medium, name, term, content]);

  const copyToClipboard = () => {
    if (url) {
      navigator.clipboard.writeText(url).then(() => {
        const toast = document.getElementById('toast');
        toast.className = 'toast show';
        setTimeout(() => {
          toast.className = toast.className.replace(' show', '');
        }, 3000);
      }).catch((err) => {
        console.error('Could not copy URL: ', err);
      });
    }
  };

  return (
    <>

    
<Helmet>
    <title> URL Builder | Brand Agency in Mumbai - AGENCY09</title>
    <meta name="robots" content="index, follow"/> 
    <meta name="description" content=""/>
    <link rel="canonical" href="https://www.agency09.in/url-builder"/>
    <meta property="og:title" content="URL Builder | Brand Agency in Mumbai - AGENCY09 "/> 
    <meta property="og:description" content=""/> 
    <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
    <meta property="og:type" content="website"/> 
    <meta name="twitter:card" content="summary" /> 
    <meta name="twitter:site" content="@AGENCY09" /> 
    <meta name="twitter:creator" content="@AGENCY09" /> 
    <meta name="twitter:url" content="https://www.agency09.in/url-builder"/> 
    <meta name="twitter:description" content=" "/> 
    <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/>
</Helmet>
    <Header />

<section className='urlbldr_sec'>
  <div className="container">
    <div className="aboutS">
      <div className='aboutScol'>
        <h1 classname='sizeH1 uppercase'>AGENCY09 URL Builder<br/> for Google Analytics</h1>
         <p>Create URLs for custom online marketing<br/> campaigns & website tracking.</p>
        <div className="arrowRightH"><PiArrowCircleRightThin /></div>
      </div>
      <div className='aboutScol'>
        <h4 className='sizeH6 bold pb-10 uppercase'>Are you tracking your campaign results?</h4>
        <p>It is essential to get accurate numbers and details to prove the success of your digital media campaigns. Now simply tag your URLs with custom variables using Google Analytics URL Builder. It helps you to keep track on which promotions are producing the most traffic/conversions for your Google Adwords Campaign, Facebook Ads, Google Display Advertising, YouTube Ads, and any other Pay Per Click & Run on Network Campaigns.</p>
      </div>
    </div>
  </div>
</section>


    <div className='URLBuilder'>
    <section className="url_sec">
      <div className="container">
        <div className="url-flx">
          <div className="Heading center HeadingIcon">
            <h2 className='sizeH1 uppercase'>
            <span className='iconSVG blue'><GoNorthStar /></span>
              Create URL
              <span className='iconSVG blue'><GoNorthStar /></span>
              </h2>
              </div>
              <div className='urlbld_l'>
            <div className="cus_url_f">
              <div className="url-frm-group">
                <label htmlFor="domain">Enter the Website Link</label>
                <input type="text" name="domain" id="domain" className="big f-form" placeholder="http://www.yourdomain.com" value={domain} onChange={(e) => setDomain(e.target.value)}/>
              </div>
              <p>Campaign Source, Campaign Medium, and Campaign Name should always be used.</p>

              <div className="url-frm-group">
                <label htmlFor="source">Campaign Source</label>
               <small>(referrer: google, city search, newsletter)</small>
                <input type="text" name="source" id="source" className="f-form" placeholder="Google" value={source} onChange={(e) => setSource(e.target.value)}/>
              </div>

              <div className="url-frm-group">
                <label htmlFor="medium">Campaign Medium</label>
                <small>(marketing medium: cpc, banner, email)</small>
                <input type="text" name="medium" id="medium" className="f-form" placeholder="Banner" value={medium} onChange={(e) => setMedium(e.target.value)}/>
              </div>

              <div className="url-frm-group">
                <label htmlFor="name">Campaign Name</label>
                <small>(product, promo code, or slogan)</small>
                <input type="text" name="name" id="name" className="f-form" placeholder="Promo code" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="url-frm-group">
                <label htmlFor="term">Campaign Term</label>
                <small>(identify the paid keywords)</small>
                <input type="text" name="term" id="term" className="f-form" placeholder="Keywords" value={term} onChange={(e) => setTerm(e.target.value)}/>
              </div>

              <div className="url-frm-group">
                <label htmlFor="content">Campaign Content</label>
                <small>(use to differentiate ads)</small>
                <input type="text" name="content" id="content" className="f-form" placeholder="Ad content" value={content} onChange={(e) => setContent(e.target.value)}/>
              </div>

              <div className="output">
                <textarea id="url" readOnly wrap="off" className="auto full-form" rows="6" value={url} />
              </div>

              <div className="copy-btn">
                <button className="copy_url" id="copyButton" onClick={copyToClipboard}>Copy URL</button>
                <div id="toast" className="toast">URL copied to clipboard!</div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>


    <section className='greenB'>
      <div className='container'>
      <div className='Heading center HeadingIcon pb-30'>
        <h2 className='sizeH1 uppercase'>
            <span className='iconSVG white'><GoNorthStar /></span>
                About URL Builder
            <span className='iconSVG white'><GoNorthStar /></span>
        </h2>
        </div>
            <h4 className='sizeH5 bold pb-10 uppercase'>What is URL Builder?</h4>
            <p>The Google URL Builder is a very simple tool that helps you get rid of guessing accurately how much benefit each of your digital media campaigns is producing. It is a process of tracking which helps you to know how visitors are reaching your website.</p>

            <h4 className='sizeH5 bold pb-10 pt-40 uppercase'>Why should you Tag URLs?</h4>
            <p>URL tagging helps you to gain a deeper understanding of the overall performance of your campaign. GA UTM Source Builder provides conversions tracking, counts of impressions, clicks, and click-through rate. Google Analytics URL Builder will help you view stats like page views per visit, average time spent on site by a visitor, % new visitors and re-visits on website. The stats that you get will also allow you to gain a deep understanding of your campaigns that can help you make correct changes.</p>

            <p className="exb_url text_c">AGENCY09 Google URL Builder Tool is a free tool that is not in any manner associated with or affiliated with Google.<br /> By using the URL Builder Tool for Google Analytics, you agree to our Terms of Service.</p>
            </div>
          </section>
    </div>

<Footer />
</>

  );
};

export default URLBuilder;
