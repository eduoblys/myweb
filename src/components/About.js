import React from 'react';
import Github from '../assets/github.png'
import Linkedin from '../assets/linked.png'
import Email from '../assets/email.png'
import Image from '../assets/pic3.svg'

const Home = props => (
    <div>
        <div className="flex-box">
            <div className="text-field">About you! short summary
                <div className='text-field-small'>
                    If that above there in cried entreating and him nevernevermore. 
                    Was said followed this he bust, ungainly now eagerly gileadtell and evilprophet door floor,.
                </div>
            </div>
            <div>

            </div>
            <div className="text-field">Non-technical skills: hobbies blah blah
                <div className='text-field-small'>
                    
                </div>
            
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


