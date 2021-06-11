
import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Samantha Shorts Website</h1>
          <p className="lead">
            Mama  5 Fitness is a positive environment where people are coming together nationwide to collectively work on self-improvement.
          </p>
          <div className="buttons">
            {/* <Link to="/register" className="btn btn-primary">Register</Link>
            <Link to="/login" className="btn btn-light">Login</Link> */}
          </div>
          <div></div>
        </div>
      </div>
    </section>
    )
}

export default Landing;
