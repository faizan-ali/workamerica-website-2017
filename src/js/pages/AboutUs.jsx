import React from 'react';

const AboutUs = () => {
  window.scrollTo(0, 0);
  return (
    <section className='container-fluid'>

      <div className='row about-us-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center about-message'>
          <h1 className='row col-xl-12 justify-content-center'>Our Mission</h1>
          <h2 className='row col-xl-12 justify-content-center'>To connect education to employment for our country&#39;s workforce. </h2>
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
            WorkAmerica gives skilled workers an online professional presence and recruitment marketplace, long available to white collar professionals but, never before designed for this demographic. And this demographic fills 55% of all job openings in America each year! This is the first step in fixing the broken education-to-employment pipeline.
          </p>
        </div>
      </div>

      <div className='row blog-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <h1>Closing the Skills Gap with Big Data</h1>
          <p>
            Using data, WorkAmerica tracks school enrollment and placement outcomes. Side-by-side with employer&#39;s real-time hiring needs, WorkAmerica uncovers countless opportunities to better align insustry needs with training opportunities. We bring educators and employers to the same table and enable them to take transformative action substantiated by real hard numbers.
          </p>
        </div>
      </div>

      <div className='row blog-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <h1>Building the Future of Workforce Services </h1>
          <p>
            As job market changes accelerate, workers will need a whole new set of workforce services. These range from additional skills training to career planning, and flexible student aid to yet unimagined services. WorkAmerica envisions a whole ecosystem of wraparound services delivered to the country&#39;s workers via our platform.
          </p>
        </div>
      </div>

      <div className='row blog-section align-items-center justify-content-center'>
        <div className='col-sm-10 col-xl-3 align-items-center contact-card p-0'>
          <img className='parallax' src='static/img/map.jpg' />
          <p><br />1900 M St NW<br />Washington DC, 20006<br />877-750-2968<br />info@workamerica.co</p>
        </div>
        <div className='col-sm-10 col-xl-5 align-items-start justify-content-center about-quote'>
          <h1>&#34;The only way we really create change is to enter any situation with the humility to listen and to recognize the world as it is, and then the audacity to dream what it could be.&#34;</h1>
          <p>
            Jacqueline Novogratz, CEO of Acumen<br />
            Investor in WorkAmerica
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
