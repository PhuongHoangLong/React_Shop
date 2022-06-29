import React from 'react';
const About = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-8">
            <h2>About Company Page</h2>
            <h4>Lorem ipsum..</h4>
            <p>Lorem ipsum..</p>
            <button class="btn btn-default btn-lg">Get in Touch</button>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-grey">
        <div class="row">
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-globe logo"></span>
          </div>
          <div class="col-sm-8">
            <h2>Our Values</h2>
            <h4>
              <strong>MISSION:</strong> Our mission lorem ipsum..
            </h4>
            <p>
              <strong>VISION:</strong> Our vision Lorem ipsum..
            </p>
          </div>
        </div>
      </div>

      <div class="container-fluid text-center">
        <h2>SERVICES</h2>
        <h4>What we offer</h4>
        <br />
        <div class="row">
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-off logo-small"></span>
            <h4>POWER</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-heart logo-small"></span>
            <h4>LOVE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-lock logo-small"></span>
            <h4>JOB DONE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-leaf logo-small"></span>
            <h4>GREEN</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-certificate logo-small"></span>
            <h4>CERTIFIED</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-wrench logo-small"></span>

            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
