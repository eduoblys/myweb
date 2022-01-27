import React from 'react';
import Github from '../assets/github.png'
import Linkedin from '../assets/linked.png'
import Email from '../assets/email.png'

const Home = props => (
    <div>
        <div className="flex-box">
            <div className="text-field">About you! short summary
                <div className='text-field-small'>It's me blah blah</div>
            </div>
            <div className="text-field">Non-technical skills: hobbies blah blah
                <div className='text-field-small'>It's me blah blah</div>
            
            </div>
        </div>

            <div className="links">
                <a className="social_links" href='https://github.com/eduoblys'><img src={Github} alt="Github"/><div className="text-field-small">  GitHub</div></a><br/>
                <a className="social_links" href='https://www.linkedin.com/in/egidijus-duoblys/'><img src={Linkedin} alt="LinkedIn" /><div className="text-field-small">LinkedIn</div></a><br/>
                <a className="social_links" href='mailto:eduoblys@gmail.com'><img src={Email} alt="email" /><div className="text-field-small">E-Mail</div></a><br/>
        </div>
    </div>
);
    
export default Home;