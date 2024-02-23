import React, { useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';



const Footer = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",


  });

  let name, value;
  const getUserData = (event) => {
    name= event.target.name;
    value= event.target.value;


    setUser({ ...user, [name]: value });

  };

  const postData = async (e) => {
    e.preventDefault();

    const {email} = user;
    if(email){
      const res = await fetch("https://userdata-8085e-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email,
        }),
      }
      
      );
      if(res) {
        setUser({
          email:"",
        })
        alert("Email sent Succesfully");
      }

    } else {
        alert("plz fill the details !");
    }
    

 



  };



  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form method="POST" >
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={user.email}
              onChange={getUserData}
            />
             <Button onClick={postData} buttonStyle='btn--outline'>Subscribe</Button>
          </form>
          
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
         
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
        
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/_sameer_kumar_10_/'>Instagram</a>

            <a href='https://www.linkedin.com/in/sameer-kumar-63b85b223/'>linkedin</a>
            
            <a href='https://github.com/sameerkumar10/Frontendpage.git'>GitHub</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/sameerkumar10/Frontendpage.git'
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/_sameer_kumar_10_/'
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
           
          
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/sameer-kumar-63b85b223/'
              target='_blank'
              rel="noreferrer"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;