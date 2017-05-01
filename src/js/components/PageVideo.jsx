/**
  * Creates the Video section.
  * @exports PageVideo Renders the video section.
 */

import React from 'react';

const PageVideo = () => {

  const slaask = document.querySelector(`#slaask-button`);
  if (slaask) {
    slaask.display = `none`;
  }

  return (
    <section className='full-scr-overlay' id='video'>
      <p className='video-close' onClick={() => {window.location.href = `/home`;}}>Click to close video.</p>
      <video className='video' poster='/static/img/loading.gif' autoPlay>
        <source src='/static/video/wa.webm' type='video/webm' />
        <source src='/static/video/wa.mp4' type='video/mp4' />
      </video>
    </section>
  );
};

export default PageVideo;
