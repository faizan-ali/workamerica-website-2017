import React from 'react';

const AboutUs = () => {
  window.scrollTo(0, 0);
  return (
    <section className='container-fluid'>

      <div className='row about-us-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center about-message'>
          <h1 className='row col-xl-12'>Our Mission</h1>
          <h2>To connect education to employment for our country&#39;s workforce. </h2>
          <p>
            At WorkAmerica, we are tackling the biggest social issue to face our generation: the future of work. In the face of multiple challenges, including the skills gap, automation, shifting demographics, and legislative uncertainty,  we are helping our country&#39;s workforce adapt to and prepare for the changing job market.
          </p>
          <p>
            Our vision grows from the 3 pillars below.
          </p>
        </div>
      </div>

      <div className='row blog-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <h1>Giving the other half of America&#39;s job seekers a professional online presence.</h1>
          <p>
            WorkAmerica gives skilled workers an online professional presence and recruitment marketplace long available to white collar professionals but never before designed for this demographic. And this demographic fills 55% of all job openings in America each year! This is the first step in helping us fix the broken eduction to employment pipeline.
          </p>
        </div>
      </div>

      <div className='row blog-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <h1>Closing the Skills Gap with Big Data</h1>
          <p>
            Using the data we will track around schools&#39; enrollment and placement outcomes, side by side with employers&#39; real time hiring needs, we&#39;ll uncover countless opportunites to better align industry needs with training opportunities. We&#39;ll bring educators and employers to the same table and enable them to take transformative action, substantiated by real, hard numbers.
          </p>
        </div>
      </div>

      <div className='row blog-section justify-content-center'>
        <div className='col-sm-10 col-xl-3 align-items-center'>
          <img className='parallax' src='https://api.mapbox.com/v4/mapbox.streets/-77.043822,38.905398,16/600x400.png?access_token=pk.eyJ1Ijoia2V2aW5tZXl2YWVydCIsImEiOiJuVWVrX1lRIn0.wqOC7v6myrq5Iee63cBnnA' />
        </div>
        <div className='col-sm-10 col-xl-5 align-items-start justify-content-center'>
          <h1>At a Glance</h1>
          <p>
            CEO: <a href='http://www.linkedin.com/in/michaelcolonnese/' target='_blank'>Michael Colonnese</a><br />
            Founded: 2013<br />
            HQ: Washington, DC<br />
            Supporters: Acumen, Kapor Capital, 500 startups and <a href='https://www.crunchbase.com/organization/workamerica' target='_blank'>others</a>.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
