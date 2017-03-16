import React from 'react';

const AboutUs = () => {
  window.scrollTo(0, 0);
  return (
    <section className='container-fluid'>

      <div className='row about-us-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center about-message'>
          <h1 className='row col-xl-12'>About us</h1>
          <h2>Welcome to WorkAmerica, the exclusive home for professionals in the trades.</h2>
          <p>
            We are on a mission to employ each and every American that holds a credential in the trades, by bridging the skills gap. When you join WorkAmerica, you connect to employers, job opportunities, candidates, training institutions and insights that help you excel in your career.
          </p>
        </div>
      </div>

      <div className='row blog-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <h1>We are flipping recruiting on its head</h1>
          <p>
            We have employers search for candidates, instead of having candidates wade through hundreds of job applications, guessing if they are a good fit for the position. And since we only allow trained and credentialed talent to join WorkAmerica, employers no longer have to dig through thousands of unqualified resumes to find that right employee.
          </p>
        </div>
      </div>

      <div className='row blog-section justify-content-center'>
        <div className='row col-sm-10 col-xl-7 align-items-center justify-content-center'>
          <h1>We are empowering workers</h1>
          <p>
            By bringing transparency and fluidity to recruiting in the skilled trades, we empower workers to find the best job for them. Receiving more job opportunities from more companies allows workers to maximize their earning potential, find a company culture they fit in with, and take full advantage of their training and credentials.            </p>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
