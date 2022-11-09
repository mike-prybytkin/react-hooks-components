import React from 'react';
import { AboutUsProps } from './types';

const AboutUs = (props: AboutUsProps) => {
  return (
    <React.Fragment>
      <h1>{props.heading}</h1>
      <p className="sorry-message">{props.message}</p>
    </React.Fragment>
  );
};

export default AboutUs;
