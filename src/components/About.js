import React from 'react';
import Github from '../assets/github.png'
import Linkedin from '../assets/linked.png'
import Email from '../assets/email.png'

const Home = props => (
    <div>
        <div className="text-field">About you! short summary</div>
        <div className="text-field">Non-technical skills: hobbies blah blah</div>
        <div className="links">
            <a className="social_links" href='https://github.com/eduoblys'><img src={Github}/><div className="text-field-small">GitHub</div></a><br/>
            <a className="social_links" href='https://www.linkedin.com/in/egidijus-duoblys/'><img src={Linkedin} /><div className="text-field-small">LinkedIn</div></a><br/>
            <a className="social_links" href='mailto:eduoblys@gmail.com'><img src={Email} /><div className="text-field-small">E-Mail</div></a><br/>
        </div>
    </div>
);
    
export default Home;