import './FooterStyles.css'
import React from 'react' 
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer=()=>{

    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                         <p><FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/> Nairobi, Kenya</p>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>+254 743793661</h4>
                    </div>
                    <div className='email'>
                      <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>towettsammy30@gmail.com
                      </h4>  
                    </div>
                </div>
                <div className='right'>
                    <h4>About Me</h4>
                    <p>I am a Frontend Web Developer with passion and experience building the best User Interface with smooth interraction for users using React Js.</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                        <FaGithub size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                        <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                        <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Footer